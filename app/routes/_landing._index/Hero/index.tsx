import { LinkedIn } from "./LinkedIn";
import { Location } from "./Location";
import { GitHub } from "./Github";
import { Instagram } from "./Instagram";

import heromeimage from "./hero-me.jpeg";

export function Hero() {
  return (
    <div className="flex flex-col-reverse gap-28 px-8 py-16 justify-between items-center lg:flex-row lg:items-start lg:py-32 md:px-16 mx-auto max-w-screen-2xl">
      <div className="flex flex-col items-start gap-8 w-full flex-1">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white md:text-5xl">
            Hi, I am Emilio 👋
          </h1>

          <p className="text-gray-200">
            I am a software engineer with expertise in both web and mobile
            development. My skill set includes working with React and Node.js
            technologies, including Next.js and Remix.js, as well as developing
            mobile applications using React Native and native code for library
            development when necessary. As a curious and eager learner, I
            continuously seek opportunities to grow. I highly value
            collaboration and teamwork, which are essential qualities in my
            professional approach.
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

      <div className="shrink-0 relative w-[85%] h-[350px] md:w-[300px]">
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
