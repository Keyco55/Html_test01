import React from "react";
import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-ink/10 bg-paper">
      <Container className="flex flex-col gap-5 py-10">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold text-ink">KEYCO · 김범우</span>
          <span className="text-[13px] text-muted">
            고객과 서비스를 이해하고, 콘텐츠와 기술로 직접 만드는 사람.
          </span>
        </div>

        <nav aria-label="연락 채널" className="flex flex-wrap gap-x-5 gap-y-2">
          {profileData.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center text-[13px] font-medium text-ink-soft transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-faint">© 2026 KEYCO. All rights reserved.</p>
      </Container>
    </footer>
  );
};
