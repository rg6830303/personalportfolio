'use client';

import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Magnetic from './Magnetic';

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
        transition={{ duration: 1, delay: 0.5 + delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );

  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="shell flex min-h-[calc(100svh-7rem)] flex-col pb-12">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 md:mb-10"
        >
          <span className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-green" />
            {'17+'} years · research to governance
          </span>
          <span className="eyebrow hidden md:inline">Ph.D. · IIT Bombay</span>
        </motion.div>

        {/* Content grid: headline + molecule + supporting text.
            Mobile stacks in DOM order (headline → molecule → text);
            desktop places molecule in its own right-hand column so it
            never sits behind the copy. */}
        <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-12 md:items-center">
          {/* Headline */}
          <div className="md:col-span-7 md:self-center">
            <h1 className="display text-[clamp(2.75rem,10vw,7.5rem)]">
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

          {/* Molecule — contained in its own bounded box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
            className="md:col-span-5 md:row-span-2 md:self-center"
          >
            <div className="relative mx-auto aspect-square w-[68%] max-w-[280px] sm:max-w-[320px] md:w-full md:max-w-[500px] md:aspect-[4/5]">
              <Molecule />
            </div>
          </motion.div>

          {/* Supporting copy + actions */}
          <div className="md:col-span-7 md:self-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: EASE }}
              className="max-w-md text-pretty text-base leading-relaxed text-graphite"
            >
              I&apos;m <span className="text-ink">Dr. Raka Ghosh</span> — a synthetic chemist turned
              governance leader, building the systems, policy and culture that keep research honest,
              compliant and worthy of trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Link
                  href="/journey"
                  data-cursor
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                >
                  Explore the journey
                  <span className="cta-arrow">→</span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  data-cursor
                  className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
                >
                  Get in touch
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
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
