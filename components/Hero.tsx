export default function Hero() {
  return (
    <main id="top" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-6 pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(63,63,70,0.32),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black_0%,black_45%,rgba(0,0,0,0.45)_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[#09090b]" />

      <div className="max-w-5xl text-center">
        <div className="mx-auto mb-8 w-fit rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-2 text-sm text-zinc-400">
          Software Developer · Switzerland
        </div>

        <h1 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-7xl">
          Achille Balme
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Building useful software, automating processes and solving real-world
          business problems through clean and maintainable digital solutions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-zinc-500"
          >
            Contact me
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-500">
          <a href="https://github.com/im4R3S" target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:achille.balme@gmail.com" className="transition hover:text-white">
            Email
          </a>
        </div>

        <a
          href="#about"
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-700 transition-colors hover:text-zinc-400"
        >
          <span>Explore</span>
          <span className="text-base leading-none">↓</span>
        </a>
      </div>
    </main>
  );
}