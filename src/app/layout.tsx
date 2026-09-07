import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createPersonJsonLd, createSiteMetadata } from '@/lib/seo';

export const metadata: Metadata = createSiteMetadata('/') as Metadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

/**
 * Plus Jakarta Sans — English headings, numerics, UI Latin.
 * License: SIL Open Font License 1.1 (Google Fonts).
 */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

/**
 * Wanted Sans Std Variable — Korean/UI body font.
 * License: SIL Open Font License 1.1
 * Source:  https://github.com/wanteddev/wanted-sans (v1.0.3)
 * Asset:   /public/fonts/wanted-sans/WantedSansStdVariable.woff2
 * LICENSE: /public/fonts/wanted-sans/OFL.txt
 * Weight range: 400–1000 (variable axis)
 * Same loading direction as KBO-Hub (next/font/local).
 */
const wantedSans = localFont({
  src: '../../public/fonts/wanted-sans/WantedSansStdVariable.woff2',
  variable: '--font-wanted',
  display: 'swap',
  weight: '400 1000',
  preload: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'sans-serif',
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = createPersonJsonLd();
  return (
    <html lang="ko" className={`${plusJakartaSans.variable} ${wantedSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        {personJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
        ) : null}
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
