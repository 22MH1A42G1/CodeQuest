import { PROBLEMS } from "@/content";
import type { Difficulty, Problem } from "@/content/types";

export interface DailyChallenge {
  difficulty: Difficulty;
  problem: Problem;
  points: number;
  optional: boolean;
}

export const DAILY_POINTS: Record<Difficulty, number> = { Easy: 10, Medium: 20, Hard: 35 };

function dateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function hash(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getDailyChallenges(date = new Date(), catalog: Problem[] = PROBLEMS): DailyChallenge[] {
  const key = dateKey(date);
  return (["Easy", "Medium", "Hard"] as const).map((difficulty) => {
    const pool = catalog.filter((p) => p.difficulty === difficulty);
    if (!pool.length) throw new Error(`No ${difficulty} problems are available`);
    const problem = pool[hash(`${key}:${difficulty}`) % pool.length]!;
    return { difficulty, problem, points: DAILY_POINTS[difficulty], optional: difficulty === "Hard" };
  });
}

export function challengeDate(date = new Date()): string {
  return dateKey(date);
}
