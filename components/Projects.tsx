const projects = [
  {
    title: "Global Point-of-Sale Management System",
    description:
      "Final apprenticeship project completed at Jaeger-LeCoultre. Designed and implemented automated workflows for worldwide boutique openings and closures, including scheduled processing, database updates, XML integrations and modernization of the internal user interface.",
    technologies: [
      "Java",
      "JSP",
      "SQL",
      "XML",
      "Maven",
      "Git",
    ],
    status: "Professional Project",
  },
  {
    title: "WebCustom",
    description:
      "Co-founded a digital services business during my apprenticeship. Delivered websites and digital solutions while managing client communication, project planning and technical implementation.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
      "Client Projects",
    ],
    status: "Entrepreneurship",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built to learn and apply modern frontend development practices including component-based architecture, responsive design and automated deployment workflows.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    status: "In Progress",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mt-4 text-lg text-zinc-400">
            A selection of projects that reflect my technical background,
            learning path and interest in building useful digital solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 transition-colors hover:border-zinc-600"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}