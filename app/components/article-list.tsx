import type { ArticleMeta } from "~/lib/frontmatter";
import { formatDate } from "~/lib/site";

export function ArticleList({
  articles,
  showTags = false,
  titleAs: Title = "h3",
}: {
  articles: ArticleMeta[];
  showTags?: boolean;
  titleAs?: "h2" | "h3";
}) {
  return (
    <ul className="flex flex-col">
      {articles.map((article) => (
        <li
          key={article.slug}
          className="grid gap-2 border-t border-rule py-6 last:border-b md:grid-cols-[minmax(0,5fr)_minmax(0,5fr)_minmax(0,2fr)] md:items-baseline md:gap-12"
        >
          <Title className="font-serif text-2xl leading-snug">
            <a href={`/articles/${article.slug}`} className="link">
              {article.title}
            </a>
            {article.draft && <span className="ml-2 font-sans text-sm text-ink-muted">(draft)</span>}
          </Title>
          <div className="flex flex-col gap-2">
            <p className="max-w-[60ch] text-sm leading-relaxed text-ink-muted">{article.summary}</p>
            {showTags && article.tags.length > 0 && (
              <p className="text-xs text-ink-muted">{article.tags.join(", ")}</p>
            )}
          </div>
          <p className="order-first text-sm tabular-nums text-ink-muted md:order-none md:text-right">
            <time dateTime={article.published}>{formatDate(article.published)}</time>
          </p>
        </li>
      ))}
    </ul>
  );
}
