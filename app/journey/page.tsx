import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Timeline from '@/components/Timeline';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Seventeen years across pharmaceutical R&D, academia and national digital-education governance.',
};

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Professional experience"
        title="From the fume hood to national governance."
        intro="A non-linear path with a consistent thread: the discipline of doing research correctly. Synthetic chemistry taught me protocol, documentation and consequence — everything since has been about scaling that discipline across institutions."
      />

      {/* At a glance */}
      <section className="shell pb-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-4">
          {[
            { v: '1998', l: 'Where it began — IIT Bombay', t: 'green' },
            { v: '7', l: 'Employers across R&D, academia & governance', t: 'red' },
            { v: '3', l: 'Sectors: pharma, education, public digital infra', t: 'yellow' },
            { v: '2004', l: 'First regulated lab role — Cipla, under CDSCO', t: 'green' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-canvas p-6">
              <span className={`mb-3 block h-1 w-8 bg-tone-${s.t}`} />
              <div className="display text-3xl md:text-4xl">{s.v}</div>
              <div className="mt-2 text-xs leading-snug text-graphite">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pb-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="section-index text-signal-red">Timeline</span>
          <span className="h-px flex-1 bg-line" />
          <span className="section-index text-graphite">Present → 1998</span>
        </div>
        <Timeline />
      </section>

      <section className="shell pb-28">
        <Reveal>
          <div className="rule flex flex-col items-start justify-between gap-6 pt-10 md:flex-row md:items-center">
            <p className="max-w-md text-graphite">
              The full record of credentials, training and the frameworks behind this work lives in the
              expertise dossier.
            </p>
            <Link
              href="/expertise"
              data-cursor
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
            >
              View expertise
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
