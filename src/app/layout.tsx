import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { createPersonJsonLd, createSiteMetadata } from '@/lib/seo';

export const metadata: Metadata = createSiteMetadata('/') as Metadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = createPersonJsonLd();
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        {personJsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
        ) : null}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
