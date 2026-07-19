'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/resume';
import { WhatsAppIcon } from './Icons';

const href = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`;

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const [hint, setHint] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Show the label briefly the first time the button appears.
  useEffect(() => {
    if (!show) return;
    setHint(true);
    const t = setTimeout(() => setHint(false), 3200);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={href}
          target="_blank"
          rel="noreferrer"
          data-cursor
          aria-label="Chat with Dr. Raka Ghosh on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-5 right-5 z-[35] flex items-center gap-0 md:bottom-7 md:right-7"
        >
          <AnimatePresence>
            {hint && !reduce && (
              <motion.span
                initial={{ opacity: 0, x: 8, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 'auto' }}
                exit={{ opacity: 0, x: 8, width: 0 }}
                transition={{ duration: 0.35 }}
                className="mr-2 hidden overflow-hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs font-medium text-canvas sm:inline-block"
              >
                Chat on WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-signal-green text-canvas shadow-[0_14px_36px_-12px_rgba(27,122,75,0.7)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
            {!reduce && <span className="absolute inset-0 rounded-full bg-signal-green/40 animate-ping" />}
            <WhatsAppIcon className="relative h-7 w-7" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
