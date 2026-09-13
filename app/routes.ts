import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/site-layout.tsx", [
    index("routes/home.tsx"),
    route("articles", "routes/articles._index.tsx"),
    route("articles/:slug", "routes/articles.$slug.tsx"),
  ]),
] satisfies RouteConfig;
