import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { toast } from "sonner";
import { ArrowLeft, Bookmark, BookmarkPlus, CheckCircle2, ChevronLeft, ChevronRight, Lightbulb, Loader2, Play, Plus, RotateCcw, Send, X, XCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTheme } from "@/hooks/use-theme";
import { PROBLEMS, problemBySlug, topicTitle } from "@/content";
import { problemSubmissionsQuery, progressQuery } from "@/lib/queries";
import { runCode, submitCode, toggleRevision } from "@/lib/judge.functions";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { DifficultyBadge } from "@/components/app/DifficultyBadge";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { preloadPython, runPythonInBrowser } from "@/lib/browser-python";

export const Route = createFileRoute("/_authenticated/practice/$slug")({
  loader: ({ params }) => {
    const problem = problemBySlug(params.slug);
    if (!problem) throw notFound();
    return { problem };
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.problem.title ?? "Problem"} – Coding Practice` }, { name: "description", content: "Solve this problem in Python and test it." },
    { property: "og:title", content: `${loaderData?.problem.title ?? "Problem"} – Coding Practice` }, { property: "og:description", content: "Python practice with sample and hidden test cases." },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Arena,
});

type RunRes = Awaited<ReturnType<typeof runCode>>;
type SubRes = Awaited<ReturnType<typeof submitCode>>;
const fmt = (v: unknown) => JSON.stringify(v);

function Arena() {
  const { problem } = Route.useLoaderData();
  const qc = useQueryClient();
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const draftKey = `dsa-draft:${problem.slug}`;
  const [code, setCode] = useState(problem.starterCode);
  const [custom, setCustom] = useState<string[]>([]);
  const [hintsShown, setHintsShown] = useState(0);
  const [consoleTab, setConsoleTab] = useState("tests");
  const [run, setRun] = useState<RunRes | null>(null);
  const [sub, setSub] = useState<SubRes | null>(null);
  const [mobilePane, setMobilePane] = useState<"problem" | "code">("problem");

  const runFn = useServerFn(runCode);
  const submitFn = useServerFn(submitCode);
  const revFn = useServerFn(toggleRevision);
  const progress = useQuery(progressQuery);
  const subs = useQuery(problemSubmissionsQuery(problem.slug));
  const mine = progress.data?.find((p) => p.problem_slug === problem.slug);

  useEffect(() => { preloadPython(); }, []);

  useEffect(() => {
    const saved = localStorage.getItem(draftKey);
    setCode(saved ?? problem.starterCode);
    setRun(null); setSub(null); setHintsShown(0); setCustom([]);
  }, [draftKey, problem.starterCode]);

  useEffect(() => {
    const t = setTimeout(() => localStorage.setItem(draftKey, code), 400);
    return () => clearTimeout(t);
  }, [code, draftKey]);

  const refresh = () => {
    qc.invalidateQueries({ queryKey: ["progress"] });
    qc.invalidateQueries({ queryKey: ["submissions"] });
    qc.invalidateQueries({ queryKey: ["activity"] });
  };

  const runM = useMutation({
    mutationFn: async () => {
      const d = { slug: problem.slug, code, customInputs: custom.filter((c) => c.trim()) };
      const r = await runFn({ data: d });
      if (!r.ok && "needsClient" in r && r.needsClient) return runFn({ data: { ...d, clientExec: await runPythonInBrowser(r.program) } });
      return r;
    },
    onSuccess: (r) => { setRun(r); setSub(null); setConsoleTab("result"); if (!r.ok) toast.error(r.error); refresh(); },
    onError: (e) => toast.error(e.message),
  });
  const subM = useMutation({
    mutationFn: async () => {
      const d = { slug: problem.slug, code };
      const r = await submitFn({ data: d });
      if (!r.ok && "needsClient" in r && r.needsClient) return submitFn({ data: { ...d, clientExec: await runPythonInBrowser(r.program) } });
      return r;
    },
    onSuccess: (r) => {
      setSub(r); setRun(null); setConsoleTab("result");
      if (!r.ok) toast.error(r.error);
      else if (r.accepted) toast.success("Accepted! 🎉");
      refresh();
    },
    onError: (e) => toast.error(e.message),
  });
  const revM = useMutation({
    mutationFn: (marked: boolean) => revFn({ data: { slug: problem.slug, marked } }),
    onSuccess: (r) => { toast.success(r.marked ? "Marked for revision" : "Removed from revision"); refresh(); },
    onError: (e) => toast.error(e.message),
  });
  const bookmarkM = useMutation({
    mutationFn: async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) throw new Error("Not signed in");
      if (!code.trim() || code === problem.starterCode) throw new Error("Write a solution before bookmarking it");
      const { error } = await supabase.from("bookmarks").insert({ user_id: data.user.id, problem_slug: problem.slug, title: problem.title, code_snippet: code });
      if (error) throw error;
    },
    onSuccess: () => toast.success("Solution saved in My Notes"),
    onError: (e) => toast.error(e.message),
  });

  const idx = PROBLEMS.findIndex((p) => p.slug === problem.slug);
  const prev = PROBLEMS[idx - 1];
  const next = PROBLEMS[idx + 1];
  const busy = runM.isPending || subM.isPending;
  const argHint = problem.argTypes[0] === "design" ? "[ops, args]" : `${problem.argTypes.length} argument${problem.argTypes.length > 1 ? "s" : ""}`;

  const left = (
    <Tabs defaultValue="desc" className="flex h-full flex-col">
      <TabsList className="mx-4 mt-3 w-fit"><TabsTrigger value="desc">Description</TabsTrigger><TabsTrigger value="subs">Submissions</TabsTrigger></TabsList>
      <TabsContent value="desc" className="flex-1 overflow-y-auto px-5 pb-8">
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <h1 className="text-xl font-bold">{problem.order}. {problem.title}</h1>
          {mine?.status === "solved" && <CheckCircle2 className="size-5 text-success" />}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <DifficultyBadge level={problem.difficulty} />
          <Link to="/learn/$slug" params={{ slug: problem.topic }} className="rounded-full bg-muted px-2 py-0.5 text-xs hover:text-primary">{topicTitle(problem.topic)}</Link>
          {problem.tags.map((t) => <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{t}</span>)}
        </div>
        <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed">{problem.description.replace(/`([^`]+)`/g, "$1")}</p>
        {problem.samples.map((s, i) => (
          <div key={i} className="mt-4">
            <div className="mb-1 text-sm font-semibold">Example {i + 1}</div>
            <pre className="overflow-x-auto rounded-lg border border-border bg-sidebar p-3 font-mono text-xs leading-relaxed">
              <span className="text-muted-foreground">Input: </span>{s.input.map(fmt).join(", ")}{"\n"}<span className="text-muted-foreground">Output: </span>{fmt(s.expected)}
            </pre>
          </div>
        ))}
        <div className="mt-5 text-sm font-semibold">Constraints</div>
        <ul className="mt-2 space-y-1">{problem.constraints.map((c) => <li key={c} className="font-mono text-xs text-muted-foreground">• {c}</li>)}</ul>
        <div className="mt-6 space-y-2">
          {problem.hints.slice(0, hintsShown).map((h, i) => (
            <div key={i} className="flex gap-2 rounded-lg border border-warning/30 bg-warning/10 p-3 text-sm"><Lightbulb className="size-4 shrink-0 text-warning" />{h}</div>
          ))}
          {hintsShown < problem.hints.length && (
            <Button variant="outline" size="sm" onClick={() => setHintsShown(hintsShown + 1)}><Lightbulb /> Show hint {hintsShown + 1} of {problem.hints.length}</Button>
          )}
        </div>
      </TabsContent>
      <TabsContent value="subs" className="flex-1 overflow-y-auto px-5 pb-8">
        {subs.isLoading ? <p className="mt-4 text-sm text-muted-foreground">Loading…</p> : !subs.data?.length ? (
          <p className="mt-4 text-sm text-muted-foreground">No submissions yet for this problem.</p>
        ) : (
          <ul className="mt-2 divide-y divide-border">
            {subs.data.map((s) => (
              <li key={s.id} className="flex items-center justify-between gap-2 py-3 text-sm">
                <div>
                  <div className={cn("font-semibold", s.status === "Accepted" ? "text-success" : "text-destructive")}>{s.status}</div>
                  <div className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleString()} · {s.passed}/{s.total} passed{s.runtime_ms != null ? ` · ${s.runtime_ms} ms` : ""}</div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => { setCode(s.code); setMobilePane("code"); toast("Loaded that submission into the editor"); }}>Load code</Button>
              </li>
            ))}
          </ul>
        )}
      </TabsContent>
    </Tabs>
  );

  const resultView = () => {
    if (busy) return <div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" /> Running your code…</div>;
    const r = sub ?? run;
    if (!r) return <p className="text-sm text-muted-foreground">Run your code to see results here.</p>;
    if (!r.ok) return <p className="text-sm text-destructive">{r.error}</p>;
    const good = r.status === "Accepted" || r.status === "Sample Tests Passed";
    return (
      <div className="space-y-3">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className={cn("font-display text-lg font-bold", good ? "text-success" : "text-destructive")}>{r.status}</span>
          {"total" in r && <span className="text-sm text-muted-foreground">{r.passed} / {r.total} test cases passed</span>}
          {r.runtimeMs != null && <span className="text-xs text-muted-foreground">Runtime {r.runtimeMs} ms</span>}
          {r.memoryKb != null && <span className="text-xs text-muted-foreground">Memory {(r.memoryKb / 1024).toFixed(1)} MB</span>}
        </div>
        {"accepted" in r ? (
          <>
            <div className="flex flex-wrap gap-1.5">{r.cases.map((c, i) => (
              <span key={i} title={c.hidden ? "Hidden test" : "Sample test"} className={cn("grid size-7 place-items-center rounded-md text-xs font-semibold", c.passed ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive")}>{i + 1}</span>
            ))}</div>
            {r.failedSample && <CaseBox input={r.failedSample.input} expected={r.failedSample.expected} actual={r.failedSample.actual} error={r.failedSample.error} passed={false} />}
            {!r.failedSample && !r.accepted && <p className="text-sm text-muted-foreground">A hidden test failed.{r.failedHiddenError ? ` Error: ${r.failedHiddenError}` : " Check edge cases (empty input, duplicates, negatives)."}</p>}
            {r.stderr && <pre className="overflow-x-auto rounded-lg bg-destructive/10 p-3 font-mono text-xs text-destructive">{r.stderr}</pre>}
          </>
        ) : (
          <>
            {r.cases.map((c, i) => <CaseBox key={i} label={`Case ${i + 1}`} {...c} />)}
            {r.custom.map((c, i) => <CaseBox key={`c${i}`} label={`Custom ${i + 1}`} input={c.input} actual={c.actual} error={c.error} />)}
            {r.stdout && <div><div className="mb-1 text-xs font-semibold text-muted-foreground">Stdout</div><pre className="overflow-x-auto rounded-lg bg-sidebar p-3 font-mono text-xs">{r.stdout}</pre></div>}
            {r.stderr && <pre className="overflow-x-auto rounded-lg bg-destructive/10 p-3 font-mono text-xs text-destructive">{r.stderr}</pre>}
          </>
        )}
      </div>
    );
  };

  const right = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <span className="rounded-md bg-muted px-2 py-1 font-mono text-xs">Python 3</span>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" onClick={() => { if (confirm("Reset to the starter code? Your current code will be lost.")) setCode(problem.starterCode); }}><RotateCcw /> Reset</Button>
          <Button variant="secondary" size="sm" disabled={busy} onClick={() => runM.mutate()}>{runM.isPending ? <Loader2 className="animate-spin" /> : <Play />} Run</Button>
          <Button variant="success" size="sm" disabled={busy} onClick={() => subM.mutate()}>{subM.isPending ? <Loader2 className="animate-spin" /> : <Send />} Submit</Button>
        </div>
      </div>
      <div className="min-h-[300px] flex-1">
        {isMobile ? (
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Tab") return;
              e.preventDefault();
              const el = e.currentTarget; const a = el.selectionStart; const b = el.selectionEnd;
              setCode(code.slice(0, a) + "    " + code.slice(b));
              requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = a + 4; });
            }}
            spellCheck={false} autoCapitalize="off" autoCorrect="off" autoComplete="off"
            aria-label="Code editor"
            className="h-full min-h-[300px] w-full resize-none bg-sidebar p-3 font-mono text-[13px] leading-relaxed text-foreground outline-none"
          />
        ) : <Editor
          language="python"
          theme={theme === "dark" ? "vs-dark" : "light"}
          value={code}
          onChange={(v) => setCode(v ?? "")}
          options={{ fontSize: 14, fontFamily: "JetBrains Mono, monospace", minimap: { enabled: false }, scrollBeyondLastLine: false, tabSize: 4, automaticLayout: true, padding: { top: 12 } }}
          loading={<div className="p-4 text-sm text-muted-foreground">Loading editor…</div>}
        />}
      </div>
      <div className="h-[42%] min-h-[220px] border-t border-border">
        <Tabs value={consoleTab} onValueChange={setConsoleTab} className="flex h-full flex-col">
          <TabsList className="mx-3 mt-2 w-fit"><TabsTrigger value="tests">Test cases</TabsTrigger><TabsTrigger value="result">Result</TabsTrigger></TabsList>
          <TabsContent value="tests" className="flex-1 space-y-3 overflow-y-auto px-4 pb-4">
            <p className="text-xs text-muted-foreground">Run uses the {problem.samples.length} sample cases plus any custom inputs. Submit also checks hidden tests.</p>
            {custom.map((c, i) => (
              <div key={i} className="flex gap-2">
                <Textarea value={c} onChange={(e) => setCustom(custom.map((x, j) => (j === i ? e.target.value : x)))} className="font-mono text-xs" rows={2} maxLength={5000} placeholder={`JSON list of ${argHint}`} />
                <Button variant="ghost" size="icon" onClick={() => setCustom(custom.filter((_, j) => j !== i))} aria-label="Remove"><X /></Button>
              </div>
            ))}
            {custom.length < 5 && (
              <Button variant="outline" size="sm" onClick={() => setCustom([...custom, fmt(problem.samples[0]?.input ?? [])])}><Plus /> Add custom test</Button>
            )}
          </TabsContent>
          <TabsContent value="result" className="flex-1 overflow-y-auto px-4 pb-4">{resultView()}</TabsContent>
        </Tabs>
      </div>
    </div>
  );

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <Button variant="ghost" size="sm" asChild><Link to="/problems"><ArrowLeft /> <span className="hidden sm:inline">Problems</span></Link></Button>
        <div className="flex gap-1">
          {prev && <Button variant="ghost" size="icon" asChild><Link to="/practice/$slug" params={{ slug: prev.slug }} aria-label="Previous problem"><ChevronLeft /></Link></Button>}
          {next && <Button variant="ghost" size="icon" asChild><Link to="/practice/$slug" params={{ slug: next.slug }} aria-label="Next problem"><ChevronRight /></Link></Button>}
        </div>
        <Button variant="ghost" size="sm" className="ml-auto" onClick={() => bookmarkM.mutate()} disabled={bookmarkM.isPending} aria-label="Bookmark solution">
          <BookmarkPlus /> <span className="hidden xl:inline">Save code</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => revM.mutate(!mine?.marked_for_revision)} disabled={revM.isPending}>
          <Bookmark className={cn(mine?.marked_for_revision && "fill-warning text-warning")} /> <span className="hidden sm:inline">{mine?.marked_for_revision ? "In revision list" : "Revise later"}</span>
        </Button>
        <div className="flex rounded-lg bg-muted p-0.5 lg:hidden">
          {(["problem", "code"] as const).map((p) => (
            <button key={p} onClick={() => setMobilePane(p)} className={cn("rounded-md px-3 py-1 text-xs font-medium capitalize", mobilePane === p && "bg-background")}>{p}</button>
          ))}
        </div>
      </div>
      <div className="grid min-h-0 flex-1 lg:grid-cols-2">
        <div className={cn("min-h-0 border-r border-border", mobilePane !== "problem" && "hidden lg:block")}>{left}</div>
        <div className={cn("min-h-0", mobilePane !== "code" && "hidden lg:block")}>{right}</div>
      </div>
    </div>
  );
}

function CaseBox({ label, input, expected, actual, error, passed }: { label?: string; input: string; expected?: string; actual: string | null; error: string | null; passed?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-sidebar p-3 font-mono text-xs">
      <div className="mb-2 flex items-center gap-2 font-sans text-sm font-semibold">
        {passed === true && <CheckCircle2 className="size-4 text-success" />}
        {passed === false && <XCircle className="size-4 text-destructive" />}
        {label ?? "Failed test"}
      </div>
      <div><span className="text-muted-foreground">Input: </span>{input}</div>
      {expected !== undefined && <div><span className="text-muted-foreground">Expected: </span>{expected}</div>}
      {error ? <div className="text-destructive">{error}</div> : <div><span className="text-muted-foreground">Output: </span>{actual}</div>}
      {!error && actual === "null" && expected !== "null" && (
        <div className="mt-2 font-sans text-xs text-warning">Your function returned nothing (None). Check that your code reaches a return statement — a line placed under return never runs.</div>
      )}
    </div>
  );
}
