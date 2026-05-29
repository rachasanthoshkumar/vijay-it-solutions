import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, copy, align = 'left', tone = 'light' }) {
  const centered = align === 'center';
  const isDark = tone === 'dark';
  const titleClass = `${centered ? 'section-title mx-auto' : 'section-title'} ${isDark ? '!text-white' : ''}`;
  const copyClass = `${centered ? 'section-copy mx-auto' : 'section-copy'} ${isDark ? '!text-white/68' : ''}`;

  return (
    <motion.div
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={titleClass}>{title}</h2>
      {copy && <p className={copyClass}>{copy}</p>}
    </motion.div>
  );
}
