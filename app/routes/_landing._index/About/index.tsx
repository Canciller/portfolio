import aboutmeimage from "./about-me.jpeg";

export function About() {
  return (
    <div id="about" className="bg-gray-800">
      <div className="max-w-screen-2xl mx-auto px-8 py-16 md:px-16">
        <div className="text-center mb-16">
          <span className="bg-gray-700 px-4 py-2 rounded-full text-gray-300">
            About me
          </span>
        </div>

        <div className="flex flex-col gap-28 items-center xl:flex-row xl:gap-32 xl:items-start">
          <div className="w-[85%] h-[500px] md:w-[450px] md:h-[600px] shrink-0 relative">
            <div className="bg-gray-200 w-full h-full absolute inset-y-8 inset-x-[-2rem]"></div>
            <img
              src={aboutmeimage}
              className="absolute w-full h-full object-cover inset-0"
              alt="Emilio in a bouldering gym, smiling, with a thumbs up"
            />
          </div>

          <div>
            <h2 className="text-gray-200 text-3xl font-semibold mb-6">
              Curious about me?
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-gray-200">
                {
                  "I'm a dedicated software engineer with a strong focus on front-end development using React, backed by expertise in Node.js for back-end solutions and React Native for mobile app development. My passion lies in crafting intuitive user interfaces, ensuring they are not just functional but also aesthetically pleasing with pixel-perfect precision."
                }
              </p>

              <p className="text-gray-200">
                {
                  "Beyond the realm of coding, I lead an active lifestyle centered around bodybuilding and bouldering. Recently, I've delved into bouldering as a new challenge, finding joy in its physical and mental demands. The gym is my sanctuary, where I push myself through rigorous workouts to maintain a healthy balance and strive for personal growth."
                }
              </p>

              <p className="text-gray-200">
                {`Music is another passion of mine—I've recently started learning bass guitar, inspired by the emotive sounds of bands like Radiohead. When I'm not coding or honing my physical and musical skills, you'll often find me immersed in RPG video games or indulging in TV shows of all kinds. Some of my favorites include "Dexter," "The Office," and "Breaking Bad." When it comes to movies, "Alien" holds a special place as my all-time favorite.`}
              </p>

              <p className="text-gray-200">
                {
                  "Collaboration plays a crucial role in my approach to work—I thrive in collaborative environments, particularly when working closely with designers to translate creative visions into seamless user experiences across various platforms."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
