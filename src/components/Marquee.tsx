export default function Marquee({ items }: { items: string[] }) {
  const Group = () => (
    <div className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <div key={i} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-[clamp(1.75rem,6vw,4.25rem)] font-light">
            {it}
          </span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-red" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-line py-5">
      <div className="marquee-track flex w-max">
        <Group />
        <Group />
      </div>
    </div>
  );
}
