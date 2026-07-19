import Link from 'next/link';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import PortraitCard from '@/components/PortraitCard';
import { Reveal, RevealHeading } from '@/components/Reveal';
import { profile, stats, competencies } from '@/data/resume';

const toneClass: Record<string, string> = {
  yellow: 'bg-signal-yellow',
  green: 'bg-signal-green',
  red: 'bg-signal-red',
};

const chapters = [
  { href: '/journey', no: '02', title: 'Journey', desc: 'Seventeen years, from the fume hood to national governance.' },
  { href: '/expertise', no: '03', title: 'Expertise', desc: 'Competencies, credentials and the frameworks I build.' },
  { href: '/contact', no: '04', title: 'Contact', desc: 'For research-ethics, compliance and integrity mandates.' },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee
        items={['Research Ethics', 'Regulatory Compliance', 'Academic Governance', 'Research Integrity', 'Responsible AI']}
      />

      {/* ABOUT */}
      <section className="shell py-24 md:py-36">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <Reveal>
              <div className="mx-auto max-w-[360px] md:mx-0">
                <PortraitCard />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mx-auto mt-8 flex max-w-[360px] items-center justify-between font-mono text-xs text-graphite md:mx-0">
                <span>Ph.D. · IIT Bombay</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-signal-green" /> Kolkata, India
                </span>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow mb-8">
                <span className="mr-3 text-signal-red">01</span> Who I am
              </p>
            </Reveal>
            <h2 className="display mb-10 text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05]">
              <RevealHeading text="The rigour of the laboratory, applied to the governance of research." />
            </h2>
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-graphite">{profile.summary}</p>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={i} delay={i * 0.08} className="bg-canvas p-5">
                  <span className={`mb-3 block h-1 w-8 ${toneClass[s.tone]}`} />
                  <div className="display text-3xl md:text-4xl">{s.value}</div>
                  <div className="mt-2 text-xs leading-snug text-graphite">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPETENCIES PREVIEW */}
      <section className="border-y border-line bg-paper py-24 md:py-32">
        <div className="shell">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow mb-5">What I do</p>
              </Reveal>
              <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
                <RevealHeading text="A compliance system, coded in colour." />
              </h2>
            </div>
            <Reveal delay={0.1}>
              <Link href="/expertise" data-cursor className="link-underline shrink-0 self-start text-sm text-graphite hover:text-ink md:self-end">
                See full expertise →
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {competencies.slice(0, 6).map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06} className="group bg-canvas p-6 transition-colors hover:bg-paper">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-graphite">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${toneClass[c.tone]} transition-transform group-hover:scale-125`} />
                </div>
                <h3 className="font-display text-xl leading-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-graphite">{c.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="shell py-24 md:py-32">
        <Reveal>
          <p className="eyebrow mb-10">Keep reading</p>
        </Reveal>
        <div className="rule">
          {chapters.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.06}>
              <Link
                href={c.href}
                data-cursor
                className="group flex items-center justify-between gap-6 border-b border-line py-8 md:py-10"
              >
                <div className="flex items-baseline gap-5 md:gap-10">
                  <span className="font-mono text-xs text-graphite">{c.no}</span>
                  <div>
                    <h3 className="display text-4xl transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-graphite">{c.desc}</p>
                  </div>
                </div>
                <span className="text-2xl text-graphite transition-all duration-500 group-hover:translate-x-2 group-hover:text-ink">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
