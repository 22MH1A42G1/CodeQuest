export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Topic {
  slug: string;
  title: string;
  level: Level;
  summary: string;
  explanation: string;
  notes: string[];
  diagram: string;
  applications: string[];
  code_example: string;
  dry_run: string[];
  time_complexity: string;
  space_complexity: string;
  mistakes: string[];
  interview_questions: string[];
  quiz: QuizQuestion[];
}

export type ArgType = "value" | "linkedlist" | "cyclelist" | "tree" | "graph" | "design";
export type ReturnType = "value" | "linkedlist" | "tree" | "graph" | "inplace0";
export type CompareMode = "exact" | "sorted" | "nested_unordered" | "perm_list";

export interface TestCase {
  input: unknown[];
  expected: unknown;
}

export interface Problem {
  slug: string;
  title: string;
  difficulty: Difficulty;
  topic: string;
  description: string;
  constraints: string[];
  hints: string[];
  tags: string[];
  functionName: string;
  argTypes: ArgType[];
  returnType: ReturnType;
  compareMode: CompareMode;
  starterCode: string;
  samples: TestCase[];
  order: number;
}
