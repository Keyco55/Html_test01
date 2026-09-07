import React from "react";
import { profileData } from "@/data/profile";

/**
 * Contact channel rows — typographic list with per-channel accent,
 * handle in mono, hover slide. Email renders only when a confirmed
 * public address exists (profileData.publicEmail — currently null:
 * PUBLIC EMAIL VALUE REQUIRED FROM HQ).
 */
const ACCENTS: Record<string, string> = {
  github: "var(--ink)",
  youtube: "#c2352c",
  blog: "#3f7a4f",
  email: "var(--clay)",
  other: "#8a5fb0",
};

const ICONS: Record<string, React.ReactNode> = {
  github: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.9-.5-5.8a3 3 0 0 0-2.1-2.1C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.4.5A3 3 0 0 0 1.5 6.2C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8ZM9.8 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h16v14H4z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  other: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export const ContactChannels: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const email = profileData.publicEmail;
  const rows = [
    ...profileData.links,
    ...(email
      ? [{ label: "Email", url: `mailto:${email}`, type: "email" as const, description: email }]
      : []),
  ];

  return (
    <ul aria-label="연락 채널" className={compact ? "flex flex-col" : "flex flex-col"}>
      {rows.map((link) => {
        const accent = ACCENTS[link.type] ?? "var(--clay)";
        const icon = ICONS[link.type] ?? ICONS.other;
        return (
          <li key={link.label}>
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex min-h-[56px] items-center gap-4 border-b border-ink/10 py-3.5 transition-colors first:border-t hover:border-ink/25"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/[0.05] transition-all duration-300 group-hover:scale-105"
                style={{ color: accent }}
              >
                {icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-bold text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                  {link.label}
                </span>
                {link.description && (
                  <span className="block truncate font-mono text-[11.5px] text-muted">
                    {link.description}
                  </span>
                )}
              </span>
              <span
                aria-hidden="true"
                className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-clay"
              >
                ↗
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
