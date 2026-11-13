# DSA Mastery — Python Coding & Interview Preparation Platform

Learn Data Structures and Algorithms in plain English, then prove it by writing real Python against real test cases.

**22 structured topics · 300 Python problems (including 63 Hard) · AI interviews · daily challenges · notes and analytics.**

© 2026 Aditya Indana — [GitHub](https://github.com/22MH1A42G1) · [Portfolio](https://indana-aditya.vercel.app)

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Local setup](#local-setup)
- [Environment variables](#environment-variables)
- [Supabase configuration](#supabase-configuration)
- [How code execution works](#how-code-execution-works)
- [Database schema](#database-schema)
- [Project structure](#project-structure)
- [Scripts](#scripts)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)

---

## Features

### Implemented

| Area | What it does |
| --- | --- |
| **Landing page** | Public marketing page with topic/problem counts, feature cards and sign-in entry points. |
| **Authentication** | Email + password sign up / sign in, Google sign-in, forgot-password email flow, password reset page, logout. |
| **Dashboard** | Daily streak, problems solved, Easy/Medium/Hard breakdown, daily goal progress, current learning level, weekly activity chart, recent submissions, recommended next problems, continue-learning link. Every number is computed from the user's own rows — nothing is hardcoded. |
| **Learn DSA** | 22 topics (Beginner → Advanced). Each lesson has a plain-English explanation, handwritten-style notes, an ASCII diagram, real-world applications, a runnable Python example, a step-by-step dry run, time/space complexity, common mistakes, interview questions and a multiple-choice quiz. |
| **Coding arena** | Monaco editor (Python 3) on desktop, a spacing-safe plain code box on phones. Run against sample tests plus up to 5 custom JSON tests, Submit against sample + hidden tests, reset to starter code, live output console, per-case pass/fail, runtime and memory when the runner reports them, hint reveal, bookmark and mark-for-revision. |
| **Problem bank** | 300 tested problems: 58 Easy, 179 Medium and 63 Hard. Search by title/tag and filter by topic, difficulty and solved/revision state. |
| **Submissions & progress** | Every run and submit is stored with status, passed/total, runtime and memory. Solved state, attempt counts and accepted code are kept per problem; re-solving never un-solves a problem. |
| **Settings** | Display name, target role, daily goal (1–20 problems/day), account sign-out. |
| **Analytics** | Difficulty/topic mastery, 30-day activity, submit accuracy, average attempts, focused study minutes, roadmap completion and personalized recommendations from actual rows. |
| **Notes & revision** | Private topic notes with search and print-to-PDF export, saved code bookmarks, spaced-repetition flashcards, revision marks and reminders. |
| **AI mock interviews** | Seven categories, three levels, standard or 30-minute mode, one question at a time, attempt-gated ideal solutions, hints, answer/complexity feedback, final scores and private history. |
| **Company preparation** | Ten clearly labelled community-style practice guides with patterns, technical prompts, aptitude, Python, SQL and mock problem sets. |
| **Daily challenges** | Deterministic Easy/Medium/optional-Hard problems, accepted-submission points, badges, monthly report, history and a pseudonymous weekly leaderboard. |
| **Theme** | Persistent dark navy or light theme with blue/violet accents, responsive down to phone widths. |

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | TanStack Start v1 (React 19, TypeScript, file-based routing, SSR) |
| Build | Vite 8 + Nitro (Cloudflare Worker output) |
| Styling | Tailwind CSS v4 (theme tokens in `src/styles.css`) |
| Components | shadcn/ui on Radix primitives, Lucide icons |
| Editor | Monaco (`@monaco-editor/react`) |
| Charts | Recharts |
| Data | TanStack Query + TanStack Server Functions |
| Backend | Supabase — Postgres, Auth, Row Level Security |
| Execution | Judge0 (server) with an in-browser Pyodide fallback |
| Tests | Vitest + Testing Library |

---

## Prerequisites

- **Node.js 20.19+** (22 LTS recommended) — or **Bun 1.2+**
- **Git**
- A **Supabase project** (free tier is fine) — see [Supabase configuration](#supabase-configuration)
- Optional: a **Judge0 / RapidAPI key** for server-side execution

---

## Local setup

```bash
# 1. Clone and enter the repo
git clone <your-repo-url> dsa-mastery
cd dsa-mastery

# 2. Install dependencies
npm install          # or: bun install

# 3. Configure environment
cp .env.example .env # then fill in the values from the table below

# 4. Create the database (see Supabase configuration)
#    Apply all drizzle/migrations/*.sql files in filename order.

# 5. Run the app
npm run dev          # or: bun run dev
```

The dev server listens on **http://localhost:8080**.

Production build and preview:

```bash
npm run build
npm run preview
```

---

## Environment variables

Copy `.env.example` to `.env`. Both a browser and a server copy of the URL/key are read on purpose — the browser uses the `VITE_`-prefixed pair, server functions use the unprefixed pair.

| Variable | Required | Used by | Purpose |
| --- | --- | --- | --- |
| `VITE_SUPABASE_URL` | yes | browser | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | yes | browser | Publishable (anon) key — safe to expose |
| `SUPABASE_URL` | yes | server | Same URL, read inside server functions |
| `SUPABASE_PUBLISHABLE_KEY` | yes | server | Same publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | yes | server | Secret key used by the judge to write submissions, progress and activity. **Never expose in the browser, never commit it.** |
| `JUDGE0_API_KEY` | no | server | Judge0 (RapidAPI) key. Without it, code runs in the browser via Pyodide. |
| `JUDGE0_URL` | no | server | Judge0 base URL. Defaults to `https://judge0-ce.p.rapidapi.com`. |

> The repository's committed `.env` holds only publishable values from the original Lovable Cloud project. Replace them with your own project's values. A secret key (`sb_secret_…` / service role) must never be added to a committed file.

---

## Supabase configuration

### 1. Create a project

Create a Supabase project and open its **SQL Editor** (or connect with `psql`).

### 2. Apply the schema

Apply the migration files in filename order:

```bash
psql "$SUPABASE_DB_URL" -f drizzle/migrations/0000_core_schema.sql
psql "$SUPABASE_DB_URL" -f drizzle/migrations/0001_add_revision_interviews_and_challenges.sql
psql "$SUPABASE_DB_URL" -f drizzle/migrations/0002_expand_problem_catalog_to_300.sql
```

Or paste each file's contents into the SQL Editor in the same order. Together they create:

- 13 tables: the 9 core tables plus `flashcards`, `revision_reminders`, `mock_interviews` and `daily_challenge_completions`
- Indexes on user/date, topic and difficulty lookups
- Row Level Security on every table with owner-scoped policies
- A `handle_new_user()` trigger that creates a `profiles` row on signup
- Seed rows for all **22 topics** and all **300 problems** (the slug catalogs only — lesson and problem text lives in `src/content/`)
- A `get_weekly_leaderboard()` function that returns points with pseudonymous aliases rather than profile names

Apply the files once to an empty database, in order.

### 3. Turn on auth providers

**Email** — enabled by default on a new project. Keep "Confirm email" on for production.

**Google** — the app currently calls Lovable's auth broker (`@lovable.dev/cloud-auth-js`) in `src/routes/auth.tsx`. That broker only works while the app is hosted on Lovable Cloud. If you self-host on your own Supabase, swap the Google handler for the direct Supabase call:

```ts
async function google() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.origin + "/auth" },
  });
  if (error) toast.error(error.message);
}
```

Then in Supabase: **Auth → Sign In / Providers → Google** → add the Google OAuth client, set its authorized redirect URI to `<your-url>/auth/callback`, and add `<your-url>/auth` to **Auth → URL Configuration → Redirect URLs**.

**Password reset** — the reset link points at `/reset-password`, so add that path to the allowed redirect URLs and keep the email template's `{{ .ConfirmationURL }}` intact.

### 4. Set the service role key

The judge server functions write through the service role client (`src/integrations/supabase/client.server.ts`). Set `SUPABASE_SERVICE_ROLE_KEY` in your server environment. Without it, Run/Submit fail with a "Missing Supabase environment variable(s)" error.

### 5. Add Judge0 (optional but recommended)

```bash
JUDGE0_API_KEY=<your rapidapi key>
JUDGE0_URL=https://judge0-ce.p.rapidapi.com
```

With a key present, Python executes on the server and hidden test inputs never reach the browser. Without one, see the tradeoff below.

### 6. RLS expectations

| Table | Access |
| --- | --- |
| `dsa_topics`, `coding_problems` | Public read (`anon` + `authenticated`) |
| `profiles`, `user_progress`, `user_activity`, `submissions` | Owner read; writes go through server functions |
| `topic_progress`, `bookmarks`, `personal_notes`, `flashcards`, `revision_reminders` | Full owner CRUD (`FOR ALL` with `auth.uid()` checks) |
| `mock_interviews`, `daily_challenge_completions` | Owner read; writes go through authenticated server functions |

Owner CRUD is enforced directly by RLS. Privileged writes use the service-role client only after the caller's bearer token has been verified, so a signed-in user can only read their own private records.

---

## How code execution works

```
Run / Submit
   │
   ├─ server function (requireSupabaseAuth) ── builds a harness program
   │
   ├─ JUDGE0_API_KEY set ──► Judge0 executes Python server-side ──► stdout
   │
   └─ no key ──► server returns the program ──► browser runs it (Pyodide)
                ──► stdout posted back ──► server grades it
```

- **Grading is always server-side.** Sample and hidden cases are compared in `src/lib/judge.ts`; the client never decides whether a submission is accepted.
- **Hidden tests never appear in the client bundle.** They live in `src/server/hidden-tests.server.ts` and `src/server/extra-hidden-tests.server.ts` and are imported inside the handler. Only pass/fail per case is returned.
- **Pyodide fallback behaviour.** Python downloads in a Web Worker as soon as a problem opens (up to 2 minutes on a slow phone), the 10-second limit starts only once the code actually runs, and a stalled or crashed worker is retried once before a run is reported as Time Limit Exceeded.
- **Known tradeoff.** While no Judge0 key is configured, the hidden test inputs are sent to the browser and a determined user could forge a result. Add `JUDGE0_API_KEY` to close that gap.

---

## Database schema

| Table | Key columns | Notes |
| --- | --- | --- |
| `profiles` | `id → auth.users`, `display_name`, `avatar_url`, `daily_goal`, `target_role` | Created by trigger on signup |
| `dsa_topics` | `slug`, `title`, `level`, `order_index` | Public catalog, 22 rows |
| `coding_problems` | `slug`, `title`, `difficulty`, `topic_slug`, `order_index` | Public catalog, 300 rows |
| `submissions` | `user_id`, `problem_slug`, `kind`, `code`, `status`, `passed`, `total`, `runtime_ms`, `memory_kb` | One row per run/submit |
| `user_progress` | `user_id`, `problem_slug`, `status`, `attempts`, `accepted_code`, `solved_at`, `marked_for_revision` | Unique `(user_id, problem_slug)` |
| `topic_progress` | `user_id`, `topic_slug`, `completed`, `quiz_score` | Quiz results |
| `user_activity` | `user_id`, `activity_date`, `submissions`, `problems_solved`, `minutes` | Powers streak + weekly chart |
| `bookmarks` | `user_id`, `problem_slug`, `topic_slug`, `title`, `code_snippet` | Saved code snippets |
| `personal_notes` | `user_id`, `topic_slug`, `title`, `content` | Notebook rows |
| `flashcards` | `user_id`, `topic_slug`, `front`, `back`, `interval_days`, `next_review_at` | Spaced-repetition deck |
| `revision_reminders` | `user_id`, `problem_slug`, `topic_slug`, `due_on`, `completed_at` | Revision schedule |
| `mock_interviews` | `user_id`, `category`, `difficulty`, `mode`, `score`, `transcript` | Private AI interview history |
| `daily_challenge_completions` | `user_id`, `challenge_date`, `problem_slug`, `points` | Unique daily points and leaderboard source |

Difficulty values are `Easy | Medium | Hard`; topic levels are `Beginner | Intermediate | Advanced`.

---

## Project structure

```
src/
  content/          # lesson + problem catalogs (the source of truth for text)
    topics.ts       # 22 lessons: notes, diagrams, dry runs, quizzes
    problems.ts     # 57 core problems
    extra-problems.ts # 243 additional problems, including 63 Hard
    companies.ts, daily.ts # company guides and deterministic daily selection
    types.ts        # Topic / Problem / TestCase types
  server/
    hidden-tests.server.ts, extra-hidden-tests.server.ts # server-only test cases
    interview-ai.server.ts # streamed structured Lovable AI calls
  lib/
    judge.ts                 # harness builder + graders (pure, testable)
    judge.functions.ts       # runCode / submitCode / toggleRevision server functions
    browser-python.ts        # Pyodide worker used when no Judge0 key is set
    queries.ts, stats.ts     # TanStack Query options + streak/level/recommend math
  routes/
    index.tsx, auth.tsx, reset-password.tsx, __root.tsx
    _authenticated/          # dashboard, learning, practice, analytics, notes, interviews, daily, company prep, settings
  integrations/supabase/     # generated clients — do not hand-edit
drizzle/migrations/          # schema, RLS, features and catalog seeds in order
```

Adding a problem means adding a source entry, at least one hidden-test entry, and its `coding_problems` catalog row in a migration. The UI picks it up automatically.

---

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:8080 |
| `npm run build` | Production build (Nitro / Cloudflare Worker output) |
| `npm run preview` | Serve the built app locally |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Vitest in watch mode |
| `npm run lint` | ESLint over the repo |
| `npm run format` | Prettier write |

---

## Testing

```bash
npm test
```

Covers grading math, analytics accuracy/attempt/topic rules, deterministic daily challenges and points, and route wiring. The browser checks also exercised notes, flashcards, PDF output, light/mobile layouts, daily scoring and a real AI interview.

---

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| "Missing Supabase environment variable(s)" | `.env` is missing values, or the server needs the unprefixed `SUPABASE_*` pair too. |
| Run/Submit fail with a service-role error | `SUPABASE_SERVICE_ROLE_KEY` is not set in the server environment. |
| "The code runner rejected our API key" | `JUDGE0_API_KEY` is wrong or the RapidAPI product isn't subscribed. |
| "The code runner is busy (rate limit reached)" | Judge0 free tier throttling — wait, or let it fall back by removing the key. |
| First Run on mobile is slow | Pyodide (~10 MB) is downloading; the time limit doesn't start until it's ready. |
| Google button does nothing on your own host | The handler uses Lovable's auth broker — switch to `supabase.auth.signInWithOAuth` (step 3 above). |
| Signup succeeds but no profile row | The `handle_new_user` trigger wasn't applied — re-run the migration file. |

---

## Roadmap

- [x] Phase 1 — landing, auth (email, Google, reset), dashboard, database
- [x] Phase 2 — 22 learning topics with quizzes; 300 problems including 63 Hard
- [x] Phase 3 — Monaco arena + server-side Python judge (Judge0, Pyodide fallback)
- [x] Problem bank expansion with sample and hidden tests for every new entry
- [x] Phase 4 — analytics page, notes & revision center (PDF export, flashcards)
- [x] Phase 5 — AI mock interviews, company prep, daily challenges + leaderboard
- [x] Optional persistent light theme

---

© 2026 Aditya Indana. All rights reserved.
