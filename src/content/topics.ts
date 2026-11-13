// Generated lesson content for the 22 DSA topics.
import type { Topic } from './types';

export const TOPICS: Topic[] = [
 {
  "slug": "dsa-fundamentals",
  "title": "DSA Fundamentals",
  "level": "Beginner",
  "summary": "What data structures and algorithms are, and why interviews care.",
  "explanation": "A data structure is a way of organising data so it can be used efficiently — a list, a dictionary, a tree. An algorithm is a step-by-step recipe that solves a problem using that data. Picking the right structure often turns a slow solution into a fast one.\n\nInterviews test DSA because it shows how you think: can you break a problem down, spot a pattern, and reason about cost before writing code?",
  "notes": [
   "Data structure = how data is stored",
   "Algorithm = steps to solve a problem",
   "Good choice of structure → faster code",
   "Always ask: input size? constraints?"
  ],
  "diagram": "Problem → Understand → Pick structure → Pick algorithm → Code → Test\n          ↑______________ refine ______________|",
  "applications": [
   "Search engines rank pages with graphs",
   "Maps apps find routes with shortest-path algorithms",
   "Databases use trees (B-trees) for fast lookups"
  ],
  "code_example": "# Linear search vs dictionary lookup\nnames = ['ana', 'raj', 'li']\nprint('raj' in names)      # scans the list: O(n)\n\nindex = {n: i for i, n in enumerate(names)}\nprint('raj' in index)      # hash lookup: O(1) average",
  "dry_run": [
   "names = ['ana','raj','li']",
   "'raj' in names → compare 'ana' (no), 'raj' (yes) → True",
   "Build index {'ana':0,'raj':1,'li':2}",
   "'raj' in index → one hash lookup → True"
  ],
  "time_complexity": "Depends on the algorithm",
  "space_complexity": "Depends on the structure",
  "mistakes": [
   "Jumping into code before understanding the problem",
   "Ignoring edge cases (empty input, one element)",
   "Not stating assumptions out loud in interviews"
  ],
  "interview_questions": [
   "What is the difference between a data structure and an algorithm?",
   "Why would you choose a dictionary over a list?",
   "How do you approach an unfamiliar problem?"
  ],
  "quiz": [
   {
    "question": "Which is a data structure?",
    "options": [
     "Binary search",
     "Hash map",
     "Merge sort",
     "Recursion"
    ],
    "answer": 1,
    "explanation": "A hash map stores data; the others are techniques or algorithms."
   },
   {
    "question": "What should you do first in an interview?",
    "options": [
     "Write code",
     "Clarify the problem",
     "Optimise",
     "Test"
    ],
    "answer": 1,
    "explanation": "Clarifying avoids solving the wrong problem."
   }
  ]
 },
 {
  "slug": "python-for-dsa",
  "title": "Python for DSA",
  "level": "Beginner",
  "summary": "The Python tools you'll use in every solution.",
  "explanation": "Python gives you powerful built-ins: list (dynamic array), dict (hash map), set (hash set), collections.deque (fast queue), heapq (min-heap) and collections.Counter. Knowing their costs lets you write short, fast solutions.\n\nList comprehensions, enumerate, zip and slicing keep code readable. Remember that slicing copies data, so it costs O(k).",
  "notes": [
   "list.append → O(1), list.insert(0,x) → O(n)",
   "dict / set lookup → O(1) average",
   "deque.popleft → O(1)",
   "heapq is a MIN-heap"
  ],
  "diagram": "list   [ 3 | 1 | 4 | 1 ]  index → O(1)\ndict   {'a':1, 'b':2}     key → O(1)\ndeque  ⇄ [ 1 2 3 ] ⇄     both ends O(1)",
  "applications": [
   "Counter for frequency analysis",
   "deque for BFS queues",
   "heapq for schedulers / top-k"
  ],
  "code_example": "from collections import Counter, deque\nimport heapq\n\ncounts = Counter('banana')        # {'a':3,'n':2,'b':1}\nq = deque([1, 2]); q.append(3); q.popleft()\nh = [5, 1, 8]; heapq.heapify(h)\nprint(heapq.heappop(h))           # 1",
  "dry_run": [
   "Counter('banana') counts letters → a:3, n:2, b:1",
   "deque [1,2] → append 3 → [1,2,3] → popleft → [2,3]",
   "heapify [5,1,8] → [1,5,8]",
   "heappop → returns 1"
  ],
  "time_complexity": "Varies per operation",
  "space_complexity": "O(n) for containers",
  "mistakes": [
   "Using list.pop(0) as a queue (O(n))",
   "Forgetting heapq is a min-heap (negate for max)",
   "Mutating a list while iterating over it"
  ],
  "interview_questions": [
   "How is a Python dict implemented?",
   "How do you make a max-heap with heapq?",
   "Why is deque better than list for a queue?"
  ],
  "quiz": [
   {
    "question": "Cost of list.pop(0)?",
    "options": [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    "answer": 2,
    "explanation": "Every remaining element shifts left."
   },
   {
    "question": "heapq.heappop returns…",
    "options": [
     "Largest",
     "Smallest",
     "Last added",
     "Random"
    ],
    "answer": 1,
    "explanation": "heapq is a min-heap."
   }
  ]
 },
 {
  "slug": "complexity",
  "title": "Time and Space Complexity",
  "level": "Beginner",
  "summary": "Big-O: how runtime and memory grow with input size.",
  "explanation": "Big-O describes how the work an algorithm does grows as the input grows, ignoring constants. O(1) is constant, O(log n) halves the problem each step, O(n) touches each item once, O(n log n) is typical of good sorting, and O(n²) usually means nested loops.\n\nSpace complexity counts extra memory you allocate, not the input itself.",
  "notes": [
   "Drop constants: O(2n) = O(n)",
   "Keep the dominant term: O(n² + n) = O(n²)",
   "Nested loops over n → O(n²)",
   "Halving each step → O(log n)"
  ],
  "diagram": "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)\nn=1,000:  1     10      1k     10k        1M      ∞",
  "applications": [
   "Choosing algorithms that scale to millions of users",
   "Estimating whether code fits a time limit",
   "Capacity planning for servers"
  ],
  "code_example": "def has_pair(nums, target):   # O(n) time, O(n) space\n    seen = set()\n    for x in nums:\n        if target - x in seen:\n            return True\n        seen.add(x)\n    return False",
  "dry_run": [
   "nums=[1,4,6], target=10",
   "x=1: 9 not in {} → add 1",
   "x=4: 6 not in {1} → add 4",
   "x=6: 4 in {1,4} → return True"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(n)",
  "mistakes": [
   "Forgetting hidden costs (slicing, 'in' on lists)",
   "Counting input size as extra space",
   "Confusing average and worst case for hash maps"
  ],
  "interview_questions": [
   "What's the complexity of binary search and why?",
   "Is O(n log n) better than O(n)?",
   "What is amortised O(1)?"
  ],
  "quiz": [
   {
    "question": "Two nested loops over n items:",
    "options": [
     "O(n)",
     "O(n log n)",
     "O(n²)",
     "O(2n)"
    ],
    "answer": 2,
    "explanation": "n × n iterations."
   },
   {
    "question": "Simplify O(3n + 5):",
    "options": [
     "O(3n)",
     "O(n)",
     "O(5)",
     "O(n+5)"
    ],
    "answer": 1,
    "explanation": "Drop constants."
   }
  ]
 },
 {
  "slug": "arrays",
  "title": "Arrays",
  "level": "Beginner",
  "summary": "Contiguous lists with O(1) indexing.",
  "explanation": "An array stores items next to each other in memory, so reading `a[i]` is instant. Python's list is a dynamic array: it grows automatically when you append. Inserting or deleting in the middle is slow because everything after must shift.\n\nMost array problems use one of a few patterns: prefix sums, two pointers, sliding window, or a hash map alongside the array.",
  "notes": [
   "a[i] → O(1)",
   "append → O(1) amortised",
   "insert/delete middle → O(n)",
   "Patterns: prefix sum, two pointers, Kadane"
  ],
  "diagram": "index:  0   1   2   3   4\n      [ 7 | 2 | 9 | 4 | 1 ]\n        ↑ a[0]        ↑ a[3]",
  "applications": [
   "Image pixels stored as 2D arrays",
   "Time-series data (stock prices)",
   "Buffers in audio/video streaming"
  ],
  "code_example": "def max_subarray(nums):        # Kadane's algorithm\n    best = cur = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)\n        best = max(best, cur)\n    return best",
  "dry_run": [
   "nums=[-2,1,-3,4]",
   "start best=cur=-2",
   "x=1: cur=max(1,-1)=1, best=1",
   "x=-3: cur=max(-3,-2)=-2, best=1",
   "x=4: cur=max(4,2)=4, best=4"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(1)",
  "mistakes": [
   "Off-by-one errors on loop bounds",
   "Modifying a list while iterating",
   "Forgetting empty or single-element input"
  ],
  "interview_questions": [
   "How would you find a missing number from 1..n?",
   "Explain Kadane's algorithm.",
   "How do prefix sums help with range queries?"
  ],
  "quiz": [
   {
    "question": "Access a[500] in a list of 1M items:",
    "options": [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(500)"
    ],
    "answer": 0,
    "explanation": "Indexing is direct."
   },
   {
    "question": "Kadane's algorithm solves…",
    "options": [
     "Sorting",
     "Max subarray sum",
     "Binary search",
     "Shortest path"
    ],
    "answer": 1,
    "explanation": "It tracks the best sum ending at each index."
   }
  ]
 },
 {
  "slug": "strings",
  "title": "Strings",
  "level": "Beginner",
  "summary": "Immutable sequences of characters.",
  "explanation": "Strings in Python are immutable: every `s + 'x'` builds a new string. To build long strings, collect pieces in a list and `''.join()` them. Many string problems are really counting problems (use Counter) or window problems (sliding window).",
  "notes": [
   "Strings are immutable",
   "Build with list + ''.join()",
   "Counter(s) for character counts",
   "s[::-1] reverses"
  ],
  "diagram": "s = \"level\"\n     l e v e l\n     ↑       ↑   compare ends → move inward",
  "applications": [
   "Spell checkers and autocomplete",
   "DNA sequence analysis",
   "Parsing logs and URLs"
  ],
  "code_example": "def is_palindrome(s):\n    t = [c.lower() for c in s if c.isalnum()]\n    l, r = 0, len(t) - 1\n    while l < r:\n        if t[l] != t[r]:\n            return False\n        l += 1; r -= 1\n    return True",
  "dry_run": [
   "s='Ab,a' → t=['a','b','a']",
   "l=0,r=2: 'a'=='a' → move",
   "l=1,r=1: loop ends",
   "return True"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(n)",
  "mistakes": [
   "Concatenating in a loop (O(n²))",
   "Forgetting case / punctuation rules",
   "Assuming ASCII only"
  ],
  "interview_questions": [
   "Check if two strings are anagrams.",
   "Find the longest palindromic substring.",
   "Why are Python strings immutable?"
  ],
  "quiz": [
   {
    "question": "Fastest way to build a long string?",
    "options": [
     "+= in a loop",
     "''.join(list)",
     "str.format each time",
     "reversed()"
    ],
    "answer": 1,
    "explanation": "join is O(total length)."
   },
   {
    "question": "Anagram check is best done with…",
    "options": [
     "Sorting or counting",
     "Binary search",
     "Recursion",
     "Stack"
    ],
    "answer": 0,
    "explanation": "Same letters, same counts."
   }
  ]
 },
 {
  "slug": "searching",
  "title": "Searching Algorithms",
  "level": "Beginner",
  "summary": "Linear search and binary search.",
  "explanation": "Linear search checks every element: O(n). Binary search works on sorted data by comparing with the middle and discarding half each time: O(log n). Binary search also applies to 'search on the answer' problems where a condition flips from false to true.",
  "notes": [
   "Binary search needs sorted data (or monotonic condition)",
   "lo <= hi loop, mid = (lo+hi)//2",
   "Each step halves the range",
   "bisect module does it for you"
  ],
  "diagram": "[1 3 5 7 9 11 13]  target 9\n lo     mid      hi   → 7 < 9 go right\n          lo mid hi → found 9",
  "applications": [
   "Looking up words in a dictionary",
   "Git bisect to find a bad commit",
   "Finding the minimum capacity that works"
  ],
  "code_example": "def binary_search(nums, target):\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1",
  "dry_run": [
   "nums=[1,3,5,7,9], target=7",
   "lo=0,hi=4,mid=2: 5<7 → lo=3",
   "lo=3,hi=4,mid=3: 7==7 → return 3"
  ],
  "time_complexity": "O(log n)",
  "space_complexity": "O(1)",
  "mistakes": [
   "Infinite loops from wrong lo/hi updates",
   "Using it on unsorted data",
   "Off-by-one in lo < hi vs lo <= hi"
  ],
  "interview_questions": [
   "Search in a rotated sorted array.",
   "Find first and last position of a value.",
   "Binary search on the answer: give an example."
  ],
  "quiz": [
   {
    "question": "Binary search on 1,000,000 items takes about…",
    "options": [
     "20 steps",
     "1000 steps",
     "500,000 steps",
     "1 step"
    ],
    "answer": 0,
    "explanation": "log2(1M) ≈ 20."
   },
   {
    "question": "Binary search requires…",
    "options": [
     "A hash map",
     "Sorted / monotonic data",
     "Recursion",
     "Linked list"
    ],
    "answer": 1,
    "explanation": "Halving relies on order."
   }
  ]
 },
 {
  "slug": "sorting",
  "title": "Sorting Algorithms",
  "level": "Intermediate",
  "summary": "Bubble, insertion, merge, quick and when to use each.",
  "explanation": "Simple sorts (bubble, insertion, selection) are O(n²). Merge sort splits the list, sorts halves and merges: O(n log n) always, O(n) extra space. Quick sort partitions around a pivot: O(n log n) on average. Python's sorted() uses Timsort, O(n log n) and stable.",
  "notes": [
   "Merge sort: stable, O(n log n), O(n) space",
   "Quick sort: avg O(n log n), worst O(n²)",
   "Python sort is Timsort, stable",
   "Use key= for custom ordering"
  ],
  "diagram": "[5 2 4 1]\n split → [5 2] [4 1]\n sort  → [2 5] [1 4]\n merge → [1 2 4 5]",
  "applications": [
   "Ranking search results",
   "Leaderboards",
   "Scheduling by deadline"
  ],
  "code_example": "def merge_sort(a):\n    if len(a) <= 1:\n        return a\n    mid = len(a) // 2\n    L, R = merge_sort(a[:mid]), merge_sort(a[mid:])\n    out, i, j = [], 0, 0\n    while i < len(L) and j < len(R):\n        if L[i] <= R[j]: out.append(L[i]); i += 1\n        else: out.append(R[j]); j += 1\n    return out + L[i:] + R[j:]",
  "dry_run": [
   "[5,2,4,1] → split [5,2] and [4,1]",
   "[5,2] → [2,5]; [4,1] → [1,4]",
   "merge: 1, 2, 4, 5"
  ],
  "time_complexity": "O(n log n)",
  "space_complexity": "O(n)",
  "mistakes": [
   "Forgetting sort() returns None",
   "Assuming quicksort is always fast",
   "Not using key= for complex sorts"
  ],
  "interview_questions": [
   "Compare merge sort and quick sort.",
   "What does stable sorting mean?",
   "Sort colors (0,1,2) in one pass."
  ],
  "quiz": [
   {
    "question": "Python's built-in sort is…",
    "options": [
     "Quick sort",
     "Timsort",
     "Heap sort",
     "Bubble sort"
    ],
    "answer": 1,
    "explanation": "A hybrid of merge and insertion sort."
   },
   {
    "question": "Worst case of quick sort:",
    "options": [
     "O(n)",
     "O(n log n)",
     "O(n²)",
     "O(log n)"
    ],
    "answer": 2,
    "explanation": "Bad pivots every time."
   }
  ]
 },
 {
  "slug": "hashing",
  "title": "Hashing",
  "level": "Beginner",
  "summary": "Dictionaries and sets for O(1) lookups.",
  "explanation": "A hash function turns a key into an index, so dicts and sets can find items in O(1) on average. Hashing is the go-to trick to remove a nested loop: store what you've seen, then look it up instantly.",
  "notes": [
   "dict: key → value, O(1) avg",
   "set: membership, O(1) avg",
   "Keys must be hashable (no lists)",
   "Use tuple/sorted string as composite key"
  ],
  "diagram": "key 'cat' → hash() → bucket 3\n[0][1][2][3:'cat'][4]...",
  "applications": [
   "Caches (memoisation)",
   "Counting word frequencies",
   "Detecting duplicate transactions"
  ],
  "code_example": "def two_sum(nums, target):\n    seen = {}\n    for i, x in enumerate(nums):\n        if target - x in seen:\n            return [seen[target - x], i]\n        seen[x] = i",
  "dry_run": [
   "nums=[2,7,11], target=9",
   "i=0,x=2: need 7, not seen → seen={2:0}",
   "i=1,x=7: need 2, seen → return [0,1]"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(n)",
  "mistakes": [
   "Using a list as a dict key",
   "Forgetting collisions make worst case O(n)",
   "Overwriting a key you still needed"
  ],
  "interview_questions": [
   "How does a hash map handle collisions?",
   "Group anagrams together.",
   "Longest consecutive sequence in O(n)."
  ],
  "quiz": [
   {
    "question": "Average lookup in a set:",
    "options": [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n²)"
    ],
    "answer": 0,
    "explanation": "Hashing gives direct buckets."
   },
   {
    "question": "Which can be a dict key?",
    "options": [
     "[1,2]",
     "{1:2}",
     "(1,2)",
     "set()"
    ],
    "answer": 2,
    "explanation": "Tuples are hashable."
   }
  ]
 },
 {
  "slug": "two-pointers",
  "title": "Two Pointers",
  "level": "Intermediate",
  "summary": "Move two indices toward each other or in the same direction.",
  "explanation": "Two pointers shrink a search space using order. On a sorted array, put one pointer at each end: if the sum is too small move left up, if too big move right down. Same-direction pointers (slow/fast) help remove duplicates or partition in place.",
  "notes": [
   "Usually needs sorted input",
   "Opposite ends → pair sums",
   "Slow/fast → in-place edits",
   "Turns O(n²) into O(n)"
  ],
  "diagram": "[1 2 4 7 11]  target 9\n L         R   1+11 > 9 → R--\n L      R      1+7  < 9 → L++\n   L    R      2+7 = 9 ✓",
  "applications": [
   "Merging two sorted files",
   "Deduplicating sorted logs",
   "Palindrome checks"
  ],
  "code_example": "def pair_sum(nums, target):     # nums sorted\n    l, r = 0, len(nums) - 1\n    while l < r:\n        s = nums[l] + nums[r]\n        if s == target: return [l, r]\n        if s < target: l += 1\n        else: r -= 1\n    return []",
  "dry_run": [
   "nums=[1,2,4,7], target=9",
   "l=0,r=3: 8<9 → l=1",
   "l=1,r=3: 9 → return [1,3]"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(1)",
  "mistakes": [
   "Using it on unsorted data",
   "Moving the wrong pointer",
   "Missing duplicates in 3Sum"
  ],
  "interview_questions": [
   "Container with most water.",
   "3Sum without duplicates.",
   "Remove duplicates from sorted array."
  ],
  "quiz": [
   {
    "question": "Sum too small with sorted pointers — move…",
    "options": [
     "Right left",
     "Left right",
     "Both",
     "Neither"
    ],
    "answer": 1,
    "explanation": "A larger left value increases the sum."
   }
  ]
 },
 {
  "slug": "sliding-window",
  "title": "Sliding Window",
  "level": "Intermediate",
  "summary": "A moving range over an array or string.",
  "explanation": "A sliding window keeps a contiguous range [l, r]. Expand r to include new items; shrink l when the window breaks a rule. Because each index enters and leaves once, the total work is O(n).",
  "notes": [
   "Fixed size k: add new, drop old",
   "Variable size: expand r, shrink l while invalid",
   "Track state with a sum/Counter/set",
   "Each element processed ≤ 2 times"
  ],
  "diagram": "s = a b c a b b\n    [a b c]        → len 3\n      [b c a]      → len 3\n          [a b]    ...",
  "applications": [
   "Network rate limiting",
   "Moving averages on stock charts",
   "Finding the busiest hour in logs"
  ],
  "code_example": "def longest_unique(s):\n    seen, l, best = {}, 0, 0\n    for r, c in enumerate(s):\n        if c in seen and seen[c] >= l:\n            l = seen[c] + 1\n        seen[c] = r\n        best = max(best, r - l + 1)\n    return best",
  "dry_run": [
   "s='abca'",
   "r=0 'a': window 'a' best=1",
   "r=1 'b': 'ab' best=2",
   "r=2 'c': 'abc' best=3",
   "r=3 'a': repeat → l=1, window 'bca' best=3"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(k)",
  "mistakes": [
   "Shrinking too far or too little",
   "Forgetting to update state when l moves",
   "Using it for non-contiguous problems"
  ],
  "interview_questions": [
   "Longest substring without repeats.",
   "Minimum window substring.",
   "Max sum of subarray of size k."
  ],
  "quiz": [
   {
    "question": "Sliding window applies to…",
    "options": [
     "Any subset",
     "Contiguous ranges",
     "Trees",
     "Graphs"
    ],
    "answer": 1,
    "explanation": "Windows are contiguous."
   }
  ]
 },
 {
  "slug": "linked-lists",
  "title": "Linked Lists",
  "level": "Intermediate",
  "summary": "Nodes connected by next pointers.",
  "explanation": "A linked list is a chain of nodes, each holding a value and a pointer to the next node. Inserting or removing at a known node is O(1), but reaching the i-th node takes O(i). Classic tricks: a dummy head node, and slow/fast pointers.",
  "notes": [
   "No random access: O(n) to reach index",
   "Insert/delete at node → O(1)",
   "Dummy head simplifies edge cases",
   "Slow/fast pointers find middle & cycles"
  ],
  "diagram": "head → [1|•] → [2|•] → [3|•] → None\nreverse:\nNone ← [1] ← [2] ← [3] ← head",
  "applications": [
   "Browser back/forward history",
   "Undo stacks",
   "LRU cache (with a hash map)"
  ],
  "code_example": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val, self.next = val, next\n\ndef reverse(head):\n    prev = None\n    while head:\n        head.next, prev, head = prev, head, head.next\n    return prev",
  "dry_run": [
   "1→2→3, prev=None",
   "step1: 1→None, prev=1, head=2",
   "step2: 2→1, prev=2, head=3",
   "step3: 3→2, prev=3 → return 3→2→1"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(1)",
  "mistakes": [
   "Losing the rest of the list before saving next",
   "Not handling empty list",
   "Forgetting to return the new head"
  ],
  "interview_questions": [
   "Detect a cycle in a linked list.",
   "Merge two sorted lists.",
   "Remove the nth node from the end."
  ],
  "quiz": [
   {
    "question": "Find the middle node efficiently with…",
    "options": [
     "Binary search",
     "Slow & fast pointers",
     "Sorting",
     "A stack only"
    ],
    "answer": 1,
    "explanation": "Fast moves 2×; when it ends, slow is in the middle."
   }
  ]
 },
 {
  "slug": "stacks",
  "title": "Stacks",
  "level": "Beginner",
  "summary": "Last-in, first-out.",
  "explanation": "A stack adds and removes from the same end — like a pile of plates. In Python, a list works: append() to push, pop() to pop, both O(1). Stacks are perfect for matching brackets, undo, and 'next greater element' (monotonic stack).",
  "notes": [
   "LIFO: last in, first out",
   "list.append / list.pop → O(1)",
   "Monotonic stack for next greater/smaller",
   "Recursion uses the call stack"
  ],
  "diagram": "push 1, push 2, push 3\n| 3 |  ← top\n| 2 |\n| 1 |",
  "applications": [
   "Undo in editors",
   "Browser back button",
   "Expression evaluation in compilers"
  ],
  "code_example": "def is_valid(s):\n    pairs = {')': '(', ']': '[', '}': '{'}\n    stack = []\n    for c in s:\n        if c in pairs:\n            if not stack or stack.pop() != pairs[c]:\n                return False\n        else:\n            stack.append(c)\n    return not stack",
  "dry_run": [
   "s='([])'",
   "'(' push → ['(']",
   "'[' push → ['(','[']",
   "']' pops '[' ✓",
   "')' pops '(' ✓ → empty → True"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(n)",
  "mistakes": [
   "Popping from an empty stack",
   "Forgetting to check stack is empty at the end",
   "Using pop(0) (that's a queue)"
  ],
  "interview_questions": [
   "Valid parentheses.",
   "Design a min stack.",
   "Daily temperatures."
  ],
  "quiz": [
   {
    "question": "Which is LIFO?",
    "options": [
     "Queue",
     "Stack",
     "Heap",
     "Set"
    ],
    "answer": 1,
    "explanation": "Last in, first out."
   }
  ]
 },
 {
  "slug": "queues",
  "title": "Queues",
  "level": "Beginner",
  "summary": "First-in, first-out.",
  "explanation": "A queue adds at the back and removes from the front — like a line at a ticket counter. Use collections.deque: append() and popleft() are both O(1). Queues power breadth-first search and task scheduling.",
  "notes": [
   "FIFO: first in, first out",
   "Use deque, not list.pop(0)",
   "BFS uses a queue",
   "Circular buffers for fixed size"
  ],
  "diagram": "enqueue →  [ 1 | 2 | 3 ]  → dequeue\n           back        front",
  "applications": [
   "Print job spooling",
   "Message queues between services",
   "BFS in maps and social graphs"
  ],
  "code_example": "from collections import deque\nq = deque()\nq.append('a'); q.append('b')\nprint(q.popleft())   # 'a'\nprint(len(q))        # 1",
  "dry_run": [
   "append 'a' → [a]",
   "append 'b' → [a,b]",
   "popleft → 'a', queue [b]"
  ],
  "time_complexity": "O(1) per op",
  "space_complexity": "O(n)",
  "mistakes": [
   "Using list.pop(0) (O(n))",
   "Confusing queue and stack order",
   "Forgetting to mark visited in BFS"
  ],
  "interview_questions": [
   "Implement a queue using two stacks.",
   "What is a circular queue?",
   "Where is a priority queue used?"
  ],
  "quiz": [
   {
    "question": "Best Python type for a queue:",
    "options": [
     "list",
     "tuple",
     "collections.deque",
     "str"
    ],
    "answer": 2,
    "explanation": "O(1) at both ends."
   }
  ]
 },
 {
  "slug": "recursion",
  "title": "Recursion",
  "level": "Intermediate",
  "summary": "Functions that call themselves on smaller inputs.",
  "explanation": "A recursive function solves a problem by solving a smaller version of the same problem. Every recursion needs a base case (when to stop) and a recursive case (how to shrink the problem). Memoisation stores results so repeated calls are free.",
  "notes": [
   "Base case first!",
   "Each call must move toward the base case",
   "Call stack depth = recursion depth",
   "Memoise overlapping subproblems"
  ],
  "diagram": "fact(3)\n └ 3 * fact(2)\n        └ 2 * fact(1)\n               └ 1   (base)",
  "applications": [
   "File system traversal",
   "Parsing nested JSON",
   "Fractal graphics"
  ],
  "code_example": "from functools import lru_cache\n\n@lru_cache(None)\ndef fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)",
  "dry_run": [
   "fib(4) = fib(3) + fib(2)",
   "fib(3) = fib(2) + fib(1) = 1 + 1 = 2",
   "fib(2) cached = 1",
   "fib(4) = 2 + 1 = 3"
  ],
  "time_complexity": "O(n) with memo",
  "space_complexity": "O(n) stack",
  "mistakes": [
   "Missing base case → infinite recursion",
   "Python's default recursion limit (~1000)",
   "Recomputing the same subproblems"
  ],
  "interview_questions": [
   "Explain the call stack.",
   "Convert a recursive function to iterative.",
   "What is tail recursion?"
  ],
  "quiz": [
   {
    "question": "Every recursion needs…",
    "options": [
     "A loop",
     "A base case",
     "A global variable",
     "A list"
    ],
    "answer": 1,
    "explanation": "Otherwise it never stops."
   }
  ]
 },
 {
  "slug": "backtracking",
  "title": "Backtracking",
  "level": "Advanced",
  "summary": "Try a choice, explore, undo, try the next.",
  "explanation": "Backtracking builds a solution step by step and abandons a path as soon as it can't lead to a valid answer. The pattern: choose → explore (recurse) → un-choose. It's used for subsets, permutations, combinations, N-Queens and Sudoku.",
  "notes": [
   "choose → recurse → undo",
   "Prune invalid branches early",
   "Copy the path when saving an answer",
   "Often exponential: O(2ⁿ) or O(n!)"
  ],
  "diagram": "            []\n       /          \\\n    [1]            []\n   /   \\         /   \\\n[1,2]  [1]     [2]    []",
  "applications": [
   "Solving Sudoku",
   "Generating test combinations",
   "Route planning with constraints"
  ],
  "code_example": "def subsets(nums):\n    res, path = [], []\n    def bt(i):\n        if i == len(nums):\n            res.append(path[:]); return\n        path.append(nums[i]); bt(i + 1)\n        path.pop();           bt(i + 1)\n    bt(0)\n    return res",
  "dry_run": [
   "nums=[1,2]",
   "take 1 → take 2 → save [1,2]",
   "take 1 → skip 2 → save [1]",
   "skip 1 → take 2 → save [2]",
   "skip both → save []"
  ],
  "time_complexity": "O(2ⁿ · n)",
  "space_complexity": "O(n)",
  "mistakes": [
   "Appending path instead of path[:]",
   "Forgetting to undo the choice",
   "No pruning → timeouts"
  ],
  "interview_questions": [
   "Generate all permutations.",
   "N-Queens.",
   "Combination sum."
  ],
  "quiz": [
   {
    "question": "Why append path[:] instead of path?",
    "options": [
     "Faster",
     "path keeps changing later",
     "Python requires it",
     "Saves memory"
    ],
    "answer": 1,
    "explanation": "Otherwise every saved answer is the same list."
   }
  ]
 },
 {
  "slug": "trees",
  "title": "Trees",
  "level": "Intermediate",
  "summary": "Hierarchical nodes with children.",
  "explanation": "A binary tree node has a value and up to two children. Traversals: preorder (root, left, right), inorder (left, root, right), postorder (left, right, root) — all DFS — and level order (BFS). Most tree problems are short recursive functions.",
  "notes": [
   "Height of empty tree = 0",
   "DFS: pre / in / post order",
   "BFS: level by level with a queue",
   "Think: what does each node return?"
  ],
  "diagram": "        3\n       / \\\n      9   20\n         /  \\\n        15   7",
  "applications": [
   "HTML DOM",
   "File system folders",
   "Decision trees in ML"
  ],
  "code_example": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val, self.left, self.right = val, left, right\n\ndef max_depth(root):\n    if not root:\n        return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))",
  "dry_run": [
   "depth(3) = 1 + max(depth(9), depth(20))",
   "depth(9) = 1",
   "depth(20) = 1 + max(1, 1) = 2",
   "depth(3) = 1 + 2 = 3"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(h)",
  "mistakes": [
   "Forgetting the None base case",
   "Confusing height and depth",
   "Using recursion on very deep trees"
  ],
  "interview_questions": [
   "Invert a binary tree.",
   "Level order traversal.",
   "Lowest common ancestor."
  ],
  "quiz": [
   {
    "question": "Level-order traversal uses…",
    "options": [
     "Stack",
     "Queue",
     "Heap",
     "Hash map"
    ],
    "answer": 1,
    "explanation": "BFS processes level by level."
   }
  ]
 },
 {
  "slug": "bst",
  "title": "Binary Search Trees",
  "level": "Intermediate",
  "summary": "Trees where left < node < right.",
  "explanation": "In a BST, every value in the left subtree is smaller than the node and every value in the right subtree is larger. Search, insert and delete are O(h) — O(log n) when balanced, O(n) when skewed. An inorder traversal visits values in sorted order.",
  "notes": [
   "left < node < right (whole subtree!)",
   "Inorder traversal → sorted",
   "Balanced: O(log n), skewed: O(n)",
   "Validate with (low, high) bounds"
  ],
  "diagram": "        8\n      /   \\\n     3     10\n    / \\      \\\n   1   6      14",
  "applications": [
   "Database indexes",
   "Ordered sets / maps",
   "Autocomplete ranking"
  ],
  "code_example": "def search(root, target):\n    while root and root.val != target:\n        root = root.left if target < root.val else root.right\n    return root",
  "dry_run": [
   "search 6 in tree above",
   "8: 6<8 → left",
   "3: 6>3 → right",
   "6 == 6 → found"
  ],
  "time_complexity": "O(h)",
  "space_complexity": "O(1)",
  "mistakes": [
   "Only checking immediate children when validating",
   "Allowing duplicates without a rule",
   "Assuming the tree is balanced"
  ],
  "interview_questions": [
   "Validate a BST.",
   "Kth smallest element in a BST.",
   "Convert a sorted array to a balanced BST."
  ],
  "quiz": [
   {
    "question": "Inorder traversal of a BST gives…",
    "options": [
     "Random order",
     "Sorted order",
     "Reverse order",
     "Level order"
    ],
    "answer": 1,
    "explanation": "Left, root, right = ascending."
   }
  ]
 },
 {
  "slug": "heaps",
  "title": "Heaps",
  "level": "Intermediate",
  "summary": "Always know the smallest (or largest) item.",
  "explanation": "A heap is a complete binary tree stored in an array where each parent is ≤ its children (min-heap). Getting the minimum is O(1); push and pop are O(log n). Python's heapq is a min-heap — push negative numbers for a max-heap.",
  "notes": [
   "heappush / heappop → O(log n)",
   "heap[0] is the minimum",
   "heapify a list → O(n)",
   "Top-k: keep a heap of size k"
  ],
  "diagram": "        1\n      /   \\\n     3     5\n    / \\\n   4   8      array: [1,3,5,4,8]",
  "applications": [
   "Task schedulers by priority",
   "Dijkstra's shortest path",
   "Streaming top-k / median"
  ],
  "code_example": "import heapq\n\ndef kth_largest(nums, k):\n    heap = []\n    for x in nums:\n        heapq.heappush(heap, x)\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return heap[0]",
  "dry_run": [
   "nums=[3,1,5,2], k=2",
   "push 3 → [3]; push 1 → [1,3]",
   "push 5 → [1,3,5] → pop 1 → [3,5]",
   "push 2 → [2,3,5] → pop 2 → [3,5]",
   "heap[0] = 3"
  ],
  "time_complexity": "O(n log k)",
  "space_complexity": "O(k)",
  "mistakes": [
   "Forgetting heapq is a min-heap",
   "Sorting when a heap of size k is enough",
   "Comparing tuples with unorderable items"
  ],
  "interview_questions": [
   "Merge k sorted lists.",
   "Find the median from a data stream.",
   "Top k frequent elements."
  ],
  "quiz": [
   {
    "question": "heap[0] in heapq is…",
    "options": [
     "Max",
     "Min",
     "Last pushed",
     "Median"
    ],
    "answer": 1,
    "explanation": "Min-heap property."
   }
  ]
 },
 {
  "slug": "tries",
  "title": "Tries",
  "level": "Advanced",
  "summary": "Prefix trees for fast word lookups.",
  "explanation": "A trie stores strings character by character. Each node has children keyed by letter and a flag marking the end of a word. Insert and search take O(L) for a word of length L, and prefix queries are natural.",
  "notes": [
   "Each edge = one character",
   "is_end marks complete words",
   "Insert/search → O(L)",
   "Great for prefixes & autocomplete"
  ],
  "diagram": "root\n └ c\n   └ a\n     ├ t (end)\n     └ r (end)",
  "applications": [
   "Search box autocomplete",
   "Spell checking",
   "IP routing tables"
  ],
  "code_example": "class Trie:\n    def __init__(self):\n        self.root = {}\n    def insert(self, word):\n        node = self.root\n        for c in word:\n            node = node.setdefault(c, {})\n        node['#'] = True\n    def search(self, word):\n        node = self.root\n        for c in word:\n            if c not in node: return False\n            node = node[c]\n        return '#' in node",
  "dry_run": [
   "insert 'cat': root→c→a→t, mark #",
   "insert 'car': reuse c→a, add r, mark #",
   "search 'ca': path exists but no # → False"
  ],
  "time_complexity": "O(L)",
  "space_complexity": "O(total chars)",
  "mistakes": [
   "Forgetting the end-of-word marker",
   "Confusing search and startsWith",
   "Using lots of memory for sparse alphabets"
  ],
  "interview_questions": [
   "Implement a trie.",
   "Word search II.",
   "Longest common prefix."
  ],
  "quiz": [
   {
    "question": "Trie search for a word of length L:",
    "options": [
     "O(1)",
     "O(L)",
     "O(n)",
     "O(n·L)"
    ],
    "answer": 1,
    "explanation": "One step per character."
   }
  ]
 },
 {
  "slug": "graphs",
  "title": "Graphs",
  "level": "Advanced",
  "summary": "Nodes connected by edges.",
  "explanation": "A graph is a set of nodes (vertices) connected by edges, directed or undirected, weighted or not. Store it as an adjacency list: a dict from node to its neighbours. Explore with BFS (queue, shortest path in unweighted graphs) or DFS (stack/recursion, connectivity and cycles). Always track visited nodes.",
  "notes": [
   "Adjacency list: {node: [neighbours]}",
   "BFS → shortest path (unweighted)",
   "DFS → components, cycles, topo sort",
   "Always keep a visited set"
  ],
  "diagram": "  A — B\n  |   |\n  C — D — E",
  "applications": [
   "Social networks",
   "Google Maps routing",
   "Course prerequisites (DAGs)"
  ],
  "code_example": "from collections import deque\n\ndef bfs(graph, start):\n    seen, q, order = {start}, deque([start]), []\n    while q:\n        node = q.popleft()\n        order.append(node)\n        for nb in graph[node]:\n            if nb not in seen:\n                seen.add(nb); q.append(nb)\n    return order",
  "dry_run": [
   "graph A:[B,C], B:[D], C:[D], D:[]",
   "visit A → queue [B,C]",
   "visit B → queue [C,D]",
   "visit C → D already seen",
   "visit D → order A,B,C,D"
  ],
  "time_complexity": "O(V + E)",
  "space_complexity": "O(V)",
  "mistakes": [
   "Forgetting the visited set (infinite loops)",
   "Mixing up directed and undirected edges",
   "Recursion depth on large DFS"
  ],
  "interview_questions": [
   "Number of islands.",
   "Course schedule (cycle detection).",
   "Clone a graph."
  ],
  "quiz": [
   {
    "question": "Shortest path in an unweighted graph:",
    "options": [
     "DFS",
     "BFS",
     "Binary search",
     "Sorting"
    ],
    "answer": 1,
    "explanation": "BFS explores by distance."
   }
  ]
 },
 {
  "slug": "greedy",
  "title": "Greedy Algorithms",
  "level": "Intermediate",
  "summary": "Make the best local choice each step.",
  "explanation": "A greedy algorithm picks the option that looks best right now and never looks back. It's fast and simple, but only correct when the problem has the 'greedy choice property'. Prove it with an exchange argument or find a counterexample.",
  "notes": [
   "Choose locally best, never undo",
   "Often sort first",
   "Needs proof — greedy can be wrong",
   "Classic: intervals, jump game, coins (some)"
  ],
  "diagram": "Activities sorted by end time:\n[1-3] ✓  [2-5] ✗  [4-6] ✓  [6-8] ✓",
  "applications": [
   "Huffman compression",
   "Scheduling meetings",
   "Making change with standard coins"
  ],
  "code_example": "def can_jump(nums):\n    far = 0\n    for i, x in enumerate(nums):\n        if i > far:\n            return False\n        far = max(far, i + x)\n    return True",
  "dry_run": [
   "nums=[2,3,1,1,4]",
   "i=0: far=2",
   "i=1: far=4",
   "i=2..4 ≤ far → True"
  ],
  "time_complexity": "O(n)",
  "space_complexity": "O(1)",
  "mistakes": [
   "Assuming greedy works without proof",
   "Wrong sort key",
   "Coin change with arbitrary coins (needs DP)"
  ],
  "interview_questions": [
   "Jump game.",
   "Non-overlapping intervals.",
   "Gas station."
  ],
  "quiz": [
   {
    "question": "Greedy always gives the optimal answer?",
    "options": [
     "Yes",
     "No — only for some problems",
     "Only for sorted input",
     "Only with recursion"
    ],
    "answer": 1,
    "explanation": "It needs the greedy choice property."
   }
  ]
 },
 {
  "slug": "dynamic-programming",
  "title": "Dynamic Programming",
  "level": "Advanced",
  "summary": "Break into overlapping subproblems and reuse answers.",
  "explanation": "Dynamic programming solves problems by combining answers to smaller subproblems, storing each answer so it's computed once. Steps: define the state (what dp[i] means), the transition (how dp[i] uses smaller states), the base cases, and the answer location. Top-down = recursion + memo; bottom-up = fill a table.",
  "notes": [
   "1) state  2) transition  3) base  4) answer",
   "Top-down: recursion + lru_cache",
   "Bottom-up: loop and fill table",
   "Often optimise space to O(1) rows"
  ],
  "diagram": "climb stairs: dp[i] = dp[i-1] + dp[i-2]\ni:   0 1 2 3 4 5\ndp:  1 1 2 3 5 8",
  "applications": [
   "Spell-check edit distance",
   "Route optimisation",
   "Resource allocation / budgeting"
  ],
  "code_example": "def coin_change(coins, amount):\n    dp = [0] + [float('inf')] * amount\n    for x in range(1, amount + 1):\n        for c in coins:\n            if c <= x:\n                dp[x] = min(dp[x], dp[x - c] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
  "dry_run": [
   "coins=[1,2], amount=3",
   "dp[1] = dp[0]+1 = 1",
   "dp[2] = min(dp[1]+1, dp[0]+1) = 1",
   "dp[3] = min(dp[2]+1, dp[1]+1) = 2"
  ],
  "time_complexity": "O(n · k)",
  "space_complexity": "O(n)",
  "mistakes": [
   "Unclear state definition",
   "Wrong base cases",
   "Iteration order that reads unfilled states"
  ],
  "interview_questions": [
   "Climbing stairs.",
   "Longest common subsequence.",
   "0/1 knapsack."
  ],
  "quiz": [
   {
    "question": "DP is useful when subproblems…",
    "options": [
     "Never repeat",
     "Overlap",
     "Are independent",
     "Are sorted"
    ],
    "answer": 1,
    "explanation": "Overlap means reuse pays off."
   }
  ]
 }
];
