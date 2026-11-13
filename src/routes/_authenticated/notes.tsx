import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Bookmark, Brain, Check, Download, FileText, Plus, RotateCcw, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { TOPICS, problemBySlug, topicTitle } from "@/content";
import { progressQuery } from "@/lib/queries";
import { PageHeader, Panel } from "@/components/app/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/_authenticated/notes")({
  head: () => ({ meta: [
    { title: "Notes & Revision – DSA Mastery" },
    { name: "description", content: "Save DSA notes, review code bookmarks, study flashcards and plan revision." },
    { property: "og:title", content: "Notes & Revision – DSA Mastery" },
    { property: "og:description", content: "Your private DSA notebook and spaced-repetition revision center." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: NotesCenter,
});

const blankNote = { id: "", title: "", topic_slug: "none", content: "" };
const blankCard = { front: "", back: "", topic_slug: "none" };

async function currentUserId() {
  const { data } = await supabase.auth.getUser();
  if (!data.user) throw new Error("Not signed in");
  return data.user.id;
}

function NotesCenter() {
  const qc = useQueryClient();
  const progress = useQuery(progressQuery);
  const [search, setSearch] = useState("");
  const [note, setNote] = useState(blankNote);
  const [card, setCard] = useState(blankCard);
  const [revealed, setRevealed] = useState<string | null>(null);

  const notes = useQuery({ queryKey: ["notes"], queryFn: async () => {
    const { data, error } = await supabase.from("personal_notes").select("*").order("updated_at", { ascending: false });
    if (error) throw error; return data;
  } });
  const bookmarks = useQuery({ queryKey: ["bookmarks"], queryFn: async () => {
    const { data, error } = await supabase.from("bookmarks").select("*").order("created_at", { ascending: false });
    if (error) throw error; return data;
  } });
  const cards = useQuery({ queryKey: ["flashcards"], queryFn: async () => {
    const { data, error } = await supabase.from("flashcards").select("*").order("next_review_at").order("created_at");
    if (error) throw error; return data;
  } });
  const reminders = useQuery({ queryKey: ["reminders"], queryFn: async () => {
    const { data, error } = await supabase.from("revision_reminders").select("*").order("due_on");
    if (error) throw error; return data;
  } });

  const refresh = () => {
    for (const key of ["notes", "bookmarks", "flashcards", "reminders"]) qc.invalidateQueries({ queryKey: [key] });
  };
  const saveNote = useMutation({ mutationFn: async () => {
    const userId = await currentUserId();
    if (!note.title.trim() || !note.content.trim()) throw new Error("Add a title and note content");
    const payload = { user_id: userId, title: note.title.trim(), content: note.content.trim(), topic_slug: note.topic_slug === "none" ? null : note.topic_slug, updated_at: new Date().toISOString() };
    const { error } = note.id ? await supabase.from("personal_notes").update(payload).eq("id", note.id) : await supabase.from("personal_notes").insert(payload);
    if (error) throw error;
  }, onSuccess: () => { toast.success("Note saved"); setNote(blankNote); refresh(); }, onError: (e) => toast.error(e.message) });
  const deleteNote = useMutation({ mutationFn: async (id: string) => { const { error } = await supabase.from("personal_notes").delete().eq("id", id); if (error) throw error; }, onSuccess: () => { toast.success("Note deleted"); refresh(); }, onError: (e) => toast.error(e.message) });
  const saveCard = useMutation({ mutationFn: async () => {
    const userId = await currentUserId();
    if (!card.front.trim() || !card.back.trim()) throw new Error("Add both sides of the flashcard");
    const { error } = await supabase.from("flashcards").insert({ user_id: userId, front: card.front.trim(), back: card.back.trim(), topic_slug: card.topic_slug === "none" ? null : card.topic_slug });
    if (error) throw error;
  }, onSuccess: () => { toast.success("Flashcard created"); setCard(blankCard); refresh(); }, onError: (e) => toast.error(e.message) });
  const reviewCard = useMutation({ mutationFn: async ({ id, rating }: { id: string; rating: "again" | "good" | "easy" }) => {
    const current = cards.data?.find((c) => c.id === id); if (!current) throw new Error("Card not found");
    const interval = rating === "again" ? 1 : rating === "good" ? Math.min(365, Math.max(2, current.interval_days * 2)) : Math.min(365, Math.max(4, current.interval_days * 3));
    const due = new Date(); due.setUTCDate(due.getUTCDate() + interval);
    const { error } = await supabase.from("flashcards").update({ interval_days: interval, next_review_at: due.toISOString().slice(0, 10), review_count: current.review_count + 1, updated_at: new Date().toISOString() }).eq("id", id);
    if (error) throw error;
  }, onSuccess: () => { setRevealed(null); refresh(); }, onError: (e) => toast.error(e.message) });
  const deleteCard = useMutation({ mutationFn: async (id: string) => { const { error } = await supabase.from("flashcards").delete().eq("id", id); if (error) throw error; }, onSuccess: refresh, onError: (e) => toast.error(e.message) });
  const completeReminder = useMutation({ mutationFn: async ({ id, done }: { id: string; done: boolean }) => { const { error } = await supabase.from("revision_reminders").update({ completed_at: done ? null : new Date().toISOString() }).eq("id", id); if (error) throw error; }, onSuccess: refresh, onError: (e) => toast.error(e.message) });
  const deleteBookmark = useMutation({ mutationFn: async (id: string) => { const { error } = await supabase.from("bookmarks").delete().eq("id", id); if (error) throw error; }, onSuccess: refresh, onError: (e) => toast.error(e.message) });

  const filteredNotes = useMemo(() => (notes.data ?? []).filter((n) => `${n.title} ${n.content} ${topicTitle(n.topic_slug ?? "")}`.toLowerCase().includes(search.toLowerCase())), [notes.data, search]);
  const today = new Date().toISOString().slice(0, 10);
  const dueCards = (cards.data ?? []).filter((c) => c.next_review_at <= today);
  const revision = (progress.data ?? []).filter((p) => p.marked_for_revision);
  const loading = notes.isLoading || cards.isLoading || reminders.isLoading || bookmarks.isLoading;

  return <div className="mx-auto max-w-6xl p-4 sm:p-8">
    <div className="notes-screen">
      <PageHeader title="Notes & revision" subtitle="Your private notebook, saved code and spaced-repetition deck." action={<Button variant="outline" onClick={() => window.print()} disabled={!notes.data?.length}><Download /> Export notes as PDF</Button>} />
      <p className="no-print mb-4 text-xs text-muted-foreground">In the print dialog, choose “Save as PDF” to download all your notes.</p>
      <Tabs defaultValue="notes">
        <TabsList className="no-print mb-4 flex w-fit max-w-full flex-wrap"><TabsTrigger value="notes"><FileText /> Notes</TabsTrigger><TabsTrigger value="cards"><Brain /> Flashcards {dueCards.length > 0 && <span className="rounded-full bg-primary px-1.5 text-xs text-primary-foreground">{dueCards.length}</span>}</TabsTrigger><TabsTrigger value="revision"><RotateCcw /> Revision {revision.length > 0 && `(${revision.length})`}</TabsTrigger></TabsList>
        <TabsContent value="notes">
          <div className="grid gap-4 lg:grid-cols-3">
            <Panel className="lg:col-span-1"><h2 className="font-semibold">{note.id ? "Edit note" : "New note"}</h2><form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); saveNote.mutate(); }}><div><Label htmlFor="note-title">Title</Label><Input id="note-title" value={note.title} maxLength={120} onChange={(e) => setNote({ ...note, title: e.target.value })} placeholder="e.g. Sliding window checklist" /></div><div><Label>Topic</Label><Select value={note.topic_slug} onValueChange={(v) => setNote({ ...note, topic_slug: v })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="none">General</SelectItem>{TOPICS.map((t) => <SelectItem key={t.slug} value={t.slug}>{t.title}</SelectItem>)}</SelectContent></Select></div><div><Label htmlFor="note-body">Note</Label><Textarea id="note-body" value={note.content} maxLength={20000} onChange={(e) => setNote({ ...note, content: e.target.value })} rows={10} placeholder="Write the idea, complexity and mistakes to remember…" /></div><div className="flex gap-2"><Button type="submit" disabled={saveNote.isPending}>{note.id ? "Save changes" : "Save note"}</Button>{note.id && <Button type="button" variant="ghost" onClick={() => setNote(blankNote)}>Cancel</Button>}</div></form></Panel>
            <div className="lg:col-span-2"><div className="relative mb-3"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search your notes" className="pl-9" /></div>{notes.isLoading ? <Skeleton className="h-64" /> : filteredNotes.length === 0 ? <Panel><p className="text-sm text-muted-foreground">{notes.data?.length ? "No notes match your search." : "No notes yet. Write your first short note to start your revision library."}</p></Panel> : <div className="space-y-3">{filteredNotes.map((n) => <Panel key={n.id}><div className="flex items-start justify-between gap-3"><button className="min-w-0 text-left" onClick={() => setNote({ id: n.id, title: n.title, topic_slug: n.topic_slug ?? "none", content: n.content })}><h3 className="font-semibold hover:text-primary">{n.title}</h3><p className="mt-1 text-xs text-muted-foreground">{n.topic_slug ? topicTitle(n.topic_slug) : "General"} · Updated {new Date(n.updated_at).toLocaleDateString()}</p></button><Button variant="ghost" size="icon" aria-label={`Delete ${n.title}`} onClick={() => { if (confirm("Delete this note?")) deleteNote.mutate(n.id); }}><Trash2 /></Button></div><p className="mt-3 line-clamp-4 whitespace-pre-wrap text-sm text-muted-foreground">{n.content}</p></Panel>)}</div>}</div>
          </div>
        </TabsContent>
        <TabsContent value="cards"><div className="grid gap-4 lg:grid-cols-3"><Panel><h2 className="font-semibold">Create flashcard</h2><form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); saveCard.mutate(); }}><Select value={card.topic_slug} onValueChange={(v) => setCard({ ...card, topic_slug: v })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="none">General</SelectItem>{TOPICS.map((t) => <SelectItem key={t.slug} value={t.slug}>{t.title}</SelectItem>)}</SelectContent></Select><Textarea value={card.front} onChange={(e) => setCard({ ...card, front: e.target.value })} placeholder="Front: question or prompt" maxLength={1000} rows={3} /><Textarea value={card.back} onChange={(e) => setCard({ ...card, back: e.target.value })} placeholder="Back: concise answer" maxLength={4000} rows={5} /><Button disabled={saveCard.isPending}><Plus /> Add flashcard</Button></form></Panel><div className="space-y-3 lg:col-span-2"><h2 className="font-semibold">Due for review · {dueCards.length}</h2>{loading ? <Skeleton className="h-48" /> : dueCards.length === 0 ? <Panel><p className="text-sm text-muted-foreground">{cards.data?.length ? "Nothing due today. Your next cards are scheduled for later." : "Create a flashcard to begin spaced repetition."}</p></Panel> : dueCards.map((c) => <Panel key={c.id}><div className="flex items-start justify-between gap-3"><div><p className="text-xs text-muted-foreground">{c.topic_slug ? topicTitle(c.topic_slug) : "General"} · {c.review_count} reviews</p><h3 className="mt-2 font-medium">{c.front}</h3></div><Button variant="ghost" size="icon" aria-label="Delete flashcard" onClick={() => deleteCard.mutate(c.id)}><Trash2 /></Button></div>{revealed === c.id ? <><p className="mt-4 whitespace-pre-wrap rounded-lg bg-muted p-3 text-sm">{c.back}</p><div className="mt-3 flex flex-wrap gap-2"><Button size="sm" variant="outline" onClick={() => reviewCard.mutate({ id: c.id, rating: "again" })}>Again · 1d</Button><Button size="sm" variant="secondary" onClick={() => reviewCard.mutate({ id: c.id, rating: "good" })}>Good · {Math.max(2, c.interval_days * 2)}d</Button><Button size="sm" onClick={() => reviewCard.mutate({ id: c.id, rating: "easy" })}>Easy · {Math.max(4, c.interval_days * 3)}d</Button></div></> : <Button className="mt-4" variant="outline" size="sm" onClick={() => setRevealed(c.id)}>Show answer</Button>}</Panel>)}</div></div></TabsContent>
        <TabsContent value="revision"><div className="grid gap-4 lg:grid-cols-2"><Panel><h2 className="font-semibold">Problems marked for revision</h2>{revision.length ? <ul className="mt-3 divide-y divide-border">{revision.map((p) => { const problem = problemBySlug(p.problem_slug); return <li key={p.problem_slug} className="flex items-center justify-between gap-3 py-3"><Link to="/practice/$slug" params={{ slug: p.problem_slug }} className="font-medium hover:text-primary">{problem?.title ?? p.problem_slug}</Link><span className="text-xs text-muted-foreground">{p.status === "solved" ? "Solved" : `${p.attempts} attempts`}</span></li>; })}</ul> : <p className="mt-3 text-sm text-muted-foreground">Use “Revise later” on any problem to add it here with a reminder.</p>}</Panel><Panel><h2 className="font-semibold">Revision reminders</h2>{reminders.data?.length ? <ul className="mt-3 divide-y divide-border">{reminders.data.map((r) => <li key={r.id} className="flex items-center justify-between gap-3 py-3 text-sm"><div><div className={r.completed_at ? "line-through opacity-60" : "font-medium"}>{r.problem_slug ? problemBySlug(r.problem_slug)?.title : topicTitle(r.topic_slug ?? "")}</div><div className="text-xs text-muted-foreground">Due {new Date(`${r.due_on}T00:00:00Z`).toLocaleDateString()}</div></div><Button size="icon" variant="ghost" aria-label={r.completed_at ? "Mark reminder due" : "Complete reminder"} onClick={() => completeReminder.mutate({ id: r.id, done: !!r.completed_at })}><Check className={r.completed_at ? "text-success" : ""} /></Button></li>)}</ul> : <p className="mt-3 text-sm text-muted-foreground">No reminders scheduled.</p>}</Panel><Panel className="lg:col-span-2"><h2 className="flex items-center gap-2 font-semibold"><Bookmark className="size-4" /> Bookmarked code</h2>{bookmarks.data?.length ? <div className="mt-3 grid gap-3 md:grid-cols-2">{bookmarks.data.map((b) => <div key={b.id} className="rounded-xl border border-border p-3"><div className="flex items-center justify-between gap-2"><div className="font-medium">{b.title}</div><Button variant="ghost" size="icon" aria-label="Delete bookmark" onClick={() => deleteBookmark.mutate(b.id)}><Trash2 /></Button></div>{b.problem_slug && <Link to="/practice/$slug" params={{ slug: b.problem_slug }} className="text-xs text-primary hover:underline">Open problem</Link>}{b.code_snippet && <pre className="mt-2 max-h-48 overflow-auto rounded-lg bg-sidebar p-3 text-xs">{b.code_snippet}</pre>}</div>)}</div> : <p className="mt-3 text-sm text-muted-foreground">Bookmark a solution from the practice editor to keep it here.</p>}</Panel></div></TabsContent>
      </Tabs>
    </div>
    <article className="print-notes"><h1>DSA Mastery — Notes & Revision</h1><p>Personal study notes</p>{(notes.data ?? []).map((n) => <section className="print-note" key={n.id}><h2>{n.title}</h2><p>{n.topic_slug ? topicTitle(n.topic_slug) : "General"}</p><div>{n.content}</div></section>)}</article>
  </div>;
}
