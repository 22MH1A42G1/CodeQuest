import { describe, expect, it } from "vitest";
import { DAILY_POINTS, getDailyChallenges } from "./daily";
import { PROBLEMS } from "@/content";

describe("daily challenges", () => {
  it("is deterministic for the same UTC date", () => {
    const date = new Date("2026-11-13T12:00:00Z");
    expect(getDailyChallenges(date).map((c) => c.problem.slug)).toEqual(getDailyChallenges(date).map((c) => c.problem.slug));
  });
  it("offers Easy, Medium and optional Hard with fixed points", () => {
    const challenges = getDailyChallenges(new Date("2026-11-13T12:00:00Z"));
    expect(challenges.map((c) => c.difficulty)).toEqual(["Easy", "Medium", "Hard"]);
    expect(challenges.map((c) => c.points)).toEqual([DAILY_POINTS.Easy, DAILY_POINTS.Medium, DAILY_POINTS.Hard]);
    expect(challenges[2]?.optional).toBe(true);
    expect(challenges.every((c) => PROBLEMS.some((p) => p.slug === c.problem.slug))).toBe(true);
  });
});
