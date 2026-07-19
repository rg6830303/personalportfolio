import { Reveal } from '@/components/Reveal';

const toneText: Record<string, string> = {
  yellow: 'text-signal-yellow',
  green: 'text-signal-green',
  red: 'text-signal-red',
};

export default function SectionLabel({
  index,
  children,
  tone = 'red',
}: {
  index: string;
  children: React.ReactNode;
  tone?: 'yellow' | 'green' | 'red';
}) {
  return (
    <Reveal>
      <div className="mb-8 flex items-center gap-4">
        <span className={`section-index ${toneText[tone]}`}>{index}</span>
        <span className="h-px w-10 bg-line" />
        <span className="section-index text-graphite">{children}</span>
      </div>
    </Reveal>
  );
}
