import { PROBLEMS as CORE_PROBLEMS } from "./problems";
import { EXTRA_PROBLEMS } from "./extra-problems";
import { TOPICS } from "./topics";

export const PROBLEMS = [...CORE_PROBLEMS, ...EXTRA_PROBLEMS];
export { TOPICS };
export * from "./types";

export const problemBySlug = (slug: string) => PROBLEMS.find((p) => p.slug === slug);
export const topicBySlug = (slug: string) => TOPICS.find((t) => t.slug === slug);
export const topicTitle = (slug: string) => topicBySlug(slug)?.title ?? slug;
