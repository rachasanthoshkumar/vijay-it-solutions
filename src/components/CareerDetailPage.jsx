import { motion } from 'framer-motion';
import { careerDetailPages } from '../data/siteData.js';

export default function CareerDetailPage({ page }) {
  const career = careerDetailPages[page];

  if (!career) {
    return (
      <main className="section-padding bg-white pt-36">
        <div className="container-shell">
          <a href="/careers" className="light-button">
            Back to careers
          </a>
          <h1 className="mt-8 text-4xl font-extrabold text-ink">Career details not found</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            The role you are looking for is no longer available. Please return to the careers page to view current
            openings.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-cloud">
      <section className="relative isolate overflow-hidden bg-ink pt-32 text-white sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-agency-radial" />
        <div className="container-shell pb-16 pt-8 sm:pb-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: 'easeOut' }}
          >
            <a
              href="/careers"
              className="group inline-flex items-center gap-2 text-sm font-bold text-white/64 transition hover:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/16 bg-white/8 transition group-hover:-translate-x-0.5 group-hover:bg-white/14">
                <span aria-hidden="true">&larr;</span>
              </span>
              Back to careers
            </a>
            <p className="eyebrow mt-8 text-mint">{career.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-normal sm:text-6xl">
              {career.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{career.summary}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <motion.article
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-cloud shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <img
                src="/images/agency-hero.png"
                alt=""
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="eyebrow">Job Details</p>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  {career.details.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {career.requirements.map((requirement) => (
                    <div key={`${requirement.label}-${requirement.text}`} className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm leading-6 text-slate-600">
                        <span className="font-extrabold text-ink">{requirement.label}</span> {requirement.text}
                      </p>
                    </div>
                  ))}
                </div>

                <a href="mailto:Laxmantaduri888@gmail.com?subject=Career%20Application" className="primary-button mt-8">
                  Apply for this role
                </a>
              </div>
            </motion.article>

            <aside className="grid gap-5">
              <motion.div
                className="rounded-[1.75rem] bg-ink p-6 text-white shadow-soft"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                <h2 className="text-2xl font-extrabold">{career.help.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/66">{career.help.description}</p>
                <div className="mt-6 grid gap-3">
                  {career.help.details.map((detail) => (
                    <p key={detail} className="whitespace-pre-line rounded-2xl border border-white/12 bg-white/8 p-4 text-sm font-bold leading-6">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.16 }}
              >
                <h2 className="text-2xl font-extrabold text-ink">{career.newsletter.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{career.newsletter.description}</p>
                <form className="mt-5 grid gap-3">
                  <label className="sr-only" htmlFor="career-newsletter-email">
                    Email address
                  </label>
                  <input
                    id="career-newsletter-email"
                    type="email"
                    placeholder="info@yourdomain.com"
                    className="min-h-12 rounded-full border border-slate-200 px-5 text-sm font-semibold text-ink outline-none transition placeholder:text-slate-400 focus:border-cobalt focus:ring-4 focus:ring-cobalt/15"
                  />
                  <button type="submit" className="primary-button w-full">
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cloud">
        <div className="container-shell">
          <div className="grid gap-6 bg-ink p-6 text-white shadow-soft sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight">{career.cta.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">{career.cta.description}</p>
            </div>
            <a href="/contact" className="secondary-button">
              Become a Client
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
