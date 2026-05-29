import { motion } from 'framer-motion';

const badges = ['Managed IT', 'Cloud', 'Web Apps', 'QA'];

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen bg-agency-radial pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(7,17,31,0.96)_0%,rgba(7,17,31,0.74)_42%,rgba(7,17,31,0.18)_100%)]" />
      <img
        src="/images/agency-hero.png"
        alt="A modern digital agency team collaborating around technology dashboards"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-70"
      />

      <div className="container-shell flex min-h-[calc(100vh-7rem)] items-center pb-16">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <div className="mb-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white/88 backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="eyebrow text-mint">IT services for ambitious teams</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
              Digital systems that make business feel effortless.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-xl">
              We design, build, secure, and support the technology behind modern companies, from cloud operations to polished customer-facing products.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="primary-button">
                Book a consultation
              </a>
              <a href="#services" className="secondary-button">
                Explore services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
