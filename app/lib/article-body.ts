import type { ComponentType } from "react";

export type ArticleBody = ComponentType<{ components?: Record<string, ComponentType<any>> }>;

// Lazy glob: each article body becomes its own chunk, loaded only on its page.
const bodies = import.meta.glob<ArticleBody>("../articles/*.mdx", { import: "default" });

export function loadArticleBody(slug: string): Promise<ArticleBody> {
  const load = bodies[`../articles/${slug}.mdx`];
  return load ? load() : Promise.reject(new Error(`Unknown article: ${slug}`));
}
