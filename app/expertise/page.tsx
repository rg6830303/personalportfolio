import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { Reveal, RevealHeading } from '@/components/Reveal';
import { competencies, education, training, engagements, languages, signalSystem } from '@/data/resume';

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

      {/* SIGNAL SYSTEM — explains the colour language of the whole site */}
      <section className="relative overflow-hidden border-t border-line bg-ink py-24 text-canvas md:py-28">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <Reveal>
                <p className="section-index mb-6 text-canvas/50">The colour system</p>
              </Reveal>
              <h2 className="display text-[clamp(1.8rem,4.5vw,3.2rem)] leading-tight">
                <RevealHeading text="Not decoration. A working vocabulary." />
              </h2>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-sm text-canvas/70">
                  Every ethics review comes down to one of three states. This site borrows that same
                  traffic-light language — the way a real compliance dashboard speaks.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-4">
                {signalSystem.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.1}>
                    <div className="group flex items-start gap-5 rounded border border-canvas/15 p-6 transition-colors hover:border-canvas/40">
                      <span className={`mt-1 h-4 w-4 shrink-0 rounded-full bg-tone-${s.tone} ring-4 ring-white/5`} />
                      <div>
                        <p className="font-display text-xl">{s.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-canvas/65">{s.meaning}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
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

      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="dotgrid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="shell relative">
          <Reveal>
            <div className="flex flex-col items-start gap-10 rounded-lg border border-line bg-canvas p-10 md:flex-row md:items-center md:justify-between md:p-14">
              <div>
                <p className="eyebrow mb-5">Next step</p>
                <h2 className="display max-w-[16ch] text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.05]">
                  Let&apos;s put this to work.
                </h2>
              </div>
              <Link
                href="/contact"
                data-cursor
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm text-canvas transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <span className="cta-arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
