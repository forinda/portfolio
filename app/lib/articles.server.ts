import { parseFrontmatter, type ArticleMeta, type TocEntry } from "./frontmatter";

export type ArticleSummary = { meta: ArticleMeta; toc: TocEntry[] };

type RawToc = Array<{ depth: number; value: string; id?: string }>;

// Server-only: eager imports pull in whole MDX modules, so keep them out of the client bundle.
const frontmatters = import.meta.glob<unknown>("../articles/*.mdx", {
  eager: true,
  import: "frontmatter",
});
const tocs = import.meta.glob<RawToc>("../articles/*.mdx", { eager: true, import: "toc" });

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

const articles: ArticleSummary[] = Object.entries(frontmatters)
  .map(([path, data]) => ({
    meta: parseFrontmatter(slugFromPath(path), data),
    toc: toToc(tocs[path]),
  }))
  .filter((article) => import.meta.env.DEV || !article.meta.draft)
  .sort(
    (a, b) =>
      b.meta.published.localeCompare(a.meta.published) || a.meta.slug.localeCompare(b.meta.slug),
  );

export function listArticles(): ArticleMeta[] {
  return articles.map((article) => article.meta);
}

export function getArticle(slug: string): ArticleSummary | undefined {
  return articles.find((article) => article.meta.slug === slug);
}
