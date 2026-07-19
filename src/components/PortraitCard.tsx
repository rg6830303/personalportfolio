'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/resume';

export default function PortraitCard() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 18 });

  return (
    <div
      className="perspective relative"
      onPointerMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {/* signal frame accents */}
      <div className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-signal-yellow" />
      <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-signal-green" />

      <motion.div
        style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-[4px] bg-paper"
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(max-width: 768px) 80vw, 440px"
            className="object-cover object-top grayscale-[0.15] contrast-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
        </div>

        <div
          style={{ transform: 'translateZ(40px)' }}
          className="absolute bottom-4 left-4 rounded-full bg-canvas/90 px-4 py-1.5 font-mono text-[0.65rem] tracking-wide text-ink backdrop-blur"
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-signal-red align-middle" />
          Dr. Raka Ghosh
        </div>
      </motion.div>
    </div>
  );
}
