import { R3act } from "./R3act";
import { NodeJS } from "./NodeJs";
import { JS } from "./JS";
import { TS } from "./TS";
import { Express } from "./Express";
import { MongoDB } from "./MongoDB";
import { Tailwind } from "./Tailwind";
import { Git } from "./Git";
import { NextJs } from "./NextJs";
import { Remix } from "./Remix";

export function Skills() {
  return (
    <div
      id="skills"
      className="bg-gray-900 px-8 py-16 max-w-screen-2xl mx-auto"
    >
      <div className="flex flex-col items-center mb-16">
        <span className="bg-gray-700 px-4 py-2 rounded-full text-gray-300 mb-4">
          Skills
        </span>

        <p className="text-gray-200 text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      <div className="flex gap-12 justify-center flex-wrap">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="inline-flex flex-col gap-2 items-center"
          >
            {skill.logo}

            <span className="text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const skills: Array<{
  logo: React.ReactNode;
  name: string;
}> = [
  {
    logo: <JS />,
    name: "Javascript",
  },
  {
    logo: <TS />,
    name: "Typescript",
  },
  {
    logo: <R3act />,
    name: "React",
  },
  {
    logo: <NextJs />,
    name: "Next.js",
  },
  {
    logo: <Remix />,
    name: "Remix",
  },
  {
    logo: <R3act />,
    name: "React Native",
  },
  {
    logo: <NodeJS />,
    name: "Node.js",
  },
  {
    logo: <Express />,
    name: "Express",
  },
  {
    logo: <MongoDB />,
    name: "MongoDB",
  },
  {
    logo: <Tailwind />,
    name: "Tailwind CSS",
  },
  {
    logo: <Git />,
    name: "Git",
  },
];
