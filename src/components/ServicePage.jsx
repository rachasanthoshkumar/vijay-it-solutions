import { motion } from 'framer-motion';
import BackHomeLink from './BackHomeLink.jsx';
import { servicePages } from '../data/siteData.js';

export default function ServicePage({ page }) {
  const service = servicePages[page];

  if (!service) {
    return null;
  }

  return (
    <main className="bg-cloud">
      <section className="relative isolate overflow-hidden bg-ink pt-32 text-white sm:pt-36">
        <div className={`absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-br ${service.accent} opacity-80`} />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(7,17,31,0.86)_52%,rgba(7,17,31,0.52))]" />

        <div className="container-shell pb-20 pt-8 sm:pb-24 lg:pb-28">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: 'easeOut' }}
          >
            <BackHomeLink />
            <p className="eyebrow mt-8 text-mint">{service.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-normal sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{service.summary}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/contact" className="primary-button">
                Contact us
              </a>
              <a href="#service-details" className="secondary-button">
                View capabilities
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="service-details" className="section-padding bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Overview</p>
            <h2 className="section-title">End-to-end support, from planning to improvement.</h2>
            <p className="section-copy">{service.description}</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.highlights.map((item, index) => (
              <motion.div
                key={item}
                className="rounded-3xl border border-slate-200 bg-cloud p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-cobalt/10 text-sm font-black text-cobalt">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm font-bold leading-7 text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cloud">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow text-mint">Expected outcomes</p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Practical improvements your team can feel.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-3xl border border-white/12 bg-white/8 p-5">
                    <p className="text-sm font-semibold leading-7 text-white/76">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink">Ready to map the right solution?</h2>
          </div>
          <a href="/contact" className="primary-button">
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
