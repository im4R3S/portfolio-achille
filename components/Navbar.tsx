

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold tracking-tight">
          Achille Balme
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}