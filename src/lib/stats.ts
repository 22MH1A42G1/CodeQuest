import { PROBLEMS } from "@/content";
import type { Difficulty } from "@/content/types";

export interface ActivityRow { activity_date: string; submissions: number; problems_solved: number }
export interface ProgressRow { problem_slug: string; status: string; attempts: number; marked_for_revision: boolean }

const DAY = 86400000;
const iso = (d: Date) => d.toISOString().slice(0, 10);

/** Consecutive active days ending today (or yesterday, so the streak survives until you code today). */
export function computeStreak(activity: ActivityRow[], today = new Date()): number {
  const active = new Set(activity.filter((a) => a.submissions > 0).map((a) => a.activity_date));
  let cursor = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  if (!active.has(iso(cursor))) cursor = new Date(cursor.getTime() - DAY);
  let streak = 0;
  while (active.has(iso(cursor))) {
    streak++;
    cursor = new Date(cursor.getTime() - DAY);
  }
  return streak;
}

export function learningLevel(solved: number): "Beginner" | "Intermediate" | "Advanced" {
  if (solved >= 30) return "Advanced";
  if (solved >= 10) return "Intermediate";
  return "Beginner";
}

export function solvedByDifficulty(progress: ProgressRow[]) {
  const solved = new Set(progress.filter((p) => p.status === "solved").map((p) => p.problem_slug));
  const out: Record<Difficulty, { solved: number; total: number }> = {
    Easy: { solved: 0, total: 0 }, Medium: { solved: 0, total: 0 }, Hard: { solved: 0, total: 0 },
  };
  for (const p of PROBLEMS) {
    out[p.difficulty].total++;
    if (solved.has(p.slug)) out[p.difficulty].solved++;
  }
  return out;
}

export function lastNDays(activity: ActivityRow[], n = 7, today = new Date()) {
  const map = new Map(activity.map((a) => [a.activity_date, a]));
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(today.getTime() - (n - 1 - i) * DAY);
    const key = iso(d);
    const row = map.get(key);
    return {
      date: key,
      label: d.toLocaleDateString("en", { weekday: "short", timeZone: "UTC" }),
      submissions: row?.submissions ?? 0,
      solved: row?.problems_solved ?? 0,
    };
  });
}

/** Next problems: unsolved, easiest first, in curriculum order. */
export function recommend(progress: ProgressRow[], count = 3) {
  const solved = new Set(progress.filter((p) => p.status === "solved").map((p) => p.problem_slug));
  const rank: Record<Difficulty, number> = { Easy: 0, Medium: 1, Hard: 2 };
  return PROBLEMS.filter((p) => !solved.has(p.slug))
    .sort((a, b) => rank[a.difficulty] - rank[b.difficulty] || a.order - b.order)
    .slice(0, count);
}
