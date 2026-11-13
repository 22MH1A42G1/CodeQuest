import { describe, expect, it } from "vitest";
import { accuracyPercentage, averageAttempts, difficultySolved, topicPerformance } from "./analytics";

const submissions = [
  { problem_slug: "two-sum", status: "Wrong Answer", kind: "submit", created_at: "2026-01-01" },
  { problem_slug: "two-sum", status: "Accepted", kind: "submit", created_at: "2026-01-02" },
  { problem_slug: "two-sum", status: "Sample Tests Passed", kind: "run", created_at: "2026-01-02" },
];
const progress = [{ problem_slug: "two-sum", status: "solved", attempts: 2 }];

describe("performance analytics", () => {
  it("counts only submit attempts in accuracy", () => {
    expect(accuracyPercentage(submissions)).toBe(50);
  });
  it("uses real attempts for the accepted-solution average", () => {
    expect(averageAttempts(progress)).toBe(2);
  });
  it("counts a solved problem in its actual difficulty and topic", () => {
    expect(difficultySolved(progress).Easy).toBe(1);
    const arrays = topicPerformance(submissions, progress).find((t) => t.slug === "arrays");
    expect(arrays).toMatchObject({ solved: 1, submissions: 2, acceptedSubmissions: 1, accuracy: 50 });
  });
});
