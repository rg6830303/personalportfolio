import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Timeline from '@/components/Timeline';
import { Reveal, RevealHeading } from '@/components/Reveal';
import { honours } from '@/data/resume';

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Seventeen years across pharmaceutical R&D, academia and national digital-education governance.',
};

const honourTone = ['text-signal-red', 'text-signal-green', 'text-signal-yellow'];

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

      {/* Honours & recognition */}
      <section className="border-y border-line bg-paper py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow mb-8">Honours &amp; recognition</p>
          </Reveal>
          <h2 className="display mb-12 max-w-[18ch] text-[clamp(1.8rem,4.5vw,3.2rem)] leading-tight">
            <RevealHeading text="Named, dated markers of the work." />
          </h2>
          <div className="grid gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-3">
            {honours.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.1} className="bg-canvas p-8">
                <div className={`mb-6 font-mono text-sm ${honourTone[i % 3]}`}>{h.year}</div>
                <h3 className="font-display text-xl leading-snug md:text-2xl">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{h.org}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell pb-28 pt-20">
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
