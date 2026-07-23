'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const EASE = [0.76, 0, 0.24, 1] as const;
const CONTENT_EASE = [0.16, 1, 0.3, 1] as const;

// A small molecular brand mark shown briefly while the panel covers the screen.
function Mark() {
  return (
    <motion.span
      className="relative flex h-16 w-16 items-center justify-center"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [0.7, 1, 1, 0.9] }}
      transition={{ duration: 0.72, times: [0, 0.3, 0.6, 1], ease: 'easeInOut' }}
    >
      <span className="absolute inset-0 rounded-full border border-canvas/30" />
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-red" />
      <span className="absolute right-2.5 top-3 h-1.5 w-1.5 rounded-full bg-signal-yellow" />
      <span className="absolute bottom-3 left-4 h-1.5 w-1.5 rounded-full bg-signal-green" />
    </motion.span>
  );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: reduce ? 0 : 0.42, ease: CONTENT_EASE },
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {!reduce && (
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[66] flex items-center justify-center bg-ink"
            initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.62, ease: EASE }}
          >
            <Mark />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
