import type { Route } from "./+types/articles.rss[.]xml";
import { listArticles } from "~/lib/articles.server";
import { escapeXml, siteUrl, xmlResponse } from "~/lib/site";

export function loader({ request }: Route.LoaderArgs) {
  const origin = siteUrl(request);

  const items = listArticles()
    .slice(0, 20)
    .map((article) => {
      const url = escapeXml(`${origin}/articles/${article.slug}`);
      return [
        "    <item>",
        `      <title>${escapeXml(article.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(`${article.published}T00:00:00Z`).toUTCString()}</pubDate>`,
        `      <description>${escapeXml(article.summary)}</description>`,
        ...article.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`),
        "    </item>",
      ].join("\n");
    });

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>Felix Orinda: Articles</title>",
    `    <link>${escapeXml(`${origin}/articles`)}</link>`,
    "    <description>Notes on building developer tools and open source for developers anywhere.</description>",
    "    <language>en</language>",
    `    <atom:link href="${escapeXml(`${origin}/articles/rss.xml`)}" rel="self" type="application/rss+xml" />`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return xmlResponse(body, "application/rss+xml");
}
