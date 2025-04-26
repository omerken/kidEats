import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UI Component Gallery | React Router App" },
    {
      name: "description",
      content: "A showcase of all UI components available in the application",
    },
  ];
}

export default function Home() {
  return <div>hello world</div>;
}
