import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col items-center justify-center text-center">
      <p className="eyebrow mb-6">Error 404 · Off protocol</p>
      <h1 className="display text-[clamp(4rem,20vw,14rem)] leading-none">
        4<span className="text-signal-red">0</span>4
      </h1>
      <p className="mt-6 max-w-sm text-graphite">
        This page didn&apos;t pass review — it doesn&apos;t exist. Let&apos;s get you back on record.
      </p>
      <Link
        href="/"
        data-cursor
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm text-canvas transition-transform hover:-translate-y-0.5"
      >
        Return to index <span>→</span>
      </Link>
    </section>
  );
}
