import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';

const reasons = [
  'Senior engineers lead discovery, architecture, and delivery.',
  'Clear communication with practical recommendations, not jargon.',
  'Security, performance, and maintainability are treated as defaults.',
  'Flexible support models that scale with your team and roadmap.'
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-cloud">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="rounded-[2rem] bg-ink p-6 text-white shadow-soft">
            <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-mint">Operating model</p>
              <h3 className="mt-5 text-3xl font-extrabold leading-tight">
                Strategy, delivery, and support working as one system.
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/68">
                Our engagements are built around outcomes: fewer support interruptions, better releases, stronger infrastructure, and digital products that serve the business.
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white p-5 text-ink">
                <p className="text-3xl font-extrabold">4.9</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Average rating</p>
              </div>
              <div className="rounded-3xl bg-coral p-5 text-white">
                <p className="text-3xl font-extrabold">30%</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-white/74">Faster delivery</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="Why choose us"
            title="A calmer way to run critical digital work."
            copy="We combine the polish of a digital agency with the discipline of an IT operations partner, giving you fewer handoffs and more accountable outcomes."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-cobalt/10 text-sm font-black text-cobalt">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
