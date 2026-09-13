import assert from "node:assert/strict";
import { parseFrontmatter } from "./frontmatter.ts";

const full = {
  title: "Building KickJS from Nairobi",
  summary: "Why the framework was built and why it got smaller.",
  published: "2026-09-13",
  updated: "2026-09-20",
  tags: ["kickjs", "open-source"],
  draft: true,
};

assert.deepEqual(parseFrontmatter("building-kickjs-from-nairobi", full), {
  slug: "building-kickjs-from-nairobi",
  ...full,
});

assert.deepEqual(
  parseFrontmatter("hello", { title: " Hi ", summary: "Short.", published: "2026-01-01" }),
  { slug: "hello", title: "Hi", summary: "Short.", published: "2026-01-01", tags: [], draft: false },
);

function rejects(slug: string, data: unknown, reason: string) {
  assert.throws(() => parseFrontmatter(slug, data), { message: `${slug}.mdx: ${reason}` });
}

const base = { title: "T", summary: "S", published: "2026-01-01" };

rejects("Bad_Slug", base, "file name must be lowercase words joined by hyphens");
rejects("no-frontmatter", undefined, "missing frontmatter");
rejects("no-title", { ...base, title: "" }, '"title" is required');
rejects("no-summary", { ...base, summary: undefined }, '"summary" is required');
rejects("long-summary", { ...base, summary: "x".repeat(201) }, '"summary" must be 200 characters or fewer');
rejects("bad-date", { ...base, published: "13/09/2026" }, '"published" must be YYYY-MM-DD');
rejects("impossible-date", { ...base, published: "2026-02-30" }, '"published" must be YYYY-MM-DD');
rejects("bad-updated", { ...base, updated: "soon" }, '"updated" must be YYYY-MM-DD');
rejects("early-updated", { ...base, updated: "2025-12-31" }, '"updated" cannot be before "published"');
rejects("upper-tag", { ...base, tags: ["KickJS"] }, '"tags" must be lowercase words joined by hyphens');
rejects("tags-not-list", { ...base, tags: "kickjs" }, '"tags" must be lowercase words joined by hyphens');
rejects("draft-string", { ...base, draft: "yes" }, '"draft" must be true or false');

assert.equal(parseFrontmatter("exact-200", { ...base, summary: "x".repeat(200) }).summary.length, 200);

console.log("frontmatter checks passed");
