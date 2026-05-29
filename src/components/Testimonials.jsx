import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { testimonials } from '../data/siteData.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Client voice"
          title="The experience should feel as polished as the final product."
          copy="Clients work with us because they want technical confidence, but they stay because the process feels clear, humane, and dependable."
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              className="rounded-[1.75rem] border border-slate-200 bg-cloud p-6 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="flex gap-1 text-coral" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex}>*</span>
                ))}
              </div>
              <blockquote className="mt-6 text-lg font-semibold leading-8 text-ink">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-slate-200 pt-5">
                <p className="font-extrabold text-ink">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
