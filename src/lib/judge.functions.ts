import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { problemBySlug } from "@/content";
import { buildProgram, gradeCases, parseProgramOutput } from "@/lib/judge";
import type { TestCase } from "@/content/types";

const MAX_CODE = 20000;

function b64encode(s: string) {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}
function b64decode(s: string | null | undefined) {
  if (!s) return "";
  const bin = atob(s);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

interface ExecResult {
  stdout: string;
  stderr: string;
  statusId: number;
  statusText: string;
  timeMs: number | null;
  memoryKb: number | null;
}

class RunnerError extends Error {}
class NeedsClient extends Error {
  constructor(public program: string) { super("needs client"); }
}

const clientExec = z.object({
  stdout: z.string().max(2_000_000), stderr: z.string().max(200_000),
  statusId: z.number().int(), timeMs: z.number().nullable(),
}).optional();

async function execute(source: string, client?: z.infer<typeof clientExec>): Promise<ExecResult> {
  const key = process.env["JUDGE0_API_KEY"];
  const base = (process.env["JUDGE0_URL"] || "https://judge0-ce.p.rapidapi.com").replace(/\/$/, "");
  if (!key && !process.env["JUDGE0_URL"]) {
    // No server runner: the browser runs the program (Pyodide) and sends back stdout; grading stays here.
    if (!client) throw new NeedsClient(source);
    return { ...client, statusText: client.statusId === 3 ? "OK" : "Error", memoryKb: null };
  }
  const headers: Record<string, string> = { "content-type": "application/json" };
  if (key) {
    headers["X-RapidAPI-Key"] = key;
    headers["X-RapidAPI-Host"] = new URL(base).host;
  }
  const res = await fetch(`${base}/submissions?base64_encoded=true&wait=true`, {
    method: "POST",
    headers,
    body: JSON.stringify({ language_id: 71, source_code: b64encode(source), cpu_time_limit: 5, memory_limit: 256000 }),
  });
  if (res.status === 429) throw new RunnerError("The code runner is busy (rate limit reached). Please try again in a moment.");
  if (res.status === 401 || res.status === 403) throw new RunnerError("The code runner rejected our API key. Please check the Judge0 key.");
  if (!res.ok) throw new RunnerError(`The code runner returned an error (${res.status}). Please try again.`);
  const j = (await res.json()) as {
    stdout?: string; stderr?: string; compile_output?: string; message?: string;
    status?: { id: number; description: string }; time?: string | null; memory?: number | null;
  };
  return {
    stdout: b64decode(j.stdout),
    stderr: [b64decode(j.stderr), b64decode(j.compile_output), b64decode(j.message)].filter(Boolean).join("\n"),
    statusId: j.status?.id ?? 0,
    statusText: j.status?.description ?? "Unknown",
    timeMs: j.time ? Math.round(parseFloat(j.time) * 1000) : null,
    memoryKb: j.memory ?? null,
  };
}

async function recordActivity(userId: string, solvedNew: boolean) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const today = new Date().toISOString().slice(0, 10);
  const { data } = await supabaseAdmin
    .from("user_activity").select("*").eq("user_id", userId).eq("activity_date", today).maybeSingle();
  await supabaseAdmin.from("user_activity").upsert({
    user_id: userId,
    activity_date: today,
    submissions: (data?.submissions ?? 0) + 1,
    problems_solved: (data?.problems_solved ?? 0) + (solvedNew ? 1 : 0),
    minutes: data?.minutes ?? 0,
  });
}

const input = z.object({
  slug: z.string().min(1).max(120),
  code: z.string().min(1, "Write some code first").max(MAX_CODE, "Code is too long"),
  customInputs: z.array(z.string().max(5000)).max(5).optional(),
  clientExec,
});

function parseCustom(raw: string[] | undefined, argCount: number): unknown[][] {
  return (raw ?? []).map((s, i) => {
    let v: unknown;
    try {
      v = JSON.parse(s);
    } catch {
      throw new RunnerError(`Custom test ${i + 1} isn't valid JSON. Use a JSON list of arguments, e.g. [[1,2,3], 4].`);
    }
    if (!Array.isArray(v) || v.length !== argCount)
      throw new RunnerError(`Custom test ${i + 1} must be a JSON list with ${argCount} argument${argCount === 1 ? "" : "s"}.`);
    return v;
  });
}

export const runCode = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => input.parse(d))
  .handler(async ({ data, context }) => {
    const problem = problemBySlug(data.slug);
    if (!problem) throw new Error("Problem not found");
    try {
      const argCount = problem.argTypes[0] === "design" ? 2 : problem.argTypes.length;
      const custom = parseCustom(data.customInputs, argCount);
      const inputs = [...problem.samples.map((s) => s.input), ...custom];
      const exec = await execute(buildProgram(problem, data.code, inputs), data.clientExec);
      const { userStdout, results } = parseProgramOutput(exec.stdout);
      const graded = gradeCases(problem.samples, results, problem.compareMode);
      const passed = graded.filter((g) => g.passed).length;
      const status = !results ? (exec.statusId === 5 ? "Time Limit Exceeded" : exec.statusId === 6 ? "Compilation Error" : "Runtime Error")
        : passed === graded.length ? "Sample Tests Passed" : "Wrong Answer";
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await supabaseAdmin.from("submissions").insert({
        user_id: context.userId, problem_slug: problem.slug, kind: "run", code: data.code, status,
        passed, total: graded.length, runtime_ms: exec.timeMs, memory_kb: exec.memoryKb,
      });
      await recordActivity(context.userId, false);
      return {
        ok: true as const,
        status,
        stdout: userStdout,
        stderr: exec.stderr,
        runtimeMs: exec.timeMs,
        memoryKb: exec.memoryKb,
        cases: graded.map((g, i) => ({ passed: g.passed, error: g.error, ms: g.ms, actual: JSON.stringify(g.actual), input: JSON.stringify(problem.samples[i]?.input), expected: JSON.stringify(problem.samples[i]?.expected) })),
        custom: custom.map((inp, i) => {
          const r = results?.[problem.samples.length + i];
          return { input: JSON.stringify(inp), actual: r?.ok ? JSON.stringify(r.out) : null, error: r && !r.ok ? r.err ?? "Error" : r ? null : "No result" };
        }),
      };
    } catch (e) {
      if (e instanceof NeedsClient) return { ok: false as const, needsClient: true as const, program: e.program, error: "" };
      if (e instanceof RunnerError) return { ok: false as const, error: e.message };
      throw e;
    }
  });

export const submitCode = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => input.omit({ customInputs: true }).parse(d))
  .handler(async ({ data, context }) => {
    const problem = problemBySlug(data.slug);
    if (!problem) throw new Error("Problem not found");
    const [{ HIDDEN_TESTS }, { EXTRA_HIDDEN_TESTS }] = await Promise.all([
      import("@/server/hidden-tests.server"),
      import("@/server/extra-hidden-tests.server"),
    ]);
    const tests: TestCase[] = [...problem.samples, ...(HIDDEN_TESTS[problem.slug] ?? EXTRA_HIDDEN_TESTS[problem.slug] ?? [])];
    try {
      const exec = await execute(buildProgram(problem, data.code, tests.map((t) => t.input)), data.clientExec);
      const { results } = parseProgramOutput(exec.stdout);
      const graded = gradeCases(tests, results, problem.compareMode);
      const passed = graded.filter((g) => g.passed).length;
      const accepted = !!results && passed === tests.length;
      const status = !results ? (exec.statusId === 5 ? "Time Limit Exceeded" : exec.statusId === 6 ? "Compilation Error" : "Runtime Error")
        : accepted ? "Accepted" : graded.some((g) => g.error) ? "Runtime Error" : "Wrong Answer";

      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await supabaseAdmin.from("submissions").insert({
        user_id: context.userId, problem_slug: problem.slug, kind: "submit", code: data.code, status,
        passed, total: tests.length, runtime_ms: exec.timeMs, memory_kb: exec.memoryKb,
      });
      const { data: prog } = await supabaseAdmin
        .from("user_progress").select("*").eq("user_id", context.userId).eq("problem_slug", problem.slug).maybeSingle();
      const solvedNew = accepted && prog?.status !== "solved";
      await supabaseAdmin.from("user_progress").upsert(
        {
          user_id: context.userId,
          problem_slug: problem.slug,
          attempts: (prog?.attempts ?? 0) + 1,
          status: accepted || prog?.status === "solved" ? "solved" : "attempted",
          accepted_code: accepted ? data.code : prog?.accepted_code ?? null,
          solved_at: solvedNew ? new Date().toISOString() : prog?.solved_at ?? null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,problem_slug" },
      );
      await recordActivity(context.userId, solvedNew);

      if (accepted) {
        const { getDailyChallenges, challengeDate } = await import("@/content/daily");
        const challenge = getDailyChallenges().find((c) => c.problem.slug === problem.slug);
        if (challenge) {
          await supabaseAdmin.from("daily_challenge_completions").upsert({
            user_id: context.userId,
            challenge_date: challengeDate(),
            problem_slug: problem.slug,
            points: challenge.points,
          }, { onConflict: "user_id,challenge_date,problem_slug", ignoreDuplicates: true });
        }
      }

      const firstFail = graded.findIndex((g) => !g.passed);
      const sampleCount = problem.samples.length;
      return {
        ok: true as const,
        status,
        accepted,
        passed,
        total: tests.length,
        runtimeMs: exec.timeMs,
        memoryKb: exec.memoryKb,
        stderr: results ? "" : exec.stderr,
        // Hidden test details stay on the server; only pass/fail is returned.
        cases: graded.map((g, i) => ({ passed: g.passed, hidden: i >= sampleCount })),
        failedSample:
          firstFail >= 0 && firstFail < sampleCount
            ? { input: JSON.stringify(tests[firstFail]?.input), expected: JSON.stringify(tests[firstFail]?.expected), actual: JSON.stringify(graded[firstFail]?.actual ?? null), error: graded[firstFail]?.error ?? null }
            : null,
        failedHiddenError: firstFail >= sampleCount ? graded[firstFail]?.error ?? null : null,
      };
    } catch (e) {
      if (e instanceof NeedsClient) return { ok: false as const, needsClient: true as const, program: e.program, error: "" };
      if (e instanceof RunnerError) return { ok: false as const, error: e.message };
      throw e;
    }
  });

export const toggleRevision = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ slug: z.string().min(1).max(120), marked: z.boolean() }).parse(d))
  .handler(async ({ data, context }) => {
    if (!problemBySlug(data.slug)) throw new Error("Problem not found");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: prog } = await supabaseAdmin
      .from("user_progress").select("id").eq("user_id", context.userId).eq("problem_slug", data.slug).maybeSingle();
    if (prog) await supabaseAdmin.from("user_progress").update({ marked_for_revision: data.marked }).eq("id", prog.id);
    else await supabaseAdmin.from("user_progress").insert({ user_id: context.userId, problem_slug: data.slug, marked_for_revision: data.marked });
    if (data.marked) {
      const due = new Date(); due.setUTCDate(due.getUTCDate() + 1);
      const { data: existing } = await supabaseAdmin.from("revision_reminders").select("id").eq("user_id", context.userId).eq("problem_slug", data.slug).is("completed_at", null).maybeSingle();
      if (!existing) await supabaseAdmin.from("revision_reminders").insert({ user_id: context.userId, problem_slug: data.slug, due_on: due.toISOString().slice(0, 10) });
    } else {
      await supabaseAdmin.from("revision_reminders").delete().eq("user_id", context.userId).eq("problem_slug", data.slug);
    }
    return { marked: data.marked };
  });
