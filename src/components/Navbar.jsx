import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks, serviceLinks } from '../data/siteData.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container-shell pt-4" aria-label="Main navigation">
        <div
          className={`flex min-h-16 items-center justify-between rounded-full border px-4 transition duration-300 sm:px-5 ${
            isScrolled
              ? 'border-white/70 bg-white/85 shadow-lg shadow-slate-900/10 backdrop-blur-xl'
              : 'border-white/15 bg-white/10 backdrop-blur-md'
          }`}
        >
          <a href="/" className="flex items-center gap-3" aria-label="Vijay IT Solutions home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-coral text-sm font-black text-white shadow-glow">
              VIS
            </span>
            <span className={`text-sm font-extrabold tracking-normal ${isScrolled ? 'text-ink' : 'text-white'}`}>
              Vijay IT Solutions
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="group relative py-5">
              <a
                href="/#services"
                className={`text-sm font-semibold transition hover:text-coral ${
                  isScrolled ? 'text-slate-700' : 'text-white/82'
                }`}
              >
                Services
              </a>
              <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 rounded-3xl border border-white/70 bg-white/95 p-3 opacity-0 shadow-soft backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {serviceLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-cobalt"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                className={`text-sm font-semibold transition hover:text-coral ${
                  isScrolled ? 'text-slate-700' : 'text-white/82'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-full border transition lg:hidden ${
              isScrolled ? 'border-slate-200 bg-white text-ink' : 'border-white/20 bg-white/10 text-white'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="mt-3 rounded-3xl border border-white/70 bg-white/95 p-4 shadow-soft backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="grid gap-1">
              <p className="px-4 pb-1 pt-2 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                Services
              </p>
              {serviceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-cobalt"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="my-2 h-px bg-slate-200" />
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-cobalt"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
