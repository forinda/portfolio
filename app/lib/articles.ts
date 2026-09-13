import type { ComponentType } from "react";
import { parseFrontmatter, type ArticleMeta } from "./frontmatter";

export type { ArticleMeta };
export type TocEntry = { depth: 2 | 3; value: string; id: string };
export type ArticleBody = ComponentType<{ components?: Record<string, ComponentType<any>> }>;
export type Article = { meta: ArticleMeta; toc: TocEntry[]; load: () => Promise<ArticleBody> };

type RawToc = Array<{ depth: number; value: string; id?: string }>;

const frontmatters = import.meta.glob<unknown>("../articles/*.mdx", {
  eager: true,
  import: "frontmatter",
});
const tocs = import.meta.glob<RawToc>("../articles/*.mdx", { eager: true, import: "toc" });
const bodies = import.meta.glob<ArticleBody>("../articles/*.mdx", { import: "default" });

function slugFromPath(path: string): string {
  return path.slice(path.lastIndexOf("/") + 1, -".mdx".length);
}

function toToc(raw: RawToc | undefined): TocEntry[] {
  return (raw ?? []).flatMap((entry) =>
    (entry.depth === 2 || entry.depth === 3) && entry.id
      ? [{ depth: entry.depth, value: entry.value, id: entry.id }]
      : [],
  );
}

const articles: Article[] = Object.entries(frontmatters)
  .map(([path, data]) => ({
    meta: parseFrontmatter(slugFromPath(path), data),
    toc: toToc(tocs[path]),
    load: bodies[path],
  }))
  .filter((article) => import.meta.env.DEV || !article.meta.draft)
  .sort(
    (a, b) =>
      b.meta.published.localeCompare(a.meta.published) || a.meta.slug.localeCompare(b.meta.slug),
  );

export function listArticles(): ArticleMeta[] {
  return articles.map((article) => article.meta);
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.meta.slug === slug);
}

export function lastModified(meta: ArticleMeta): string {
  return meta.updated ?? meta.published;
}
