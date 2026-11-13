import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

async function uid() {
  const { data } = await supabase.auth.getUser();
  if (!data.user) throw new Error("Not signed in");
  return data.user;
}

export const userQuery = queryOptions({ queryKey: ["user"], queryFn: uid });

export const profileQuery = queryOptions({
  queryKey: ["profile"],
  queryFn: async () => {
    const user = await uid();
    const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
    if (error) throw error;
    return { ...data, email: user.email ?? "" };
  },
});

export const progressQuery = queryOptions({
  queryKey: ["progress"],
  queryFn: async () => {
    const { data, error } = await supabase.from("user_progress").select("problem_slug,status,attempts,marked_for_revision,solved_at");
    if (error) throw error;
    return data;
  },
});

export const activityQuery = queryOptions({
  queryKey: ["activity"],
  queryFn: async () => {
    const since = new Date(Date.now() - 120 * 86400000).toISOString().slice(0, 10);
    const { data, error } = await supabase.from("user_activity").select("activity_date,submissions,problems_solved").gte("activity_date", since);
    if (error) throw error;
    return data;
  },
});

export const recentSubmissionsQuery = queryOptions({
  queryKey: ["submissions", "recent"],
  queryFn: async () => {
    const { data, error } = await supabase
      .from("submissions").select("id,problem_slug,status,kind,passed,total,runtime_ms,created_at")
      .eq("kind", "submit").order("created_at", { ascending: false }).limit(8);
    if (error) throw error;
    return data;
  },
});

export const problemSubmissionsQuery = (slug: string) =>
  queryOptions({
    queryKey: ["submissions", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("submissions").select("id,status,passed,total,runtime_ms,memory_kb,created_at,code")
        .eq("problem_slug", slug).eq("kind", "submit").order("created_at", { ascending: false }).limit(20);
      if (error) throw error;
      return data;
    },
  });

export const topicProgressQuery = queryOptions({
  queryKey: ["topic-progress"],
  queryFn: async () => {
    const { data, error } = await supabase.from("topic_progress").select("topic_slug,completed,quiz_score");
    if (error) throw error;
    return data;
  },
});
