import MotionSection from "@/components/MotionSection";

const highlights = [
  {
    value: "5 Years",
    title: "Professional Experience",
    description:
      "Application development experience at Jaeger-LeCoultre in an industrial IT environment.",
  },
  {
    value: "CFC",
    title: "Application Development",
    description:
      "Swiss federal diploma obtained in 2025 after a five-year apprenticeship.",
  },
  {
    value: "Enterprise",
    title: "Business Environment",
    description:
      "Worked with internal tools, databases, automation and production processes.",
  },
  {
    value: "Modern Stack",
    title: "Continuous Learning",
    description:
      "React, Next.js, TypeScript and modern frontend technologies.",
  },
];

const technologies = [
  "Java",
  "SQL",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Git",
  "Linux",
  "ServiceNow",
  "HTML",
  "CSS",
];

export default function Skills() {
  return (
    <MotionSection>
      <section id="skills" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
              Skills
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
              Technologies and tools I use.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Built through five years of professional experience, personal
              projects and continuous learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {item.value}
                </p>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950/50 p-8">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Technologies
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}