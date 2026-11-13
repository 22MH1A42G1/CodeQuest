/** Original practice material; none of these guides represents official company questions. */
export type PracticeQuestion = { question: string; answer: string };
export type CompanyGuide = {
  slug: string;
  name: string;
  sourceLabel: "Community-style practice — not official company questions";
  overview: string;
  codingPatterns: string[];
  technicalQuestions: string[];
  aptitudeQuestions: PracticeQuestion[];
  pythonQuestions: PracticeQuestion[];
  sqlQuestions: PracticeQuestion[];
  mockTestProblemSlugs: string[];
};

const sourceLabel = "Community-style practice — not official company questions" as const;

export const COMPANY_GUIDES: CompanyGuide[] = [
  {
    slug: "tcs", name: "TCS", sourceLabel,
    overview: "A fundamentals-first set for clear array, string, Python and SQL explanations.",
    codingPatterns: ["Single-pass array scans", "Frequency maps", "Two pointers", "Binary search"],
    technicalQuestions: ["When would you choose an array over a linked list?", "Explain binary search complexity.", "How do encapsulation and abstraction differ?", "What distinguishes primary and foreign keys?", "How would you test an in-place array update?"],
    aptitudeQuestions: [{ question: "A value rises from 240 to 300. What is the increase?", answer: "25%: 60 / 240 × 100." }, { question: "A takes 12 days and B 18 days. How long together?", answer: "7.2 days: their combined rate is 5/36 per day." }, { question: "Five numbers average 18. Add 30; what is the new average?", answer: "20: the new sum is 120 across six numbers." }],
    pythonQuestions: [{ question: "How do lists and tuples differ?", answer: "Lists are mutable; tuples are immutable sequences." }, { question: "What does enumerate provide?", answer: "Index-value pairs, starting at zero unless configured otherwise." }, { question: "Why avoid items=[] as a default?", answer: "The same list is shared across calls; use None and create a list inside." }, { question: "How do you count characters?", answer: "Use Counter(text) or update a dictionary while scanning." }],
    sqlQuestions: [{ question: "Select employees earning over 50000.", answer: "SELECT id, salary FROM employees WHERE salary > 50000;" }, { question: "Count employees per department.", answer: "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;" }, { question: "WHERE versus HAVING?", answer: "WHERE filters rows before grouping; HAVING filters groups." }],
    mockTestProblemSlugs: ["move-zeroes", "first-unique-character", "binary-search"],
  },
  {
    slug: "infosys", name: "Infosys", sourceLabel,
    overview: "Translate small specifications into reliable code with counting, recursion and introductory DP.",
    codingPatterns: ["Hash-set membership", "Character counting", "Recursive decomposition", "Rolling DP state"],
    technicalQuestions: ["How do you detect duplicates without pair comparisons?", "What makes a recursive base case sufficient?", "Compare memoization and tabulation.", "What problems does normalization prevent?", "Compare method overloading and overriding."],
    aptitudeQuestions: [{ question: "Amounts in ratio 3:5 total 640. Find them.", answer: "240 and 400; each ratio unit is 80." }, { question: "Simple interest on 5000 at 8% for three years?", answer: "1200: 5000 × 0.08 × 3." }, { question: "Four red and six blue balls: probability of red?", answer: "2/5, or 4/10." }],
    pythonQuestions: [{ question: "== versus is?", answer: "== compares values; is checks object identity." }, { question: "Why can deep recursion fail?", answer: "Python limits recursion depth; iteration avoids call-stack exhaustion." }, { question: "How do you cache recursive results?", answer: "Use a memo dictionary or functools.cache with hashable arguments." }, { question: "What is a list comprehension?", answer: "A concise expression that builds a list from an iterable with optional filtering." }],
    sqlQuestions: [{ question: "Find the second-highest distinct salary.", answer: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);" }, { question: "Find repeated emails.", answer: "SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;" }, { question: "What does DISTINCT do?", answer: "It removes duplicate result rows." }],
    mockTestProblemSlugs: ["contains-duplicate", "valid-anagram", "climbing-stairs"],
  },
  {
    slug: "wipro", name: "Wipro", sourceLabel,
    overview: "Build confidence with boundaries, ordered data, stacks and everyday database concepts.",
    codingPatterns: ["Opposing pointers", "Slow and fast pointers", "Delimiter stacks", "Invariant-based scans"],
    technicalQuestions: ["State the palindrome two-pointer invariant.", "How do two pointers find a list middle?", "Why use a stack for nested brackets?", "Process versus thread?", "INNER JOIN versus LEFT JOIN?"],
    aptitudeQuestions: [{ question: "A 150 m train passes a pole in 10 seconds. Speed in km/h?", answer: "54 km/h: 15 m/s × 3.6." }, { question: "Cost 800, selling price 920: profit percent?", answer: "15%: 120 / 800 × 100." }, { question: "Next in 3, 7, 13, 21, 31?", answer: "43: differences increase by two." }],
    pythonQuestions: [{ question: "append versus extend?", answer: "append adds one object; extend adds each item from an iterable." }, { question: "What does text[::-1] do?", answer: "It creates a reversed copy in O(n) time and space." }, { question: "How do you catch invalid integer input?", answer: "Catch ValueError around int(value)." }, { question: "What is a shallow copy?", answer: "A new outer container sharing references to nested objects." }],
    sqlQuestions: [{ question: "Find employees without managers.", answer: "SELECT id FROM employees WHERE manager_id IS NULL;" }, { question: "COUNT(*) versus COUNT(manager_id)?", answer: "COUNT(*) counts rows; the other excludes NULL manager values." }, { question: "Which join retains unmatched customers?", answer: "A LEFT JOIN from customers to orders." }],
    mockTestProblemSlugs: ["valid-palindrome", "middle-of-linked-list", "valid-parentheses"],
  },
  {
    slug: "accenture", name: "Accenture", sourceLabel,
    overview: "Practise small data-processing exercises and explaining implementation trade-offs.",
    codingPatterns: ["Complement hash maps", "Read/write pointers", "String tokenization", "Sort and aggregate"],
    technicalQuestions: ["How does a hash map accelerate pair-sum search?", "How should an API handle missing input?", "Unit versus integration test?", "Benefits and costs of an index?", "Explain stable sorting with an example."],
    aptitudeQuestions: [{ question: "1500 with 20% discount then 10% tax: final price?", answer: "1320: 1200 after discount plus 120 tax." }, { question: "Six workers take 15 days; how long for ten?", answer: "9 days at equal constant productivity." }, { question: "Average speed for equal distances at 40 and 60 km/h?", answer: "48 km/h using the harmonic mean." }],
    pythonQuestions: [{ question: "sorted(values) versus values.sort()?", answer: "sorted returns a new list; sort mutates and returns None." }, { question: "What does dict.get(key, default) do?", answer: "Returns the stored value or default without inserting a missing key." }, { question: "*args and **kwargs?", answer: "They collect extra positional and keyword arguments respectively." }, { question: "Why use with for files?", answer: "It closes the resource even when an exception occurs." }],
    sqlQuestions: [{ question: "Total order amount per customer.", answer: "SELECT customer_id, SUM(amount) FROM orders GROUP BY customer_id;" }, { question: "Why use bound parameters?", answer: "They separate values from SQL syntax and help prevent injection." }, { question: "Label salaries >=60000 as high.", answer: "Use CASE WHEN salary >= 60000 THEN 'high' ELSE 'standard' END." }],
    mockTestProblemSlugs: ["two-sum", "move-zeroes", "reverse-words-in-a-string"],
  },
  {
    slug: "cognizant", name: "Cognizant", sourceLabel,
    overview: "Maintain state across scans, reason about linked structures and optimize only after correctness.",
    codingPatterns: ["Running extrema", "Frequency counting", "Pointer rewiring", "Fixed-size windows"],
    technicalQuestions: ["Why must a stock scan buy before selling?", "How do you reverse links without losing nodes?", "When does counting need a second ordered pass?", "What are ACID properties?", "What is a race condition?"],
    aptitudeQuestions: [{ question: "1000 grows 10% then falls 10%. Result?", answer: "990, a net 1% decrease." }, { question: "Two dice: probability their total is seven?", answer: "1/6: six of 36 ordered outcomes." }, { question: "A is twice B; in six years their ages total 42. Ages now?", answer: "A is 20 and B is 10." }],
    pythonQuestions: [{ question: "What is a generator?", answer: "A lazy iterator, commonly implemented with yield." }, { question: "How does zip handle unequal lengths?", answer: "It stops at the shorter iterable by default." }, { question: "Remove duplicates while preserving order?", answer: "For hashable values, list(dict.fromkeys(values))." }, { question: "Why avoid list.pop(0) for queues?", answer: "It shifts elements in O(n); deque.popleft is O(1)." }],
    sqlQuestions: [{ question: "Replace NULL salary with zero in output.", answer: "SELECT COALESCE(salary, 0) FROM employees;" }, { question: "UNION versus UNION ALL?", answer: "UNION removes duplicates; UNION ALL retains them." }, { question: "Customers with no orders?", answer: "Use WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id)." }],
    mockTestProblemSlugs: ["best-time-to-buy-and-sell-stock", "reverse-linked-list", "maximum-sum-subarray-of-size-k"],
  },
  {
    slug: "capgemini", name: "Capgemini", sourceLabel,
    overview: "Combine sorting and string fundamentals with queues and object-oriented reasoning.",
    codingPatterns: ["Adjacent comparisons after sorting", "Prefix comparison", "Two-stack queues", "Sorted two pointers"],
    technicalQuestions: ["Merge two sorted sequences in linear time.", "Explain amortized queue complexity.", "When is composition preferable to inheritance?", "What causes deadlock?", "Why can an index slow writes?"],
    aptitudeQuestions: [{ question: "Two numbers sum to 84 and differ by 18. Find them.", answer: "51 and 33." }, { question: "Three coin tosses: probability of exactly two heads?", answer: "3/8." }, { question: "200 litres at 30% juice; add pure juice to reach 50%. How much?", answer: "80 litres: (60+x)/(200+x)=0.5." }],
    pythonQuestions: [{ question: "What does sorted(key=len) do?", answer: "Orders values by the length key without changing the values." }, { question: "What is self?", answer: "The instance receiving a method call; self is a naming convention." }, { question: "When choose a set?", answer: "For unique hashable values and average O(1) membership." }, { question: "break versus continue?", answer: "break exits the loop; continue skips to its next iteration." }],
    sqlQuestions: [{ question: "Departments with average salary above 60000.", answer: "GROUP BY department_id HAVING AVG(salary) > 60000." }, { question: "What is a composite key?", answer: "Multiple non-NULL columns whose combined values identify a row." }, { question: "Show employees and optional managers.", answer: "Use a self LEFT JOIN on manager_id = manager.id." }],
    mockTestProblemSlugs: ["longest-common-prefix", "implement-queue-using-stacks", "two-sum-ii-sorted"],
  },
  {
    slug: "amazon", name: "Amazon", sourceLabel,
    overview: "A challenge set emphasizing windows, bounded heaps, traversal and explicit invariants.",
    codingPatterns: ["Sliding-window state", "Bounded min-heaps", "Connected-component traversal", "Hash maps with ordered passes"],
    technicalQuestions: ["State the unique-character window invariant.", "When is a size-k heap better than sorting?", "Avoid counting one component twice.", "What does idempotency mean?", "Cache versus source-of-truth trade-offs?"],
    aptitudeQuestions: [{ question: "One server handles 120 tasks/min. Three handle 900 in how long?", answer: "2.5 minutes with perfect parallelism." }, { question: "Independent failure chance 0.2: all three attempts fail?", answer: "0.008, or 0.8%." }, { question: "800 grows 25%, then 20%. Final size?", answer: "1200." }],
    pythonQuestions: [{ question: "How do you maintain a min-heap?", answer: "Use heapq.heapify, heappush and heappop." }, { question: "Why deque for BFS?", answer: "append and popleft are O(1)." }, { question: "Average dictionary membership cost?", answer: "Average O(1), assuming well-distributed hashes." }, { question: "Avoid shared grid rows?", answer: "Use a comprehension, not [[0]*cols]*rows." }],
    sqlQuestions: [{ question: "Customers spending over 1000 in total.", answer: "GROUP BY customer_id HAVING SUM(amount) > 1000." }, { question: "Why can one-to-many joins inflate sums?", answer: "Child rows multiply; aggregate to the intended grain before joining." }, { question: "Rank orders within customers.", answer: "Use DENSE_RANK() OVER (PARTITION BY customer_id ORDER BY amount DESC)." }],
    mockTestProblemSlugs: ["longest-substring-without-repeating-characters", "top-k-frequent-elements", "number-of-islands"],
  },
  {
    slug: "microsoft", name: "Microsoft", sourceLabel,
    overview: "Practise pointer safety, tree traversal and dependency graphs with reusable abstractions.",
    codingPatterns: ["Cycle-detection pointers", "Level-order queues", "Topological sorting", "Recursive return contracts"],
    technicalQuestions: ["Why do cycle-detection pointers meet?", "How does BFS group tree levels?", "How does topological sorting detect a cycle?", "Why are interfaces useful in tests?", "How do you reason about shared mutable ownership?"],
    aptitudeQuestions: [{ question: "How many orders can four distinct jobs run in?", answer: "24, or 4!." }, { question: "99.5% availability over 200 hours: downtime?", answer: "1 hour." }, { question: "A takes 10 hours, B 15. Together?", answer: "6 hours." }],
    pythonQuestions: [{ question: "Purpose of @property?", answer: "Managed attribute-style access without changing caller syntax." }, { question: "What makes a dictionary key valid?", answer: "Stable hashing and equality consistent with that hash." }, { question: "Iterable versus iterator?", answer: "An iterable produces iterators; an iterator supplies next() values." }, { question: "Do type hints enforce runtime types?", answer: "No; they support static tooling unless runtime checks are added." }],
    sqlQuestions: [{ question: "Employees paid above average.", answer: "WHERE salary > (SELECT AVG(salary) FROM employees)." }, { question: "Latest event per user?", answer: "Use ROW_NUMBER partitioned by user and retain row 1." }, { question: "What is a transaction?", answer: "A logical unit committed or rolled back together." }],
    mockTestProblemSlugs: ["linked-list-cycle", "binary-tree-level-order-traversal", "course-schedule"],
  },
  {
    slug: "google", name: "Google", sourceLabel,
    overview: "Stretch your reasoning with search invariants, shortest paths and dynamic programming.",
    codingPatterns: ["Binary-search intervals", "Unweighted BFS", "Prefix or target DP", "State compression"],
    technicalQuestions: ["What invariant lets binary search discard half?", "Why does BFS minimize unweighted edges?", "Define coin-change states and transitions.", "When does greedy fail?", "Validate an optimized algorithm against brute force."],
    aptitudeQuestions: [{ question: "Bits needed for 1000 fixed-length identifiers?", answer: "10 bits, giving 1024 codes." }, { question: "Three independent 0.9 components all work: probability?", answer: "0.729." }, { question: "Sequences with four right and three down moves?", answer: "35, or C(7,3)." }],
    pythonQuestions: [{ question: "What does bisect_left return?", answer: "The leftmost insertion index; it does not confirm membership." }, { question: "Why can repeated string concatenation be costly?", answer: "Immutable strings may be copied repeatedly; collect and join." }, { question: "Late-binding loop closure pitfall?", answer: "Closures share the loop variable; capture each value explicitly." }, { question: "Cost of nums[a:b]?", answer: "O(k) time and auxiliary space for k elements." }],
    sqlQuestions: [{ question: "Compute a running sales total.", answer: "SUM(amount) OVER (ORDER BY day ROWS UNBOUNDED PRECEDING)." }, { question: "RANK versus DENSE_RANK?", answer: "RANK leaves gaps after ties; DENSE_RANK does not." }, { question: "Show the previous day's amount.", answer: "Use LAG(amount) OVER (ORDER BY day)." }],
    mockTestProblemSlugs: ["search-in-rotated-sorted-array", "shortest-path-in-binary-matrix", "coin-change"],
  },
  {
    slug: "zoho", name: "Zoho", sourceLabel,
    overview: "Implementation-heavy parsing, grouping and interval practice with Python and SQL fundamentals.",
    codingPatterns: ["Token-evaluation stacks", "Canonical grouping keys", "Interval sort-and-sweep", "Explicit parser states"],
    technicalQuestions: ["Evaluate RPN while preserving operand order.", "Choose a canonical anagram key and its cost.", "Why sort intervals before merging?", "Separate parsing, validation and execution.", "Test intervals that merely touch."],
    aptitudeQuestions: [{ question: "How many distinct arrangements of LEVEL?", answer: "30: 5!/(2!×2!)." }, { question: "Three notebooks and two pens cost 110; one notebook and two pens cost 50. Prices?", answer: "Notebook 30, pen 10." }, { question: "Digits sum to nine; reversal reduces number by 27. Number?", answer: "63." }],
    pythonQuestions: [{ question: "How does defaultdict(list) help grouping?", answer: "It creates a list for a missing key on indexed access." }, { question: "Form an anagram dictionary key?", answer: "Use tuple(sorted(word)) or join the sorted characters." }, { question: "Does // truncate toward zero?", answer: "No, it floors; negative results need explicit sign handling for truncation." }, { question: "Implement a stack with a list?", answer: "Use append and pop(), checking empty input where necessary." }],
    sqlQuestions: [{ question: "Prevent duplicate SKUs.", answer: "Add a UNIQUE constraint; add NOT NULL if every product requires one." }, { question: "Total paid invoices per customer.", answer: "SUM(CASE WHEN status='paid' THEN amount ELSE 0 END) GROUP BY customer_id." }, { question: "Products tied for category maximum price.", answer: "Join each product to a per-category MAX(price) aggregate on category and price." }],
    mockTestProblemSlugs: ["evaluate-reverse-polish-notation", "group-anagrams", "merge-intervals"],
  },
];
