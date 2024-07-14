export function Projects() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-16 md:px-16">
      <div className="flex flex-col items-center mb-16 px-8 md:px-16">
        <span className="bg-gray-700 px-4 py-2 rounded-full text-gray-300 mb-4">
          Projects
        </span>

        <p className="text-gray-200 text-center">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="text-gray-200 bg-gray-700 rounded-xl flex flex-col overflow-hidden lg:flex-row"
        >
          <div className="p-8 bg-gray-600 flex items-center justify-center flex-1">
            {project.image}
          </div>

          <div className="p-8 flex gap-8 flex-col flex-1">
            <h1 className="font-semibold text-lg hover:underline">
              <a target="_blank" href={project.url} rel="noreferrer">
                {project.title}
              </a>
            </h1>

            <p>{project.description}</p>

            <div className="flex gap-3 flex-wrap">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-gray-600 px-4 py-2 rounded-full text-gray-300 mb-4"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const projects = [
  {
    title: "React Native images to PDF library",
    description:
      "I developed a React Native library specifically designed to generate PDF files from images. This solution addresses a gap I identified, as existing libraries did not offer this functionality within React Native. It was originally created to fulfill a crucial requirement in a previous project, and I later decided to make it available as an open-source tool.",
    url: "https://github.com/Canciller/react-native-images-to-pdf",
    tags: ["React native", "Swift", "Java"],
    image: (
      <div className="flex gap-4 max-w-[400px]">
        <div>
          <img
            className="rounded-xl"
            src="https://raw.githubusercontent.com/Canciller/react-native-images-to-pdf/develop/docs/example-ios.gif"
            alt="Example iOS"
          />
        </div>
        <div>
          <img
            className="rounded-xl"
            src="https://raw.githubusercontent.com/Canciller/react-native-images-to-pdf/develop/docs/example-android.gif"
            alt="Example Android"
          />
        </div>
      </div>
    ),
  },
];
