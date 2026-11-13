import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2, Lightbulb } from "lucide-react";
import { PROBLEMS, TOPICS, topicBySlug } from "@/content";
import { supabase } from "@/integrations/supabase/client";
import { topicProgressQuery } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/app/DifficultyBadge";
import { Panel } from "@/components/app/PageHeader";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/learn/$slug")({
  loader: ({ params }) => {
    const topic = topicBySlug(params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.topic.title ?? "Topic"} – Learn DSA` }, { name: "description", content: loaderData?.topic.summary ?? "DSA topic" },
    { property: "og:title", content: `${loaderData?.topic.title ?? "Topic"} – Learn DSA` }, { property: "og:description", content: loaderData?.topic.summary ?? "DSA lesson and quiz" },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: TopicPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-8"><h2 className="mb-3 text-xl font-semibold">{title}</h2>{children}</section>;
}
function Bullets({ items }: { items: string[] }) {
  return <ul className="space-y-2">{items.map((x) => <li key={x} className="flex gap-2 text-sm"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{x}</li>)}</ul>;
}

function TopicPage() {
  const { topic } = Route.useLoaderData();
  const qc = useQueryClient();
  const tp = useQuery(topicProgressQuery);
  const mine = tp.data?.find((t) => t.topic_slug === topic.slug);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const problems = PROBLEMS.filter((p) => p.topic === topic.slug);
  const idx = TOPICS.findIndex((t) => t.slug === topic.slug);
  const next = TOPICS[idx + 1];

  const save = useMutation({
    mutationFn: async (patch: { completed?: boolean; quiz_score?: number }) => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) throw new Error("Not signed in");
      const { error } = await supabase.from("topic_progress").upsert({
        user_id: u.user.id, topic_slug: topic.slug,
        completed: patch.completed ?? mine?.completed ?? false,
        quiz_score: patch.quiz_score ?? mine?.quiz_score ?? null,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: topicProgressQuery.queryKey }),
    onError: (e) => toast.error(e.message),
  });

  function checkQuiz() {
    if (Object.keys(answers).length < topic.quiz.length) { toast.error("Answer every question first"); return; }
    const score = topic.quiz.filter((q, i) => answers[i] === q.answer).length;
    setChecked(true);
    save.mutate({ quiz_score: Math.round((score / topic.quiz.length) * 100) });
  }

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-8">
      <Link to="/learn" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> All topics</Link>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold">{topic.title}</h1>
        <DifficultyBadge level={topic.level} />
      </div>
      <p className="mt-2 text-muted-foreground">{topic.summary}</p>

      <Section title="Explanation">
        <div className="space-y-3 text-[15px] leading-relaxed">{topic.explanation.split("\n\n").map((p) => <p key={p}>{p}</p>)}</div>
      </Section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rotate-[-0.6deg] rounded-xl bg-note-paper p-5 text-note-ink shadow-card">
          <div className="mb-2 font-hand text-2xl font-bold">Quick notes ✎</div>
          <ul className="space-y-1 font-hand text-xl leading-snug">{topic.notes.map((n) => <li key={n}>• {n}</li>)}</ul>
        </div>
        <Panel>
          <div className="mb-2 text-sm font-semibold text-muted-foreground">Visual</div>
          <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-primary sm:text-sm">{topic.diagram}</pre>
        </Panel>
      </div>

      <Section title="Real-world applications"><Bullets items={topic.applications} /></Section>

      <Section title="Python example">
        <pre className="overflow-x-auto rounded-xl border border-border bg-sidebar p-4 font-mono text-sm leading-relaxed">{topic.code_example}</pre>
      </Section>

      <Section title="Step-by-step dry run">
        <ol className="space-y-2">{topic.dry_run.map((s, i) => (
          <li key={i} className="flex gap-3 text-sm"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 font-mono text-xs text-primary">{i + 1}</span><span className="pt-0.5 font-mono">{s}</span></li>
        ))}</ol>
      </Section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Panel><div className="text-sm text-muted-foreground">Time complexity</div><div className="mt-1 font-mono text-xl font-semibold">{topic.time_complexity}</div></Panel>
        <Panel><div className="text-sm text-muted-foreground">Space complexity</div><div className="mt-1 font-mono text-xl font-semibold">{topic.space_complexity}</div></Panel>
      </div>

      <Section title="Common mistakes"><Bullets items={topic.mistakes} /></Section>
      <Section title="Interview questions">
        <ul className="space-y-2">{topic.interview_questions.map((q) => <li key={q} className="flex gap-2 rounded-lg border border-border bg-card p-3 text-sm"><Lightbulb className="size-4 shrink-0 text-warning" />{q}</li>)}</ul>
      </Section>

      <Section title="Quiz">
        <div className="space-y-4">
          {topic.quiz.map((q, qi) => (
            <Panel key={qi}>
              <div className="font-medium">{qi + 1}. {q.question}</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.options.map((o, oi) => {
                  const picked = answers[qi] === oi;
                  const state = checked ? (oi === q.answer ? "right" : picked ? "wrong" : "") : picked ? "picked" : "";
                  return (
                    <button key={oi} disabled={checked} onClick={() => setAnswers({ ...answers, [qi]: oi })}
                      className={cn("rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                        state === "right" && "border-success bg-success/15", state === "wrong" && "border-destructive bg-destructive/15",
                        state === "picked" && "border-primary bg-primary/15", !state && "border-border hover:border-primary/50")}>{o}</button>
                  );
                })}
              </div>
              {checked && <p className="mt-3 text-sm text-muted-foreground">{q.explanation}</p>}
            </Panel>
          ))}
          <div className="flex flex-wrap items-center gap-3">
            {!checked ? <Button onClick={checkQuiz}>Check answers</Button> : <Button variant="outline" onClick={() => { setChecked(false); setAnswers({}); }}>Retry quiz</Button>}
            {mine?.quiz_score != null && <span className="text-sm text-muted-foreground">Best saved score: {mine.quiz_score}%</span>}
          </div>
        </div>
      </Section>

      <Section title="Practice problems">
        {problems.length === 0 ? <p className="text-sm text-muted-foreground">No practice problems for this topic yet — try the next topic's problems.</p> : (
          <div className="grid gap-2">{problems.map((p) => (
            <Link key={p.slug} to="/practice/$slug" params={{ slug: p.slug }} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 hover:border-primary/50">
              <span className="font-medium">{p.title}</span><DifficultyBadge level={p.difficulty} />
            </Link>
          ))}</div>
        )}
      </Section>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <Button variant={mine?.completed ? "outline" : "success"} onClick={() => save.mutate({ completed: !mine?.completed })} disabled={save.isPending}>
          <CheckCircle2 /> {mine?.completed ? "Marked complete — undo" : "Mark topic complete"}
        </Button>
        {next && <Button variant="ghost" asChild><Link to="/learn/$slug" params={{ slug: next.slug }}>Next: {next.title} →</Link></Button>}
      </div>
    </div>
  );
}
