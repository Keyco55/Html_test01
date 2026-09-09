import React from "react";

export type MetricTrustLevel = "verified" | "approx";

export interface MetricBadgeProps {
  readonly level: MetricTrustLevel;
  /** Optional custom text label override. Defaults to 'VERIFIED' or 'APPROX.'. */
  readonly text?: string;
  readonly subtext?: string;
  readonly className?: string;
}

/**
 * Metric trust indicator badge.
 * Complies with strict accessibility standards: distinguishable by explicit TEXT,
 * not color alone.
 */
export const MetricBadge: React.FC<MetricBadgeProps> = ({
  level,
  text,
  subtext,
  className = "",
}) => {
  const isVerified = level === "verified";
  const displayLabel = text || (isVerified ? "VERIFIED" : "APPROX.");

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded px-2 py-0.5 font-mono text-[10.5px] font-semibold tracking-wider uppercase ${
        isVerified
          ? "border border-ink/20 bg-surface text-ink"
          : "border border-dashed border-clay/50 bg-clay/10 text-clay"
      } ${className}`}
      aria-label={`데이터 신뢰 수준: ${displayLabel}${subtext ? ` - ${subtext}` : ""}`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          isVerified ? "bg-grass" : "bg-clay"
        }`}
      />
      <span>{displayLabel}</span>
      {subtext && (
        <span className="font-normal opacity-85">· {subtext}</span>
      )}
    </span>
  );
};
