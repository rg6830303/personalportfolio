import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Reveal, RevealHeading } from '@/components/Reveal';
import { competencies, education, training, engagements, languages } from '@/data/resume';

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Core competencies, credentials, research-ethics training and professional engagement.',
};

const toneDot: Record<string, string> = {
  yellow: 'bg-signal-yellow',
  green: 'bg-signal-green',
  red: 'bg-signal-red',
};
const toneBorder: Record<string, string> = {
  yellow: 'border-l-signal-yellow',
  green: 'border-l-signal-green',
  red: 'border-l-signal-red',
};

export default function ExpertisePage() {
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Capabilities & credentials"
        title="The frameworks I build, and what backs them."
        intro="Every competency below is load-bearing — earned through doctoral research, pharmaceutical compliance and years of designing the policy that governs how research gets done."
      />

      {/* COMPETENCIES */}
      <section className="shell pb-24">
        <Reveal>
          <p className="eyebrow mb-8 flex items-center gap-3">
            <span className="text-signal-red">A</span> Core competencies
          </p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.05} className="group relative bg-canvas p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-graphite">{String(i + 1).padStart(2, '0')}</span>
                <span className={`h-2.5 w-2.5 rounded-full ${toneDot[c.tone]} transition-transform duration-300 group-hover:scale-150`} />
              </div>
              <h3 className="font-display text-xl leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-graphite">{c.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-t border-line bg-paper py-24">
        <div className="shell">
          <div className="mb-14">
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-3">
                <span className="text-signal-green">B</span> Education & certifications
              </p>
            </Reveal>
            <h2 className="display text-[clamp(1.8rem,5vw,3.5rem)]">
              <RevealHeading text="Trained where the standards are set." />
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={(i % 2) * 0.08}>
                <div className={`h-full border-l-2 ${toneBorder[e.tone]} bg-canvas p-7 transition-transform duration-500 hover:-translate-y-1`}>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">{e.degree}</h3>
                  <p className="mt-2 text-sm font-medium text-ink">{e.institution}</p>
                  <p className="mt-4 text-sm leading-relaxed text-graphite">{e.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="shell py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-3">
                <span className="text-signal-yellow">C</span> Research-ethics training
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-graphite">
                Continued study keeps the frameworks current — from responsible AI to publication ethics
                and systematic review.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <ul className="rule">
              {training.map((t, i) => (
                <Reveal key={i} delay={i * 0.05} as="li">
                  <div className="flex items-start gap-5 border-b border-line py-5">
                    <span className="font-mono text-xs text-graphite">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-base leading-relaxed text-ink">{t}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-t border-line bg-paper py-24">
        <div className="shell">
          <div className="mb-14">
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-3">
                <span className="text-signal-red">D</span> Leadership & advocacy
              </p>
            </Reveal>
            <h2 className="display text-[clamp(1.8rem,5vw,3.5rem)]">
              <RevealHeading text="Building the next generation of ethical researchers." />
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-2">
            {engagements.map((e, i) => (
              <Reveal key={e.name} delay={(i % 2) * 0.08} className="bg-canvas p-8">
                <h3 className="font-display text-2xl">{e.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{e.note}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="eyebrow">Languages</span>
              {languages.map((l) => (
                <span key={l} className="flex items-center gap-2 text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="display max-w-[14ch] text-[clamp(1.8rem,5vw,3.4rem)]">
              Let&apos;s put this to work.
            </h2>
            <Link
              href="/contact"
              data-cursor
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm text-canvas transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
