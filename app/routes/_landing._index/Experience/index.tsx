export function Experience() {
  return (
    <div id="experience" className="bg-gray-800 px-8 py-16 md:px-16">
      <div className="flex flex-col items-center mb-16">
        <span className="bg-gray-700 px-4 py-2 rounded-full text-gray-300 mb-4">
          Experience
        </span>

        <p className="text-gray-200 text-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {data.map((item, index) => {
          return (
            <div key={index} className="bg-gray-700 p-8 rounded-xl">
              <div>
                <div className="mb-4 flex flex-col gap-1 justify-between md:flex-row">
                  <div>
                    <h1 className="text-gray-200 font-semibold text-lg">
                      {item.title}
                    </h1>

                    <span className="text-gray-200 italic">{item.company}</span>
                  </div>

                  <span className="text-gray-200 text-sm">
                    {Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      timeZone: "UTC",
                    }).format(item.startDate)}
                    {" - "}
                    {Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      timeZone: "UTC",
                    }).format(item.endDate)}
                  </span>
                </div>

                <ul className="list-disc pl-4 flex flex-col gap-2 text-gray-200">
                  {item.description}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const data: Array<{
  title: string;
  company: string;
  description: React.ReactNode;
  startDate: Date;
  endDate: Date;
}> = [
  {
    title: "Freelance",
    company: "HPMLED",
    startDate: new Date("2024-04-01T00:00:00.000Z"),
    endDate: new Date("2024-05-01T00:00:00.000Z"),
    description: (
      <li>
        Developed new website on Shopify utilizing React/Remix/Hydrogen,
        effectively enhancing the company’s online visibility by replacing an
        outdated and neglected site (
        <a
          className="underline"
          href="https://hpmled.com"
          target="_blank"
          rel="noreferrer"
        >
          www.hpmled.com
        </a>
        ).
      </li>
    ),
  },
  {
    title: "Software Engineer",
    company: "INTELA Servicios Corporativos",
    startDate: new Date("2021-10-01T00:00:00.000Z"),
    endDate: new Date("2024-03-01T00:00:00.000Z"),
    description: (
      <>
        <li>
          Led the development of a React Native mobile app, deployed on App
          Store and Play Store. The app simplified employee tasks, resulting in
          quicker leave requests, better attendance tracking, and easier access
          to company news. (
          <a
            href="https://play.google.com/store/apps/details?id=cloud.nomada.paytime&hl=es_PA&pli=1"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Play Store
          </a>
          {", "}
          <a
            href="https://apps.apple.com/mx/app/payjob-rh/id6468971111"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            App Store
          </a>
          )
        </li>
        <li>
          Contributed to the development of an administrative panel using
          Next.js. This panel managed roles, permissions, and data displayed in
          the mobile app.
        </li>
        <li>
          Contributed to the development of two internal mobile apps for the HR
          department using React Native.
        </li>
        <li>
          Managed deployment of mobile apps in App Store Connect, and Google
          Play Console.
        </li>
        <li>
          Utilized a Strapi (CMS) within the administrative panel, primarily to
          facilitate easy management of resources such as images, videos, and
          articles authored by non-developers.
        </li>
        <li>
          Created multiple scripts to massively handle and load data to
          databases from JSON or XLSX files.
        </li>
        <li>Created multiple cloud functions using Firebase.</li>
        <li>Managed deployment of cloud functions using Firebase.</li>
        <li>Fixed and debugged errors in code and deployments.</li>
      </>
    ),
  },
];
