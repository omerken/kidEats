import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router App" },
    {
      name: "description",
      content: "Application that uses the react-router framework",
    },
  ];
}

export default function Home() {
  return <div>Hello World</div>;
}
