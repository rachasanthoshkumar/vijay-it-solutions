import { navLinks } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="container-shell">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="Vijay IT Solutions home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-coral text-sm font-black shadow-glow">
              VIS
            </span>
            <span className="text-sm font-extrabold">Vijay IT Solutions</span>
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-white/66 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-8 text-sm text-white/54 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vijay IT Solutions. All rights reserved.</p>
          <p>Built for secure systems, polished products, and dependable support.</p>
        </div>
      </div>
    </footer>
  );
}
