import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("kid-menu", "routes/kid-menu.tsx"),
  route("parent-dashboard", "routes/parent-dashboard.tsx"),
] satisfies RouteConfig;
