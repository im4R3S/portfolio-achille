const highlights = [
  "CFC in application development",
  "Industrial IT experience at Jaeger-LeCoultre",
  "Legacy system modernization",
  "Modern web development stack",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
              About
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
              Practical developer with real business experience.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I am a software developer from Switzerland with a CFC in application
              development and professional experience in an industrial IT
              environment at Jaeger-LeCoultre.
            </p>

            <p>
              My background combines backend logic, legacy application
              modernization, SQL databases, internal tools, user support and
              modern frontend technologies.
            </p>

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 text-sm text-zinc-300 transition  hover:border-zinc-600">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}