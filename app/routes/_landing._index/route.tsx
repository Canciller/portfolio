import type { MetaFunction } from "@remix-run/node";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export const meta: MetaFunction = () => {
  return [
    { title: "Gabriel Emilio López Ojeda" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}
