import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/site-layout.tsx", [
    index("routes/home.tsx"),
    route("articles", "routes/articles._index.tsx"),
    route("articles/:slug", "routes/articles.$slug.tsx"),
  ]),
  route("articles/rss.xml", "routes/articles.rss[.]xml.ts"),
  route("sitemap.xml", "routes/sitemap[.]xml.ts"),
  route("robots.txt", "routes/robots[.]txt.ts"),
  route("llms.txt", "routes/llms[.]txt.ts"),
] satisfies RouteConfig;
