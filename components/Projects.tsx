import MotionSection from "@/components/MotionSection";
const featuredProject = {
  title: "Global Point-of-Sale Management System",
  company: "Jaeger-LeCoultre",
  year: "2025",
  description:
    "Final apprenticeship project focused on improving an internal application used to manage worldwide points of sale. The project included automated boutique opening and closing workflows, scheduled processing, database updates, XML integrations and a modernization of the user interface.",
  impact: [
    "Automated opening and closing workflows",
    "Reduced manual administrative operations",
    "Improved reliability through scheduled processing",
    "Modernized a legacy internal interface",
  ],
  technologies: ["Java", "JSP", "SQL", "XML", "Maven", "Git"],
};

const projects = [
  {
    title: "WebCustom",
    description:
      "Co-founded a digital services business during my apprenticeship. Delivered websites and digital solutions while managing client communication, project planning and technical implementation.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    type: "Entrepreneurship",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with a modern frontend stack, focused on clean architecture, reusable components, responsive design and automated deployment.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "Personal Project",
  },
];

export default function Projects() {
  return (
    <MotionSection>
      <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
            Selected work and technical projects.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            A selection of professional, entrepreneurial and personal projects
            that reflect my technical background and learning path.
          </p>
        </div>

        <article className="mt-14 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/70">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Featured Project
                </span>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                  {featuredProject.company}
                </span>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
                  {featuredProject.year}
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-bold tracking-tight text-white">
                {featuredProject.title}
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                {featuredProject.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-800 bg-black px-3 py-1 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-800 bg-black/40 p-8 md:p-10 lg:border-l lg:border-t-0">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                Impact
              </p>

              <div className="mt-6 space-y-4">
                {featuredProject.impact.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"
                    >
                    <p className="text-sm leading-6 text-zinc-300">{item}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 transition-colors hover:border-zinc-600"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-500">
                  {project.type}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
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
    </MotionSection>
  );
}