import { PROBLEMS, problemBySlug, topicTitle } from "@/content";
import type { Difficulty } from "@/content/types";

export interface AnalyticsSubmission {
  problem_slug: string;
  status: string;
  kind: string;
  created_at: string;
}
export interface AnalyticsProgress {
  problem_slug: string;
  status: string;
  attempts: number;
}

export interface TopicPerformance {
  slug: string;
  title: string;
  solved: number;
  attempted: number;
  submissions: number;
  acceptedSubmissions: number;
  accuracy: number;
}

export function accuracyPercentage(submissions: AnalyticsSubmission[]): number {
  const submits = submissions.filter((s) => s.kind === "submit");
  if (!submits.length) return 0;
  return Math.round((submits.filter((s) => s.status === "Accepted").length / submits.length) * 100);
}

export function averageAttempts(progress: AnalyticsProgress[]): number {
  const solved = progress.filter((p) => p.status === "solved");
  if (!solved.length) return 0;
  return Math.round((solved.reduce((sum, p) => sum + p.attempts, 0) / solved.length) * 10) / 10;
}

export function topicPerformance(submissions: AnalyticsSubmission[], progress: AnalyticsProgress[]): TopicPerformance[] {
  const solved = new Set(progress.filter((p) => p.status === "solved").map((p) => p.problem_slug));
  const attempted = new Set(progress.map((p) => p.problem_slug));
  const slugs = new Set(PROBLEMS.map((p) => p.topic));
  return [...slugs].map((slug) => {
    const problems = PROBLEMS.filter((p) => p.topic === slug);
    const problemSlugs = new Set(problems.map((p) => p.slug));
    const subs = submissions.filter((s) => s.kind === "submit" && problemSlugs.has(s.problem_slug));
    const acceptedSubmissions = subs.filter((s) => s.status === "Accepted").length;
    return {
      slug,
      title: topicTitle(slug),
      solved: problems.filter((p) => solved.has(p.slug)).length,
      attempted: problems.filter((p) => attempted.has(p.slug)).length,
      submissions: subs.length,
      acceptedSubmissions,
      accuracy: subs.length ? Math.round((acceptedSubmissions / subs.length) * 100) : 0,
    };
  });
}

export function strongestAndWeakest(topics: TopicPerformance[]) {
  const practiced = topics.filter((t) => t.submissions > 0 || t.solved > 0);
  const strongest = [...practiced].sort((a, b) => b.solved - a.solved || b.accuracy - a.accuracy)[0] ?? null;
  const weakest = [...practiced].sort((a, b) => (a.solved - b.solved) || (a.accuracy - b.accuracy))[0] ?? null;
  return { strongest, weakest };
}

export function difficultySolved(progress: AnalyticsProgress[]): Record<Difficulty, number> {
  const solved = new Set(progress.filter((p) => p.status === "solved").map((p) => p.problem_slug));
  return PROBLEMS.reduce<Record<Difficulty, number>>((out, p) => {
    if (solved.has(p.slug)) out[p.difficulty]++;
    return out;
  }, { Easy: 0, Medium: 0, Hard: 0 });
}

export function recommendationFor(slug: string) {
  return PROBLEMS.find((p) => p.topic === slug && p.difficulty === "Easy") ?? problemBySlug(PROBLEMS.find((p) => p.topic === slug)?.slug ?? "");
}
