'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const panels = [
  { color: 'var(--red)' },
  { color: 'var(--yellow)' },
  { color: 'var(--green)' },
];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] },
          }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {!reduce && (
        <AnimatePresence mode="wait">
          <div
            key={pathname}
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[65] flex flex-col"
          >
            {panels.map((p, i) => (
              <motion.div
                key={i}
                className="w-full flex-1 origin-top"
                style={{ background: p.color }}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.05 * i,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
