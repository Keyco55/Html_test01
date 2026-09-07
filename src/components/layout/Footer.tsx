import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";

/**
 * Compact sign-off footer — one band, night editorial tone.
 * Brand closing + social links + email + copyright/stack metadata.
 * Contact messaging lives in the About/Contact section, not here.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-night-line bg-night text-night-ink">
      <Container className="flex flex-col gap-6 py-8 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="link-sweep text-[17px] font-extrabold tracking-tight text-night-ink"
            >
              Hello <span className="text-clay-bright">Keyco</span>
            </Link>
            <p className="mt-1.5 text-[12.5px] text-night-muted">
              고객과 서비스를 이해하고, 콘텐츠와 기술로 직접 만드는 사람.
            </p>
          </div>
          <nav aria-label="연락 채널" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {profileData.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep flex min-h-[40px] items-center text-[13.5px] font-semibold text-night-soft transition-colors hover:text-clay-bright"
              >
                {link.label}
                <span aria-hidden="true" className="ml-1 text-night-muted">↗</span>
              </a>
            ))}
            {profileData.publicEmail && (
              <a
                href={`mailto:${profileData.publicEmail}`}
                className="link-sweep flex min-h-[40px] items-center text-[13.5px] font-semibold text-night-soft transition-colors hover:text-clay-bright"
              >
                Email
                <span aria-hidden="true" className="ml-1 text-night-muted">↗</span>
              </a>
            )}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-night-line pt-5 text-[12px] text-night-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Keyco (김범우). Next.js Static Export · Cloudflare Pages.</p>
          <Link
            href="#main"
            className="link-sweep inline-flex min-h-[36px] items-center font-semibold text-night-soft transition-colors hover:text-clay-bright"
          >
            Back to top ↑
          </Link>
        </div>
      </Container>
    </footer>
  );
};
