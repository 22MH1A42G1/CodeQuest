import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { CheckCircle2, Circle, Search, Bookmark } from "lucide-react";
import { PROBLEMS, TOPICS, topicTitle } from "@/content";
import { progressQuery } from "@/lib/queries";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DifficultyBadge } from "@/components/app/DifficultyBadge";
import { PageHeader } from "@/components/app/PageHeader";

export const Route = createFileRoute("/_authenticated/problems")({
  head: () => ({ meta: [{ title: "Problem Bank – DSA Mastery" }, { name: "description", content: "Search Python coding problems by topic and difficulty." }] }),
  component: ProblemBank,
});

function ProblemBank() {
  const [q, setQ] = useState("");
  const [diff, setDiff] = useState("all");
  const [topic, setTopic] = useState("all");
  const [status, setStatus] = useState("all");
  const prog = useQuery(progressQuery);
  const map = new Map((prog.data ?? []).map((p) => [p.problem_slug, p]));
  const list = useMemo(() => PROBLEMS.filter((p) => {
    const s = map.get(p.slug);
    if (q && !`${p.title} ${p.tags.join(" ")}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (diff !== "all" && p.difficulty !== diff) return false;
    if (topic !== "all" && p.topic !== topic) return false;
    if (status === "solved" && s?.status !== "solved") return false;
    if (status === "unsolved" && s?.status === "solved") return false;
    if (status === "revision" && !s?.marked_for_revision) return false;
    return true;
  }), [q, diff, topic, status, map]);

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-8">
      <PageHeader title="Problem bank" subtitle={`${PROBLEMS.length} original practice problems`} />
      <div className="mb-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative sm:col-span-2 lg:col-span-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search problems or tags" className="pl-9" maxLength={80} />
        </div>
        <Select value={diff} onValueChange={setDiff}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
          <SelectItem value="all">All difficulties</SelectItem><SelectItem value="Easy">Easy</SelectItem><SelectItem value="Medium">Medium</SelectItem><SelectItem value="Hard">Hard</SelectItem>
        </SelectContent></Select>
        <Select value={topic} onValueChange={setTopic}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
          <SelectItem value="all">All topics</SelectItem>{TOPICS.map((t) => <SelectItem key={t.slug} value={t.slug}>{t.title}</SelectItem>)}
        </SelectContent></Select>
        <Select value={status} onValueChange={setStatus}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
          <SelectItem value="all">Any status</SelectItem><SelectItem value="solved">Solved</SelectItem><SelectItem value="unsolved">Unsolved</SelectItem><SelectItem value="revision">Marked for revision</SelectItem>
        </SelectContent></Select>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        {list.length === 0 ? <p className="p-10 text-center text-sm text-muted-foreground">No problems match those filters.</p> : (
          <ul className="divide-y divide-border">
            {list.map((p) => {
              const s = map.get(p.slug);
              return (
                <li key={p.slug}>
                  <Link to="/practice/$slug" params={{ slug: p.slug }} className="flex items-center gap-3 px-4 py-3.5 hover:bg-muted/40">
                    {s?.status === "solved" ? <CheckCircle2 className="size-5 shrink-0 text-success" /> : <Circle className="size-5 shrink-0 text-muted-foreground/40" />}
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-medium">{p.title}</div>
                      <div className="truncate text-xs text-muted-foreground">{topicTitle(p.topic)} · {p.tags.join(", ")}</div>
                    </div>
                    {s?.marked_for_revision && <Bookmark className="size-4 shrink-0 fill-warning text-warning" />}
                    <DifficultyBadge level={p.difficulty} />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
