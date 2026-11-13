// Additional standalone problem catalog. Hidden cases remain server-side.
import type { Problem } from "./types";

export const EXTRA_PROBLEMS: Problem[] = [
  {
    "slug": "balanced-parity-interval-count",
    "title": "Balanced Parity Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains equally many even and odd values. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use a prefix balance of +1 for even and -1 for odd.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraBalancedParityIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBalancedParityIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 58
  },
  {
    "slug": "balanced-parity-coverage-profile",
    "title": "Balanced Parity Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains equally many even and odd values. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use a prefix balance of +1 for even and -1 for odd.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraBalancedParityCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBalancedParityCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          3,
          2,
          2,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 59
  },
  {
    "slug": "balanced-parity-length-histogram",
    "title": "Balanced Parity Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains equally many even and odd values. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use a prefix balance of +1 for even and -1 for odd.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraBalancedParityLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBalancedParityLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          3,
          0,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 60
  },
  {
    "slug": "balanced-parity-earliest-longest",
    "title": "Balanced Parity Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains equally many even and odd values. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use a prefix balance of +1 for even and -1 for odd.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraBalancedParityEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBalancedParityEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 61
  },
  {
    "slug": "balanced-parity-shortest-per-start",
    "title": "Balanced Parity Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains equally many even and odd values. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use a prefix balance of +1 for even and -1 for odd.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraBalancedParityShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBalancedParityShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          2,
          0,
          2,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 62
  },
  {
    "slug": "balanced-parity-disjoint-packing",
    "title": "Balanced Parity Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains equally many even and odd values. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use a prefix balance of +1 for even and -1 for odd.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraBalancedParityDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBalancedParityDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 63
  },
  {
    "slug": "zero-total-interval-count",
    "title": "Zero Total Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum zero. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Equal prefix sums delimit a zero-total interval.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraZeroTotalIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraZeroTotalIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 64
  },
  {
    "slug": "zero-total-coverage-profile",
    "title": "Zero Total Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum zero. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Equal prefix sums delimit a zero-total interval.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraZeroTotalCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraZeroTotalCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          0,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 65
  },
  {
    "slug": "zero-total-length-histogram",
    "title": "Zero Total Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum zero. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Equal prefix sums delimit a zero-total interval.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraZeroTotalLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraZeroTotalLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          0,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 66
  },
  {
    "slug": "zero-total-earliest-longest",
    "title": "Zero Total Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum zero. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Equal prefix sums delimit a zero-total interval.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraZeroTotalEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraZeroTotalEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 67
  },
  {
    "slug": "zero-total-shortest-per-start",
    "title": "Zero Total Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum zero. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Equal prefix sums delimit a zero-total interval.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraZeroTotalShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraZeroTotalShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          0,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 68
  },
  {
    "slug": "zero-total-disjoint-packing",
    "title": "Zero Total Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum zero. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Equal prefix sums delimit a zero-total interval.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraZeroTotalDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraZeroTotalDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 69
  },
  {
    "slug": "unit-total-interval-count",
    "title": "Unit Total Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum one. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Look for prefix sums differing by one.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraUnitTotalIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitTotalIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 70
  },
  {
    "slug": "unit-total-coverage-profile",
    "title": "Unit Total Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum one. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Look for prefix sums differing by one.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitTotalCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitTotalCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          4,
          3,
          2,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 71
  },
  {
    "slug": "unit-total-length-histogram",
    "title": "Unit Total Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum one. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Look for prefix sums differing by one.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitTotalLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitTotalLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          3,
          2,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 72
  },
  {
    "slug": "unit-total-earliest-longest",
    "title": "Unit Total Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum one. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Look for prefix sums differing by one.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitTotalEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitTotalEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 73
  },
  {
    "slug": "unit-total-shortest-per-start",
    "title": "Unit Total Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum one. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Look for prefix sums differing by one.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitTotalShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitTotalShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          1,
          3,
          2,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 74
  },
  {
    "slug": "unit-total-disjoint-packing",
    "title": "Unit Total Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum one. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Look for prefix sums differing by one.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitTotalDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitTotalDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 75
  },
  {
    "slug": "positive-total-interval-count",
    "title": "Positive Total Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly positive sum. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare prefix sums at the two boundaries.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraPositiveTotalIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraPositiveTotalIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 12
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 76
  },
  {
    "slug": "positive-total-coverage-profile",
    "title": "Positive Total Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly positive sum. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare prefix sums at the two boundaries.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraPositiveTotalCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraPositiveTotalCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          4,
          8,
          8,
          8,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          4,
          3
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 77
  },
  {
    "slug": "positive-total-length-histogram",
    "title": "Positive Total Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly positive sum. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare prefix sums at the two boundaries.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraPositiveTotalLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraPositiveTotalLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          4,
          3,
          2,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 78
  },
  {
    "slug": "positive-total-earliest-longest",
    "title": "Positive Total Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly positive sum. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare prefix sums at the two boundaries.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraPositiveTotalEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraPositiveTotalEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 79
  },
  {
    "slug": "positive-total-shortest-per-start",
    "title": "Positive Total Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly positive sum. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare prefix sums at the two boundaries.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraPositiveTotalShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraPositiveTotalShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          1,
          2,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 80
  },
  {
    "slug": "positive-total-disjoint-packing",
    "title": "Positive Total Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly positive sum. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare prefix sums at the two boundaries.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraPositiveTotalDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraPositiveTotalDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 81
  },
  {
    "slug": "negative-total-interval-count",
    "title": "Negative Total Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly negative sum. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "The ending prefix sum must be smaller than the starting one.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraNegativeTotalIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraNegativeTotalIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 82
  },
  {
    "slug": "negative-total-coverage-profile",
    "title": "Negative Total Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly negative sum. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "The ending prefix sum must be smaller than the starting one.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraNegativeTotalCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraNegativeTotalCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          0,
          0,
          0,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 83
  },
  {
    "slug": "negative-total-length-histogram",
    "title": "Negative Total Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly negative sum. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "The ending prefix sum must be smaller than the starting one.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraNegativeTotalLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraNegativeTotalLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 84
  },
  {
    "slug": "negative-total-earliest-longest",
    "title": "Negative Total Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly negative sum. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "The ending prefix sum must be smaller than the starting one.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraNegativeTotalEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraNegativeTotalEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          4,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 85
  },
  {
    "slug": "negative-total-shortest-per-start",
    "title": "Negative Total Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly negative sum. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "The ending prefix sum must be smaller than the starting one.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraNegativeTotalShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraNegativeTotalShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          0,
          0,
          0,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 86
  },
  {
    "slug": "negative-total-disjoint-packing",
    "title": "Negative Total Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has strictly negative sum. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "The ending prefix sum must be smaller than the starting one.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraNegativeTotalDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraNegativeTotalDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 87
  },
  {
    "slug": "divisible-triple-interval-count",
    "title": "Divisible Triple Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum divisible by three. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group prefix sums by their remainder modulo three.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraDivisibleTripleIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDivisibleTripleIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 88
  },
  {
    "slug": "divisible-triple-coverage-profile",
    "title": "Divisible Triple Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum divisible by three. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group prefix sums by their remainder modulo three.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDivisibleTripleCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDivisibleTripleCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          2,
          3,
          2,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 89
  },
  {
    "slug": "divisible-triple-length-histogram",
    "title": "Divisible Triple Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum divisible by three. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group prefix sums by their remainder modulo three.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDivisibleTripleLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDivisibleTripleLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          0,
          1,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 90
  },
  {
    "slug": "divisible-triple-earliest-longest",
    "title": "Divisible Triple Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum divisible by three. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group prefix sums by their remainder modulo three.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDivisibleTripleEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDivisibleTripleEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          3
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 91
  },
  {
    "slug": "divisible-triple-shortest-per-start",
    "title": "Divisible Triple Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum divisible by three. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group prefix sums by their remainder modulo three.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDivisibleTripleShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDivisibleTripleShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          3,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 92
  },
  {
    "slug": "divisible-triple-disjoint-packing",
    "title": "Divisible Triple Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum divisible by three. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group prefix sums by their remainder modulo three.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDivisibleTripleDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDivisibleTripleDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 93
  },
  {
    "slug": "odd-total-interval-count",
    "title": "Odd Total Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has an odd sum. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Only the parity of each prefix sum matters.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraOddTotalIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOddTotalIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 9
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 94
  },
  {
    "slug": "odd-total-coverage-profile",
    "title": "Odd Total Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has an odd sum. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Only the parity of each prefix sum matters.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraOddTotalCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOddTotalCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          3,
          6,
          5,
          4,
          3
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 95
  },
  {
    "slug": "odd-total-length-histogram",
    "title": "Odd Total Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has an odd sum. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Only the parity of each prefix sum matters.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraOddTotalLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOddTotalLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          3,
          3,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 96
  },
  {
    "slug": "odd-total-earliest-longest",
    "title": "Odd Total Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has an odd sum. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Only the parity of each prefix sum matters.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraOddTotalEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOddTotalEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          3
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 97
  },
  {
    "slug": "odd-total-shortest-per-start",
    "title": "Odd Total Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has an odd sum. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Only the parity of each prefix sum matters.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraOddTotalShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOddTotalShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          1,
          3,
          2,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 98
  },
  {
    "slug": "odd-total-disjoint-packing",
    "title": "Odd Total Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has an odd sum. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Only the parity of each prefix sum matters.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraOddTotalDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOddTotalDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 99
  },
  {
    "slug": "distinct-values-interval-count",
    "title": "Distinct Values Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains no repeated value. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Maintain a window with a frequency map.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraDistinctValuesIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDistinctValuesIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 12
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 100
  },
  {
    "slug": "distinct-values-coverage-profile",
    "title": "Distinct Values Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains no repeated value. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Maintain a window with a frequency map.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDistinctValuesCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDistinctValuesCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          5,
          6,
          6,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 101
  },
  {
    "slug": "distinct-values-length-histogram",
    "title": "Distinct Values Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains no repeated value. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Maintain a window with a frequency map.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDistinctValuesLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDistinctValuesLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          4,
          2,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 102
  },
  {
    "slug": "distinct-values-earliest-longest",
    "title": "Distinct Values Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains no repeated value. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Maintain a window with a frequency map.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDistinctValuesEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDistinctValuesEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 103
  },
  {
    "slug": "distinct-values-shortest-per-start",
    "title": "Distinct Values Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains no repeated value. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Maintain a window with a frequency map.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDistinctValuesShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDistinctValuesShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 104
  },
  {
    "slug": "distinct-values-disjoint-packing",
    "title": "Distinct Values Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains no repeated value. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Maintain a window with a frequency map.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraDistinctValuesDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDistinctValuesDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 105
  },
  {
    "slug": "single-repeat-interval-count",
    "title": "Single Repeat Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has exactly one distinct value occurring twice and every other value occurring once. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track both the number of duplicated values and frequencies above two.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraSingleRepeatIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSingleRepeatIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 106
  },
  {
    "slug": "single-repeat-coverage-profile",
    "title": "Single Repeat Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has exactly one distinct value occurring twice and every other value occurring once. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track both the number of duplicated values and frequencies above two.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraSingleRepeatCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSingleRepeatCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          3,
          3,
          3,
          2,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 107
  },
  {
    "slug": "single-repeat-length-histogram",
    "title": "Single Repeat Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has exactly one distinct value occurring twice and every other value occurring once. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track both the number of duplicated values and frequencies above two.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraSingleRepeatLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSingleRepeatLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          0,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 108
  },
  {
    "slug": "single-repeat-earliest-longest",
    "title": "Single Repeat Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has exactly one distinct value occurring twice and every other value occurring once. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track both the number of duplicated values and frequencies above two.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraSingleRepeatEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSingleRepeatEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 109
  },
  {
    "slug": "single-repeat-shortest-per-start",
    "title": "Single Repeat Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has exactly one distinct value occurring twice and every other value occurring once. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track both the number of duplicated values and frequencies above two.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraSingleRepeatShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSingleRepeatShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          3,
          0,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          2,
          2,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 110
  },
  {
    "slug": "single-repeat-disjoint-packing",
    "title": "Single Repeat Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has exactly one distinct value occurring twice and every other value occurring once. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track both the number of duplicated values and frequencies above two.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraSingleRepeatDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSingleRepeatDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 111
  },
  {
    "slug": "two-symbols-interval-count",
    "title": "Two Symbols Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly two distinct values. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract at-most-one-distinct windows from at-most-two-distinct windows.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraTwoSymbolsIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraTwoSymbolsIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 112
  },
  {
    "slug": "two-symbols-coverage-profile",
    "title": "Two Symbols Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly two distinct values. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract at-most-one-distinct windows from at-most-two-distinct windows.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraTwoSymbolsCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraTwoSymbolsCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          3,
          3,
          2,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 113
  },
  {
    "slug": "two-symbols-length-histogram",
    "title": "Two Symbols Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly two distinct values. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract at-most-one-distinct windows from at-most-two-distinct windows.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraTwoSymbolsLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraTwoSymbolsLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          4,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 114
  },
  {
    "slug": "two-symbols-earliest-longest",
    "title": "Two Symbols Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly two distinct values. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract at-most-one-distinct windows from at-most-two-distinct windows.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraTwoSymbolsEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraTwoSymbolsEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 115
  },
  {
    "slug": "two-symbols-shortest-per-start",
    "title": "Two Symbols Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly two distinct values. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract at-most-one-distinct windows from at-most-two-distinct windows.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraTwoSymbolsShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraTwoSymbolsShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          2,
          2,
          2,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 116
  },
  {
    "slug": "two-symbols-disjoint-packing",
    "title": "Two Symbols Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly two distinct values. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract at-most-one-distinct windows from at-most-two-distinct windows.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraTwoSymbolsDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraTwoSymbolsDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 117
  },
  {
    "slug": "three-symbols-interval-count",
    "title": "Three Symbols Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly three distinct values. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use two frequency windows with distinct-value limits.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraThreeSymbolsIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraThreeSymbolsIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 118
  },
  {
    "slug": "three-symbols-coverage-profile",
    "title": "Three Symbols Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly three distinct values. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use two frequency windows with distinct-value limits.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraThreeSymbolsCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraThreeSymbolsCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          2,
          3,
          3,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 119
  },
  {
    "slug": "three-symbols-length-histogram",
    "title": "Three Symbols Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly three distinct values. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use two frequency windows with distinct-value limits.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraThreeSymbolsLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraThreeSymbolsLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          0,
          2,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 120
  },
  {
    "slug": "three-symbols-earliest-longest",
    "title": "Three Symbols Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly three distinct values. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use two frequency windows with distinct-value limits.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraThreeSymbolsEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraThreeSymbolsEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          3
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 121
  },
  {
    "slug": "three-symbols-shortest-per-start",
    "title": "Three Symbols Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly three distinct values. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use two frequency windows with distinct-value limits.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraThreeSymbolsShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraThreeSymbolsShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          4,
          3,
          3,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 122
  },
  {
    "slug": "three-symbols-disjoint-packing",
    "title": "Three Symbols Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly three distinct values. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Use two frequency windows with distinct-value limits.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraThreeSymbolsDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraThreeSymbolsDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 123
  },
  {
    "slug": "all-even-interval-count",
    "title": "All Even Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains only even values. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "An odd value splits independent runs.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraAllEvenIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAllEvenIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 124
  },
  {
    "slug": "all-even-coverage-profile",
    "title": "All Even Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains only even values. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "An odd value splits independent runs.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraAllEvenCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAllEvenCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          0,
          2,
          2,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          4,
          3
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 125
  },
  {
    "slug": "all-even-length-histogram",
    "title": "All Even Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains only even values. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "An odd value splits independent runs.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraAllEvenLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAllEvenLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          3,
          1,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 126
  },
  {
    "slug": "all-even-earliest-longest",
    "title": "All Even Earliest Longest",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains only even values. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "An odd value splits independent runs.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraAllEvenEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAllEvenEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          3
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 127
  },
  {
    "slug": "all-even-shortest-per-start",
    "title": "All Even Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains only even values. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "An odd value splits independent runs.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraAllEvenShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAllEvenShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          0,
          1,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 128
  },
  {
    "slug": "all-even-disjoint-packing",
    "title": "All Even Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains only even values. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "An odd value splits independent runs.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraAllEvenDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAllEvenDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 129
  },
  {
    "slug": "alternating-parity-interval-count",
    "title": "Alternating Parity Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has opposite parities at every pair of neighboring positions. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A parity violation ends the current valid run.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraAlternatingParityIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAlternatingParityIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 9
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 130
  },
  {
    "slug": "alternating-parity-coverage-profile",
    "title": "Alternating Parity Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has opposite parities at every pair of neighboring positions. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A parity violation ends the current valid run.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraAlternatingParityCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAlternatingParityCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          3,
          4,
          3,
          2,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 131
  },
  {
    "slug": "alternating-parity-length-histogram",
    "title": "Alternating Parity Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has opposite parities at every pair of neighboring positions. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A parity violation ends the current valid run.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraAlternatingParityLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAlternatingParityLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          3,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 132
  },
  {
    "slug": "alternating-parity-earliest-longest",
    "title": "Alternating Parity Earliest Longest",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has opposite parities at every pair of neighboring positions. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A parity violation ends the current valid run.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraAlternatingParityEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAlternatingParityEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 133
  },
  {
    "slug": "alternating-parity-shortest-per-start",
    "title": "Alternating Parity Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has opposite parities at every pair of neighboring positions. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A parity violation ends the current valid run.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraAlternatingParityShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAlternatingParityShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 134
  },
  {
    "slug": "alternating-parity-disjoint-packing",
    "title": "Alternating Parity Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has opposite parities at every pair of neighboring positions. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A parity violation ends the current valid run.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraAlternatingParityDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraAlternatingParityDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 135
  },
  {
    "slug": "strict-rise-interval-count",
    "title": "Strict Rise Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly increasing. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-increasing adjacent pair.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraStrictRiseIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictRiseIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 7
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 136
  },
  {
    "slug": "strict-rise-coverage-profile",
    "title": "Strict Rise Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly increasing. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-increasing adjacent pair.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraStrictRiseCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictRiseCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          2,
          2,
          2,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 137
  },
  {
    "slug": "strict-rise-length-histogram",
    "title": "Strict Rise Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly increasing. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-increasing adjacent pair.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraStrictRiseLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictRiseLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          2,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 138
  },
  {
    "slug": "strict-rise-earliest-longest",
    "title": "Strict Rise Earliest Longest",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly increasing. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-increasing adjacent pair.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraStrictRiseEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictRiseEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 139
  },
  {
    "slug": "strict-rise-shortest-per-start",
    "title": "Strict Rise Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly increasing. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-increasing adjacent pair.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraStrictRiseShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictRiseShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 140
  },
  {
    "slug": "strict-rise-disjoint-packing",
    "title": "Strict Rise Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly increasing. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-increasing adjacent pair.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraStrictRiseDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictRiseDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 141
  },
  {
    "slug": "strict-fall-interval-count",
    "title": "Strict Fall Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly decreasing. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-decreasing adjacent pair.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraStrictFallIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictFallIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 7
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 142
  },
  {
    "slug": "strict-fall-coverage-profile",
    "title": "Strict Fall Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly decreasing. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-decreasing adjacent pair.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraStrictFallCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictFallCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          2,
          2,
          2,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 143
  },
  {
    "slug": "strict-fall-length-histogram",
    "title": "Strict Fall Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly decreasing. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-decreasing adjacent pair.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraStrictFallLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictFallLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          2,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 144
  },
  {
    "slug": "strict-fall-earliest-longest",
    "title": "Strict Fall Earliest Longest",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly decreasing. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-decreasing adjacent pair.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraStrictFallEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictFallEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 145
  },
  {
    "slug": "strict-fall-shortest-per-start",
    "title": "Strict Fall Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly decreasing. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-decreasing adjacent pair.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraStrictFallShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictFallShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 146
  },
  {
    "slug": "strict-fall-disjoint-packing",
    "title": "Strict Fall Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it is strictly decreasing. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Partition at every non-decreasing adjacent pair.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraStrictFallDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraStrictFallDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 147
  },
  {
    "slug": "unit-steps-interval-count",
    "title": "Unit Steps Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has absolute difference one between every pair of neighboring values. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Every invalid adjacent difference is a separator.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraUnitStepsIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitStepsIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 8
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 148
  },
  {
    "slug": "unit-steps-coverage-profile",
    "title": "Unit Steps Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has absolute difference one between every pair of neighboring values. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Every invalid adjacent difference is a separator.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitStepsCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitStepsCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          3,
          4,
          3,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 149
  },
  {
    "slug": "unit-steps-length-histogram",
    "title": "Unit Steps Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has absolute difference one between every pair of neighboring values. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Every invalid adjacent difference is a separator.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitStepsLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitStepsLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          2,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 150
  },
  {
    "slug": "unit-steps-earliest-longest",
    "title": "Unit Steps Earliest Longest",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has absolute difference one between every pair of neighboring values. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Every invalid adjacent difference is a separator.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraUnitStepsEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitStepsEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 151
  },
  {
    "slug": "unit-steps-shortest-per-start",
    "title": "Unit Steps Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has absolute difference one between every pair of neighboring values. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Every invalid adjacent difference is a separator.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitStepsShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitStepsShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 152
  },
  {
    "slug": "unit-steps-disjoint-packing",
    "title": "Unit Steps Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has absolute difference one between every pair of neighboring values. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Every invalid adjacent difference is a separator.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraUnitStepsDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUnitStepsDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 153
  },
  {
    "slug": "flat-run-interval-count",
    "title": "Flat Run Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has every value equal. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compress consecutive equal values into runs.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraFlatRunIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFlatRunIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 154
  },
  {
    "slug": "flat-run-coverage-profile",
    "title": "Flat Run Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has every value equal. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compress consecutive equal values into runs.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraFlatRunCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFlatRunCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          4,
          3
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 155
  },
  {
    "slug": "flat-run-length-histogram",
    "title": "Flat Run Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has every value equal. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compress consecutive equal values into runs.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraFlatRunLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFlatRunLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          0,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 156
  },
  {
    "slug": "flat-run-earliest-longest",
    "title": "Flat Run Earliest Longest",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has every value equal. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compress consecutive equal values into runs.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraFlatRunEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFlatRunEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 157
  },
  {
    "slug": "flat-run-shortest-per-start",
    "title": "Flat Run Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has every value equal. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compress consecutive equal values into runs.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraFlatRunShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFlatRunShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 158
  },
  {
    "slug": "flat-run-disjoint-packing",
    "title": "Flat Run Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has every value equal. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compress consecutive equal values into runs.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraFlatRunDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFlatRunDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 159
  },
  {
    "slug": "mirror-values-interval-count",
    "title": "Mirror Values Interval Count",
    "difficulty": "Easy",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it reads identically forward and backward. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Expand around each odd and even center.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Arrays",
      "Easy Practice"
    ],
    "functionName": "extraMirrorValuesIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraMirrorValuesIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 160
  },
  {
    "slug": "mirror-values-coverage-profile",
    "title": "Mirror Values Coverage Profile",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it reads identically forward and backward. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Expand around each odd and even center.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraMirrorValuesCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraMirrorValuesCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          2,
          2,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          4,
          3
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 161
  },
  {
    "slug": "mirror-values-length-histogram",
    "title": "Mirror Values Length Histogram",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it reads identically forward and backward. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Expand around each odd and even center.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraMirrorValuesLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraMirrorValuesLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          0,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 162
  },
  {
    "slug": "mirror-values-earliest-longest",
    "title": "Mirror Values Earliest Longest",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it reads identically forward and backward. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Expand around each odd and even center.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraMirrorValuesEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraMirrorValuesEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 163
  },
  {
    "slug": "mirror-values-shortest-per-start",
    "title": "Mirror Values Shortest Per Start",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it reads identically forward and backward. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Expand around each odd and even center.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraMirrorValuesShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraMirrorValuesShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 164
  },
  {
    "slug": "mirror-values-disjoint-packing",
    "title": "Mirror Values Disjoint Packing",
    "difficulty": "Medium",
    "topic": "arrays",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it reads identically forward and backward. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Expand around each odd and even center.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Arrays",
      "Medium Practice"
    ],
    "functionName": "extraMirrorValuesDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraMirrorValuesDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 165
  },
  {
    "slug": "equal-ends-interval-count",
    "title": "Equal Ends Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its first and last values equal. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group positions by value.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraEqualEndsIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEqualEndsIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 166
  },
  {
    "slug": "equal-ends-coverage-profile",
    "title": "Equal Ends Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its first and last values equal. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group positions by value.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEqualEndsCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEqualEndsCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          2,
          2,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          4,
          3
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 167
  },
  {
    "slug": "equal-ends-length-histogram",
    "title": "Equal Ends Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its first and last values equal. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group positions by value.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEqualEndsLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEqualEndsLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          0,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 168
  },
  {
    "slug": "equal-ends-earliest-longest",
    "title": "Equal Ends Earliest Longest",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its first and last values equal. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group positions by value.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraEqualEndsEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEqualEndsEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 169
  },
  {
    "slug": "equal-ends-shortest-per-start",
    "title": "Equal Ends Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its first and last values equal. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group positions by value.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEqualEndsShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEqualEndsShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 170
  },
  {
    "slug": "equal-ends-disjoint-packing",
    "title": "Equal Ends Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its first and last values equal. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Group positions by value.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEqualEndsDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEqualEndsDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 171
  },
  {
    "slug": "larger-finish-interval-count",
    "title": "Larger Finish Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has last value strictly greater than its first value. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare endpoint ranks; the interior does not affect eligibility.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraLargerFinishIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargerFinishIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 172
  },
  {
    "slug": "larger-finish-coverage-profile",
    "title": "Larger Finish Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has last value strictly greater than its first value. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare endpoint ranks; the interior does not affect eligibility.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraLargerFinishCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargerFinishCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          3,
          3,
          3,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 173
  },
  {
    "slug": "larger-finish-length-histogram",
    "title": "Larger Finish Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has last value strictly greater than its first value. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare endpoint ranks; the interior does not affect eligibility.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraLargerFinishLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargerFinishLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2,
          1,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 174
  },
  {
    "slug": "larger-finish-earliest-longest",
    "title": "Larger Finish Earliest Longest",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has last value strictly greater than its first value. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare endpoint ranks; the interior does not affect eligibility.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraLargerFinishEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargerFinishEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          3
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 175
  },
  {
    "slug": "larger-finish-shortest-per-start",
    "title": "Larger Finish Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has last value strictly greater than its first value. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare endpoint ranks; the interior does not affect eligibility.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraLargerFinishShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargerFinishShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          3,
          2,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 176
  },
  {
    "slug": "larger-finish-disjoint-packing",
    "title": "Larger Finish Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has last value strictly greater than its first value. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Compare endpoint ranks; the interior does not affect eligibility.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraLargerFinishDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargerFinishDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 177
  },
  {
    "slug": "endpoint-peak-interval-count",
    "title": "Endpoint Peak Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the maximum value in the interval. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A larger interior value blocks an endpoint pair.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraEndpointPeakIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointPeakIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 178
  },
  {
    "slug": "endpoint-peak-coverage-profile",
    "title": "Endpoint Peak Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the maximum value in the interval. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A larger interior value blocks an endpoint pair.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointPeakCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointPeakCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          4,
          3
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 179
  },
  {
    "slug": "endpoint-peak-length-histogram",
    "title": "Endpoint Peak Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the maximum value in the interval. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A larger interior value blocks an endpoint pair.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointPeakLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointPeakLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          0,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 180
  },
  {
    "slug": "endpoint-peak-earliest-longest",
    "title": "Endpoint Peak Earliest Longest",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the maximum value in the interval. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A larger interior value blocks an endpoint pair.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointPeakEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointPeakEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 181
  },
  {
    "slug": "endpoint-peak-shortest-per-start",
    "title": "Endpoint Peak Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the maximum value in the interval. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A larger interior value blocks an endpoint pair.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointPeakShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointPeakShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 182
  },
  {
    "slug": "endpoint-peak-disjoint-packing",
    "title": "Endpoint Peak Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the maximum value in the interval. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A larger interior value blocks an endpoint pair.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointPeakDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointPeakDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 183
  },
  {
    "slug": "endpoint-valley-interval-count",
    "title": "Endpoint Valley Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the minimum value in the interval. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A smaller interior value blocks an endpoint pair.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraEndpointValleyIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointValleyIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 184
  },
  {
    "slug": "endpoint-valley-coverage-profile",
    "title": "Endpoint Valley Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the minimum value in the interval. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A smaller interior value blocks an endpoint pair.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointValleyCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointValleyCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          2,
          2,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          4,
          3
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 185
  },
  {
    "slug": "endpoint-valley-length-histogram",
    "title": "Endpoint Valley Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the minimum value in the interval. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A smaller interior value blocks an endpoint pair.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointValleyLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointValleyLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          0,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 186
  },
  {
    "slug": "endpoint-valley-earliest-longest",
    "title": "Endpoint Valley Earliest Longest",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the minimum value in the interval. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A smaller interior value blocks an endpoint pair.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointValleyEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointValleyEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 187
  },
  {
    "slug": "endpoint-valley-shortest-per-start",
    "title": "Endpoint Valley Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the minimum value in the interval. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A smaller interior value blocks an endpoint pair.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointValleyShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointValleyShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 188
  },
  {
    "slug": "endpoint-valley-disjoint-packing",
    "title": "Endpoint Valley Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has both endpoint values equal to the minimum value in the interval. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "A smaller interior value blocks an endpoint pair.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEndpointValleyDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEndpointValleyDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 189
  },
  {
    "slug": "unique-maximum-interval-count",
    "title": "Unique Maximum Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its maximum value occurring exactly once. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current maximum while extending an interval.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraUniqueMaximumIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMaximumIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 15
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 190
  },
  {
    "slug": "unique-maximum-coverage-profile",
    "title": "Unique Maximum Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its maximum value occurring exactly once. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current maximum while extending an interval.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMaximumCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMaximumCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          8,
          9,
          8,
          5
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 191
  },
  {
    "slug": "unique-maximum-length-histogram",
    "title": "Unique Maximum Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its maximum value occurring exactly once. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current maximum while extending an interval.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMaximumLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMaximumLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          4,
          3,
          2,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 192
  },
  {
    "slug": "unique-maximum-earliest-longest",
    "title": "Unique Maximum Earliest Longest",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its maximum value occurring exactly once. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current maximum while extending an interval.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMaximumEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMaximumEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 193
  },
  {
    "slug": "unique-maximum-shortest-per-start",
    "title": "Unique Maximum Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its maximum value occurring exactly once. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current maximum while extending an interval.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMaximumShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMaximumShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 194
  },
  {
    "slug": "unique-maximum-disjoint-packing",
    "title": "Unique Maximum Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its maximum value occurring exactly once. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current maximum while extending an interval.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMaximumDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMaximumDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 195
  },
  {
    "slug": "unique-minimum-interval-count",
    "title": "Unique Minimum Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its minimum value occurring exactly once. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current minimum while extending an interval.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraUniqueMinimumIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMinimumIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 13
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 196
  },
  {
    "slug": "unique-minimum-coverage-profile",
    "title": "Unique Minimum Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its minimum value occurring exactly once. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current minimum while extending an interval.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMinimumCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMinimumCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          3,
          6,
          7,
          7,
          5
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 197
  },
  {
    "slug": "unique-minimum-length-histogram",
    "title": "Unique Minimum Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its minimum value occurring exactly once. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current minimum while extending an interval.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMinimumLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMinimumLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          5,
          4,
          2,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 198
  },
  {
    "slug": "unique-minimum-earliest-longest",
    "title": "Unique Minimum Earliest Longest",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its minimum value occurring exactly once. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current minimum while extending an interval.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMinimumEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMinimumEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 199
  },
  {
    "slug": "unique-minimum-shortest-per-start",
    "title": "Unique Minimum Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its minimum value occurring exactly once. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current minimum while extending an interval.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMinimumShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMinimumShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 200
  },
  {
    "slug": "unique-minimum-disjoint-packing",
    "title": "Unique Minimum Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has its minimum value occurring exactly once. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track occurrences of the current minimum while extending an interval.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraUniqueMinimumDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraUniqueMinimumDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 5
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 201
  },
  {
    "slug": "centered-total-interval-count",
    "title": "Centered Total Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum equal to its length. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract one from every value, then use prefix sums.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraCenteredTotalIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCenteredTotalIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 202
  },
  {
    "slug": "centered-total-coverage-profile",
    "title": "Centered Total Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum equal to its length. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract one from every value, then use prefix sums.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraCenteredTotalCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCenteredTotalCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          2,
          2,
          2,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 203
  },
  {
    "slug": "centered-total-length-histogram",
    "title": "Centered Total Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum equal to its length. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract one from every value, then use prefix sums.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraCenteredTotalLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCenteredTotalLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 204
  },
  {
    "slug": "centered-total-earliest-longest",
    "title": "Centered Total Earliest Longest",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum equal to its length. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract one from every value, then use prefix sums.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraCenteredTotalEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCenteredTotalEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          3
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 205
  },
  {
    "slug": "centered-total-shortest-per-start",
    "title": "Centered Total Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum equal to its length. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract one from every value, then use prefix sums.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraCenteredTotalShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCenteredTotalShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          1,
          2,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 206
  },
  {
    "slug": "centered-total-disjoint-packing",
    "title": "Centered Total Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it has sum equal to its length. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Subtract one from every value, then use prefix sums.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraCenteredTotalDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCenteredTotalDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 207
  },
  {
    "slug": "even-negatives-interval-count",
    "title": "Even Negatives Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains an even number of strictly negative values, including zero negatives. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track the parity of the negative count in every prefix.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraEvenNegativesIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEvenNegativesIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 10
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 6
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 208
  },
  {
    "slug": "even-negatives-coverage-profile",
    "title": "Even Negatives Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains an even number of strictly negative values, including zero negatives. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track the parity of the negative count in every prefix.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEvenNegativesCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEvenNegativesCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          4,
          6,
          6,
          4,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          4,
          3
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 209
  },
  {
    "slug": "even-negatives-length-histogram",
    "title": "Even Negatives Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains an even number of strictly negative values, including zero negatives. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track the parity of the negative count in every prefix.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEvenNegativesLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEvenNegativesLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          4,
          3,
          2,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          2,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 210
  },
  {
    "slug": "even-negatives-earliest-longest",
    "title": "Even Negatives Earliest Longest",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains an even number of strictly negative values, including zero negatives. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track the parity of the negative count in every prefix.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraEvenNegativesEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEvenNegativesEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          0,
          3
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          2
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 211
  },
  {
    "slug": "even-negatives-shortest-per-start",
    "title": "Even Negatives Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains an even number of strictly negative values, including zero negatives. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track the parity of the negative count in every prefix.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEvenNegativesShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEvenNegativesShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          1,
          1,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          1,
          1,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 212
  },
  {
    "slug": "even-negatives-disjoint-packing",
    "title": "Even Negatives Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains an even number of strictly negative values, including zero negatives. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Track the parity of the negative count in every prefix.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraEvenNegativesDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraEvenNegativesDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 4
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 213
  },
  {
    "slug": "one-zero-interval-count",
    "title": "One Zero Interval Count",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly one zero. Using zero-based indices, return the number of eligible intervals. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Record zero positions, or subtract two at-most windows.",
      "Count every valid pair of boundaries once."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraOneZeroIntervalCount",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOneZeroIntervalCount(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 8
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 214
  },
  {
    "slug": "one-zero-coverage-profile",
    "title": "One Zero Coverage Profile",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly one zero. Using zero-based indices, return a list of length len(nums), where position p is the number of eligible intervals containing index p. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Record zero positions, or subtract two at-most windows.",
      "Each eligible interval contributes one range increment; use a difference array."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraOneZeroCoverageProfile",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOneZeroCoverageProfile(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          4,
          6,
          4,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 215
  },
  {
    "slug": "one-zero-length-histogram",
    "title": "One Zero Length Histogram",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly one zero. Using zero-based indices, return a list of length len(nums), whose entry at index L-1 counts eligible intervals of length L. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Record zero positions, or subtract two at-most windows.",
      "Group eligible intervals by boundary distance."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraOneZeroLengthHistogram",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOneZeroLengthHistogram(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          2,
          3,
          2,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 216
  },
  {
    "slug": "one-zero-earliest-longest",
    "title": "One Zero Earliest Longest",
    "difficulty": "Easy",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly one zero. Using zero-based indices, return [left, right] for the longest eligible interval, breaking ties by the smaller left index; right is inclusive; return [-1, -1] when none exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Record zero positions, or subtract two at-most windows.",
      "Compare candidates by negative length, then left endpoint."
    ],
    "tags": [
      "Hashing",
      "Easy Practice"
    ],
    "functionName": "extraOneZeroEarliestLongest",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOneZeroEarliestLongest(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          4
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          -1,
          -1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": [
          -1,
          -1
        ]
      }
    ],
    "order": 217
  },
  {
    "slug": "one-zero-shortest-per-start",
    "title": "One Zero Shortest Per Start",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly one zero. Using zero-based indices, return a list of length len(nums), where entry i is the shortest eligible interval length starting at i, or 0 when no such interval exists. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Record zero positions, or subtract two at-most windows.",
      "For each left boundary retain its nearest valid right boundary."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraOneZeroShortestPerStart",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOneZeroShortestPerStart(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": [
          1,
          2,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          0,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 218
  },
  {
    "slug": "one-zero-disjoint-packing",
    "title": "One Zero Disjoint Packing",
    "difficulty": "Medium",
    "topic": "hashing",
    "description": "Given the integer list `nums`, call a non-empty contiguous interval eligible when it contains exactly one zero. Using zero-based indices, return the maximum number of pairwise non-overlapping eligible intervals you can choose. Distinct intervals are distinguished by their index boundaries, even if their values are identical. Single-element intervals obey the same rule; a condition on neighboring pairs is vacuously true for one element. Return exact integers, not residues.",
    "constraints": [
      "0 <= len(nums) <= 250",
      "-100 <= nums[i] <= 100"
    ],
    "hints": [
      "Record zero positions, or subtract two at-most windows.",
      "Sort eligible intervals by finish time and greedily take the next compatible one."
    ],
    "tags": [
      "Hashing",
      "Medium Practice"
    ],
    "functionName": "extraOneZeroDisjointPacking",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraOneZeroDisjointPacking(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            0,
            1,
            0,
            2,
            -1
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 0
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 219
  },
  {
    "slug": "parity-flip-gap-fixed-length-count",
    "title": "Parity Flip Gap Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraParityFlipGapFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 4
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 220
  },
  {
    "slug": "parity-flip-gap-fixed-length-maximum",
    "title": "Parity Flip Gap Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraParityFlipGapFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 18
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 221
  },
  {
    "slug": "parity-flip-gap-fixed-length-minimum",
    "title": "Parity Flip Gap Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraParityFlipGapFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 12
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 222
  },
  {
    "slug": "parity-flip-gap-target-sum-count",
    "title": "Parity Flip Gap Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraParityFlipGapTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 223
  },
  {
    "slug": "parity-flip-gap-target-sum-longest",
    "title": "Parity Flip Gap Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraParityFlipGapTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 224
  },
  {
    "slug": "parity-flip-gap-target-sum-shortest",
    "title": "Parity Flip Gap Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraParityFlipGapTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 225
  },
  {
    "slug": "parity-flip-gap-lexicographic-witness",
    "title": "Parity Flip Gap Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraParityFlipGapLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": [
          1,
          4,
          7
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": []
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 226
  },
  {
    "slug": "parity-flip-gap-longest-multiplicity",
    "title": "Parity Flip Gap Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraParityFlipGapLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 227
  },
  {
    "slug": "parity-flip-gap-length-census",
    "title": "Parity Flip Gap Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have opposite parity and absolute difference at least 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Remember the last chosen value; parity alone does not capture the gap.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraParityFlipGapLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraParityFlipGapLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          5,
          4,
          2,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 228
  },
  {
    "slug": "rising-residue-fixed-length-count",
    "title": "Rising Residue Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraRisingResidueFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 229
  },
  {
    "slug": "rising-residue-fixed-length-maximum",
    "title": "Rising Residue Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraRisingResidueFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 10
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 230
  },
  {
    "slug": "rising-residue-fixed-length-minimum",
    "title": "Rising Residue Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraRisingResidueFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 10
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 231
  },
  {
    "slug": "rising-residue-target-sum-count",
    "title": "Rising Residue Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraRisingResidueTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 232
  },
  {
    "slug": "rising-residue-target-sum-longest",
    "title": "Rising Residue Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraRisingResidueTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 233
  },
  {
    "slug": "rising-residue-target-sum-shortest",
    "title": "Rising Residue Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraRisingResidueTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 234
  },
  {
    "slug": "rising-residue-lexicographic-witness",
    "title": "Rising Residue Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraRisingResidueLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": [
          1,
          2,
          7
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": []
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 235
  },
  {
    "slug": "rising-residue-longest-multiplicity",
    "title": "Rising Residue Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraRisingResidueLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 236
  },
  {
    "slug": "rising-residue-length-census",
    "title": "Rising Residue Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is larger and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Process indices left to right and key states by the final value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraRisingResidueLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraRisingResidueLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          4,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 237
  },
  {
    "slug": "falling-residue-fixed-length-count",
    "title": "Falling Residue Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraFallingResidueFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 238
  },
  {
    "slug": "falling-residue-fixed-length-maximum",
    "title": "Falling Residue Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraFallingResidueFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 239
  },
  {
    "slug": "falling-residue-fixed-length-minimum",
    "title": "Falling Residue Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraFallingResidueFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 240
  },
  {
    "slug": "falling-residue-target-sum-count",
    "title": "Falling Residue Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraFallingResidueTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 241
  },
  {
    "slug": "falling-residue-target-sum-longest",
    "title": "Falling Residue Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraFallingResidueTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 242
  },
  {
    "slug": "falling-residue-target-sum-shortest",
    "title": "Falling Residue Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraFallingResidueTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 243
  },
  {
    "slug": "falling-residue-lexicographic-witness",
    "title": "Falling Residue Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraFallingResidueLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": []
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": []
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 244
  },
  {
    "slug": "falling-residue-longest-multiplicity",
    "title": "Falling Residue Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraFallingResidueLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 245
  },
  {
    "slug": "falling-residue-length-census",
    "title": "Falling Residue Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and each next selected value is smaller and has a different remainder modulo 3. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Only states whose last value is larger can be extended.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraFallingResidueLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraFallingResidueLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          3,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 246
  },
  {
    "slug": "coprime-neighbors-fixed-length-count",
    "title": "Coprime Neighbors Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraCoprimeNeighborsFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 8
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 247
  },
  {
    "slug": "coprime-neighbors-fixed-length-maximum",
    "title": "Coprime Neighbors Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraCoprimeNeighborsFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 20
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 248
  },
  {
    "slug": "coprime-neighbors-fixed-length-minimum",
    "title": "Coprime Neighbors Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraCoprimeNeighborsFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 10
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 249
  },
  {
    "slug": "coprime-neighbors-target-sum-count",
    "title": "Coprime Neighbors Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraCoprimeNeighborsTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 250
  },
  {
    "slug": "coprime-neighbors-target-sum-longest",
    "title": "Coprime Neighbors Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraCoprimeNeighborsTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 251
  },
  {
    "slug": "coprime-neighbors-target-sum-shortest",
    "title": "Coprime Neighbors Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraCoprimeNeighborsTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 252
  },
  {
    "slug": "coprime-neighbors-lexicographic-witness",
    "title": "Coprime Neighbors Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraCoprimeNeighborsLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": [
          1,
          2,
          7
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": []
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 253
  },
  {
    "slug": "coprime-neighbors-longest-multiplicity",
    "title": "Coprime Neighbors Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraCoprimeNeighborsLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 254
  },
  {
    "slug": "coprime-neighbors-length-census",
    "title": "Coprime Neighbors Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have greatest common divisor 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Precompute which pairs of possible values are coprime.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraCoprimeNeighborsLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraCoprimeNeighborsLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          9,
          8,
          4,
          1
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 255
  },
  {
    "slug": "shared-factor-steps-fixed-length-count",
    "title": "Shared Factor Steps Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSharedFactorStepsFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 256
  },
  {
    "slug": "shared-factor-steps-fixed-length-maximum",
    "title": "Shared Factor Steps Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraSharedFactorStepsFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 257
  },
  {
    "slug": "shared-factor-steps-fixed-length-minimum",
    "title": "Shared Factor Steps Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraSharedFactorStepsFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 258
  },
  {
    "slug": "shared-factor-steps-target-sum-count",
    "title": "Shared Factor Steps Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSharedFactorStepsTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 259
  },
  {
    "slug": "shared-factor-steps-target-sum-longest",
    "title": "Shared Factor Steps Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSharedFactorStepsTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 260
  },
  {
    "slug": "shared-factor-steps-target-sum-shortest",
    "title": "Shared Factor Steps Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSharedFactorStepsTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 261
  },
  {
    "slug": "shared-factor-steps-lexicographic-witness",
    "title": "Shared Factor Steps Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSharedFactorStepsLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": []
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": []
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 262
  },
  {
    "slug": "shared-factor-steps-longest-multiplicity",
    "title": "Shared Factor Steps Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSharedFactorStepsLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 263
  },
  {
    "slug": "shared-factor-steps-length-census",
    "title": "Shared Factor Steps Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values are different and have greatest common divisor greater than 1. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Precompute allowed transitions between values 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSharedFactorStepsLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSharedFactorStepsLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          1,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 264
  },
  {
    "slug": "bounded-rise-fixed-length-count",
    "title": "Bounded Rise Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraBoundedRiseFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 265
  },
  {
    "slug": "bounded-rise-fixed-length-maximum",
    "title": "Bounded Rise Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraBoundedRiseFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 14
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 266
  },
  {
    "slug": "bounded-rise-fixed-length-minimum",
    "title": "Bounded Rise Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraBoundedRiseFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 12
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 267
  },
  {
    "slug": "bounded-rise-target-sum-count",
    "title": "Bounded Rise Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraBoundedRiseTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 268
  },
  {
    "slug": "bounded-rise-target-sum-longest",
    "title": "Bounded Rise Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraBoundedRiseTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 269
  },
  {
    "slug": "bounded-rise-target-sum-shortest",
    "title": "Bounded Rise Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraBoundedRiseTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 270
  },
  {
    "slug": "bounded-rise-lexicographic-witness",
    "title": "Bounded Rise Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraBoundedRiseLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": [
          1,
          4,
          7
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": []
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 271
  },
  {
    "slug": "bounded-rise-longest-multiplicity",
    "title": "Bounded Rise Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraBoundedRiseLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 272
  },
  {
    "slug": "bounded-rise-length-census",
    "title": "Bounded Rise Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the next selected value minus the previous selected value is between 2 and 5 inclusive. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Only four possible predecessor values can extend a state.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraBoundedRiseLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraBoundedRiseLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          4,
          2,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 273
  },
  {
    "slug": "large-zig-jumps-fixed-length-count",
    "title": "Large Zig Jumps Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraLargeZigJumpsFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 274
  },
  {
    "slug": "large-zig-jumps-fixed-length-maximum",
    "title": "Large Zig Jumps Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraLargeZigJumpsFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 12
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 275
  },
  {
    "slug": "large-zig-jumps-fixed-length-minimum",
    "title": "Large Zig Jumps Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraLargeZigJumpsFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 12
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 276
  },
  {
    "slug": "large-zig-jumps-target-sum-count",
    "title": "Large Zig Jumps Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraLargeZigJumpsTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 277
  },
  {
    "slug": "large-zig-jumps-target-sum-longest",
    "title": "Large Zig Jumps Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraLargeZigJumpsTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 278
  },
  {
    "slug": "large-zig-jumps-target-sum-shortest",
    "title": "Large Zig Jumps Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraLargeZigJumpsTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 279
  },
  {
    "slug": "large-zig-jumps-lexicographic-witness",
    "title": "Large Zig Jumps Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraLargeZigJumpsLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": [
          1,
          9,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": []
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 280
  },
  {
    "slug": "large-zig-jumps-longest-multiplicity",
    "title": "Large Zig Jumps Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraLargeZigJumpsLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 281
  },
  {
    "slug": "large-zig-jumps-length-census",
    "title": "Large Zig Jumps Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values differ in absolute value by at least 7. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Transitions can go in either direction; input order still cannot be changed.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraLargeZigJumpsLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraLargeZigJumpsLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          2,
          1,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 282
  },
  {
    "slug": "square-pair-sums-fixed-length-count",
    "title": "Square Pair Sums Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSquarePairSumsFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 3
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 283
  },
  {
    "slug": "square-pair-sums-fixed-length-maximum",
    "title": "Square Pair Sums Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraSquarePairSumsFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 4
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 284
  },
  {
    "slug": "square-pair-sums-fixed-length-minimum",
    "title": "Square Pair Sums Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraSquarePairSumsFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 4
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 285
  },
  {
    "slug": "square-pair-sums-target-sum-count",
    "title": "Square Pair Sums Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSquarePairSumsTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 3
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 286
  },
  {
    "slug": "square-pair-sums-target-sum-longest",
    "title": "Square Pair Sums Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSquarePairSumsTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 2
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 287
  },
  {
    "slug": "square-pair-sums-target-sum-shortest",
    "title": "Square Pair Sums Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSquarePairSumsTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 2
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 288
  },
  {
    "slug": "square-pair-sums-lexicographic-witness",
    "title": "Square Pair Sums Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSquarePairSumsLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": []
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": [
          2,
          2
        ]
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 289
  },
  {
    "slug": "square-pair-sums-longest-multiplicity",
    "title": "Square Pair Sums Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSquarePairSumsLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 2
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 290
  },
  {
    "slug": "square-pair-sums-length-census",
    "title": "Square Pair Sums Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and the sum of each pair of neighboring selected values is a perfect square. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "List the square sums possible for values in 1 through 20.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraSquarePairSumsLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraSquarePairSumsLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          2,
          0,
          0,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          3,
          1
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 291
  },
  {
    "slug": "disjoint-bits-fixed-length-count",
    "title": "Disjoint Bits Fixed Length Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the number of valid subsequences with exactly k elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraDisjointBitsFixedLengthCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsFixedLengthCount(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 3
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 292
  },
  {
    "slug": "disjoint-bits-fixed-length-maximum",
    "title": "Disjoint Bits Fixed Length Maximum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the largest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraDisjointBitsFixedLengthMaximum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsFixedLengthMaximum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 15
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 293
  },
  {
    "slug": "disjoint-bits-fixed-length-minimum",
    "title": "Disjoint Bits Fixed Length Minimum",
    "difficulty": "Medium",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the smallest sum of a valid subsequence with exactly k elements, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Medium Practice"
    ],
    "functionName": "extraDisjointBitsFixedLengthMinimum",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsFixedLengthMinimum(self, nums: List[int], k: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": 7
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 294
  },
  {
    "slug": "disjoint-bits-target-sum-count",
    "title": "Disjoint Bits Target Sum Count",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the number of valid non-empty subsequences with sum exactly target, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraDisjointBitsTargetSumCount",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsTargetSumCount(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": 0
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": 0
      },
      {
        "input": [
          [],
          1
        ],
        "expected": 0
      }
    ],
    "order": 295
  },
  {
    "slug": "disjoint-bits-target-sum-longest",
    "title": "Disjoint Bits Target Sum Longest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the maximum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraDisjointBitsTargetSumLongest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsTargetSumLongest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 296
  },
  {
    "slug": "disjoint-bits-target-sum-shortest",
    "title": "Disjoint Bits Target Sum Shortest",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `target`, return the minimum length of a valid subsequence with sum exactly target, or -1 if none exists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= target <= 4000"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add a sum dimension. Positive values allow you to discard sums above target."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraDisjointBitsTargetSumShortest",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsTargetSumShortest(self, nums: List[int], target: int) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          12
        ],
        "expected": -1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          4
        ],
        "expected": -1
      },
      {
        "input": [
          [],
          1
        ],
        "expected": -1
      }
    ],
    "order": 297
  },
  {
    "slug": "disjoint-bits-lexicographic-witness",
    "title": "Disjoint Bits Lexicographic Witness",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Given `k`, return the lexicographically smallest list of values of any valid subsequence with exactly k elements. Return [] if none exists. Compare value lists, not index lists.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20",
      "1 <= k <= 200"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Compute suffix feasibility by length and preceding value, then greedily choose the smallest feasible next value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraDisjointBitsLexicographicWitness",
    "argTypes": [
      "value",
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsLexicographicWitness(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ],
          3
        ],
        "expected": [
          1,
          4,
          2
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ],
          2
        ],
        "expected": []
      },
      {
        "input": [
          [],
          1
        ],
        "expected": []
      }
    ],
    "order": 298
  },
  {
    "slug": "disjoint-bits-longest-multiplicity",
    "title": "Disjoint Bits Longest Multiplicity",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return the number of valid subsequences that attain the greatest possible length, modulo 1,000,000,007. Return 0 for an empty input.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Store both the best length and the number of ways to attain that length for each final value."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraDisjointBitsLongestMultiplicity",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsLongestMultiplicity(self, nums: List[int]) -> int:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": 1
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": 3
      },
      {
        "input": [
          []
        ],
        "expected": 0
      }
    ],
    "order": 299
  },
  {
    "slug": "disjoint-bits-length-census",
    "title": "Disjoint Bits Length Census",
    "difficulty": "Hard",
    "topic": "dynamic-programming",
    "description": "You are given a list of positive integers `nums`. A valid subsequence chooses one or more indices in strictly increasing order, and neighboring selected values have bitwise AND equal to zero. The rule applies only to neighboring values in the selected subsequence, not to every pair and not necessarily to neighboring input positions. A one-element subsequence is always valid. Subsequences with different index lists count separately, even when their values match. Return a list of length len(nums) whose entry at index L-1 is the number of valid subsequences with exactly L elements, modulo 1,000,000,007.",
    "constraints": [
      "0 <= len(nums) <= 200",
      "1 <= nums[i] <= 20"
    ],
    "hints": [
      "Bit compatibility is a relation on the final selected value.",
      "Use dynamic programming over input prefixes. Never update a state from another state created by the same input index.",
      "Add selected length to the state and combine counts or extrema as appropriate."
    ],
    "tags": [
      "Dynamic Programming",
      "Hard Practice"
    ],
    "functionName": "extraDisjointBitsLengthCensus",
    "argTypes": [
      "value"
    ],
    "returnType": "value",
    "compareMode": "exact",
    "starterCode": "from typing import List\n\nclass Solution:\n    def extraDisjointBitsLengthCensus(self, nums: List[int]) -> List[int]:\n        pass\n",
    "samples": [
      {
        "input": [
          [
            1,
            4,
            9,
            2,
            7
          ]
        ],
        "expected": [
          5,
          5,
          3,
          1,
          0
        ]
      },
      {
        "input": [
          [
            2,
            2,
            2
          ]
        ],
        "expected": [
          3,
          0,
          0
        ]
      },
      {
        "input": [
          []
        ],
        "expected": []
      }
    ],
    "order": 300
  }
];
