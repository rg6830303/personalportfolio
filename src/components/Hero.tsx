'use client';

import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { profile } from '@/data/resume';

const Molecule = dynamic(() => import('./Molecule'), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const line = (children: React.ReactNode, delay: number) => (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: reduce ? 0 : '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.55 + delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28">
      {/* Molecule canvas — sits behind text, fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.7 }}
        className="pointer-events-auto absolute inset-y-0 right-[-10%] z-0 h-full w-[75%] md:right-0 md:w-[52%]"
        aria-hidden
      >
        <Molecule />
      </motion.div>

      <div className="shell relative z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-between pb-10">
        <div className="pt-6 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <span className="eyebrow flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal-green" />
              {profile.yearsExperience} years · research to governance
            </span>
            <span className="eyebrow hidden md:inline">Ph.D. · IIT Bombay</span>
          </motion.div>

          <h1 className="display max-w-[15ch] text-[clamp(3rem,11vw,9.5rem)]">
            {line('Research', 0)}
            {line(
              <>
                that keeps its{' '}
                <span className="italic text-signal-red">word.</span>
              </>,
              0.12
            )}
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            className="max-w-md text-pretty text-base leading-relaxed text-graphite md:col-span-5"
          >
            I&apos;m <span className="text-ink">Dr. Raka Ghosh</span> — a synthetic chemist turned
            governance leader, building the systems, policy and culture that keep research honest,
            compliant and worthy of trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
            className="flex flex-wrap items-center gap-4 md:col-span-7 md:justify-end"
          >
            <Link
              href="/journey"
              data-cursor
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
            >
              Explore the journey
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              data-cursor
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block h-6 w-px bg-ink/40"
        />
      </motion.div>
    </section>
  );
}
