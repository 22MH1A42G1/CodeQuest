import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, CheckCircle2, Code2, Database, Play, Sigma, Terminal } from "lucide-react";
import { COMPANY_GUIDES, type PracticeQuestion } from "@/content/companies";
import { problemBySlug } from "@/content";
import { PageHeader, Panel } from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/company-prep")({
  head: () => ({ meta: [
    { title: "Company Preparation – DSA Mastery" },
    { name: "description", content: "Company-focused coding patterns, Python, SQL, aptitude and mock practice." },
    { property: "og:title", content: "Company Preparation – DSA Mastery" },
    { property: "og:description", content: "Community-style interview practice across ten target companies." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: CompanyPrep,
});

function Answers({ items }: { items: PracticeQuestion[] }) {
  return <div className="space-y-2">{items.map((item) => <details key={item.question} className="rounded-xl border border-border bg-sidebar p-4"><summary className="cursor-pointer text-sm font-medium">{item.question}</summary><pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted-foreground">{item.answer}</pre></details>)}</div>;
}

function CompanyPrep() {
  const [selected, setSelected] = useState(COMPANY_GUIDES[0]!.slug);
  const guide = COMPANY_GUIDES.find((g) => g.slug === selected)!;
  return <div className="mx-auto max-w-6xl p-4 sm:p-8">
    <PageHeader title="Company preparation" subtitle="Focused practice paths for ten common career goals." />
    <div className="mb-5 flex gap-2 overflow-x-auto pb-2">{COMPANY_GUIDES.map((g) => <button key={g.slug} onClick={() => setSelected(g.slug)} className={cn("shrink-0 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors", selected === g.slug ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:text-foreground")}><Building2 className="mr-2 inline size-4" />{g.name}</button>)}</div>
    <Panel className="mb-4 bg-hero"><div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="text-2xl font-bold">{guide.name} practice path</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{guide.overview}</p></div><span className="rounded-full border border-warning/30 bg-warning/10 px-3 py-1.5 text-xs text-warning">{guide.sourceLabel}</span></div></Panel>
    <Tabs defaultValue="patterns">
      <TabsList className="mb-4 flex w-fit max-w-full flex-wrap"><TabsTrigger value="patterns"><Code2 /> Patterns</TabsTrigger><TabsTrigger value="technical">Technical</TabsTrigger><TabsTrigger value="aptitude"><Sigma /> Aptitude</TabsTrigger><TabsTrigger value="python"><Terminal /> Python</TabsTrigger><TabsTrigger value="sql"><Database /> SQL</TabsTrigger><TabsTrigger value="mock"><Play /> Mock test</TabsTrigger></TabsList>
      <TabsContent value="patterns"><Panel><h3 className="font-semibold">Coding patterns to revise</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{guide.codingPatterns.map((p) => <div key={p} className="flex items-center gap-3 rounded-xl border border-border p-4 text-sm"><CheckCircle2 className="size-4 shrink-0 text-primary" />{p}</div>)}</div></Panel></TabsContent>
      <TabsContent value="technical"><Panel><h3 className="font-semibold">Technical discussion prompts</h3><ol className="mt-4 space-y-3">{guide.technicalQuestions.map((q, i) => <li key={q} className="flex gap-3 rounded-xl border border-border p-4 text-sm"><span className="font-display font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>{q}</li>)}</ol><p className="mt-4 text-xs text-muted-foreground">Answer out loud, then verify the idea in the related lesson. These are original practice prompts.</p></Panel></TabsContent>
      <TabsContent value="aptitude"><Panel><h3 className="mb-4 font-semibold">Aptitude practice</h3><Answers items={guide.aptitudeQuestions} /></Panel></TabsContent>
      <TabsContent value="python"><Panel><h3 className="mb-4 font-semibold">Python interview practice</h3><Answers items={guide.pythonQuestions} /></Panel></TabsContent>
      <TabsContent value="sql"><Panel><h3 className="mb-4 font-semibold">SQL interview practice</h3><Answers items={guide.sqlQuestions} /></Panel></TabsContent>
      <TabsContent value="mock"><Panel><h3 className="font-semibold">Three-problem mock coding set</h3><p className="mt-1 text-sm text-muted-foreground">Complete these in order without hints for a self-timed practice round.</p><div className="mt-4 space-y-3">{guide.mockTestProblemSlugs.map((slug, i) => { const p = problemBySlug(slug); if (!p) return null; return <div key={slug} className="flex flex-wrap items-center gap-3 rounded-xl border border-border p-4"><span className="font-display text-xl font-bold text-muted-foreground">{i + 1}</span><div className="min-w-0 flex-1"><div className="font-medium">{p.title}</div><div className="text-xs text-muted-foreground">{p.difficulty} · {p.tags.join(", ")}</div></div><Button size="sm" variant="outline" asChild><Link to="/practice/$slug" params={{ slug }}><Play /> Solve</Link></Button></div>; })}</div></Panel></TabsContent>
    </Tabs>
  </div>;
}
