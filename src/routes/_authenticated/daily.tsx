import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Award, CalendarCheck, CheckCircle2, Flame, Medal, Play, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { challengeDate, getDailyChallenges } from "@/content/daily";
import { activityQuery } from "@/lib/queries";
import { computeStreak } from "@/lib/stats";
import { problemBySlug } from "@/content";
import { PageHeader, Panel } from "@/components/app/PageHeader";
import { DifficultyBadge } from "@/components/app/DifficultyBadge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/daily")({
  head: () => ({ meta: [
    { title: "Daily Challenges – DSA Mastery" },
    { name: "description", content: "Complete today's Python challenges, build a streak and compare weekly points." },
    { property: "og:title", content: "Daily Challenges – DSA Mastery" },
    { property: "og:description", content: "Daily coding practice, badges and a weekly leaderboard." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: DailyChallenges,
});

function DailyChallenges() {
  const today = challengeDate();
  const challenges = getDailyChallenges();
  const activity = useQuery(activityQuery);
  const completions = useQuery({ queryKey: ["daily-completions"], queryFn: async () => {
    const { data, error } = await supabase.from("daily_challenge_completions").select("*").order("completed_at", { ascending: false }).limit(100);
    if (error) throw error; return data;
  } });
  const leaderboard = useQuery({ queryKey: ["weekly-leaderboard"], queryFn: async () => {
    const { data, error } = await supabase.rpc("get_weekly_leaderboard");
    if (error) throw error; return data;
  } });
  if (completions.isLoading || activity.isLoading || leaderboard.isLoading) return <div className="mx-auto max-w-6xl space-y-4 p-4 sm:p-8"><Skeleton className="h-12 w-72" /><Skeleton className="h-40" /><Skeleton className="h-80" /></div>;
  if (completions.error || activity.error || leaderboard.error) return <div className="p-8 text-destructive">Couldn't load daily challenges. Please refresh.</div>;

  const history = completions.data ?? [];
  const doneToday = new Set(history.filter((h) => h.challenge_date === today).map((h) => h.problem_slug));
  const totalPoints = history.reduce((sum, h) => sum + h.points, 0);
  const month = today.slice(0, 7);
  const monthly = history.filter((h) => h.challenge_date.startsWith(month));
  const streak = computeStreak(activity.data ?? []);
  const badges = [
    { name: "First challenge", detail: "Complete one daily problem", earned: history.length >= 1 },
    { name: "Hat trick", detail: "Finish all three in one day", earned: doneToday.size >= 3 || history.some((h) => history.filter((x) => x.challenge_date === h.challenge_date).length >= 3) },
    { name: "Century", detail: "Earn 100 challenge points", earned: totalPoints >= 100 },
    { name: "On fire", detail: "Reach a 7-day coding streak", earned: streak >= 7 },
  ];

  return <div className="mx-auto max-w-6xl p-4 sm:p-8">
    <PageHeader title="Daily challenges" subtitle={`${new Date(`${today}T00:00:00Z`).toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" })} · Fresh problems every UTC day`} />
    <div className="mb-4 grid gap-4 sm:grid-cols-3"><Panel><div className="flex items-center justify-between text-sm text-muted-foreground">Coding streak<Flame className="size-4 text-warning" /></div><div className="mt-2 font-display text-3xl font-bold">{streak} days</div></Panel><Panel><div className="flex items-center justify-between text-sm text-muted-foreground">Challenge points<Trophy className="size-4 text-primary" /></div><div className="mt-2 font-display text-3xl font-bold">{totalPoints}</div></Panel><Panel><div className="flex items-center justify-between text-sm text-muted-foreground">Today's progress<CalendarCheck className="size-4 text-success" /></div><div className="mt-2 font-display text-3xl font-bold">{doneToday.size} / 3</div></Panel></div>
    <div className="grid gap-4 lg:grid-cols-3">{challenges.map((c) => { const done = doneToday.has(c.problem.slug); return <Panel key={c.difficulty} className={cn(done && "border-success/50")}><div className="flex items-center justify-between"><DifficultyBadge level={c.difficulty} /><span className="text-sm font-semibold text-primary">+{c.points} pts</span></div><h2 className="mt-4 text-lg font-semibold">{c.problem.title}</h2><p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{c.problem.description.replace(/`([^`]+)`/g, "$1")}</p><div className="mt-4 flex items-center justify-between gap-3"><span className="text-xs text-muted-foreground">{c.optional ? "Optional bonus" : "Core challenge"}</span>{done ? <span className="flex items-center gap-1.5 text-sm font-medium text-success"><CheckCircle2 className="size-4" /> Completed</span> : <Button size="sm" asChild><Link to="/practice/$slug" params={{ slug: c.problem.slug }}><Play /> Start</Link></Button>}</div></Panel>; })}</div>
    <p className="mt-3 text-xs text-muted-foreground">Points are awarded once per problem per day after an accepted submission. Open the problem and use Submit to complete a challenge.</p>
    <div className="mt-6 grid gap-4 lg:grid-cols-2"><Panel><h2 className="flex items-center gap-2 font-semibold"><Medal className="size-5 text-warning" /> Weekly leaderboard</h2><p className="mt-1 text-xs text-muted-foreground">UTC week · aliases protect learner names</p>{leaderboard.data?.length ? <ol className="mt-3 divide-y divide-border">{leaderboard.data.map((r) => <li key={`${r.rank}-${r.alias}`} className={cn("flex items-center gap-3 py-3 text-sm", r.is_current && "font-semibold text-primary")}><span className="w-7 text-center font-display text-lg">{r.rank}</span><span className="flex-1">{r.alias}{r.is_current && " (you)"}</span><span>{r.challenges} solved</span><span className="w-16 text-right font-semibold">{r.points} pts</span></li>)}</ol> : <p className="mt-4 text-sm text-muted-foreground">No points this week yet. Complete today's Easy challenge to take the first spot.</p>}</Panel><Panel><h2 className="font-semibold">Badges</h2><div className="mt-3 grid gap-3 sm:grid-cols-2">{badges.map((b) => <div key={b.name} className={cn("rounded-xl border border-border p-3", b.earned ? "bg-success/10" : "opacity-55")}><Award className={cn("size-5", b.earned && "text-success")} /><div className="mt-2 font-medium">{b.name}</div><p className="mt-1 text-xs text-muted-foreground">{b.detail}</p></div>)}</div></Panel></div>
    <div className="mt-4 grid gap-4 lg:grid-cols-2"><Panel><h2 className="font-semibold">Monthly report</h2><div className="mt-4 grid grid-cols-3 gap-3 text-center"><div><div className="font-display text-2xl font-bold">{monthly.length}</div><div className="text-xs text-muted-foreground">challenges</div></div><div><div className="font-display text-2xl font-bold">{monthly.reduce((s, h) => s + h.points, 0)}</div><div className="text-xs text-muted-foreground">points</div></div><div><div className="font-display text-2xl font-bold">{new Set(monthly.map((h) => h.challenge_date)).size}</div><div className="text-xs text-muted-foreground">active days</div></div></div></Panel><Panel><h2 className="font-semibold">Submission history</h2>{history.length ? <ul className="mt-2 divide-y divide-border">{history.slice(0, 6).map((h) => <li key={h.id} className="flex items-center justify-between gap-3 py-2.5 text-sm"><Link to="/practice/$slug" params={{ slug: h.problem_slug }} className="truncate hover:text-primary">{problemBySlug(h.problem_slug)?.title ?? h.problem_slug}</Link><span className="shrink-0 text-xs text-muted-foreground">{h.challenge_date.slice(5)} · +{h.points}</span></li>)}</ul> : <p className="mt-3 text-sm text-muted-foreground">Your accepted daily submissions will appear here.</p>}</Panel></div>
  </div>;
}
