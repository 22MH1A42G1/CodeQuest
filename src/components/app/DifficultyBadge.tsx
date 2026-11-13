import { cn } from "@/lib/utils";
import type { Difficulty } from "@/content/types";

const styles: Record<string, string> = {
  Easy: "bg-easy/15 text-easy border-easy/30",
  Medium: "bg-medium/15 text-medium border-medium/30",
  Hard: "bg-hard/15 text-hard border-hard/30",
  Beginner: "bg-easy/15 text-easy border-easy/30",
  Intermediate: "bg-medium/15 text-medium border-medium/30",
  Advanced: "bg-hard/15 text-hard border-hard/30",
};

export function DifficultyBadge({ level, className }: { level: Difficulty | string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold", styles[level], className)}>
      {level}
    </span>
  );
}
