import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import { stats } from '../data/siteData.js';

function StatNumber({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const numeric = Number.parseInt(value, 10);
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1200, bounce: 0 });
  const [display, setDisplay] = useState(value.includes('/') ? value : '0');

  useEffect(() => {
    if (!Number.isNaN(numeric) && inView) {
      count.set(numeric);
    }
  }, [count, inView, numeric]);

  useEffect(() => {
    if (Number.isNaN(numeric) || value.includes('/')) {
      setDisplay(value);
      return undefined;
    }

    return spring.on('change', (latest) => {
      const suffix = value.replace(String(numeric), '');
      setDisplay(`${Math.round(latest)}${suffix}`);
    });
  }, [numeric, spring, value]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  return (
    <section id="stats" className="section-padding bg-ink text-white">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Proof points"
          title="Experienced enough for complex work, focused enough to stay personal."
          copy="Our best metric is the number of clients who keep trusting us with the next challenge."
          align="center"
          tone="dark"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-[1.75rem] border border-white/12 bg-white/8 p-6 text-center backdrop-blur"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                <StatNumber value={stat.value} />
              </p>
              <p className="mt-4 text-sm font-semibold leading-6 text-white/64">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
