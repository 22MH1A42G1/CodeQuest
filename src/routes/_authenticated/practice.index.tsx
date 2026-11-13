import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { progressQuery } from "@/lib/queries";
import { recommend } from "@/lib/stats";
import { PROBLEMS } from "@/content";

export const Route = createFileRoute("/_authenticated/practice/")({
  head: () => ({ meta: [
    { title: "Coding Practice – DSA Mastery" }, { name: "description", content: "Jump into your next recommended problem." },
    { property: "og:title", content: "Coding Practice – DSA Mastery" }, { property: "og:description", content: "Continue your personalized Python coding practice." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: PracticeIndex,
});

function PracticeIndex() {
  const prog = useQuery(progressQuery);
  if (prog.isLoading) return <div className="p-8 text-sm text-muted-foreground">Finding your next problem…</div>;
  const next = recommend(prog.data ?? [], 1)[0] ?? PROBLEMS[0]!;
  return <Navigate to="/practice/$slug" params={{ slug: next.slug }} replace />;
}
