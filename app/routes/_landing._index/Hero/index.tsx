import { LinkedIn } from "./LinkedIn";
import { Location } from "./Location";
import { GitHub } from "./Github";
import { Instagram } from "./Instagram";

import heromeimage from "./hero-me.jpeg";

export function Hero() {
  return (
    <div className="flex gap-8 px-16 py-32 justify-between">
      <div className="flex flex-col items-start gap-8 w-full flex-1">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-white">
            Hi, I am Emilio 👋
          </h1>

          <p className="text-gray-200">
            I am a software engineer with three years of experience in both web
            and mobile development. My expertise includes working with React and
            Node.js technologies, such as Next.js, or Remix.js, as well as
            developing mobile applications using React Native and native code
            for library development when needed. I am a curious individual who
            is always eager to learn and grow. I highly value collaboration and
            teamwork, which I believe are essential qualities in the roles I am
            applying for.
          </p>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-gray-200 py-2 px-4 rounded-xl text-gray-900 font-semibold"
        >
          Download resume
        </a>

        <Location />

        <div className="flex gap-2">
          <LinkedIn />
          <GitHub />
          <Instagram />
        </div>
      </div>

      <div className="shrink-0 relative w-[300px] h-[350px]">
        <div className="absolute inset-8 w-full h-full bg-gray-200" />

        <img
          className="object-cover absolute inset-0 w-full h-full"
          alt="Emilio smiling"
          src={heromeimage}
        />
      </div>
    </div>
  );
}
