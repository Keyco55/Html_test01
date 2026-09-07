import React from "react";
import { profileData } from "@/data/profile";

export const ContactChannels: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <ul
      aria-label="연락 채널"
      className={compact ? "flex flex-col gap-1" : "grid grid-cols-1 gap-3 sm:grid-cols-2"}
    >
      {profileData.links.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={
              compact
                ? "flex min-h-[44px] items-center justify-between border-b border-ink/10 py-2 text-[15px] font-medium text-ink transition-colors hover:text-navy"
                : "flex min-h-[44px] items-center justify-between rounded-xl border border-ink/10 bg-surface px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20"
            }
          >
            <span>
              <span className="block text-[15px] font-semibold text-ink">{link.label}</span>
              {link.description && (
                <span className="block font-mono text-xs text-muted">{link.description}</span>
              )}
            </span>
            <span aria-hidden="true" className="text-muted">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
