import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowRight, Flame, Target, Trophy, TrendingUp } from "lucide-react";
import { activityQuery, profileQuery, progressQuery, recentSubmissionsQuery } from "@/lib/queries";
import { computeStreak, lastNDays, learningLevel, recommend, solvedByDifficulty } from "@/lib/stats";
import { PROBLEMS, problemBySlug, topicTitle } from "@/content";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { DifficultyBadge } from "@/components/app/DifficultyBadge";
import { PageHeader, Panel } from "@/components/app/PageHeader";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [
    { title: "Dashboard – DSA Mastery" }, { name: "description", content: "Your coding streak, solved problems and next steps." },
    { property: "og:title", content: "Dashboard – DSA Mastery" }, { property: "og:description", content: "Personal coding progress, activity and recommendations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Dashboard,
});

function Stat({ icon: Icon, label, value, hint }: { icon: typeof Flame; label: string; value: React.ReactNode; hint?: string }) {
  return (
    <Panel>
      <div className="flex items-center justify-between text-sm text-muted-foreground">{label}<Icon className="size-4 text-primary" /></div>
      <div className="mt-2 font-display text-3xl font-bold">{value}</div>
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </Panel>
  );
}

function Dashboard() {
  const profile = useQuery(profileQuery);
  const progress = useQuery(progressQuery);
  const activity = useQuery(activityQuery);
  const recent = useQuery(recentSubmissionsQuery);

  if (progress.isLoading || activity.isLoading || profile.isLoading) {
    return <div className="mx-auto max-w-6xl space-y-4 p-4 sm:p-8"><Skeleton className="h-10 w-64" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[0,1,2,3].map(i=><Skeleton key={i} className="h-28" />)}</div><Skeleton className="h-72" /></div>;
  }
  if (progress.error || activity.error) {
    return <div className="p-8 text-destructive">Couldn't load your progress. Please refresh.</div>;
  }

  const prog = progress.data ?? [];
  const act = activity.data ?? [];
  const solved = prog.filter((p) => p.status === "solved").length;
  const byDiff = solvedByDifficulty(prog);
  const streak = computeStreak(act);
  const week = lastNDays(act, 7);
  const today = week[week.length - 1] ?? { solved: 0 };
  const goal = profile.data?.daily_goal ?? 2;
  const recs = recommend(prog, 4);
  const pct = Math.round((solved / PROBLEMS.length) * 100);
  const name = profile.data?.display_name || profile.data?.email?.split("@")[0] || "there";

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-8">
      <PageHeader
        title={<>Hi, <span className="text-gradient">{name}</span> 👋</>}
        subtitle={streak > 0 ? `You're on a ${streak}-day streak. Keep it going!` : "Solve a problem today to start your streak."}
        action={recs[0] && <Button variant="hero" asChild><Link to="/practice/$slug" params={{ slug: recs[0].slug }}>Continue learning <ArrowRight /></Link></Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={Flame} label="Daily streak" value={`${streak} 🔥`} hint={streak === 1 ? "day" : "days in a row"} />
        <Stat icon={Trophy} label="Problems solved" value={solved} hint={`of ${PROBLEMS.length}`} />
        <Stat icon={TrendingUp} label="Current level" value={learningLevel(solved)} hint={`${pct}% complete`} />
        <Panel>
          <div className="flex items-center justify-between text-sm text-muted-foreground">Today's goal<Target className="size-4 text-primary" /></div>
          <div className="mt-2 font-display text-3xl font-bold">{today.solved}<span className="text-lg text-muted-foreground"> / {goal}</span></div>
          <Progress value={Math.min(100, (today.solved / goal) * 100)} className="mt-3 h-2" />
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <h2 className="font-semibold">Weekly activity</h2>
          <p className="text-xs text-muted-foreground">Submissions and new problems solved, last 7 days</p>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={week}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="label" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} width={28} />
                <Tooltip cursor={{ fill: "var(--muted)" }} contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Bar dataKey="submissions" name="Submissions" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="solved" name="Solved" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel>
          <h2 className="font-semibold">By difficulty</h2>
          <div className="mt-4 space-y-4">
            {(["Easy", "Medium", "Hard"] as const).map((d) => (
              <div key={d}>
                <div className="mb-1.5 flex justify-between text-sm"><DifficultyBadge level={d} /><span className="text-muted-foreground">{byDiff[d].solved} / {byDiff[d].total}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className={cn("h-full rounded-full", d === "Easy" ? "bg-easy" : d === "Medium" ? "bg-medium" : "bg-hard")} style={{ width: `${byDiff[d].total ? (byDiff[d].solved / byDiff[d].total) * 100 : 0}%` }} />
                </div>
              </div>
            ))}
            <div className="pt-2 text-sm text-muted-foreground">Overall completion: <span className="font-semibold text-foreground">{pct}%</span></div>
          </div>
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Panel>
          <h2 className="font-semibold">Recommended next</h2>
          {recs.length === 0 ? <p className="mt-4 text-sm text-muted-foreground">You've solved everything. Incredible! 🎉</p> : (
            <ul className="mt-3 divide-y divide-border">
              {recs.map((p) => (
                <li key={p.slug}>
                  <Link to="/practice/$slug" params={{ slug: p.slug }} className="flex items-center justify-between gap-3 py-3 hover:text-primary">
                    <div className="min-w-0"><div className="truncate font-medium">{p.title}</div><div className="text-xs text-muted-foreground">{topicTitle(p.topic)}</div></div>
                    <DifficultyBadge level={p.difficulty} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Panel>
        <Panel>
          <h2 className="font-semibold">Recent submissions</h2>
          {recent.isLoading ? <Skeleton className="mt-4 h-32" /> : !recent.data?.length ? (
            <p className="mt-4 text-sm text-muted-foreground">No submissions yet. Pick a problem and hit Submit.</p>
          ) : (
            <ul className="mt-3 divide-y divide-border">
              {recent.data.map((s) => (
                <li key={s.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                  <Link to="/practice/$slug" params={{ slug: s.problem_slug }} className="min-w-0 truncate font-medium hover:text-primary">{problemBySlug(s.problem_slug)?.title ?? s.problem_slug}</Link>
                  <span className={cn("shrink-0 text-xs font-semibold", s.status === "Accepted" ? "text-success" : "text-destructive")}>{s.status} · {s.passed}/{s.total}</span>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </div>
  );
}
