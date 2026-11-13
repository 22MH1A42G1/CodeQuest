import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const recordStudyMinute = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ minutes: z.literal(1) }).parse(data))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const today = new Date().toISOString().slice(0, 10);
    const { data: row, error } = await supabaseAdmin
      .from("user_activity").select("submissions,problems_solved,minutes")
      .eq("user_id", context.userId).eq("activity_date", today).maybeSingle();
    if (error) throw error;
    const { error: saveError } = await supabaseAdmin.from("user_activity").upsert({
      user_id: context.userId,
      activity_date: today,
      submissions: row?.submissions ?? 0,
      problems_solved: row?.problems_solved ?? 0,
      minutes: (row?.minutes ?? 0) + data.minutes,
    });
    if (saveError) throw saveError;
    return { recorded: true };
  });
