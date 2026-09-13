import type { Route } from "./+types/sitemap[.]xml";
import { listArticles } from "~/lib/articles.server";
import { lastModified } from "~/lib/frontmatter";
import { escapeXml, siteUrl, xmlResponse } from "~/lib/site";

export function loader({ request }: Route.LoaderArgs) {
  const origin = siteUrl(request);
  const articles = listArticles();
  const newest = articles.map(lastModified).sort().at(-1);

  const entry = (path: string, lastmod?: string) =>
    [
      "  <url>",
      `    <loc>${escapeXml(`${origin}${path}`)}</loc>`,
      ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
      "  </url>",
    ].join("\n");

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entry("/", newest),
    entry("/articles", newest),
    ...articles.map((article) => entry(`/articles/${article.slug}`, lastModified(article))),
    "</urlset>",
    "",
  ].join("\n");

  return xmlResponse(body);
}
