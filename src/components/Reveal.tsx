'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Fragment, type ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'span';
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

// Word-by-word heading reveal. Plays on MOUNT (not whileInView) so the text is
// always guaranteed to end up visible — an IntersectionObserver miss can never
// leave a title blank. Each word rises out of its own clip mask.
export function RevealHeading({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
              paddingBottom: '0.12em',
            }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: delay + i * 0.05, ease: EASE }}
            >
              {w}
            </motion.span>
          </span>{' '}
        </Fragment>
      ))}
    </span>
  );
}
