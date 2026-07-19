import Link from 'next/link';
import { profile } from '@/data/resume';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-line bg-paper">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-5">Let&apos;s build integrity into it</p>
            <a
              href={`mailto:${profile.email}`}
              className="display link-underline text-[clamp(2rem,6vw,4rem)]"
            >
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-sm text-graphite">
              <li><Link href="/" className="link-underline hover:text-ink">Index</Link></li>
              <li><Link href="/journey" className="link-underline hover:text-ink">Journey</Link></li>
              <li><Link href="/expertise" className="link-underline hover:text-ink">Expertise</Link></li>
              <li><Link href="/contact" className="link-underline hover:text-ink">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm text-graphite">
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline hover:text-ink">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="link-underline hover:text-ink">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-14 flex flex-col gap-3 pt-6 text-xs text-graphite md:flex-row md:items-center md:justify-between">
          <span className="font-mono">© {year} {profile.name}. All rights reserved.</span>
          <span className="flex items-center gap-2 font-mono">
            <span className="h-2 w-2 rounded-full bg-signal-green" />
            Available for research-ethics & governance roles
          </span>
          <a href="#top" className="link-underline font-mono hover:text-ink">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
