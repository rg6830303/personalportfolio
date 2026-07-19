import type { Metadata, Viewport } from 'next';
import { Fraunces, Libre_Franklin, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { profile } from '@/data/resume';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppFab from '@/components/WhatsAppFab';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://raka-ghosh.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Research Ethics & Academic Governance`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    'Research Ethics',
    'Research Integrity',
    'Academic Governance',
    'Regulatory Compliance',
    'Dr. Raka Ghosh',
    'IIT Bombay',
    'Responsible Conduct of Research',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Research Ethics & Academic Governance`,
    description: profile.tagline,
    url: siteUrl,
    siteName: profile.name,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#fbfaf6',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain font-sans antialiased">
        <Cursor />
        <ScrollProgress />
        <Nav />
        <PageTransition>
          <main id="top">{children}</main>
          <Footer />
        </PageTransition>
        <WhatsAppFab />
      </body>
    </html>
  );
}
