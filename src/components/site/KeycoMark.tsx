import React from "react";

/**
 * Original KEYCO "K" monogram — white stem + arm, clay-bright leg.
 * Matches src/app/icon.svg. Decorative by default; pair with text.
 */
export const KeycoMark: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className,
}) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    aria-hidden="true"
    className={className}
    fill="none"
    strokeWidth={6}
    strokeLinecap="round"
  >
    <path d="M21 15v34" stroke="currentColor" />
    <path d="M43 16 25 32" stroke="currentColor" />
    <path d="M27 34 43 48" stroke="var(--clay-bright)" />
  </svg>
);
