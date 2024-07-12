import { GitHub } from "./Github";
import { Instagram } from "./Instagram";
import { LinkedIn } from "./LinkedIn";

export function Socials() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="text-gray-200 text-center">
        You may also find me on these platforms!
      </p>

      <div className="flex gap-4">
        <LinkedIn />
        <GitHub />
        <Instagram />
      </div>
    </div>
  );
}
