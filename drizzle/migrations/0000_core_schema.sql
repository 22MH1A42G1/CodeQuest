CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  daily_goal int NOT NULL DEFAULT 2 CHECK (daily_goal BETWEEN 1 AND 20),
  target_role text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own profile read" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "own profile insert" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "own profile update" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles(id, display_name, avatar_url)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', split_part(NEW.email,'@',1)), NEW.raw_user_meta_data->>'avatar_url')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TABLE public.dsa_topics (
  slug text PRIMARY KEY,
  title text NOT NULL,
  level text NOT NULL CHECK (level IN ('Beginner','Intermediate','Advanced')),
  order_index int NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.dsa_topics TO anon, authenticated;
GRANT ALL ON public.dsa_topics TO service_role;
ALTER TABLE public.dsa_topics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "topics public" ON public.dsa_topics FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.coding_problems (
  slug text PRIMARY KEY,
  title text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('Easy','Medium','Hard')),
  topic_slug text NOT NULL REFERENCES public.dsa_topics(slug),
  order_index int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ON public.coding_problems(topic_slug);
CREATE INDEX ON public.coding_problems(difficulty);
GRANT SELECT ON public.coding_problems TO anon, authenticated;
GRANT ALL ON public.coding_problems TO service_role;
ALTER TABLE public.coding_problems ENABLE ROW LEVEL SECURITY;
CREATE POLICY "problems public" ON public.coding_problems FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  problem_slug text NOT NULL REFERENCES public.coding_problems(slug) ON DELETE CASCADE,
  kind text NOT NULL CHECK (kind IN ('run','submit')),
  language text NOT NULL DEFAULT 'python',
  code text NOT NULL,
  status text NOT NULL,
  passed int NOT NULL DEFAULT 0,
  total int NOT NULL DEFAULT 0,
  runtime_ms numeric,
  memory_kb int,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ON public.submissions(user_id, created_at DESC);
CREATE INDEX ON public.submissions(user_id, problem_slug);
GRANT SELECT ON public.submissions TO authenticated;
GRANT ALL ON public.submissions TO service_role;
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own submissions read" ON public.submissions FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  problem_slug text NOT NULL REFERENCES public.coding_problems(slug) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'attempted' CHECK (status IN ('attempted','solved')),
  attempts int NOT NULL DEFAULT 0,
  accepted_code text,
  solved_at timestamptz,
  marked_for_revision boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, problem_slug)
);
GRANT SELECT ON public.user_progress TO authenticated;
GRANT ALL ON public.user_progress TO service_role;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own progress read" ON public.user_progress FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.topic_progress (
  user_id uuid NOT NULL,
  topic_slug text NOT NULL REFERENCES public.dsa_topics(slug) ON DELETE CASCADE,
  completed boolean NOT NULL DEFAULT false,
  quiz_score int,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, topic_slug)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.topic_progress TO authenticated;
GRANT ALL ON public.topic_progress TO service_role;
ALTER TABLE public.topic_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own topic progress" ON public.topic_progress FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.user_activity (
  user_id uuid NOT NULL,
  activity_date date NOT NULL,
  submissions int NOT NULL DEFAULT 0,
  problems_solved int NOT NULL DEFAULT 0,
  minutes int NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, activity_date)
);
GRANT SELECT ON public.user_activity TO authenticated;
GRANT ALL ON public.user_activity TO service_role;
ALTER TABLE public.user_activity ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own activity read" ON public.user_activity FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE TABLE public.bookmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  problem_slug text REFERENCES public.coding_problems(slug) ON DELETE CASCADE,
  topic_slug text REFERENCES public.dsa_topics(slug) ON DELETE CASCADE,
  title text NOT NULL,
  code_snippet text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ON public.bookmarks(user_id);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookmarks TO authenticated;
GRANT ALL ON public.bookmarks TO service_role;
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own bookmarks" ON public.bookmarks FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.personal_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  topic_slug text REFERENCES public.dsa_topics(slug) ON DELETE SET NULL,
  title text NOT NULL,
  content text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ON public.personal_notes(user_id, updated_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.personal_notes TO authenticated;
GRANT ALL ON public.personal_notes TO service_role;
ALTER TABLE public.personal_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own notes" ON public.personal_notes FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

INSERT INTO public.dsa_topics(slug,title,level,order_index) VALUES
('dsa-fundamentals','DSA Fundamentals','Beginner',1),('python-for-dsa','Python for DSA','Beginner',2),('complexity','Time and Space Complexity','Beginner',3),('arrays','Arrays','Beginner',4),('strings','Strings','Beginner',5),('searching','Searching Algorithms','Beginner',6),('sorting','Sorting Algorithms','Intermediate',7),('hashing','Hashing','Beginner',8),('two-pointers','Two Pointers','Intermediate',9),('sliding-window','Sliding Window','Intermediate',10),('linked-lists','Linked Lists','Intermediate',11),('stacks','Stacks','Beginner',12),('queues','Queues','Beginner',13),('recursion','Recursion','Intermediate',14),('backtracking','Backtracking','Advanced',15),('trees','Trees','Intermediate',16),('bst','Binary Search Trees','Intermediate',17),('heaps','Heaps','Intermediate',18),('tries','Tries','Advanced',19),('graphs','Graphs','Advanced',20),('greedy','Greedy Algorithms','Intermediate',21),('dynamic-programming','Dynamic Programming','Advanced',22);

INSERT INTO public.coding_problems(slug,title,difficulty,topic_slug,order_index) VALUES
('two-sum','Two Sum','Easy','arrays',1),('maximum-subarray','Maximum Subarray','Medium','arrays',2),('best-time-to-buy-and-sell-stock','Best Time to Buy and Sell Stock','Easy','arrays',3),('move-zeroes','Move Zeroes','Easy','arrays',4),('product-of-array-except-self','Product of Array Except Self','Medium','arrays',5),('contains-duplicate','Contains Duplicate','Easy','hashing',6),('majority-element','Majority Element','Easy','arrays',7),('valid-palindrome','Valid Palindrome','Easy','strings',8),('valid-anagram','Valid Anagram','Easy','strings',9),('longest-substring-without-repeating-characters','Longest Substring Without Repeating Characters','Medium','sliding-window',10),('group-anagrams','Group Anagrams','Medium','hashing',11),('first-unique-character','First Unique Character in a String','Easy','strings',12),('longest-common-prefix','Longest Common Prefix','Easy','tries',13),('binary-search','Binary Search','Easy','searching',14),('search-in-rotated-sorted-array','Search in Rotated Sorted Array','Medium','searching',15),('merge-intervals','Merge Intervals','Medium','sorting',16),('sort-colors','Sort Colors','Medium','sorting',17),('find-minimum-in-rotated-sorted-array','Find Minimum in Rotated Sorted Array','Medium','searching',18),('reverse-linked-list','Reverse Linked List','Easy','linked-lists',19),('merge-two-sorted-lists','Merge Two Sorted Lists','Easy','linked-lists',20),('middle-of-linked-list','Middle of the Linked List','Easy','linked-lists',21),('remove-nth-node-from-end','Remove Nth Node From End of List','Medium','linked-lists',22),('linked-list-cycle','Linked List Cycle','Easy','linked-lists',23),('valid-parentheses','Valid Parentheses','Easy','stacks',24),('daily-temperatures','Daily Temperatures','Medium','stacks',25),('min-stack','Min Stack','Medium','stacks',26),('implement-queue-using-stacks','Implement Queue using Stacks','Easy','queues',27),('evaluate-reverse-polish-notation','Evaluate Reverse Polish Notation','Medium','stacks',28),('maximum-depth-of-binary-tree','Maximum Depth of Binary Tree','Easy','trees',29),('invert-binary-tree','Invert Binary Tree','Easy','trees',30),('binary-tree-level-order-traversal','Binary Tree Level Order Traversal','Medium','trees',31),('validate-binary-search-tree','Validate Binary Search Tree','Medium','bst',32),('number-of-islands','Number of Islands','Medium','graphs',33),('course-schedule','Course Schedule','Medium','graphs',34),('shortest-path-in-binary-matrix','Shortest Path in Binary Matrix','Medium','graphs',35),('clone-graph','Clone Graph','Medium','graphs',36),('climbing-stairs','Climbing Stairs','Easy','dynamic-programming',37),('house-robber','House Robber','Medium','dynamic-programming',38),('coin-change','Coin Change','Medium','dynamic-programming',39),('longest-increasing-subsequence','Longest Increasing Subsequence','Medium','dynamic-programming',40),('longest-common-subsequence','Longest Common Subsequence','Medium','dynamic-programming',41),('unique-paths','Unique Paths','Medium','dynamic-programming',42),('container-with-most-water','Container With Most Water','Medium','two-pointers',43),('three-sum','3Sum','Medium','two-pointers',44),('minimum-size-subarray-sum','Minimum Size Subarray Sum','Medium','sliding-window',45),('maximum-sum-subarray-of-size-k','Maximum Sum Subarray of Size K','Easy','sliding-window',46),('top-k-frequent-elements','Top K Frequent Elements','Medium','heaps',47),('kth-largest-element','Kth Largest Element in an Array','Medium','heaps',48),('longest-consecutive-sequence','Longest Consecutive Sequence','Medium','hashing',49),('subsets','Subsets','Medium','backtracking',50),('permutations','Permutations','Medium','backtracking',51),('jump-game','Jump Game','Medium','greedy',52),('fibonacci-number','Fibonacci Number','Easy','recursion',53),('power-of-two','Power of Two','Easy','recursion',54),('reverse-words-in-a-string','Reverse Words in a String','Medium','strings',55),('rotate-array','Rotate Array','Medium','arrays',56),('two-sum-ii-sorted','Two Sum II – Input Array Is Sorted','Medium','two-pointers',57);