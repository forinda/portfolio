export type ArticleMeta = {
  slug: string;
  title: string;
  summary: string;
  published: string;
  updated?: string;
  tags: string[];
  draft: boolean;
};

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function isRealDate(value: string): boolean {
  if (!DATE.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function fail(slug: string, reason: string): never {
  throw new Error(`${slug}.mdx: ${reason}`);
}

export function parseFrontmatter(slug: string, data: unknown): ArticleMeta {
  if (!SLUG.test(slug)) fail(slug, "file name must be lowercase words joined by hyphens");
  if (typeof data !== "object" || data === null) fail(slug, "missing frontmatter");

  const { title, summary, published, updated, tags = [], draft = false } = data as Record<
    string,
    unknown
  >;

  if (typeof title !== "string" || !title.trim()) fail(slug, '"title" is required');
  if (typeof summary !== "string" || !summary.trim()) fail(slug, '"summary" is required');
  if (summary.trim().length > 200) fail(slug, '"summary" must be 200 characters or fewer');
  if (typeof published !== "string" || !isRealDate(published)) {
    fail(slug, '"published" must be YYYY-MM-DD');
  }
  if (updated !== undefined) {
    if (typeof updated !== "string" || !isRealDate(updated)) fail(slug, '"updated" must be YYYY-MM-DD');
    if (updated < published) fail(slug, '"updated" cannot be before "published"');
  }
  if (!Array.isArray(tags) || !tags.every((tag) => typeof tag === "string" && SLUG.test(tag))) {
    fail(slug, '"tags" must be lowercase words joined by hyphens');
  }
  if (typeof draft !== "boolean") fail(slug, '"draft" must be true or false');

  return {
    slug,
    title: title.trim(),
    summary: summary.trim(),
    published,
    ...(updated === undefined ? {} : { updated }),
    tags: tags as string[],
    draft,
  };
}
