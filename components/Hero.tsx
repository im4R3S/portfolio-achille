export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Achille Balme
        </h1>

        <p className="mt-4 text-2xl text-zinc-400">
          Junior Software Developer
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-500">
          Titulaire d’un CFC d’informaticien en développement
          d’applications, passionné par la technologie,
          les projets concrets et la création de solutions utiles.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-lg bg-white px-6 py-3 font-medium text-black">
            Mes projets
          </button>

          <button className="rounded-lg border border-zinc-700 px-6 py-3 font-medium">
            Contact
          </button>
        </div>
      </div>
    </main>
  );
}