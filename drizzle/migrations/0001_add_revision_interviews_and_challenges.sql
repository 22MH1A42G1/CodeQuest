CREATE TABLE public.flashcards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  topic_slug text REFERENCES public.dsa_topics(slug) ON DELETE SET NULL,
  front text NOT NULL,
  back text NOT NULL,
  interval_days int NOT NULL DEFAULT 1 CHECK (interval_days BETWEEN 1 AND 365),
  review_count int NOT NULL DEFAULT 0 CHECK (review_count >= 0),
  next_review_at date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ON public.flashcards(user_id, next_review_at);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.flashcards TO authenticated;
GRANT ALL ON public.flashcards TO service_role;
ALTER TABLE public.flashcards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own flashcards" ON public.flashcards FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.revision_reminders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  problem_slug text REFERENCES public.coding_problems(slug) ON DELETE CASCADE,
  topic_slug text REFERENCES public.dsa_topics(slug) ON DELETE CASCADE,
  due_on date NOT NULL,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (problem_slug IS NOT NULL OR topic_slug IS NOT NULL)
);
CREATE INDEX ON public.revision_reminders(user_id, due_on);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.revision_reminders TO authenticated;
GRANT ALL ON public.revision_reminders TO service_role;
ALTER TABLE public.revision_reminders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own revision reminders" ON public.revision_reminders FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.mock_interviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  category text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('Beginner','Intermediate','Advanced')),
  mode text NOT NULL CHECK (mode IN ('Standard','Timed Coding')),
  target_company text,
  status text NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress','completed','failed')),
  score int CHECK (score BETWEEN 0 AND 100),
  feedback text,
  question_count int NOT NULL DEFAULT 0 CHECK (question_count BETWEEN 0 AND 20),
  transcript jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);
CREATE INDEX ON public.mock_interviews(user_id, created_at DESC);
GRANT SELECT ON public.mock_interviews TO authenticated;
GRANT ALL ON public.mock_interviews TO service_role;
ALTER TABLE public.mock_interviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own mock interviews read" ON public.mock_interviews FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.daily_challenge_completions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  challenge_date date NOT NULL,
  problem_slug text NOT NULL REFERENCES public.coding_problems(slug) ON DELETE CASCADE,
  points int NOT NULL CHECK (points BETWEEN 0 AND 100),
  completed_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, challenge_date, problem_slug)
);
CREATE INDEX ON public.daily_challenge_completions(challenge_date, points);
CREATE INDEX ON public.daily_challenge_completions(user_id, completed_at DESC);
GRANT SELECT ON public.daily_challenge_completions TO authenticated;
GRANT ALL ON public.daily_challenge_completions TO service_role;
ALTER TABLE public.daily_challenge_completions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own daily completions read" ON public.daily_challenge_completions FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.get_weekly_leaderboard()
RETURNS TABLE(rank bigint, alias text, points bigint, challenges bigint, is_current boolean)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  WITH totals AS (
    SELECT d.user_id, SUM(d.points)::bigint AS points, COUNT(*)::bigint AS challenges
    FROM public.daily_challenge_completions d
    WHERE d.challenge_date >= date_trunc('week', CURRENT_DATE)::date
      AND d.challenge_date < (date_trunc('week', CURRENT_DATE)::date + 7)
    GROUP BY d.user_id
  ), ranked AS (
    SELECT t.*, ROW_NUMBER() OVER (ORDER BY t.points DESC, t.challenges DESC, t.user_id) AS rank
    FROM totals t
  )
  SELECT r.rank,
    'Learner ' || upper(substr(replace(r.user_id::text, '-', ''), 1, 6)) AS alias,
    r.points,
    r.challenges,
    r.user_id = auth.uid() AS is_current
  FROM ranked r
  ORDER BY r.rank
  LIMIT 50;
$$;
REVOKE ALL ON FUNCTION public.get_weekly_leaderboard() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_weekly_leaderboard() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_weekly_leaderboard() TO service_role;