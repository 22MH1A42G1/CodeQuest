import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { Bot, CheckCircle2, Clock3, Lightbulb, Loader2, MessageSquare, Play, RotateCcw, Send, Square, Trophy } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { answerInterview, finishInterview, hintInterview, startInterview } from "@/lib/interview.functions";
import { PageHeader, Panel } from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/interviews")({
  head: () => ({ meta: [
    { title: "AI Mock Interviews – DSA Mastery" },
    { name: "description", content: "Practise one-question-at-a-time technical interviews with private AI feedback." },
    { property: "og:title", content: "AI Mock Interviews – DSA Mastery" },
    { property: "og:description", content: "Attempt-first AI interview practice with hints, evaluation and scoring." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Interviews,
});

const CATEGORIES = ["Python Programming", "Data Structures", "Algorithms", "SQL", "Object-Oriented Programming", "Problem Solving", "Technical HR Questions"];
type Turn = { type: "question" | "answer" | "evaluation" | "hint"; content: string; score?: number; idealSolution?: string };
type Session = { id: string; category: string; difficulty: string; mode: string; status: string; score: number | null; feedback: string | null; question_count: number; transcript: Turn[] };

function Interviews() {
  const qc = useQueryClient();
  const startFn = useServerFn(startInterview);
  const answerFn = useServerFn(answerInterview);
  const hintFn = useServerFn(hintInterview);
  const finishFn = useServerFn(finishInterview);
  const [config, setConfig] = useState({ category: "Data Structures", difficulty: "Beginner", mode: "Standard", targetCompany: "" });
  const [session, setSession] = useState<Session | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [answer, setAnswer] = useState("");
  const [seconds, setSeconds] = useState(30 * 60);
  const history = useQuery({ queryKey: ["interviews"], queryFn: async () => {
    const { data, error } = await supabase.from("mock_interviews").select("id,category,difficulty,mode,status,score,feedback,question_count,transcript,created_at").order("created_at", { ascending: false }).limit(12);
    if (error) throw error; return data;
  } });
  const refresh = () => qc.invalidateQueries({ queryKey: ["interviews"] });

  const start = useMutation({ mutationFn: () => startFn({ data: { category: config.category as "Data Structures", difficulty: config.difficulty as "Beginner", mode: config.mode as "Standard", targetCompany: config.targetCompany || undefined } }), onSuccess: (row) => {
    const next = { ...row, transcript: row.transcript as unknown as Turn[] };
    setSession(next); setTurns(next.transcript); setAnswer(""); setSeconds(30 * 60); refresh();
  }, onError: (e) => toast.error(e.message) });
  const answerM = useMutation({ mutationFn: () => answerFn({ data: { id: session!.id, answer } }), onSuccess: (r) => {
    const next: Turn[] = [...turns, { type: "answer", content: answer }, { type: "evaluation", content: r.feedback, score: r.score, idealSolution: r.idealSolution }];
    if (r.nextQuestion) next.push({ type: "question", content: r.nextQuestion });
    setTurns(next); setAnswer(""); setSession(session ? { ...session, score: r.overallScore, status: r.done ? "completed" : "in_progress", feedback: r.feedback, question_count: session.question_count + (r.nextQuestion ? 1 : 0) } : session); refresh();
    if (r.done) toast.success(`Interview complete — ${r.overallScore}/100`);
  }, onError: (e) => toast.error(e.message) });
  const hint = useMutation({ mutationFn: () => hintFn({ data: { id: session!.id } }), onSuccess: (r) => setTurns([...turns, { type: "hint", content: r.hint }]), onError: (e) => toast.error(e.message) });
  const finish = useMutation({ mutationFn: () => finishFn({ data: { id: session!.id } }), onSuccess: (r) => { setSession(session ? { ...session, status: "completed", score: r.score, feedback: r.feedback } : session); refresh(); toast.success("Final interview report ready"); }, onError: (e) => toast.error(e.message) });

  const active = session?.status === "in_progress";
  const currentQuestion = [...turns].reverse().find((t) => t.type === "question")?.content;
  const hasEvaluation = turns.some((t) => t.type === "evaluation");
  const timedOut = session?.mode === "Timed Coding" && seconds <= 0;
  useEffect(() => {
    if (!active || session?.mode !== "Timed Coding" || seconds <= 0) return;
    const timer = window.setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [active, session?.mode, seconds]);

  function loadPast(row: { id: string; category: string; difficulty: string; mode: string; status: string; score: number | null; feedback: string | null; question_count: number; transcript: unknown }) {
    const parsed = row.transcript as Turn[];
    setSession({ ...row, transcript: parsed }); setTurns(parsed); setAnswer("");
  }
  function reset() { setSession(null); setTurns([]); setAnswer(""); setSeconds(30 * 60); }
  const busy = start.isPending || answerM.isPending || hint.isPending || finish.isPending;

  return <div className="mx-auto max-w-6xl p-4 sm:p-8">
    <PageHeader title="AI mock interview room" subtitle="One question at a time. Hints never reveal the solution; ideal answers appear only after you attempt." action={session && <Button variant="outline" onClick={reset}><RotateCcw /> New interview</Button>} />
    {!session ? <div className="grid gap-4 lg:grid-cols-3"><Panel className="lg:col-span-2"><h2 className="font-semibold">Set up your interview</h2><div className="mt-5 grid gap-4 sm:grid-cols-2"><div><Label>Category</Label><Select value={config.category} onValueChange={(v) => setConfig({ ...config, category: v })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent></Select></div><div><Label>Difficulty</Label><Select value={config.difficulty} onValueChange={(v) => setConfig({ ...config, difficulty: v })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{["Beginner", "Intermediate", "Advanced"].map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent></Select></div><div><Label>Interview mode</Label><Select value={config.mode} onValueChange={(v) => setConfig({ ...config, mode: v })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Standard">Standard · up to 5 questions</SelectItem><SelectItem value="Timed Coding">Timed Coding · 30 minutes</SelectItem></SelectContent></Select></div><div><Label htmlFor="company">Target company or style (optional)</Label><Input id="company" value={config.targetCompany} maxLength={50} onChange={(e) => setConfig({ ...config, targetCompany: e.target.value })} placeholder="e.g. Amazon or startup" /></div></div><Button variant="hero" className="mt-6" disabled={busy} onClick={() => start.mutate()}>{start.isPending ? <Loader2 className="animate-spin" /> : <Play />} Start interview</Button><p className="mt-3 text-xs text-muted-foreground">AI-generated questions and evaluations can be wrong. Use them as practice feedback, not a guarantee of interview performance.</p></Panel><Panel><h2 className="font-semibold">How it works</h2><ol className="mt-4 space-y-4 text-sm text-muted-foreground">{["Choose your topic and level.", "Answer before seeing the ideal solution.", "Ask for a small hint if stuck.", "Get correctness, complexity and communication feedback.", "Finish for an overall score and next steps."].map((x, i) => <li key={x} className="flex gap-3"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">{i + 1}</span>{x}</li>)}</ol></Panel></div> : <div className="grid gap-4 lg:grid-cols-3"><div className="space-y-4 lg:col-span-2"><Panel><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs text-muted-foreground">{session.category} · {session.difficulty} · Question {session.question_count} of 5</div><div className="mt-1 font-semibold">{session.mode}</div></div>{session.mode === "Timed Coding" && <div className={cn("flex items-center gap-2 rounded-lg bg-muted px-3 py-2 font-mono text-sm", timedOut && "text-destructive")}><Clock3 className="size-4" />{String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}</div>}</div></Panel><div className="space-y-3">{turns.map((turn, i) => <div key={i} className={cn("rounded-2xl border p-4", turn.type === "question" ? "border-primary/30 bg-primary/5" : turn.type === "answer" ? "ml-4 border-border bg-card" : turn.type === "hint" ? "border-warning/30 bg-warning/10" : "border-border bg-card")}><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground">{turn.type === "question" ? <><Bot className="size-4 text-primary" /> Interviewer</> : turn.type === "answer" ? <><MessageSquare className="size-4" /> Your answer</> : turn.type === "hint" ? <><Lightbulb className="size-4 text-warning" /> Hint</> : <><CheckCircle2 className="size-4 text-success" /> Evaluation {turn.score != null && `· ${turn.score}/100`}</>}</div><p className="whitespace-pre-wrap text-sm leading-relaxed">{turn.content}</p>{turn.idealSolution && <details className="mt-3 rounded-lg bg-sidebar p-3"><summary className="cursor-pointer text-xs font-semibold">Ideal solution & complexity</summary><p className="mt-2 whitespace-pre-wrap text-sm text-muted-foreground">{turn.idealSolution}</p></details>}</div>)}</div>{active && <Panel><Label htmlFor="interview-answer">Your answer or Python code</Label><Textarea id="interview-answer" value={answer} onChange={(e) => setAnswer(e.target.value)} rows={8} maxLength={20000} disabled={timedOut || busy} className="mt-2 font-mono text-sm" placeholder={currentQuestion?.toLowerCase().includes("code") ? "Write your approach and Python code…" : "Explain your reasoning, trade-offs and complexity…"} />{timedOut && <p className="mt-2 text-sm text-destructive">Time is up. Finish to receive your report for completed answers.</p>}<div className="mt-3 flex flex-wrap gap-2"><Button disabled={!answer.trim() || busy || timedOut} onClick={() => answerM.mutate()}>{answerM.isPending ? <Loader2 className="animate-spin" /> : <Send />} Submit answer</Button><Button variant="outline" disabled={busy || timedOut} onClick={() => hint.mutate()}>{hint.isPending ? <Loader2 className="animate-spin" /> : <Lightbulb />} Hint</Button><Button variant="ghost" disabled={!hasEvaluation || busy} onClick={() => finish.mutate()}><Square /> Finish & score</Button></div></Panel>}{session.status === "completed" && <Panel className="border-success/40"><Trophy className="size-6 text-success" /><h2 className="mt-2 text-xl font-bold">Final score: {session.score ?? 0}/100</h2><p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">{session.feedback}</p></Panel>}{session.status === "failed" && <Panel><p className="text-sm text-destructive">This interview stopped because the AI could not respond. Start a fresh interview when ready.</p></Panel>}</div><Panel className="h-fit"><h2 className="font-semibold">Interview tips</h2><ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li>State assumptions before solving.</li><li>Explain the invariant behind your approach.</li><li>Include time and auxiliary space complexity.</li><li>Test empty, duplicate and boundary inputs.</li></ul></Panel></div>}
    <div className="mt-6"><h2 className="mb-3 font-semibold">Recent interviews</h2>{history.isLoading ? <Skeleton className="h-32" /> : history.data?.length ? <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{history.data.map((row) => <button key={row.id} onClick={() => loadPast(row)} className="rounded-2xl border border-border bg-card p-4 text-left shadow-card hover:border-primary/50"><div className="flex items-center justify-between gap-2"><span className="font-medium">{row.category}</span><span className={cn("text-xs", row.status === "completed" ? "text-success" : "text-muted-foreground")}>{row.score != null ? `${row.score}/100` : row.status}</span></div><p className="mt-1 text-xs text-muted-foreground">{row.difficulty} · {row.question_count} questions</p></button>)}</div> : <Panel><p className="text-sm text-muted-foreground">Your interview history will appear here after your first session.</p></Panel>}</div>
  </div>;
}
