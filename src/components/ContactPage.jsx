import { motion } from 'framer-motion';
import BackHomeLink from './BackHomeLink.jsx';
import Contact from './Contact.jsx';

export default function ContactPage() {
  return (
    <main className="bg-cloud">
      <section className="relative isolate overflow-hidden bg-ink pt-32 text-white sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.22),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,107,74,0.18),transparent_28%),linear-gradient(135deg,#07111f,#172033)]" />
        <div className="container-shell pb-18 pt-8 sm:pb-20 lg:pb-24">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: 'easeOut' }}
          >
            <BackHomeLink />
            <p className="eyebrow mt-8 text-mint">Contact</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-normal sm:text-6xl">
              Let’s talk about the right next move.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Tell us what you need help with and we’ll come back with a practical path forward.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
