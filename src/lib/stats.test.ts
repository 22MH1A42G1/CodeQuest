import { describe, expect, it } from "vitest";
import { computeStreak, learningLevel } from "./stats";
import { outputsMatch } from "./judge";

const day = (d: string, submissions = 1) => ({ activity_date: d, submissions, problems_solved: 0 });

describe("streak", () => {
  it("counts consecutive days ending today", () => {
    expect(computeStreak([day("2026-11-13"), day("2026-11-12"), day("2026-11-10")], new Date("2026-11-13T10:00:00Z"))).toBe(2);
  });
  it("keeps yesterday's streak alive until today ends", () => {
    expect(computeStreak([day("2026-11-12"), day("2026-11-11")], new Date("2026-11-13T10:00:00Z"))).toBe(2);
  });
  it("is 0 after a missed day", () => {
    expect(computeStreak([day("2026-11-11")], new Date("2026-11-13T10:00:00Z"))).toBe(0);
  });
});

describe("level", () => {
  it("uses 10 and 30 solved as thresholds", () => {
    expect(learningLevel(9)).toBe("Beginner");
    expect(learningLevel(10)).toBe("Intermediate");
    expect(learningLevel(30)).toBe("Advanced");
  });
});

describe("judge comparison", () => {
  it("accepts any order for unordered answers but not for exact", () => {
    expect(outputsMatch([1, 0], [0, 1], "sorted")).toBe(true);
    expect(outputsMatch([1, 0], [0, 1], "exact")).toBe(false);
    expect(outputsMatch([["b", "a"], ["c"]], [["c"], ["a", "b"]], "nested_unordered")).toBe(true);
  });
});
