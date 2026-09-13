import type { Route } from "./+types/articles._index";
import { ArticleList } from "~/components/article-list";
import { container } from "~/components/section";
import { listArticles } from "~/lib/articles.server";
import { siteUrl } from "~/lib/site";
import { seo } from "~/utils/seo";

const description = "Notes on building developer tools and shipping open source from Nairobi.";

export function loader({ request }: Route.LoaderArgs) {
  return { origin: siteUrl(request), articles: listArticles() };
}

export const links: Route.LinksFunction = () => [
  {
    rel: "alternate",
    type: "application/rss+xml",
    title: "Felix Orinda: Articles",
    href: "/articles/rss.xml",
  },
];

export function meta({ loaderData }: Route.MetaArgs) {
  const origin = loaderData?.origin ?? "";
  const url = `${origin}/articles`;
  return seo({
    title: "Articles | Felix Orinda",
    description,
    url,
    canonical: url,
    image: `${origin}/forinda.png`,
    siteName: "Felix Orinda",
    author: "Felix Orinda",
  });
}

export default function Articles({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;

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
    </div>
  );
}
