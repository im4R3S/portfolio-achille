"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href=""
            className="text-lg font-semibold tracking-tight transition-colors hover:text-zinc-300"
          >
            Achille Balme
          </a>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <a
        href="#top"
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/90 text-zinc-400 backdrop-blur transition-all duration-300 hover:border-zinc-600 hover:text-white ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        ↑
      </a>
    </>
  );
}