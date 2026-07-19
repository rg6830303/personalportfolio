import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { profile } from '@/data/resume';

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

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="display text-[clamp(1.6rem,4vw,2.8rem)] leading-tight">
                &ldquo;The rigour of the laboratory, applied to the governance of research.&rdquo;
              </p>
            </div>
            <div className="md:col-span-5 md:pt-2">
              <p className="text-graphite">
                Based in India and available across time zones. For committee, advisory and full-time
                governance roles, please include the institution and mandate in your first note — it helps
                me respond with something useful.
              </p>
              <div className="mt-8 flex items-center gap-3 font-mono text-xs text-graphite">
                <span className="h-2 w-2 rounded-full bg-signal-green" />
                Currently open to new mandates
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
