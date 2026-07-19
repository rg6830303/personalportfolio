'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { experience, type Role } from '@/data/resume';

const toneDot: Record<string, string> = {
  yellow: 'bg-signal-yellow',
  green: 'bg-signal-green',
  red: 'bg-signal-red',
};
const toneText: Record<string, string> = {
  yellow: 'text-signal-yellow',
  green: 'text-signal-green',
  red: 'text-signal-red',
};

function Entry({ role, i }: { role: Role; i: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid gap-4 pb-16 pl-14 md:grid-cols-12 md:gap-8 md:pl-20"
    >
      {/* node */}
      <span className="absolute left-[13px] top-1.5 flex h-5 w-5 items-center justify-center md:left-[21px]">
        <span className={`absolute h-5 w-5 rounded-full ${toneDot[role.tone]} opacity-20`} />
        <span className={`h-2.5 w-2.5 rounded-full ${toneDot[role.tone]}`} />
      </span>

      <div className="md:col-span-4">
        <p className="font-mono text-xs tracking-wide text-graphite">{role.period}</p>
        {role.award && (
          <p className={`mt-3 inline-flex items-center gap-2 text-xs font-medium ${toneText[role.tone]}`}>
            ★ {role.award}
          </p>
        )}
      </div>

      <div className="md:col-span-8">
        <h3 className="font-display text-2xl leading-tight md:text-[1.7rem]">{role.title}</h3>
        <p className="mt-1.5 text-sm font-medium text-ink">{role.org}</p>
        {role.meta && <p className="mt-1 text-xs text-graphite">{role.meta}</p>}
        <ul className="mt-5 space-y-3">
          {role.points.map((pt, k) => (
            <li key={k} className="flex gap-3 text-sm leading-relaxed text-graphite">
              <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${toneDot[role.tone]}`} />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 30%', 'end 80%'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* rail */}
      <div className="absolute bottom-0 left-[22px] top-0 w-px bg-line md:left-[30px]" aria-hidden />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-0 left-[22px] top-0 w-px origin-top bg-ink md:left-[30px]"
        aria-hidden
      />
      {experience.map((role, i) => (
        <Entry key={role.title} role={role} i={i} />
      ))}
    </div>
  );
}
