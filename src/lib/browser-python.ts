// Runs Python in the user's browser (Pyodide inside a Web Worker) when no server code runner is configured.
// Loading Python can take a while on mobile, so the time limit only starts once Python is ready.
// Phones sometimes pause or kill the worker; a stalled or crashed run is retried once in a fresh worker
// before it is reported as Time Limit Exceeded.
const PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
const WARMUP = "import json, sys, time, traceback, math, heapq, bisect, itertools, functools, collections, string, re, typing";
const WORKER_SRC = `
importScripts("${PYODIDE}pyodide.js");
let py = null;
let loading = null;
function load() {
  if (!loading) loading = loadPyodide({ indexURL: "${PYODIDE}" })
    .then(async (p) => { await p.runPythonAsync(${JSON.stringify(WARMUP)}); py = p; return p; })
    .catch((x) => { loading = null; throw x; });
  return loading;
}
self.onmessage = async (e) => {
  const msg = e.data;
  try { await load(); } catch (x) {
    self.postMessage({ type: "result", id: msg.id, stdout: "", stderr: "Could not load Python: " + (x && x.message || x), statusId: 13, timeMs: null });
    return;
  }
  if (msg.type === "preload") { self.postMessage({ type: "ready", id: msg.id }); return; }
  self.postMessage({ type: "started", id: msg.id });
  let out = "", err = "";
  py.setStdout({ batched: (s) => { out += s + "\\n"; } });
  py.setStderr({ batched: (s) => { err += s + "\\n"; } });
  py.setStdin({ stdin: () => null });
  const g = py.globals.get("dict")();
  const t0 = performance.now();
  let statusId = 3;
  try { await py.runPythonAsync(msg.code, { globals: g }); } catch (x) { err += String(x && x.message || x); statusId = 11; }
  finally { try { g.destroy(); } catch (_) {} }
  self.postMessage({ type: "result", id: msg.id, stdout: out, stderr: err, statusId, timeMs: Math.round(performance.now() - t0) });
};`;

export interface BrowserExec { stdout: string; stderr: string; statusId: number; timeMs: number | null }

let worker: Worker | null = null;
let seq = 0;
function getWorker() {
  if (!worker) worker = new Worker(URL.createObjectURL(new Blob([WORKER_SRC], { type: "text/javascript" })));
  return worker;
}
function killWorker() {
  worker?.terminate();
  worker = null;
}

/** Start downloading Python in the background so the first Run is fast. */
export function preloadPython() {
  try { getWorker().postMessage({ type: "preload", id: ++seq }); } catch { /* ignore */ }
}

type Attempt = BrowserExec | { stalled: true; reason: string };

function attempt(program: string, timeoutMs: number, loadTimeoutMs: number): Promise<Attempt> {
  const w = getWorker();
  const id = ++seq;
  return new Promise((resolve) => {
    let done = false;
    let wasHidden = typeof document !== "undefined" && document.hidden;
    const onVis = () => { if (document.hidden) wasHidden = true; };
    document.addEventListener("visibilitychange", onVis);
    const finish = (r: Attempt) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVis);
      w.onmessage = null; w.onerror = null;
      resolve(r);
    };
    let timer = setTimeout(() => { killWorker(); finish({ stalled: true, reason: "load" }); }, loadTimeoutMs);
    w.onerror = (ev) => { ev.preventDefault?.(); killWorker(); finish({ stalled: true, reason: "crash" }); };
    w.onmessage = (e) => {
      const d = e.data;
      if (d.id !== id) return; // ignore replies to preload/older runs
      if (d.type === "started") {
        clearTimeout(timer);
        timer = setTimeout(() => {
          killWorker();
          finish(wasHidden ? { stalled: true, reason: "hidden" } : { stdout: "", stderr: "Time limit exceeded: your code ran for more than " + timeoutMs / 1000 + " seconds. Check for an infinite loop.", statusId: 5, timeMs: null });
        }, timeoutMs);
      } else if (d.type === "result") {
        finish({ stdout: d.stdout, stderr: d.stderr, statusId: d.statusId, timeMs: d.timeMs });
      }
    };
    w.postMessage({ type: "run", id, code: program });
  });
}

export async function runPythonInBrowser(program: string, timeoutMs = 10000, loadTimeoutMs = 120000): Promise<BrowserExec> {
  for (let i = 0; i < 2; i++) {
    const r = await attempt(program, timeoutMs, loadTimeoutMs);
    if (!("stalled" in r)) {
      // A time-out on the first try may be the phone pausing Python; retry once in a fresh worker.
      if (r.statusId === 5 && i === 0) continue;
      return r;
    }
    if (r.reason === "load") return { stdout: "", stderr: "Python took too long to load. Check your connection and try again.", statusId: 13, timeMs: null };
  }
  return { stdout: "", stderr: "Python stopped unexpectedly on this device. Please tap Run again.", statusId: 13, timeMs: null };
}
