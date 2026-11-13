import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { profileQuery } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader, Panel } from "@/components/app/PageHeader";

export const Route = createFileRoute("/_authenticated/settings")({
  head: () => ({ meta: [
    { title: "Settings – DSA Mastery" }, { name: "description", content: "Update your profile and daily goal." },
    { property: "og:title", content: "Settings – DSA Mastery" }, { property: "og:description", content: "Manage your DSA learning profile and daily goal." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Settings,
});

const schema = z.object({
  display_name: z.string().trim().min(1, "Name is required").max(60),
  target_role: z.string().trim().max(80),
  daily_goal: z.number().int().min(1, "Goal must be at least 1").max(20, "Goal can be at most 20"),
});

function Settings() {
  const qc = useQueryClient();
  const profile = useQuery(profileQuery);
  const [form, setForm] = useState({ display_name: "", target_role: "", daily_goal: 2 });
  useEffect(() => {
    if (profile.data) setForm({ display_name: profile.data.display_name ?? "", target_role: profile.data.target_role ?? "", daily_goal: profile.data.daily_goal ?? 2 });
  }, [profile.data]);

  const save = useMutation({
    mutationFn: async () => {
      const parsed = schema.safeParse(form);
      if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? "Invalid input");
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) throw new Error("Not signed in");
      const { error } = await supabase.from("profiles").upsert({ id: u.user.id, ...parsed.data, updated_at: new Date().toISOString() });
      if (error) throw error;
    },
    onSuccess: () => { toast.success("Profile saved"); qc.invalidateQueries({ queryKey: profileQuery.queryKey }); },
    onError: (e) => toast.error(e.message),
  });

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-8">
      <PageHeader title="Settings" subtitle={profile.data?.email} />
      <Panel>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); save.mutate(); }}>
          <div className="space-y-1.5"><Label htmlFor="n">Display name</Label><Input id="n" value={form.display_name} maxLength={60} onChange={(e) => setForm({ ...form, display_name: e.target.value })} /></div>
          <div className="space-y-1.5"><Label htmlFor="r">Target role</Label><Input id="r" placeholder="e.g. Software Engineer Intern" value={form.target_role} maxLength={80} onChange={(e) => setForm({ ...form, target_role: e.target.value })} /></div>
          <div className="space-y-1.5"><Label htmlFor="g">Daily goal (problems solved per day)</Label><Input id="g" type="number" min={1} max={20} value={form.daily_goal} onChange={(e) => setForm({ ...form, daily_goal: Number(e.target.value) })} /></div>
          <Button variant="hero" disabled={save.isPending || profile.isLoading}>Save changes</Button>
        </form>
      </Panel>
    </div>
  );
}
