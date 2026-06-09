const links = [
  {
    label: "Email",
    value: "achille.balme@gmail.com",
    href: "mailto:achille.balme@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/im4R3S",
    href: "https://github.com/im4R3S",
  },
  {
    label: "LinkedIn",
    value: "Achille Balme",
    href: "https://www.linkedin.com/in/achille-balme/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
                Let’s build something useful.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Open to junior software development opportunities, technical
                projects and professional discussions.
              </p>
            </div>

            <div className="space-y-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group block border-b border-zinc-800 pb-6 last:border-b-0"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-zinc-500">
                        {link.label}
                      </p>
                      <p className="mt-2 text-lg text-white transition-colors group-hover:text-zinc-300">
                        {link.value}
                      </p>
                    </div>

                    <span className="text-zinc-700 transition-colors group-hover:text-zinc-400">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}