import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [layout("routes/site-layout.tsx", [index("routes/home.tsx")])] satisfies RouteConfig;
