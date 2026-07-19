'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Index', no: '01' },
  { href: '/journey', label: 'Journey', no: '02' },
  { href: '/expertise', label: 'Expertise', no: '03' },
  { href: '/contact', label: 'Contact', no: '04' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className={`h-px w-full origin-left transition-opacity duration-500 ${scrolled ? 'bg-line opacity-100' : 'opacity-0'}`} />
      <div className="shell flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="group relative z-50 flex items-center gap-3" aria-label="Home">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-ink/25" />
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-red" />
            <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-signal-yellow" />
            <span className="absolute bottom-1 left-1.5 h-1 w-1 rounded-full bg-signal-green" />
          </span>
          <span className="font-display text-lg leading-none tracking-tight">
            Raka<span className="text-graphite"> Ghosh</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="group relative px-4 py-2 text-sm"
              >
                <span className="mr-1.5 font-mono text-[0.6rem] text-graphite">{l.no}</span>
                <span className={active ? 'text-ink' : 'text-graphite transition-colors group-hover:text-ink'}>
                  {l.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-ink"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-ink"
          />
        </button>
      </div>

      {/* Mobile overlay — background is solid from the first frame (initial={false})
          so page content can never show through; only the links animate in. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-canvas md:hidden"
          >
            <div className="dotgrid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
            <div className="shell relative flex h-full flex-col justify-center gap-2 pt-16">
              {links.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
                  >
                    <Link
                      href={l.href}
                      className="flex items-baseline gap-4 border-b border-line py-5"
                    >
                      <span className="font-mono text-xs text-graphite">{l.no}</span>
                      <span
                        className={`display text-5xl ${active ? 'italic text-signal-red' : ''}`}
                      >
                        {l.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
