import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowRight, Award, Clock3, Crosshair, Gauge, TrendingUp } from "lucide-react";
import { activityQuery, analyticsSubmissionsQuery, progressQuery, topicProgressQuery } from "@/lib/queries";
import { accuracyPercentage, averageAttempts, difficultySolved, recommendationFor, strongestAndWeakest, topicPerformance } from "@/lib/analytics";
import { lastNDays } from "@/lib/stats";
import { PROBLEMS, TOPICS } from "@/content";
import { PageHeader, Panel } from "@/components/app/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/analytics")({
  head: () => ({ meta: [
    { title: "Progress Analytics – DSA Mastery" },
    { name: "description", content: "Understand coding accuracy, topic mastery, study time and the next skill to practise." },
    { property: "og:title", content: "Progress Analytics – DSA Mastery" },
    { property: "og:description", content: "Personal DSA performance analytics and recommendations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Analytics,
});

const CHART_COLORS = ["var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

function Metric({ label, value, detail, icon: Icon }: { label: string; value: string | number; detail: string; icon: typeof Gauge }) {
  return <Panel><div className="flex items-center justify-between text-sm text-muted-foreground">{label}<Icon className="size-4 text-primary" /></div><div className="mt-2 font-display text-3xl font-bold">{value}</div><p className="mt-1 text-xs text-muted-foreground">{detail}</p></Panel>;
}

function Analytics() {
  const progress = useQuery(progressQuery);
  const submissions = useQuery(analyticsSubmissionsQuery);
  const activity = useQuery(activityQuery);
  const topicProgress = useQuery(topicProgressQuery);
  if (progress.isLoading || submissions.isLoading || activity.isLoading || topicProgress.isLoading) {
    return <div className="mx-auto max-w-6xl space-y-4 p-4 sm:p-8"><Skeleton className="h-12 w-72" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[0,1,2,3].map((i) => <Skeleton key={i} className="h-32" />)}</div><Skeleton className="h-80" /></div>;
  }
  if (progress.error || submissions.error || activity.error || topicProgress.error) return <div className="p-8 text-destructive">Couldn't load analytics. Please refresh and try again.</div>;

  const prog = progress.data ?? [];
  const subs = submissions.data ?? [];
  const acts = activity.data ?? [];
  const topics = topicPerformance(subs, prog);
  const practiced = topics.filter((t) => t.attempted > 0 || t.solved > 0).sort((a, b) => b.solved - a.solved).slice(0, 10);
  const { strongest, weakest } = strongestAndWeakest(topics);
  const solved = prog.filter((p) => p.status === "solved").length;
  const byDifficulty = difficultySolved(prog);
  const difficultyData = (["Easy", "Medium", "Hard"] as const).map((name) => ({ name, value: byDifficulty[name] }));
  const minutes = acts.reduce((sum, a) => sum + (a.minutes ?? 0), 0);
  const completedTopics = new Set((topicProgress.data ?? []).filter((t) => t.completed).map((t) => t.topic_slug)).size;
  const recommendation = weakest ? recommendationFor(weakest.slug) : PROBLEMS[0];
  const empty = subs.length === 0 && prog.length === 0;

  return <div className="mx-auto max-w-6xl p-4 sm:p-8">
    <PageHeader title="Progress analytics" subtitle="Every metric below comes from your submissions, learning activity and saved progress." />
    {empty && <Panel className="mb-4 border-primary/30"><h2 className="font-semibold">Your analytics start with one attempt</h2><p className="mt-1 text-sm text-muted-foreground">Solve a problem or finish a lesson, then return here for personal insights.</p><Button asChild className="mt-4"><Link to="/practice/$slug" params={{ slug: "two-sum" }}>Try Two Sum <ArrowRight /></Link></Button></Panel>}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Metric label="Submit accuracy" value={`${accuracyPercentage(subs)}%`} detail="Accepted submits ÷ all submits" icon={Crosshair} />
      <Metric label="Attempts to solve" value={averageAttempts(prog)} detail="Average per accepted problem" icon={Gauge} />
      <Metric label="Focused study" value={minutes < 60 ? `${minutes}m` : `${Math.floor(minutes / 60)}h ${minutes % 60}m`} detail="Active time in the last 120 days" icon={Clock3} />
      <Metric label="Roadmap complete" value={`${Math.round((completedTopics / TOPICS.length) * 100)}%`} detail={`${completedTopics} of ${TOPICS.length} lessons completed`} icon={TrendingUp} />
    </div>
    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      <Panel className="lg:col-span-2"><h2 className="font-semibold">Coding activity</h2><p className="text-xs text-muted-foreground">Submissions and newly solved problems, last 30 days</p><div className="mt-4 h-64"><ResponsiveContainer width="100%" height="100%"><AreaChart data={lastNDays(acts, 30)}><CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} /><XAxis dataKey="date" tickFormatter={(d: string) => d.slice(5)} stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} /><YAxis allowDecimals={false} stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} width={28} /><Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12 }} /><Area type="monotone" dataKey="submissions" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.15} /><Area type="monotone" dataKey="solved" stroke="var(--chart-3)" fill="var(--chart-3)" fillOpacity={0.12} /></AreaChart></ResponsiveContainer></div></Panel>
      <Panel><h2 className="font-semibold">Solved by difficulty</h2><div className="h-56"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={difficultyData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={78} paddingAngle={4}>{difficultyData.map((d, i) => <Cell key={d.name} fill={CHART_COLORS[i]} />)}</Pie><Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12 }} /></PieChart></ResponsiveContainer></div><div className="flex justify-center gap-4 text-xs">{difficultyData.map((d, i) => <span key={d.name} className="flex items-center gap-1.5"><span className="size-2 rounded-full" style={{ background: CHART_COLORS[i] }} />{d.name} {d.value}</span>)}</div></Panel>
    </div>
    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      <Panel className="lg:col-span-2"><h2 className="font-semibold">Topic mastery</h2>{practiced.length ? <div className="mt-4 h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={practiced} layout="vertical" margin={{ left: 10 }}><CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} /><XAxis type="number" allowDecimals={false} stroke="var(--muted-foreground)" fontSize={11} /><YAxis type="category" dataKey="title" width={115} stroke="var(--muted-foreground)" fontSize={10} tickLine={false} axisLine={false} /><Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12 }} /><Bar dataKey="solved" name="Solved" fill="var(--chart-1)" radius={[0, 6, 6, 0]} /></BarChart></ResponsiveContainer></div> : <p className="mt-4 text-sm text-muted-foreground">Topic charts appear after your first practice attempt.</p>}</Panel>
      <Panel><h2 className="font-semibold">Personal insight</h2><div className="mt-4 space-y-4 text-sm"><div><div className="flex items-center gap-2 font-medium"><Award className="size-4 text-success" /> Strongest topic</div><p className="mt-1 text-muted-foreground">{strongest ? `${strongest.title} — ${strongest.solved} solved at ${strongest.accuracy}% submit accuracy.` : "Keep practising to reveal your strongest topic."}</p></div><div><div className="flex items-center gap-2 font-medium"><TrendingUp className="size-4 text-warning" /> Focus next</div><p className="mt-1 text-muted-foreground">{weakest ? `${weakest.title} has the most room to grow. Revisit the core pattern, then try an unsolved problem.` : "Start with arrays to build a strong foundation."}</p></div>{recommendation && <Button variant="outline" size="sm" asChild><Link to="/practice/$slug" params={{ slug: recommendation.slug }}>Practice {recommendation.title} <ArrowRight /></Link></Button>}</div></Panel>
    </div>
    <p className="mt-4 text-xs text-muted-foreground">Solved total: {solved} of {PROBLEMS.length}. Accuracy measures submit results, not sample-only runs.</p>
  </div>;
}
