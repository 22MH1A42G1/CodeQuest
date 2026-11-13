// Generated problem catalog. Hidden tests live server-side only.
import type { Problem } from './types';

export const PROBLEMS: Problem[] = [
 {
  "slug": "two-sum",
  "title": "Two Sum",
  "difficulty": "Easy",
  "topic": "arrays",
  "description": "Given a list of integers `nums` and an integer `target`, return the indices of the two different elements whose values add up to `target`. Exactly one valid pair exists. Return the indices in any order.",
  "constraints": [
   "2 <= len(nums) <= 10^4",
   "-10^9 <= nums[i] <= 10^9",
   "Exactly one answer exists"
  ],
  "hints": [
   "A brute force checks every pair in O(n^2).",
   "Store each value's index in a dictionary as you scan.",
   "For each x, check whether target - x was already seen."
  ],
  "tags": [
   "Array",
   "Hashing"
  ],
  "functionName": "twoSum",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "sorted",
  "starterCode": "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      2,
      7,
      11,
      15
     ],
     9
    ],
    "expected": [
     0,
     1
    ]
   },
   {
    "input": [
     [
      3,
      2,
      4
     ],
     6
    ],
    "expected": [
     1,
     2
    ]
   },
   {
    "input": [
     [
      3,
      3
     ],
     6
    ],
    "expected": [
     0,
     1
    ]
   }
  ],
  "order": 1
 },
 {
  "slug": "maximum-subarray",
  "title": "Maximum Subarray",
  "difficulty": "Medium",
  "topic": "arrays",
  "description": "Find the contiguous non-empty subarray of `nums` with the largest sum and return that sum.",
  "constraints": [
   "1 <= len(nums) <= 10^5",
   "-10^4 <= nums[i] <= 10^4"
  ],
  "hints": [
   "Think about the best subarray ending at each index.",
   "Kadane's algorithm: either extend the running sum or start fresh."
  ],
  "tags": [
   "Array",
   "Dynamic Programming"
  ],
  "functionName": "maxSubArray",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      -2,
      1,
      -3,
      4,
      -1,
      2,
      1,
      -5,
      4
     ]
    ],
    "expected": 6
   },
   {
    "input": [
     [
      1
     ]
    ],
    "expected": 1
   },
   {
    "input": [
     [
      5,
      4,
      -1,
      7,
      8
     ]
    ],
    "expected": 23
   }
  ],
  "order": 2
 },
 {
  "slug": "best-time-to-buy-and-sell-stock",
  "title": "Best Time to Buy and Sell Stock",
  "difficulty": "Easy",
  "topic": "arrays",
  "description": "`prices[i]` is a stock's price on day i. Choose one day to buy and a later day to sell. Return the maximum profit, or 0 if no profit is possible.",
  "constraints": [
   "1 <= len(prices) <= 10^5",
   "0 <= prices[i] <= 10^4"
  ],
  "hints": [
   "Track the lowest price seen so far.",
   "Profit today = price - lowest so far."
  ],
  "tags": [
   "Array",
   "Greedy"
  ],
  "functionName": "maxProfit",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      7,
      1,
      5,
      3,
      6,
      4
     ]
    ],
    "expected": 5
   },
   {
    "input": [
     [
      7,
      6,
      4,
      3,
      1
     ]
    ],
    "expected": 0
   },
   {
    "input": [
     [
      2,
      4,
      1
     ]
    ],
    "expected": 2
   }
  ],
  "order": 3
 },
 {
  "slug": "move-zeroes",
  "title": "Move Zeroes",
  "difficulty": "Easy",
  "topic": "arrays",
  "description": "Move every 0 in `nums` to the end while keeping the relative order of the non-zero elements. Modify `nums` in place; do not return anything.",
  "constraints": [
   "1 <= len(nums) <= 10^4"
  ],
  "hints": [
   "Use a write pointer for the next non-zero slot.",
   "Swap non-zero values forward as you scan."
  ],
  "tags": [
   "Array",
   "Two Pointers"
  ],
  "functionName": "moveZeroes",
  "argTypes": [
   "value"
  ],
  "returnType": "inplace0",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      0,
      1,
      0,
      3,
      12
     ]
    ],
    "expected": [
     1,
     3,
     12,
     0,
     0
    ]
   },
   {
    "input": [
     [
      0
     ]
    ],
    "expected": [
     0
    ]
   },
   {
    "input": [
     [
      1,
      2,
      3
     ]
    ],
    "expected": [
     1,
     2,
     3
    ]
   }
  ],
  "order": 4
 },
 {
  "slug": "product-of-array-except-self",
  "title": "Product of Array Except Self",
  "difficulty": "Medium",
  "topic": "arrays",
  "description": "Return a list `answer` where `answer[i]` is the product of every element of `nums` except `nums[i]`. Solve it in O(n) time without using division.",
  "constraints": [
   "2 <= len(nums) <= 10^5"
  ],
  "hints": [
   "Compute prefix products from the left.",
   "Multiply by suffix products from the right in a second pass."
  ],
  "tags": [
   "Array",
   "Prefix Sum"
  ],
  "functionName": "productExceptSelf",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3,
      4
     ]
    ],
    "expected": [
     24,
     12,
     8,
     6
    ]
   },
   {
    "input": [
     [
      -1,
      1,
      0,
      -3,
      3
     ]
    ],
    "expected": [
     0,
     0,
     9,
     0,
     0
    ]
   },
   {
    "input": [
     [
      2,
      3
     ]
    ],
    "expected": [
     3,
     2
    ]
   }
  ],
  "order": 5
 },
 {
  "slug": "contains-duplicate",
  "title": "Contains Duplicate",
  "difficulty": "Easy",
  "topic": "hashing",
  "description": "Return `True` if any value appears at least twice in `nums`, otherwise return `False`.",
  "constraints": [
   "1 <= len(nums) <= 10^5"
  ],
  "hints": [
   "A set remembers what you've already seen."
  ],
  "tags": [
   "Array",
   "Hashing"
  ],
  "functionName": "containsDuplicate",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3,
      1
     ]
    ],
    "expected": true
   },
   {
    "input": [
     [
      1,
      2,
      3,
      4
     ]
    ],
    "expected": false
   },
   {
    "input": [
     [
      1,
      1,
      1,
      3,
      3,
      4,
      3,
      2,
      4,
      2
     ]
    ],
    "expected": true
   }
  ],
  "order": 6
 },
 {
  "slug": "majority-element",
  "title": "Majority Element",
  "difficulty": "Easy",
  "topic": "arrays",
  "description": "Return the element that appears more than ⌊n/2⌋ times in `nums`. Such an element always exists.",
  "constraints": [
   "1 <= len(nums) <= 5*10^4"
  ],
  "hints": [
   "Boyer-Moore voting keeps a candidate and a counter."
  ],
  "tags": [
   "Array",
   "Counting"
  ],
  "functionName": "majorityElement",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      3,
      2,
      3
     ]
    ],
    "expected": 3
   },
   {
    "input": [
     [
      2,
      2,
      1,
      1,
      1,
      2,
      2
     ]
    ],
    "expected": 2
   },
   {
    "input": [
     [
      1
     ]
    ],
    "expected": 1
   }
  ],
  "order": 7
 },
 {
  "slug": "valid-palindrome",
  "title": "Valid Palindrome",
  "difficulty": "Easy",
  "topic": "strings",
  "description": "A phrase is a palindrome if, after lowercasing and removing every non-alphanumeric character, it reads the same forwards and backwards. Return whether `s` is a palindrome.",
  "constraints": [
   "1 <= len(s) <= 2*10^5"
  ],
  "hints": [
   "Use two pointers from both ends.",
   "Skip characters that are not letters or digits."
  ],
  "tags": [
   "String",
   "Two Pointers"
  ],
  "functionName": "isPalindrome",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     "A man, a plan, a canal: Panama"
    ],
    "expected": true
   },
   {
    "input": [
     "race a car"
    ],
    "expected": false
   },
   {
    "input": [
     " "
    ],
    "expected": true
   }
  ],
  "order": 8
 },
 {
  "slug": "valid-anagram",
  "title": "Valid Anagram",
  "difficulty": "Easy",
  "topic": "strings",
  "description": "Return `True` if `t` uses exactly the same letters as `s` with the same counts (an anagram), else `False`.",
  "constraints": [
   "1 <= len(s), len(t) <= 5*10^4",
   "lowercase English letters"
  ],
  "hints": [
   "Count characters of both strings and compare."
  ],
  "tags": [
   "String",
   "Hashing"
  ],
  "functionName": "isAnagram",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     "anagram",
     "nagaram"
    ],
    "expected": true
   },
   {
    "input": [
     "rat",
     "car"
    ],
    "expected": false
   },
   {
    "input": [
     "a",
     "ab"
    ],
    "expected": false
   }
  ],
  "order": 9
 },
 {
  "slug": "longest-substring-without-repeating-characters",
  "title": "Longest Substring Without Repeating Characters",
  "difficulty": "Medium",
  "topic": "sliding-window",
  "description": "Return the length of the longest substring of `s` in which no character repeats.",
  "constraints": [
   "0 <= len(s) <= 5*10^4"
  ],
  "hints": [
   "Keep a window with no duplicates.",
   "When a repeat appears, move the left edge past its last position."
  ],
  "tags": [
   "String",
   "Sliding Window",
   "Hashing"
  ],
  "functionName": "lengthOfLongestSubstring",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     "abcabcbb"
    ],
    "expected": 3
   },
   {
    "input": [
     "bbbbb"
    ],
    "expected": 1
   },
   {
    "input": [
     "pwwkew"
    ],
    "expected": 3
   }
  ],
  "order": 10
 },
 {
  "slug": "group-anagrams",
  "title": "Group Anagrams",
  "difficulty": "Medium",
  "topic": "hashing",
  "description": "Group the strings in `strs` so that anagrams are together. Return the groups in any order; strings inside a group may also be in any order.",
  "constraints": [
   "1 <= len(strs) <= 10^4"
  ],
  "hints": [
   "Anagrams share the same sorted form.",
   "Use the sorted string (or letter counts) as a dictionary key."
  ],
  "tags": [
   "String",
   "Hashing"
  ],
  "functionName": "groupAnagrams",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "nested_unordered",
  "starterCode": "class Solution:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      "eat",
      "tea",
      "tan",
      "ate",
      "nat",
      "bat"
     ]
    ],
    "expected": [
     [
      "eat",
      "tea",
      "ate"
     ],
     [
      "tan",
      "nat"
     ],
     [
      "bat"
     ]
    ]
   },
   {
    "input": [
     [
      ""
     ]
    ],
    "expected": [
     [
      ""
     ]
    ]
   },
   {
    "input": [
     [
      "a"
     ]
    ],
    "expected": [
     [
      "a"
     ]
    ]
   }
  ],
  "order": 11
 },
 {
  "slug": "first-unique-character",
  "title": "First Unique Character in a String",
  "difficulty": "Easy",
  "topic": "strings",
  "description": "Return the index of the first character in `s` that appears only once, or -1 if none exists.",
  "constraints": [
   "1 <= len(s) <= 10^5"
  ],
  "hints": [
   "Count every character first, then scan again."
  ],
  "tags": [
   "String",
   "Hashing"
  ],
  "functionName": "firstUniqChar",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def firstUniqChar(self, s: str) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     "leetcode"
    ],
    "expected": 0
   },
   {
    "input": [
     "loveleetcode"
    ],
    "expected": 2
   },
   {
    "input": [
     "aabb"
    ],
    "expected": -1
   }
  ],
  "order": 12
 },
 {
  "slug": "longest-common-prefix",
  "title": "Longest Common Prefix",
  "difficulty": "Easy",
  "topic": "tries",
  "description": "Return the longest prefix shared by every string in `strs`. Return an empty string if there is none.",
  "constraints": [
   "1 <= len(strs) <= 200"
  ],
  "hints": [
   "Shrink a candidate prefix until every word starts with it.",
   "A trie also works: walk down while a node has one child."
  ],
  "tags": [
   "String",
   "Trie"
  ],
  "functionName": "longestCommonPrefix",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      "flower",
      "flow",
      "flight"
     ]
    ],
    "expected": "fl"
   },
   {
    "input": [
     [
      "dog",
      "racecar",
      "car"
     ]
    ],
    "expected": ""
   },
   {
    "input": [
     [
      "alone"
     ]
    ],
    "expected": "alone"
   }
  ],
  "order": 13
 },
 {
  "slug": "binary-search",
  "title": "Binary Search",
  "difficulty": "Easy",
  "topic": "searching",
  "description": "`nums` is sorted in ascending order with distinct values. Return the index of `target`, or -1 if it isn't present. Aim for O(log n).",
  "constraints": [
   "1 <= len(nums) <= 10^4",
   "values are distinct and sorted"
  ],
  "hints": [
   "Compare target with the middle element.",
   "Discard the half that cannot contain target."
  ],
  "tags": [
   "Binary Search"
  ],
  "functionName": "search",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      -1,
      0,
      3,
      5,
      9,
      12
     ],
     9
    ],
    "expected": 4
   },
   {
    "input": [
     [
      -1,
      0,
      3,
      5,
      9,
      12
     ],
     2
    ],
    "expected": -1
   },
   {
    "input": [
     [
      5
     ],
     5
    ],
    "expected": 0
   }
  ],
  "order": 14
 },
 {
  "slug": "search-in-rotated-sorted-array",
  "title": "Search in Rotated Sorted Array",
  "difficulty": "Medium",
  "topic": "searching",
  "description": "A sorted list of distinct integers was rotated at an unknown pivot (e.g. [0,1,2,4,5,6,7] became [4,5,6,7,0,1,2]). Return the index of `target`, or -1. Aim for O(log n).",
  "constraints": [
   "1 <= len(nums) <= 5000",
   "distinct values"
  ],
  "hints": [
   "One half of any midpoint split is always sorted.",
   "Check whether target lies inside the sorted half."
  ],
  "tags": [
   "Binary Search"
  ],
  "functionName": "search",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      4,
      5,
      6,
      7,
      0,
      1,
      2
     ],
     0
    ],
    "expected": 4
   },
   {
    "input": [
     [
      4,
      5,
      6,
      7,
      0,
      1,
      2
     ],
     3
    ],
    "expected": -1
   },
   {
    "input": [
     [
      1
     ],
     0
    ],
    "expected": -1
   }
  ],
  "order": 15
 },
 {
  "slug": "merge-intervals",
  "title": "Merge Intervals",
  "difficulty": "Medium",
  "topic": "sorting",
  "description": "Given a list of `[start, end]` intervals, merge all overlapping intervals and return the result sorted by start.",
  "constraints": [
   "1 <= len(intervals) <= 10^4"
  ],
  "hints": [
   "Sort by start time first.",
   "Merge when the next start is <= the current end."
  ],
  "tags": [
   "Sorting",
   "Array"
  ],
  "functionName": "merge",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      [
       1,
       3
      ],
      [
       2,
       6
      ],
      [
       8,
       10
      ],
      [
       15,
       18
      ]
     ]
    ],
    "expected": [
     [
      1,
      6
     ],
     [
      8,
      10
     ],
     [
      15,
      18
     ]
    ]
   },
   {
    "input": [
     [
      [
       1,
       4
      ],
      [
       4,
       5
      ]
     ]
    ],
    "expected": [
     [
      1,
      5
     ]
    ]
   },
   {
    "input": [
     [
      [
       1,
       4
      ]
     ]
    ],
    "expected": [
     [
      1,
      4
     ]
    ]
   }
  ],
  "order": 16
 },
 {
  "slug": "sort-colors",
  "title": "Sort Colors",
  "difficulty": "Medium",
  "topic": "sorting",
  "description": "`nums` contains only 0, 1 and 2 (red, white, blue). Sort it in place so equal colours are adjacent in the order 0, 1, 2 — without using a library sort.",
  "constraints": [
   "1 <= len(nums) <= 300"
  ],
  "hints": [
   "Dutch national flag: low, mid and high pointers."
  ],
  "tags": [
   "Sorting",
   "Two Pointers"
  ],
  "functionName": "sortColors",
  "argTypes": [
   "value"
  ],
  "returnType": "inplace0",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      2,
      0,
      2,
      1,
      1,
      0
     ]
    ],
    "expected": [
     0,
     0,
     1,
     1,
     2,
     2
    ]
   },
   {
    "input": [
     [
      2,
      0,
      1
     ]
    ],
    "expected": [
     0,
     1,
     2
    ]
   },
   {
    "input": [
     [
      0
     ]
    ],
    "expected": [
     0
    ]
   }
  ],
  "order": 17
 },
 {
  "slug": "find-minimum-in-rotated-sorted-array",
  "title": "Find Minimum in Rotated Sorted Array",
  "difficulty": "Medium",
  "topic": "searching",
  "description": "Return the minimum element of a rotated sorted list of distinct integers in O(log n).",
  "constraints": [
   "1 <= len(nums) <= 5000"
  ],
  "hints": [
   "Compare mid with the right end to decide which half holds the minimum."
  ],
  "tags": [
   "Binary Search"
  ],
  "functionName": "findMin",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def findMin(self, nums: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      3,
      4,
      5,
      1,
      2
     ]
    ],
    "expected": 1
   },
   {
    "input": [
     [
      4,
      5,
      6,
      7,
      0,
      1,
      2
     ]
    ],
    "expected": 0
   },
   {
    "input": [
     [
      11,
      13,
      15,
      17
     ]
    ],
    "expected": 11
   }
  ],
  "order": 18
 },
 {
  "slug": "reverse-linked-list",
  "title": "Reverse Linked List",
  "difficulty": "Easy",
  "topic": "linked-lists",
  "description": "Given the `head` of a singly linked list, reverse the list and return the new head. (Lists are shown as arrays in examples.)",
  "constraints": [
   "0 <= nodes <= 5000"
  ],
  "hints": [
   "Keep prev, curr and next pointers.",
   "Point curr.next to prev, then advance."
  ],
  "tags": [
   "Linked List"
  ],
  "functionName": "reverseList",
  "argTypes": [
   "linkedlist"
  ],
  "returnType": "linkedlist",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3,
      4,
      5
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
      1,
      2
     ]
    ],
    "expected": [
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
  "order": 19
 },
 {
  "slug": "merge-two-sorted-lists",
  "title": "Merge Two Sorted Lists",
  "difficulty": "Easy",
  "topic": "linked-lists",
  "description": "Merge two sorted linked lists `list1` and `list2` into one sorted list and return its head.",
  "constraints": [
   "0 <= nodes <= 50"
  ],
  "hints": [
   "Use a dummy head node.",
   "Attach the smaller node each step."
  ],
  "tags": [
   "Linked List"
  ],
  "functionName": "mergeTwoLists",
  "argTypes": [
   "linkedlist",
   "linkedlist"
  ],
  "returnType": "linkedlist",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      4
     ],
     [
      1,
      3,
      4
     ]
    ],
    "expected": [
     1,
     1,
     2,
     3,
     4,
     4
    ]
   },
   {
    "input": [
     [],
     []
    ],
    "expected": []
   },
   {
    "input": [
     [],
     [
      0
     ]
    ],
    "expected": [
     0
    ]
   }
  ],
  "order": 20
 },
 {
  "slug": "middle-of-linked-list",
  "title": "Middle of the Linked List",
  "difficulty": "Easy",
  "topic": "linked-lists",
  "description": "Return the middle node of the list. If there are two middle nodes, return the second one.",
  "constraints": [
   "1 <= nodes <= 100"
  ],
  "hints": [
   "Slow pointer moves 1 step, fast pointer moves 2."
  ],
  "tags": [
   "Linked List",
   "Two Pointers"
  ],
  "functionName": "middleNode",
  "argTypes": [
   "linkedlist"
  ],
  "returnType": "linkedlist",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3,
      4,
      5
     ]
    ],
    "expected": [
     3,
     4,
     5
    ]
   },
   {
    "input": [
     [
      1,
      2,
      3,
      4,
      5,
      6
     ]
    ],
    "expected": [
     4,
     5,
     6
    ]
   },
   {
    "input": [
     [
      1
     ]
    ],
    "expected": [
     1
    ]
   }
  ],
  "order": 21
 },
 {
  "slug": "remove-nth-node-from-end",
  "title": "Remove Nth Node From End of List",
  "difficulty": "Medium",
  "topic": "linked-lists",
  "description": "Remove the `n`-th node from the end of the list and return its head.",
  "constraints": [
   "1 <= n <= nodes <= 30"
  ],
  "hints": [
   "Move a lead pointer n steps ahead first.",
   "Then move both pointers until the lead reaches the end."
  ],
  "tags": [
   "Linked List",
   "Two Pointers"
  ],
  "functionName": "removeNthFromEnd",
  "argTypes": [
   "linkedlist",
   "value"
  ],
  "returnType": "linkedlist",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3,
      4,
      5
     ],
     2
    ],
    "expected": [
     1,
     2,
     3,
     5
    ]
   },
   {
    "input": [
     [
      1
     ],
     1
    ],
    "expected": []
   },
   {
    "input": [
     [
      1,
      2
     ],
     1
    ],
    "expected": [
     1
    ]
   }
  ],
  "order": 22
 },
 {
  "slug": "linked-list-cycle",
  "title": "Linked List Cycle",
  "difficulty": "Easy",
  "topic": "linked-lists",
  "description": "Return `True` if the linked list contains a cycle. In tests, `pos` is the index the tail connects back to (-1 means no cycle); `pos` is NOT passed to your function.",
  "constraints": [
   "0 <= nodes <= 10^4"
  ],
  "hints": [
   "Floyd's tortoise and hare: if they meet, there is a cycle."
  ],
  "tags": [
   "Linked List",
   "Two Pointers"
  ],
  "functionName": "hasCycle",
  "argTypes": [
   "cyclelist"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      [
       3,
       2,
       0,
       -4
      ],
      1
     ]
    ],
    "expected": true
   },
   {
    "input": [
     [
      [
       1,
       2
      ],
      0
     ]
    ],
    "expected": true
   },
   {
    "input": [
     [
      [
       1
      ],
      -1
     ]
    ],
    "expected": false
   }
  ],
  "order": 23
 },
 {
  "slug": "valid-parentheses",
  "title": "Valid Parentheses",
  "difficulty": "Easy",
  "topic": "stacks",
  "description": "`s` contains only the characters `()[]{}`. Return whether every bracket is closed by the same type in the correct order.",
  "constraints": [
   "1 <= len(s) <= 10^4"
  ],
  "hints": [
   "Push opening brackets onto a stack.",
   "A closing bracket must match the top of the stack."
  ],
  "tags": [
   "Stack",
   "String"
  ],
  "functionName": "isValid",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def isValid(self, s: str) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     "()"
    ],
    "expected": true
   },
   {
    "input": [
     "()[]{}"
    ],
    "expected": true
   },
   {
    "input": [
     "(]"
    ],
    "expected": false
   }
  ],
  "order": 24
 },
 {
  "slug": "daily-temperatures",
  "title": "Daily Temperatures",
  "difficulty": "Medium",
  "topic": "stacks",
  "description": "For each day in `temperatures`, return how many days you must wait for a warmer temperature (0 if never).",
  "constraints": [
   "1 <= len <= 10^5"
  ],
  "hints": [
   "Keep a stack of indices with decreasing temperatures."
  ],
  "tags": [
   "Stack",
   "Monotonic Stack"
  ],
  "functionName": "dailyTemperatures",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      73,
      74,
      75,
      71,
      69,
      72,
      76,
      73
     ]
    ],
    "expected": [
     1,
     1,
     4,
     2,
     1,
     1,
     0,
     0
    ]
   },
   {
    "input": [
     [
      30,
      40,
      50,
      60
     ]
    ],
    "expected": [
     1,
     1,
     1,
     0
    ]
   },
   {
    "input": [
     [
      30,
      60,
      90
     ]
    ],
    "expected": [
     1,
     1,
     0
    ]
   }
  ],
  "order": 25
 },
 {
  "slug": "min-stack",
  "title": "Min Stack",
  "difficulty": "Medium",
  "topic": "stacks",
  "description": "Design a class `MinStack` supporting `push(val)`, `pop()`, `top()` and `getMin()` — each in O(1) time. Tests call the methods listed in `ops` with arguments from `args`; the expected output lists each call's return value (None for constructors and void methods).",
  "constraints": [
   "Methods pop, top and getMin are called on non-empty stacks"
  ],
  "hints": [
   "Store the current minimum alongside each pushed value."
  ],
  "tags": [
   "Stack",
   "Design"
  ],
  "functionName": "MinStack",
  "argTypes": [
   "design"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class MinStack:\n\n    def __init__(self):\n        pass\n\n    def push(self, val: int) -> None:\n        pass\n\n    def pop(self) -> None:\n        pass\n\n    def top(self) -> int:\n        pass\n\n    def getMin(self) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      "MinStack",
      "push",
      "push",
      "push",
      "getMin",
      "pop",
      "top",
      "getMin"
     ],
     [
      [],
      [
       -2
      ],
      [
       0
      ],
      [
       -3
      ],
      [],
      [],
      [],
      []
     ]
    ],
    "expected": [
     null,
     null,
     null,
     null,
     -3,
     null,
     0,
     -2
    ]
   },
   {
    "input": [
     [
      "MinStack",
      "push",
      "getMin",
      "top"
     ],
     [
      [],
      [
       5
      ],
      [],
      []
     ]
    ],
    "expected": [
     null,
     null,
     5,
     5
    ]
   }
  ],
  "order": 26
 },
 {
  "slug": "implement-queue-using-stacks",
  "title": "Implement Queue using Stacks",
  "difficulty": "Easy",
  "topic": "queues",
  "description": "Implement a first-in-first-out queue `MyQueue` using only two stacks, with `push(x)`, `pop()`, `peek()` and `empty()`. Tests call methods from `ops` with `args`.",
  "constraints": [
   "All pop/peek calls are valid"
  ],
  "hints": [
   "Pour the input stack into the output stack only when output is empty."
  ],
  "tags": [
   "Queue",
   "Stack",
   "Design"
  ],
  "functionName": "MyQueue",
  "argTypes": [
   "design"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class MyQueue:\n\n    def __init__(self):\n        pass\n\n    def push(self, x: int) -> None:\n        pass\n\n    def pop(self) -> int:\n        pass\n\n    def peek(self) -> int:\n        pass\n\n    def empty(self) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      "MyQueue",
      "push",
      "push",
      "peek",
      "pop",
      "empty"
     ],
     [
      [],
      [
       1
      ],
      [
       2
      ],
      [],
      [],
      []
     ]
    ],
    "expected": [
     null,
     null,
     null,
     1,
     1,
     false
    ]
   }
  ],
  "order": 27
 },
 {
  "slug": "evaluate-reverse-polish-notation",
  "title": "Evaluate Reverse Polish Notation",
  "difficulty": "Medium",
  "topic": "stacks",
  "description": "Evaluate an arithmetic expression written in Reverse Polish Notation. Operators are + - * /; division truncates toward zero.",
  "constraints": [
   "1 <= len(tokens) <= 10^4"
  ],
  "hints": [
   "Push numbers; on an operator pop two and push the result."
  ],
  "tags": [
   "Stack"
  ],
  "functionName": "evalRPN",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def evalRPN(self, tokens: List[str]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      "2",
      "1",
      "+",
      "3",
      "*"
     ]
    ],
    "expected": 9
   },
   {
    "input": [
     [
      "4",
      "13",
      "5",
      "/",
      "+"
     ]
    ],
    "expected": 6
   },
   {
    "input": [
     [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+"
     ]
    ],
    "expected": 22
   }
  ],
  "order": 28
 },
 {
  "slug": "maximum-depth-of-binary-tree",
  "title": "Maximum Depth of Binary Tree",
  "difficulty": "Easy",
  "topic": "trees",
  "description": "Return the number of nodes along the longest path from the root down to a leaf. Trees are given in level order, with null for missing children.",
  "constraints": [
   "0 <= nodes <= 10^4"
  ],
  "hints": [
   "depth(node) = 1 + max(depth(left), depth(right))."
  ],
  "tags": [
   "Tree",
   "DFS"
  ],
  "functionName": "maxDepth",
  "argTypes": [
   "tree"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      3,
      9,
      20,
      null,
      null,
      15,
      7
     ]
    ],
    "expected": 3
   },
   {
    "input": [
     [
      1,
      null,
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
  "order": 29
 },
 {
  "slug": "invert-binary-tree",
  "title": "Invert Binary Tree",
  "difficulty": "Easy",
  "topic": "trees",
  "description": "Mirror the tree (swap every node's left and right children) and return its root.",
  "constraints": [
   "0 <= nodes <= 100"
  ],
  "hints": [
   "Swap children, then recurse on both sides."
  ],
  "tags": [
   "Tree",
   "DFS"
  ],
  "functionName": "invertTree",
  "argTypes": [
   "tree"
  ],
  "returnType": "tree",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      4,
      2,
      7,
      1,
      3,
      6,
      9
     ]
    ],
    "expected": [
     4,
     7,
     2,
     9,
     6,
     3,
     1
    ]
   },
   {
    "input": [
     [
      2,
      1,
      3
     ]
    ],
    "expected": [
     2,
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
  "order": 30
 },
 {
  "slug": "binary-tree-level-order-traversal",
  "title": "Binary Tree Level Order Traversal",
  "difficulty": "Medium",
  "topic": "trees",
  "description": "Return the values of the tree level by level, left to right, as a list of lists.",
  "constraints": [
   "0 <= nodes <= 2000"
  ],
  "hints": [
   "Use a queue (BFS) and process one level at a time."
  ],
  "tags": [
   "Tree",
   "BFS"
  ],
  "functionName": "levelOrder",
  "argTypes": [
   "tree"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      3,
      9,
      20,
      null,
      null,
      15,
      7
     ]
    ],
    "expected": [
     [
      3
     ],
     [
      9,
      20
     ],
     [
      15,
      7
     ]
    ]
   },
   {
    "input": [
     [
      1
     ]
    ],
    "expected": [
     [
      1
     ]
    ]
   },
   {
    "input": [
     []
    ],
    "expected": []
   }
  ],
  "order": 31
 },
 {
  "slug": "validate-binary-search-tree",
  "title": "Validate Binary Search Tree",
  "difficulty": "Medium",
  "topic": "bst",
  "description": "Return `True` if the tree is a valid binary search tree: every left subtree holds strictly smaller values and every right subtree strictly larger values.",
  "constraints": [
   "1 <= nodes <= 10^4"
  ],
  "hints": [
   "Pass a valid (low, high) range down the recursion."
  ],
  "tags": [
   "Tree",
   "BST",
   "DFS"
  ],
  "functionName": "isValidBST",
  "argTypes": [
   "tree"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      2,
      1,
      3
     ]
    ],
    "expected": true
   },
   {
    "input": [
     [
      5,
      1,
      4,
      null,
      null,
      3,
      6
     ]
    ],
    "expected": false
   },
   {
    "input": [
     [
      1
     ]
    ],
    "expected": true
   }
  ],
  "order": 32
 },
 {
  "slug": "number-of-islands",
  "title": "Number of Islands",
  "difficulty": "Medium",
  "topic": "graphs",
  "description": "Given a grid of \"1\" (land) and \"0\" (water), count the islands. An island is land connected horizontally or vertically.",
  "constraints": [
   "1 <= rows, cols <= 300"
  ],
  "hints": [
   "When you find land, flood-fill (DFS/BFS) the whole island and count once."
  ],
  "tags": [
   "Graph",
   "DFS",
   "BFS",
   "Matrix"
  ],
  "functionName": "numIslands",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def numIslands(self, grid: List[List[str]]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      [
       "1",
       "1",
       "0"
      ],
      [
       "1",
       "0",
       "0"
      ],
      [
       "0",
       "0",
       "1"
      ]
     ]
    ],
    "expected": 2
   },
   {
    "input": [
     [
      [
       "1",
       "1",
       "1"
      ],
      [
       "0",
       "1",
       "0"
      ],
      [
       "1",
       "1",
       "1"
      ]
     ]
    ],
    "expected": 1
   },
   {
    "input": [
     [
      [
       "0"
      ]
     ]
    ],
    "expected": 0
   }
  ],
  "order": 33
 },
 {
  "slug": "course-schedule",
  "title": "Course Schedule",
  "difficulty": "Medium",
  "topic": "graphs",
  "description": "There are `numCourses` courses labelled 0..n-1. `prerequisites[i] = [a, b]` means you must take b before a. Return whether you can finish every course.",
  "constraints": [
   "1 <= numCourses <= 2000"
  ],
  "hints": [
   "This is cycle detection in a directed graph.",
   "Kahn's algorithm: repeatedly remove nodes with in-degree 0."
  ],
  "tags": [
   "Graph",
   "Topological Sort"
  ],
  "functionName": "canFinish",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     2,
     [
      [
       1,
       0
      ]
     ]
    ],
    "expected": true
   },
   {
    "input": [
     2,
     [
      [
       1,
       0
      ],
      [
       0,
       1
      ]
     ]
    ],
    "expected": false
   },
   {
    "input": [
     3,
     []
    ],
    "expected": true
   }
  ],
  "order": 34
 },
 {
  "slug": "shortest-path-in-binary-matrix",
  "title": "Shortest Path in Binary Matrix",
  "difficulty": "Medium",
  "topic": "graphs",
  "description": "In an n×n grid of 0 (open) and 1 (blocked), return the number of cells on the shortest path from the top-left to the bottom-right, moving in any of 8 directions. Return -1 if no path exists.",
  "constraints": [
   "1 <= n <= 100"
  ],
  "hints": [
   "BFS finds shortest paths in unweighted graphs."
  ],
  "tags": [
   "Graph",
   "BFS",
   "Matrix"
  ],
  "functionName": "shortestPathBinaryMatrix",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      [
       0,
       1
      ],
      [
       1,
       0
      ]
     ]
    ],
    "expected": 2
   },
   {
    "input": [
     [
      [
       0,
       0,
       0
      ],
      [
       1,
       1,
       0
      ],
      [
       1,
       1,
       0
      ]
     ]
    ],
    "expected": 4
   },
   {
    "input": [
     [
      [
       1,
       0,
       0
      ],
      [
       1,
       1,
       0
      ],
      [
       1,
       1,
       0
      ]
     ]
    ],
    "expected": -1
   }
  ],
  "order": 35
 },
 {
  "slug": "clone-graph",
  "title": "Clone Graph",
  "difficulty": "Medium",
  "topic": "graphs",
  "description": "Return a deep copy of a connected undirected graph. Each `Node` has `val` and `neighbors`. In tests the graph is an adjacency list where index i holds the neighbours of the node with value i+1.",
  "constraints": [
   "0 <= nodes <= 100"
  ],
  "hints": [
   "Map each original node to its copy in a dictionary.",
   "DFS/BFS and create copies lazily."
  ],
  "tags": [
   "Graph",
   "Hashing",
   "DFS"
  ],
  "functionName": "cloneGraph",
  "argTypes": [
   "graph"
  ],
  "returnType": "graph",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      [
       2,
       4
      ],
      [
       1,
       3
      ],
      [
       2,
       4
      ],
      [
       1,
       3
      ]
     ]
    ],
    "expected": [
     [
      2,
      4
     ],
     [
      1,
      3
     ],
     [
      2,
      4
     ],
     [
      1,
      3
     ]
    ]
   },
   {
    "input": [
     [
      []
     ]
    ],
    "expected": [
     []
    ]
   },
   {
    "input": [
     []
    ],
    "expected": []
   }
  ],
  "order": 36
 },
 {
  "slug": "climbing-stairs",
  "title": "Climbing Stairs",
  "difficulty": "Easy",
  "topic": "dynamic-programming",
  "description": "You climb a staircase of `n` steps, taking 1 or 2 steps at a time. In how many distinct ways can you reach the top?",
  "constraints": [
   "1 <= n <= 45"
  ],
  "hints": [
   "ways(n) = ways(n-1) + ways(n-2)."
  ],
  "tags": [
   "Dynamic Programming",
   "Recursion"
  ],
  "functionName": "climbStairs",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     2
    ],
    "expected": 2
   },
   {
    "input": [
     3
    ],
    "expected": 3
   },
   {
    "input": [
     1
    ],
    "expected": 1
   }
  ],
  "order": 37
 },
 {
  "slug": "house-robber",
  "title": "House Robber",
  "difficulty": "Medium",
  "topic": "dynamic-programming",
  "description": "Each house has `nums[i]` money. You cannot rob two adjacent houses. Return the most money you can rob.",
  "constraints": [
   "1 <= len(nums) <= 100"
  ],
  "hints": [
   "At each house: skip it, or rob it plus the best from two houses back."
  ],
  "tags": [
   "Dynamic Programming"
  ],
  "functionName": "rob",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def rob(self, nums: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3,
      1
     ]
    ],
    "expected": 4
   },
   {
    "input": [
     [
      2,
      7,
      9,
      3,
      1
     ]
    ],
    "expected": 12
   },
   {
    "input": [
     [
      5
     ]
    ],
    "expected": 5
   }
  ],
  "order": 38
 },
 {
  "slug": "coin-change",
  "title": "Coin Change",
  "difficulty": "Medium",
  "topic": "dynamic-programming",
  "description": "Return the fewest coins from `coins` needed to make `amount`, or -1 if impossible. You have unlimited coins of each type.",
  "constraints": [
   "1 <= len(coins) <= 12",
   "0 <= amount <= 10^4"
  ],
  "hints": [
   "dp[x] = min over coins c of dp[x-c] + 1."
  ],
  "tags": [
   "Dynamic Programming"
  ],
  "functionName": "coinChange",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      5
     ],
     11
    ],
    "expected": 3
   },
   {
    "input": [
     [
      2
     ],
     3
    ],
    "expected": -1
   },
   {
    "input": [
     [
      1
     ],
     0
    ],
    "expected": 0
   }
  ],
  "order": 39
 },
 {
  "slug": "longest-increasing-subsequence",
  "title": "Longest Increasing Subsequence",
  "difficulty": "Medium",
  "topic": "dynamic-programming",
  "description": "Return the length of the longest strictly increasing subsequence of `nums`.",
  "constraints": [
   "1 <= len(nums) <= 2500"
  ],
  "hints": [
   "O(n^2): dp[i] = 1 + max dp[j] for j < i with nums[j] < nums[i].",
   "O(n log n): maintain tails with binary search."
  ],
  "tags": [
   "Dynamic Programming",
   "Binary Search"
  ],
  "functionName": "lengthOfLIS",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def lengthOfLIS(self, nums: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      10,
      9,
      2,
      5,
      3,
      7,
      101,
      18
     ]
    ],
    "expected": 4
   },
   {
    "input": [
     [
      0,
      1,
      0,
      3,
      2,
      3
     ]
    ],
    "expected": 4
   },
   {
    "input": [
     [
      7,
      7,
      7,
      7
     ]
    ],
    "expected": 1
   }
  ],
  "order": 40
 },
 {
  "slug": "longest-common-subsequence",
  "title": "Longest Common Subsequence",
  "difficulty": "Medium",
  "topic": "dynamic-programming",
  "description": "Return the length of the longest subsequence common to `text1` and `text2`.",
  "constraints": [
   "1 <= len <= 1000"
  ],
  "hints": [
   "2D table: match → diagonal + 1, else max of top and left."
  ],
  "tags": [
   "Dynamic Programming",
   "String"
  ],
  "functionName": "longestCommonSubsequence",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     "abcde",
     "ace"
    ],
    "expected": 3
   },
   {
    "input": [
     "abc",
     "abc"
    ],
    "expected": 3
   },
   {
    "input": [
     "abc",
     "def"
    ],
    "expected": 0
   }
  ],
  "order": 41
 },
 {
  "slug": "unique-paths",
  "title": "Unique Paths",
  "difficulty": "Medium",
  "topic": "dynamic-programming",
  "description": "A robot at the top-left of an m×n grid moves only right or down. How many unique paths reach the bottom-right?",
  "constraints": [
   "1 <= m, n <= 100"
  ],
  "hints": [
   "paths(i,j) = paths(i-1,j) + paths(i,j-1)."
  ],
  "tags": [
   "Dynamic Programming",
   "Math"
  ],
  "functionName": "uniquePaths",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     3,
     7
    ],
    "expected": 28
   },
   {
    "input": [
     3,
     2
    ],
    "expected": 3
   },
   {
    "input": [
     1,
     1
    ],
    "expected": 1
   }
  ],
  "order": 42
 },
 {
  "slug": "container-with-most-water",
  "title": "Container With Most Water",
  "difficulty": "Medium",
  "topic": "two-pointers",
  "description": "`height[i]` is the height of a vertical line at x = i. Pick two lines that, with the x-axis, hold the most water. Return that amount.",
  "constraints": [
   "2 <= len <= 10^5"
  ],
  "hints": [
   "Start with the widest pair and move the shorter line inward."
  ],
  "tags": [
   "Two Pointers",
   "Greedy"
  ],
  "functionName": "maxArea",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      8,
      6,
      2,
      5,
      4,
      8,
      3,
      7
     ]
    ],
    "expected": 49
   },
   {
    "input": [
     [
      1,
      1
     ]
    ],
    "expected": 1
   },
   {
    "input": [
     [
      4,
      3,
      2,
      1,
      4
     ]
    ],
    "expected": 16
   }
  ],
  "order": 43
 },
 {
  "slug": "three-sum",
  "title": "3Sum",
  "difficulty": "Medium",
  "topic": "two-pointers",
  "description": "Return every unique triplet `[a, b, c]` from `nums` with a + b + c = 0. Triplets and their order may be in any order, but no duplicates.",
  "constraints": [
   "3 <= len <= 3000"
  ],
  "hints": [
   "Sort, fix one number, then use two pointers for the rest.",
   "Skip equal neighbours to avoid duplicates."
  ],
  "tags": [
   "Two Pointers",
   "Sorting"
  ],
  "functionName": "threeSum",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "nested_unordered",
  "starterCode": "class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      -1,
      0,
      1,
      2,
      -1,
      -4
     ]
    ],
    "expected": [
     [
      -1,
      0,
      1
     ],
     [
      -1,
      -1,
      2
     ]
    ]
   },
   {
    "input": [
     [
      0,
      1,
      1
     ]
    ],
    "expected": []
   },
   {
    "input": [
     [
      0,
      0,
      0
     ]
    ],
    "expected": [
     [
      0,
      0,
      0
     ]
    ]
   }
  ],
  "order": 44
 },
 {
  "slug": "minimum-size-subarray-sum",
  "title": "Minimum Size Subarray Sum",
  "difficulty": "Medium",
  "topic": "sliding-window",
  "description": "Return the minimal length of a contiguous subarray whose sum is at least `target`, or 0 if none exists. All numbers are positive.",
  "constraints": [
   "1 <= len <= 10^5"
  ],
  "hints": [
   "Grow the window right; shrink from the left while the sum is large enough."
  ],
  "tags": [
   "Sliding Window"
  ],
  "functionName": "minSubArrayLen",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def minSubArrayLen(self, target: int, nums: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     7,
     [
      2,
      3,
      1,
      2,
      4,
      3
     ]
    ],
    "expected": 2
   },
   {
    "input": [
     4,
     [
      1,
      4,
      4
     ]
    ],
    "expected": 1
   },
   {
    "input": [
     11,
     [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
     ]
    ],
    "expected": 0
   }
  ],
  "order": 45
 },
 {
  "slug": "maximum-sum-subarray-of-size-k",
  "title": "Maximum Sum Subarray of Size K",
  "difficulty": "Easy",
  "topic": "sliding-window",
  "description": "Return the largest sum of any contiguous subarray of exactly `k` elements.",
  "constraints": [
   "1 <= k <= len(nums) <= 10^5"
  ],
  "hints": [
   "Slide the window: add the new element, subtract the one leaving."
  ],
  "tags": [
   "Sliding Window"
  ],
  "functionName": "maxSumK",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def maxSumK(self, nums: List[int], k: int) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      2,
      1,
      5,
      1,
      3,
      2
     ],
     3
    ],
    "expected": 9
   },
   {
    "input": [
     [
      2,
      3,
      4,
      1,
      5
     ],
     2
    ],
    "expected": 7
   },
   {
    "input": [
     [
      5
     ],
     1
    ],
    "expected": 5
   }
  ],
  "order": 46
 },
 {
  "slug": "top-k-frequent-elements",
  "title": "Top K Frequent Elements",
  "difficulty": "Medium",
  "topic": "heaps",
  "description": "Return the `k` most frequent elements of `nums` in any order. The answer is unique.",
  "constraints": [
   "1 <= k <= distinct values"
  ],
  "hints": [
   "Count with a dictionary, then use a heap or bucket sort."
  ],
  "tags": [
   "Heap",
   "Hashing"
  ],
  "functionName": "topKFrequent",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "sorted",
  "starterCode": "class Solution:\n    def topKFrequent(self, nums: List[int], k: int) -> List[int]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      1,
      1,
      2,
      2,
      3
     ],
     2
    ],
    "expected": [
     1,
     2
    ]
   },
   {
    "input": [
     [
      1
     ],
     1
    ],
    "expected": [
     1
    ]
   },
   {
    "input": [
     [
      4,
      4,
      5
     ],
     1
    ],
    "expected": [
     4
    ]
   }
  ],
  "order": 47
 },
 {
  "slug": "kth-largest-element",
  "title": "Kth Largest Element in an Array",
  "difficulty": "Medium",
  "topic": "heaps",
  "description": "Return the `k`-th largest element of `nums` (in sorted order, not the k-th distinct).",
  "constraints": [
   "1 <= k <= len <= 10^5"
  ],
  "hints": [
   "Keep a min-heap of size k; its top is the answer."
  ],
  "tags": [
   "Heap",
   "Sorting"
  ],
  "functionName": "findKthLargest",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      3,
      2,
      1,
      5,
      6,
      4
     ],
     2
    ],
    "expected": 5
   },
   {
    "input": [
     [
      3,
      2,
      3,
      1,
      2,
      4,
      5,
      5,
      6
     ],
     4
    ],
    "expected": 4
   },
   {
    "input": [
     [
      1
     ],
     1
    ],
    "expected": 1
   }
  ],
  "order": 48
 },
 {
  "slug": "longest-consecutive-sequence",
  "title": "Longest Consecutive Sequence",
  "difficulty": "Medium",
  "topic": "hashing",
  "description": "Return the length of the longest run of consecutive integers that can be formed from `nums` (order in the list doesn't matter). Aim for O(n).",
  "constraints": [
   "0 <= len <= 10^5"
  ],
  "hints": [
   "Put everything in a set; only start counting from numbers with no left neighbour."
  ],
  "tags": [
   "Hashing"
  ],
  "functionName": "longestConsecutive",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      100,
      4,
      200,
      1,
      3,
      2
     ]
    ],
    "expected": 4
   },
   {
    "input": [
     [
      0,
      3,
      7,
      2,
      5,
      8,
      4,
      6,
      0,
      1
     ]
    ],
    "expected": 9
   },
   {
    "input": [
     []
    ],
    "expected": 0
   }
  ],
  "order": 49
 },
 {
  "slug": "subsets",
  "title": "Subsets",
  "difficulty": "Medium",
  "topic": "backtracking",
  "description": "Return every subset (the power set) of the distinct integers in `nums`, in any order.",
  "constraints": [
   "1 <= len <= 10"
  ],
  "hints": [
   "At each index choose: include the number or skip it."
  ],
  "tags": [
   "Backtracking",
   "Recursion"
  ],
  "functionName": "subsets",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "nested_unordered",
  "starterCode": "class Solution:\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3
     ]
    ],
    "expected": [
     [],
     [
      1
     ],
     [
      2
     ],
     [
      1,
      2
     ],
     [
      3
     ],
     [
      1,
      3
     ],
     [
      2,
      3
     ],
     [
      1,
      2,
      3
     ]
    ]
   },
   {
    "input": [
     [
      0
     ]
    ],
    "expected": [
     [],
     [
      0
     ]
    ]
   },
   {
    "input": [
     [
      5,
      6
     ]
    ],
    "expected": [
     [],
     [
      5
     ],
     [
      6
     ],
     [
      5,
      6
     ]
    ]
   }
  ],
  "order": 50
 },
 {
  "slug": "permutations",
  "title": "Permutations",
  "difficulty": "Medium",
  "topic": "backtracking",
  "description": "Return every ordering of the distinct integers in `nums`, in any order.",
  "constraints": [
   "1 <= len <= 6"
  ],
  "hints": [
   "Build the permutation one position at a time, marking used numbers."
  ],
  "tags": [
   "Backtracking"
  ],
  "functionName": "permute",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "perm_list",
  "starterCode": "class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3
     ]
    ],
    "expected": [
     [
      1,
      2,
      3
     ],
     [
      1,
      3,
      2
     ],
     [
      2,
      1,
      3
     ],
     [
      2,
      3,
      1
     ],
     [
      3,
      1,
      2
     ],
     [
      3,
      2,
      1
     ]
    ]
   },
   {
    "input": [
     [
      0,
      1
     ]
    ],
    "expected": [
     [
      0,
      1
     ],
     [
      1,
      0
     ]
    ]
   },
   {
    "input": [
     [
      1
     ]
    ],
    "expected": [
     [
      1
     ]
    ]
   }
  ],
  "order": 51
 },
 {
  "slug": "jump-game",
  "title": "Jump Game",
  "difficulty": "Medium",
  "topic": "greedy",
  "description": "Starting at index 0, `nums[i]` is the farthest jump from i. Return whether you can reach the last index.",
  "constraints": [
   "1 <= len <= 10^4"
  ],
  "hints": [
   "Track the farthest index reachable so far."
  ],
  "tags": [
   "Greedy"
  ],
  "functionName": "canJump",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      2,
      3,
      1,
      1,
      4
     ]
    ],
    "expected": true
   },
   {
    "input": [
     [
      3,
      2,
      1,
      0,
      4
     ]
    ],
    "expected": false
   },
   {
    "input": [
     [
      0
     ]
    ],
    "expected": true
   }
  ],
  "order": 52
 },
 {
  "slug": "fibonacci-number",
  "title": "Fibonacci Number",
  "difficulty": "Easy",
  "topic": "recursion",
  "description": "Return F(n), where F(0) = 0, F(1) = 1 and F(n) = F(n-1) + F(n-2).",
  "constraints": [
   "0 <= n <= 30"
  ],
  "hints": [
   "Recursion works, but memoize to avoid repeated work."
  ],
  "tags": [
   "Recursion",
   "Dynamic Programming"
  ],
  "functionName": "fib",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def fib(self, n: int) -> int:\n        pass\n",
  "samples": [
   {
    "input": [
     2
    ],
    "expected": 1
   },
   {
    "input": [
     3
    ],
    "expected": 2
   },
   {
    "input": [
     4
    ],
    "expected": 3
   }
  ],
  "order": 53
 },
 {
  "slug": "power-of-two",
  "title": "Power of Two",
  "difficulty": "Easy",
  "topic": "recursion",
  "description": "Return `True` if `n` is a power of two (n = 2^x for some integer x ≥ 0).",
  "constraints": [
   "-2^31 <= n <= 2^31 - 1"
  ],
  "hints": [
   "Recursively divide by 2, or use the bit trick n & (n-1)."
  ],
  "tags": [
   "Recursion",
   "Bit Manipulation"
  ],
  "functionName": "isPowerOfTwo",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        pass\n",
  "samples": [
   {
    "input": [
     1
    ],
    "expected": true
   },
   {
    "input": [
     16
    ],
    "expected": true
   },
   {
    "input": [
     3
    ],
    "expected": false
   }
  ],
  "order": 54
 },
 {
  "slug": "reverse-words-in-a-string",
  "title": "Reverse Words in a String",
  "difficulty": "Medium",
  "topic": "strings",
  "description": "Reverse the order of words in `s`. Words are separated by spaces; the result must have single spaces and no leading/trailing spaces.",
  "constraints": [
   "1 <= len(s) <= 10^4"
  ],
  "hints": [
   "Split on whitespace, reverse, join."
  ],
  "tags": [
   "String"
  ],
  "functionName": "reverseWords",
  "argTypes": [
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def reverseWords(self, s: str) -> str:\n        pass\n",
  "samples": [
   {
    "input": [
     "the sky is blue"
    ],
    "expected": "blue is sky the"
   },
   {
    "input": [
     "  hello world  "
    ],
    "expected": "world hello"
   },
   {
    "input": [
     "a good   example"
    ],
    "expected": "example good a"
   }
  ],
  "order": 55
 },
 {
  "slug": "rotate-array",
  "title": "Rotate Array",
  "difficulty": "Medium",
  "topic": "arrays",
  "description": "Rotate `nums` to the right by `k` steps, in place.",
  "constraints": [
   "1 <= len <= 10^5"
  ],
  "hints": [
   "Reverse the whole list, then reverse the first k and the rest."
  ],
  "tags": [
   "Array"
  ],
  "functionName": "rotate",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "inplace0",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     3
    ],
    "expected": [
     5,
     6,
     7,
     1,
     2,
     3,
     4
    ]
   },
   {
    "input": [
     [
      -1,
      -100,
      3,
      99
     ],
     2
    ],
    "expected": [
     3,
     99,
     -1,
     -100
    ]
   },
   {
    "input": [
     [
      1
     ],
     5
    ],
    "expected": [
     1
    ]
   }
  ],
  "order": 56
 },
 {
  "slug": "two-sum-ii-sorted",
  "title": "Two Sum II – Input Array Is Sorted",
  "difficulty": "Medium",
  "topic": "two-pointers",
  "description": "`numbers` is sorted ascending. Return the 1-based indices `[i, j]` (i < j) of the two numbers that add up to `target`. Use O(1) extra space.",
  "constraints": [
   "2 <= len <= 3*10^4"
  ],
  "hints": [
   "Move the left pointer up if the sum is small, the right pointer down if large."
  ],
  "tags": [
   "Two Pointers",
   "Binary Search"
  ],
  "functionName": "twoSum",
  "argTypes": [
   "value",
   "value"
  ],
  "returnType": "value",
  "compareMode": "exact",
  "starterCode": "class Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        pass\n",
  "samples": [
   {
    "input": [
     [
      2,
      7,
      11,
      15
     ],
     9
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
      3,
      4
     ],
     6
    ],
    "expected": [
     1,
     3
    ]
   },
   {
    "input": [
     [
      -1,
      0
     ],
     -1
    ],
    "expected": [
     1,
     2
    ]
   }
  ],
  "order": 57
 }
];
