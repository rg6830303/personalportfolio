import { Reveal, RevealHeading } from '@/components/Reveal';

export default function PageHeader({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="shell pb-14 pt-36 md:pb-20 md:pt-44">
      <Reveal>
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-sm text-signal-red">{index}</span>
          <span className="h-px w-12 bg-line" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <h1 className="display max-w-[16ch] text-[clamp(2.75rem,9vw,7.5rem)]">
        <RevealHeading text={title} />
      </h1>
      <Reveal delay={0.15}>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-graphite">{intro}</p>
      </Reveal>
    </header>
  );
}
