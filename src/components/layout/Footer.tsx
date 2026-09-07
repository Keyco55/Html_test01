import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { KeycoMark } from "@/components/site/KeycoMark";
import { profileData } from "@/data/profile";

/**
 * Personal sign-off footer — night band, oversized brand typography,
 * contact channels, factual availability line. No motivational copy.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="dot-grid w-full bg-night text-night-ink">
      <Container className="flex flex-col gap-12 py-14 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-clay-bright">Contact</p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-night-soft">
              프로젝트, 협업, 채용 문의는 아래 공개 채널로 보내 주세요.
              <br className="hidden sm:block" /> 메시지를 확인하면 회신드립니다.
            </p>
          </div>
          <nav aria-label="연락 채널" className="flex flex-wrap gap-x-6 gap-y-3">
            {profileData.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep flex min-h-[44px] items-center text-[14px] font-semibold text-night-ink transition-colors hover:text-clay-bright"
              >
                {link.label}
                <span aria-hidden="true" className="ml-1 text-night-muted">↗</span>
              </a>
            ))}
          </nav>
        </div>

        <hr className="stitch-rule opacity-40" aria-hidden="true" />

        {/* Oversized brand sign-off */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p
            aria-hidden="true"
            className="text-[clamp(2.6rem,9vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-night-ink select-none"
          >
            Hello <span className="text-clay-bright">Keyco</span>
          </p>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-night-raise text-night-ink">
              <KeycoMark size={26} />
            </span>
            <p className="text-[13px] text-night-muted">
              © 2026 Keyco (김범우). Next.js Static Export · Cloudflare Pages.
            </p>
            <Link
              href="/"
              className="link-sweep text-[13px] font-semibold text-night-soft transition-colors hover:text-clay-bright"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
