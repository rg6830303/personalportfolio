import Link from 'next/link';
import { profile } from '@/data/resume';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-line bg-paper">
      <div className="shell py-16 md:py-20">
        {/* Email — its own full-width row so the long address never collides */}
        <div className="border-b border-line pb-12">
          <p className="eyebrow mb-5">Let&apos;s build integrity into it</p>
          <a
            href={`mailto:${profile.email}`}
            className="display link-underline inline-block max-w-full break-words text-[clamp(1.6rem,6.5vw,3.5rem)] leading-none"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 text-sm text-graphite">
              <li><Link href="/" className="link-underline hover:text-ink">Index</Link></li>
              <li><Link href="/journey" className="link-underline hover:text-ink">Journey</Link></li>
              <li><Link href="/expertise" className="link-underline hover:text-ink">Expertise</Link></li>
              <li><Link href="/contact" className="link-underline hover:text-ink">Contact</Link></li>
            </ul>
          </div>

          <div>
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

          <div className="sm:col-span-2 md:col-span-1">
            <p className="eyebrow mb-4">Availability</p>
            <p className="flex items-start gap-2 text-sm text-graphite">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-signal-green" />
              Open to research-ethics, compliance &amp; governance mandates.
            </p>
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
