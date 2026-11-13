import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Code2, Github, Globe, LineChart, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/app/Logo";
import { PROBLEMS, TOPICS } from "@/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DSA Mastery – Learn DSA in Python & Ace Coding Interviews" },
      { name: "description", content: `${TOPICS.length} DSA topics, ${PROBLEMS.length} Python coding problems with real test cases, and progress tracking for interview prep.` },
      { property: "og:title", content: "DSA Mastery – Learn DSA in Python & Ace Coding Interviews" },
      { property: "og:description", content: "Structured DSA lessons, a real Python coding arena and progress analytics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  { icon: BookOpen, title: `${TOPICS.length} structured topics`, text: "From Python basics to dynamic programming — notes, diagrams, dry runs and quizzes." },
  { icon: Code2, title: "Real coding arena", text: "Write Python in a full editor and run it against sample and hidden test cases." },
  { icon: LineChart, title: "Progress that's yours", text: "Streaks, solved counts and weekly activity, computed from what you actually do." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Logo />
        <div className="flex gap-2">
          <Button variant="ghost" asChild><Link to="/auth">Sign in</Link></Button>
          <Button variant="hero" asChild><Link to="/auth">Start free</Link></Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 grid-dots opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-2 lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Terminal className="size-3.5" /> Python 3 · Interview ready
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-6xl">
              Master DSA. <br /><span className="text-gradient">One problem a day.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Learn data structures and algorithms in plain English, then prove it by writing real Python against real test cases.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild><Link to="/auth">Start learning <ArrowRight /></Link></Button>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div><div className="font-display text-2xl font-bold">{TOPICS.length}</div><div className="text-muted-foreground">Topics</div></div>
              <div><div className="font-display text-2xl font-bold">{PROBLEMS.length}</div><div className="text-muted-foreground">Problems</div></div>
              <div><div className="font-display text-2xl font-bold">3</div><div className="text-muted-foreground">Levels</div></div>
            </div>
          </div>
          <div className="min-w-0 rounded-2xl border border-border bg-card shadow-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-hard/70" /><span className="size-3 rounded-full bg-medium/70" /><span className="size-3 rounded-full bg-easy/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">two_sum.py</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed"><code>{`class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, x in enumerate(nums):
            if target - x in seen:
                return [seen[target - x], i]
            seen[x] = i`}</code></pre>
            <div className="border-t border-border px-5 py-3 font-mono text-xs text-success">✓ Accepted · 7 / 7 test cases passed</div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <f.icon className="size-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>
      <footer className="border-t border-border py-8 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-medium text-foreground">© 2026 Aditya Indana. All rights reserved.</p>
            <p className="mt-1 text-xs">Practice problems are original and community-style, not official company questions.</p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/22MH1A42G1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://indana-aditya.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Globe className="size-4" /> Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
