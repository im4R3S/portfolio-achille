const links = [
  {
    label: "GitHub",
    href: "https://github.com/im4R3S",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Email",
    href: "mailto:achille.balme@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">
            Achille Balme
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
            Software Developer based in Switzerland, focused on building
            useful software, automation tools and modern web applications.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-5 text-sm text-zinc-500">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-sm text-zinc-600 md:text-right">
            <p>Built with Next.js, TypeScript, Tailwind CSS and Vercel.</p>
            <p className="mt-1">© 2026 Achille Balme.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}