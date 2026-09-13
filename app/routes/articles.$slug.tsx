import { Suspense, lazy, type LazyExoticComponent } from "react";
import { data } from "react-router";
import type { Route } from "./+types/articles.$slug";
import { CodeBlock } from "~/components/code-block";
import { container } from "~/components/section";
import { loadArticleBody, type ArticleBody } from "~/lib/article-body";
import { getArticle, listArticles } from "~/lib/articles.server";
import { lastModified, type TocEntry } from "~/lib/frontmatter";
import { formatDate, siteUrl } from "~/lib/site";
import { seo } from "~/utils/seo";

export function loader({ request, params }: Route.LoaderArgs) {
  const article = getArticle(params.slug);
  if (!article) throw data(null, { status: 404 });

  const all = listArticles();
  const position = all.findIndex((item) => item.slug === article.meta.slug);

  return {
    origin: siteUrl(request),
    article: article.meta,
    toc: article.toc,
    newer: all[position - 1] ?? null,
    older: all[position + 1] ?? null,
  };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: "Page not found | Felix Orinda" }];

  const { origin, article } = loaderData;
  const url = `${origin}/articles/${article.slug}`;
  const modified = lastModified(article);

  return seo({
    title: `${article.title} | Felix Orinda`,
    description: article.summary,
    url,
    canonical: url,
    image: `${origin}/forinda.png`,
    siteName: "Felix Orinda",
    author: "Felix Orinda",
    type: "article",
    publishedTime: article.published,
    modifiedTime: modified,
    tags: article.tags,
    noIndex: article.draft,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.summary,
      datePublished: article.published,
      dateModified: modified,
      author: { "@type": "Person", name: "Felix Orinda", url: `${origin}/` },
      url,
      mainEntityOfPage: url,
      keywords: article.tags.join(", "),
    },
  });
}

const bodies = new Map<string, LazyExoticComponent<ArticleBody>>();

function bodyFor(slug: string): LazyExoticComponent<ArticleBody> {
  const cached = bodies.get(slug);
  if (cached) return cached;

  const Body = lazy(async () => ({ default: await loadArticleBody(slug) }));
  bodies.set(slug, Body);
  return Body;
}

function TocList({ toc }: { toc: TocEntry[] }) {
  return (
    <ul className="flex flex-col gap-2 text-sm">
      {toc.map((entry) => (
        <li key={entry.id} className={entry.depth === 3 ? "pl-4" : ""}>
          <a href={`#${entry.id}`} className="text-ink-muted transition-colors hover:text-ink">
            {entry.value}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function ArticlePage({ loaderData }: Route.ComponentProps) {
  const { article, toc, newer, older } = loaderData;
  const Body = bodyFor(article.slug);
  const showToc = toc.length >= 3;

  return (
    <div className={`${container} py-12 md:py-20`}>
      <header className="flex max-w-[68ch] flex-col gap-4">
        <a href="/articles" className="link self-start text-sm">
          ← Articles
        </a>
        <h1 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08]">
          {article.title}
        </h1>
        <div className="flex flex-col gap-1 text-sm text-ink-muted">
          <p>
            Published <time dateTime={article.published}>{formatDate(article.published)}</time>
            {article.draft && " (draft)"}
          </p>
          {article.updated && (
            <p>
              Updated <time dateTime={article.updated}>{formatDate(article.updated)}</time>
            </p>
          )}
          {article.tags.length > 0 && <p>{article.tags.join(", ")}</p>}
        </div>
      </header>

      <div
        className={`mt-10 grid gap-10 md:mt-14 ${showToc ? "lg:grid-cols-[minmax(0,68ch)_14rem] lg:gap-16" : ""}`}
      >
        {showToc && (
          <nav aria-label="Contents" className="lg:order-last">
            <details className="border-y border-rule py-3 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold">Contents</summary>
              <div className="pt-3">
                <TocList toc={toc} />
              </div>
            </details>
            <div className="sticky top-8 hidden flex-col gap-3 lg:flex">
              <p className="text-sm font-semibold">Contents</p>
              <TocList toc={toc} />
            </div>
          </nav>
        )}

        <article className="prose min-w-0 max-w-[68ch]">
          <Suspense fallback={null}>
            <Body components={{ pre: CodeBlock }} />
          </Suspense>
        </article>
      </div>

      <footer className="mt-16 flex max-w-[68ch] flex-col gap-8 border-t border-rule pt-8">
        {(newer || older) && (
          <nav aria-label="More articles" className="grid gap-6 sm:grid-cols-2">
            {newer && (
              <a href={`/articles/${newer.slug}`} className="flex flex-col gap-1">
                <span className="text-sm text-ink-muted">Newer</span>
                <span className="link font-serif text-xl">{newer.title}</span>
              </a>
            )}
            {older && (
              <a
                href={`/articles/${older.slug}`}
                className="flex flex-col gap-1 sm:col-start-2 sm:text-right"
              >
                <span className="text-sm text-ink-muted">Older</span>
                <span className="link font-serif text-xl">{older.title}</span>
              </a>
            )}
          </nav>
        )}
        <p className="text-sm text-ink-muted">
          Questions or corrections?{" "}
          <a href="/#contact" className="link">
            Get in touch
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
