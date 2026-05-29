import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="What we do"
            title="Joined-up technology services for every stage of growth."
            copy="One team for support, infrastructure, product delivery, and quality assurance, with senior technical thinking built into every engagement."
          />
          <a href="#contact" className="light-button w-fit">
            Discuss your roadmap
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cobalt/30 hover:shadow-soft"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
            >
              <span className={`block h-2 w-14 rounded-full ${service.accent}`} />
              <h3 className="mt-8 text-xl font-extrabold text-ink">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              <a href={service.href} className="mt-8 flex w-fit items-center text-sm font-bold text-cobalt">
                Learn more
                <span className="ml-2 transition group-hover:translate-x-1">-&gt;</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
