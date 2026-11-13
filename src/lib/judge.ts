// Pure helpers shared by the judge server function and tests.
import type { CompareMode, Problem, TestCase } from "@/content/types";

export const RESULT_MARKER = "__DSA_RESULTS__";

const PRELUDE = `import json, sys, time, traceback, math, heapq, bisect, itertools, functools, collections, string, re
from typing import *
from collections import *
from functools import lru_cache, cache
sys.setrecursionlimit(10000)
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val; self.next = next
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right
class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val; self.neighbors = neighbors if neighbors is not None else []
`;

const DRIVER = `
def __mk_list(v):
    d = ListNode(); c = d
    for x in v: c.next = ListNode(x); c = c.next
    return d.next
def __mk_cycle(a):
    vals, pos = a
    nodes = [ListNode(x) for x in vals]
    for i in range(len(nodes) - 1): nodes[i].next = nodes[i + 1]
    if pos >= 0 and nodes: nodes[-1].next = nodes[pos]
    return nodes[0] if nodes else None
def __mk_tree(v):
    if not v or v[0] is None: return None
    it = iter(v); root = TreeNode(next(it)); q = deque([root])
    for x in it:
        n = q[0]
        if not hasattr(n, '_l'):
            n._l = 1
            if x is not None: n.left = TreeNode(x); q.append(n.left)
        else:
            q.popleft()
            if x is not None: n.right = TreeNode(x); q.append(n.right)
    return root
def __mk_graph(adj):
    if not adj: return None
    nodes = [Node(i + 1) for i in range(len(adj))]
    for i, nb in enumerate(adj): nodes[i].neighbors = [nodes[j - 1] for j in nb]
    return nodes[0]
def __out_list(h):
    out = []; seen = 0
    while h is not None and seen < 100000: out.append(h.val); h = h.next; seen += 1
    return out
def __out_tree(r):
    out = []; q = deque([r])
    while q:
        n = q.popleft()
        if n is None: out.append(None); continue
        out.append(n.val); q.append(n.left); q.append(n.right)
    while out and out[-1] is None: out.pop()
    return out
def __out_graph(n):
    if n is None: return []
    seen = {n.val: n}; q = deque([n])
    while q:
        x = q.popleft()
        for y in x.neighbors:
            if y.val not in seen: seen[y.val] = y; q.append(y)
    return [[y.val for y in seen[i].neighbors] for i in range(1, len(seen) + 1)]
def __build(v, t):
    return {'linkedlist': __mk_list, 'cyclelist': __mk_cycle, 'tree': __mk_tree, 'graph': __mk_graph}.get(t, lambda z: z)(v)
def __run_design(name, inp):
    ops, args = inp; obj = None; out = []
    for op, a in zip(ops, args):
        if op == name: obj = globals()[name](*a); out.append(None)
        else: out.append(getattr(obj, op)(*a))
    return out
__res = []
for __tc in json.loads(__TESTS):
    try:
        __t0 = time.perf_counter()
        if __ARGS == ['design']:
            __val = __run_design(__NAME, __tc)
        else:
            __args = [__build(a, t) for a, t in zip(__tc, __ARGS)]
            __fn = getattr(Solution(), __NAME) if 'Solution' in globals() else globals()[__NAME]
            __val = __fn(*__args)
            if __RET == 'inplace0': __val = __args[0]
            elif __RET == 'linkedlist': __val = __out_list(__val)
            elif __RET == 'tree': __val = __out_tree(__val)
            elif __RET == 'graph': __val = __out_graph(__val)
        __ms = (time.perf_counter() - __t0) * 1000
        json.dumps(__val)
        __res.append({'ok': True, 'out': __val, 'ms': round(__ms, 3)})
    except Exception as __e:
        __res.append({'ok': False, 'err': ''.join(traceback.format_exception_only(type(__e), __e)).strip()})
sys.stdout.flush()
print('\\n${RESULT_MARKER}' + json.dumps(__res))
`;

export function buildProgram(problem: Pick<Problem, "functionName" | "argTypes" | "returnType">, userCode: string, inputs: unknown[][]) {
  const header = `__NAME = ${JSON.stringify(problem.functionName)}\n__ARGS = ${JSON.stringify(problem.argTypes)}\n__RET = ${JSON.stringify(problem.returnType)}\n__TESTS = ${JSON.stringify(JSON.stringify(inputs))}\n`;
  return `${PRELUDE}\n${userCode}\n\n${header}${DRIVER}`;
}

export interface RawCaseResult {
  ok: boolean;
  out?: unknown;
  ms?: number;
  err?: string;
}

export function parseProgramOutput(stdout: string): { userStdout: string; results: RawCaseResult[] | null } {
  const idx = stdout.lastIndexOf(RESULT_MARKER);
  if (idx < 0) return { userStdout: stdout, results: null };
  const userStdout = stdout.slice(0, idx).replace(/\n$/, "");
  try {
    const results = JSON.parse(stdout.slice(idx + RESULT_MARKER.length).trim()) as RawCaseResult[];
    return { userStdout, results: Array.isArray(results) ? results : null };
  } catch {
    return { userStdout, results: null };
  }
}

function canon(v: unknown): string {
  return JSON.stringify(v);
}

function normalize(v: unknown, mode: CompareMode): unknown {
  if (!Array.isArray(v)) return v;
  if (mode === "sorted") return [...v].sort((a, b) => (canon(a) < canon(b) ? -1 : 1));
  if (mode === "perm_list") return [...v].map(canon).sort();
  if (mode === "nested_unordered")
    return v
      .map((x) => (Array.isArray(x) ? canon([...x].sort((a, b) => (canon(a) < canon(b) ? -1 : 1))) : canon(x)))
      .sort();
  return v;
}

export function outputsMatch(actual: unknown, expected: unknown, mode: CompareMode): boolean {
  return canon(normalize(actual, mode)) === canon(normalize(expected, mode));
}

export function gradeCases(tests: TestCase[], results: RawCaseResult[] | null, mode: CompareMode) {
  return tests.map((tc, i) => {
    const r = results?.[i];
    if (!r) return { passed: false, actual: null as unknown, error: "No result produced", ms: null as number | null };
    if (!r.ok) return { passed: false, actual: null as unknown, error: r.err ?? "Runtime error", ms: null };
    return { passed: outputsMatch(r.out, tc.expected, mode), actual: r.out, error: null as string | null, ms: r.ms ?? null };
  });
}
