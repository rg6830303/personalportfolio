import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Marquee from '@/components/Marquee';
import { Reveal, RevealHeading } from '@/components/Reveal';
import { profile, services, languages } from '@/data/resume';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Dr. Raka Ghosh for research-ethics, compliance and governance roles.',
};

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, tone: 'bg-signal-red' },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, tone: 'bg-signal-yellow' },
  { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, tone: 'bg-signal-green', external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Get in touch"
        title="Let's build integrity into it."
        intro="Open to research-ethics, compliance and academic-governance mandates — committee leadership, SOP and policy design, integrity training, and responsible-AI frameworks. The fastest way to reach me is email."
      />

      <section className="shell pb-24">
        <div className="grid gap-px overflow-hidden rounded border border-line bg-line md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                data-cursor
                className="group flex h-full flex-col justify-between gap-10 bg-canvas p-8 transition-colors hover:bg-paper"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{c.label}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${c.tone}`} />
                </div>
                <div className="flex items-end justify-between gap-4">
                  <span className="break-all font-display text-xl leading-tight md:text-2xl">{c.value}</span>
                  <span className="shrink-0 text-lg text-graphite transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink">
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* What I can help with */}
        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-signal-green" /> Where I add value
              </p>
            </Reveal>
            <h2 className="display text-[clamp(1.8rem,4vw,3rem)] leading-tight">
              <RevealHeading text="Bring me in for the work that has to be right." />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-graphite">
                Committee, advisory and full-time governance mandates. Include the institution and the
                mandate in your first note — it helps me respond with something useful.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-line px-5 py-2.5 font-mono text-xs text-graphite">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-green" />
                </span>
                Currently open to new mandates
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <ul className="rule">
              {services.map((s, i) => (
                <Reveal key={i} delay={i * 0.05} as="li">
                  <div className="group flex items-center gap-6 border-b border-line py-5">
                    <span className="font-mono text-xs text-graphite">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1 text-base leading-snug text-ink transition-transform duration-300 group-hover:translate-x-1 md:text-lg">
                      {s}
                    </span>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-signal-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
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
        </div>
      </section>

      <Marquee items={["Let's build integrity into it", 'Research that keeps its word', 'Ethics · Compliance · Governance']} />
    </>
  );
}
