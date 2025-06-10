import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/kid-menu.tsx"),
  route("home", "routes/home.tsx"),
  route("parent-dashboard", "routes/parent-dashboard.tsx"),
  route("how-it-works", "routes/how-it-works.tsx"),
  route("contact", "routes/contact.tsx"),
  route("cart", "routes/cart.tsx"),
] satisfies RouteConfig;
