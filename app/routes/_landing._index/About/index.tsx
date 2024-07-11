import aboutmeimage from "./about-me.jpeg";

export function About() {
  return (
    <div id="about" className="bg-gray-800 px-16 py-16">
      <div className="text-center mb-16">
        <span className="bg-gray-700 px-4 py-2 rounded-full text-gray-300">
          About me
        </span>
      </div>

      <div className="flex flex-col gap-28 items-center xl:flex-row xl:gap-32 xl:items-start">
        <div className="w-[350px] h-[500px] md:w-[450px] md:h-[600px] shrink-0 relative">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              suscipit nibh et dolor scelerisque, ac ornare turpis efficitur.
              Phasellus vestibulum nunc vitae neque congue pellentesque. Aenean
              turpis dolor, consectetur ac velit ut, hendrerit aliquam libero.
              Aenean est velit, consequat at dolor et, lacinia tristique ante.
              Fusce dui libero, efficitur ut pulvinar id, accumsan vitae dui.
              Phasellus erat nibh, tincidunt sit amet hendrerit vitae, consequat
              vitae eros. Vivamus maximus tincidunt diam, eu varius urna.
              Praesent nisl est, eleifend non ante id, vehicula iaculis quam.
              Etiam in eros in erat lobortis gravida. Nulla scelerisque ligula
              quis erat dictum, nec auctor velit ultricies. Aenean sit amet
              ipsum nisi. Phasellus sed tortor sit amet diam varius porta et non
              justo. Vivamus vehicula nulla eu dapibus eleifend. Maecenas
              finibus facilisis augue eu fermentum. Morbi molestie fermentum
              quam at efficitur. Aliquam a tincidunt mi.
            </p>

            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              suscipit nibh et dolor scelerisque, ac ornare turpis efficitur.
              Phasellus vestibulum nunc vitae neque congue pellentesque. Aenean
              turpis dolor, consectetur ac velit ut, hendrerit aliquam libero.
              Aenean est velit, consequat at dolor et, lacinia tristique ante.
              Fusce dui libero, efficitur ut pulvinar id, accumsan vitae dui.
              Phasellus erat nibh, tincidunt sit amet hendrerit vitae, consequat
              vitae eros. Vivamus maximus tincidunt diam, eu varius urna.
              Praesent nisl est, eleifend non ante id, vehicula iaculis quam.
              Etiam in eros in erat lobortis gravida. Nulla scelerisque ligula
              quis erat dictum, nec auctor velit ultricies. Aenean sit amet
              ipsum nisi. Phasellus sed tortor sit amet diam varius porta et non
              justo. Vivamus vehicula nulla eu dapibus eleifend. Maecenas
              finibus facilisis augue eu fermentum. Morbi molestie fermentum
              quam at efficitur. Aliquam a tincidunt mi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
