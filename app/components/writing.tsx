import type { ArticleMeta } from "~/lib/frontmatter";
import { ArticleList } from "./article-list";
import { Section } from "./section";

export function Writing({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) return null;

  return (
    <Section id="writing" title="Writing">
      <div className="flex flex-col gap-6">
        <ArticleList articles={articles} />
        <a href="/articles" className="link self-start text-sm">
          All articles
        </a>
      </div>
    </Section>
  );
}
