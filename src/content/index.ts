import { PROBLEMS } from "./problems";
import { TOPICS } from "./topics";

export { PROBLEMS, TOPICS };
export * from "./types";

export const problemBySlug = (slug: string) => PROBLEMS.find((p) => p.slug === slug);
export const topicBySlug = (slug: string) => TOPICS.find((t) => t.slug === slug);
export const topicTitle = (slug: string) => topicBySlug(slug)?.title ?? slug;
