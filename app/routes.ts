import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/kid-menu.tsx"),
  route("home", "routes/home.tsx"),
  route("parent-dashboard", "routes/parent-dashboard.tsx"),
] satisfies RouteConfig;
