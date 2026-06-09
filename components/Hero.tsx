export default function Hero() {
  return (
    <main className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(63,63,70,0.35),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-5xl text-center">
        <div className="mx-auto mb-8 w-fit rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-2 text-sm text-zinc-400">
          Software Developer · Switzerland
        </div>

        <h1 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-7xl">
          Achille Balme
        </h1>

        <p className="mt-5 text-2xl text-zinc-300">
          Software Developer
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
          Building useful software, automating processes and solving real-world
          business problems through clean and maintainable digital solutions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:-translate-y-0.5 hover:opacity-90"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:border-zinc-500"
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

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-zinc-600">
            <p className="text-2xl font-bold">JLC</p>
            <p className="mt-1 text-sm text-zinc-500">Industrial IT experience</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-zinc-600">
            <p className="text-2xl font-bold">CFC</p>
            <p className="mt-1 text-sm text-zinc-500">Application development</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-zinc-600">
            <p className="text-2xl font-bold">2025</p>
            <p className="mt-1 text-sm text-zinc-500">Certified developer</p>
          </div>
        </div>

        <div className="mt-16 text-sm text-zinc-600">
          Scroll to explore ↓
        </div>
      </div>
    </main>
  );
}