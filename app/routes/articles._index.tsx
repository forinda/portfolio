import { data } from "react-router";
import type { Route } from "./+types/articles._index";
import { ArticleList } from "~/components/article-list";
import { container } from "~/components/section";
import { listArticles } from "~/lib/articles.server";
import { paginate } from "~/lib/paginate";
import { siteUrl } from "~/lib/site";
import { seo } from "~/utils/seo";

const PAGE_SIZE = 10;
const description = "Notes on building developer tools and open source for developers anywhere.";

export function loader({ request }: Route.LoaderArgs) {
  const result = paginate(
    listArticles(),
    new URL(request.url).searchParams.get("page"),
    PAGE_SIZE,
  );
  if (!result) throw data(null, { status: 404 });

  return { origin: siteUrl(request), ...result };
}

export const links: Route.LinksFunction = () => [
  {
    rel: "alternate",
    type: "application/rss+xml",
    title: "Felix Orinda: Articles",
    href: "/articles/rss.xml",
  },
];

function pageHref(page: number): string {
  return page === 1 ? "/articles" : `/articles?page=${page}`;
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: "Page not found | Felix Orinda" }];

  const { origin, page } = loaderData;
  const url = `${origin}${pageHref(page)}`;
  return seo({
    title: page === 1 ? "Articles | Felix Orinda" : `Articles, page ${page} | Felix Orinda`,
    description,
    url,
    canonical: url,
    image: `${origin}/forinda.png`,
    siteName: "Felix Orinda",
    author: "Felix Orinda",
  });
}

export default function Articles({ loaderData }: Route.ComponentProps) {
  const { items: articles, page, pageCount } = loaderData;

  return (
    <div className={`${container} flex flex-col gap-10 py-12 md:gap-12 md:py-20`}>
      <header className="flex flex-col gap-4">
        <h1 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08]">Articles</h1>
        <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">{description}</p>
        <a href="/articles/rss.xml" className="link self-start text-sm">
          RSS feed
        </a>
      </header>

      {articles.length > 0 ? (
        <ArticleList articles={articles} showTags titleAs="h2" />
      ) : (
        <p className="text-ink-muted">No articles yet.</p>
      )}

      {pageCount > 1 && (
        <nav
          aria-label="Pagination"
          className="grid grid-cols-[1fr_auto_1fr] items-baseline gap-4 text-sm"
        >
          <div>
            {page > 1 && (
              <a href={pageHref(page - 1)} className="link">
                Newer articles
              </a>
            )}
          </div>
          <p className="tabular-nums text-ink-muted">
            Page {page} of {pageCount}
          </p>
          <div className="text-right">
            {page < pageCount && (
              <a href={pageHref(page + 1)} className="link">
                Older articles
              </a>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
