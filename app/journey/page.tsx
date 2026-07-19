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

      <section className="shell pb-10">
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
