import { Email } from "./Email";
import { Phone } from "./Phone";
import { Socials } from "./Socials";

export function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-12 px-8 py-16 md:px-16 bg-gray-800"
    >
      <div className="flex flex-col items-center">
        <span className="bg-gray-700 px-4 py-2 rounded-full text-gray-300 mb-4">
          Get in touch
        </span>

        <p className="text-gray-200 text-center">
          {
            "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
          }
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Email />
        <Phone />
      </div>

      <Socials />
    </div>
  );
}
