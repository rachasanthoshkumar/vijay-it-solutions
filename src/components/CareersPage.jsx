import { motion } from 'framer-motion';
import BackHomeLink from './BackHomeLink.jsx';
import { careerCards, contactDetails } from '../data/siteData.js';

export default function CareersPage() {
  return (
    <main className="bg-cloud">
      <section className="relative isolate overflow-hidden bg-ink pt-32 text-white sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.2),transparent_32%),radial-gradient(circle_at_78%_8%,rgba(255,107,74,0.18),transparent_28%),linear-gradient(135deg,#07111f,#172033)]" />
        <div className="container-shell pb-20 pt-8 sm:pb-24">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: 'easeOut' }}
          >
            <BackHomeLink />
            <p className="eyebrow mt-8 text-mint">Careers</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-normal sm:text-6xl">
              Careers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Join a team focused on practical digital solutions, reliable IT delivery, and thoughtful business support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            {careerCards.map((card, index) => (
              <motion.article
                key={`${card.title}-${index}`}
                className="rounded-[1.75rem] border border-slate-200 bg-cloud p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cobalt/30 hover:shadow-soft"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="block h-2 w-14 rounded-full bg-coral" />
                <h2 className="mt-8 text-2xl font-extrabold leading-tight text-ink">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                <a href={`/careers/${card.slug}`} className="primary-button mt-8">
                  Apply Now
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cloud">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="eyebrow text-mint">Get in touch</p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Speak with us about opportunities.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="rounded-3xl border border-white/12 bg-white/8 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/42">{detail.label}</p>
                    <p className="mt-2 whitespace-pre-line break-words text-sm font-bold text-white">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
