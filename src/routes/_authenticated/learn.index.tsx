import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PROBLEMS, TOPICS } from "@/content";
import type { Level } from "@/content/types";
import { topicProgressQuery } from "@/lib/queries";
import { DifficultyBadge } from "@/components/app/DifficultyBadge";
import { PageHeader } from "@/components/app/PageHeader";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/learn/")({
  head: () => ({ meta: [
    { title: "Learn DSA – DSA Mastery" }, { name: "description", content: "A structured path through 22 DSA topics in Python." },
    { property: "og:title", content: "Learn DSA – DSA Mastery" }, { property: "og:description", content: "Structured Python DSA lessons, notes and quizzes." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: LearnIndex,
});

const LEVELS: ("All" | Level)[] = ["All", "Beginner", "Intermediate", "Advanced"];

function LearnIndex() {
  const [level, setLevel] = useState<"All" | Level>("All");
  const tp = useQuery(topicProgressQuery);
  const done = new Set((tp.data ?? []).filter((t) => t.completed).map((t) => t.topic_slug));
  const list = TOPICS.filter((t) => level === "All" || t.level === level);
  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-8">
      <PageHeader title="Learning path" subtitle={`${done.size} of ${TOPICS.length} topics completed`} />
      <div className="mb-6 flex flex-wrap gap-2">
        {LEVELS.map((l) => (
          <button key={l} onClick={() => setLevel(l)} className={cn("rounded-full border px-4 py-1.5 text-sm font-medium transition-colors", level === l ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground")}>{l}</button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => {
          const idx = TOPICS.indexOf(t) + 1;
          const count = PROBLEMS.filter((p) => p.topic === t.slug).length;
          return (
            <Link key={t.slug} to="/learn/$slug" params={{ slug: t.slug }} className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/50">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{String(idx).padStart(2, "0")}</span>
                {done.has(t.slug) ? <CheckCircle2 className="size-5 text-success" /> : <DifficultyBadge level={t.level} />}
              </div>
              <h3 className="mt-3 text-lg font-semibold group-hover:text-primary">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.summary}</p>
              <p className="mt-4 text-xs text-muted-foreground">{count} practice problem{count === 1 ? "" : "s"} · {t.quiz.length}-question quiz</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
