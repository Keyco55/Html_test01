"use client";

import React from "react";
import { MetricBadge, MetricTrustLevel } from "./MetricBadge";
import { LightboxImage } from "./ImageLightbox";

/* ==========================================================================
   1. KPI / Metric Card
   ========================================================================== */

export interface MetricCardProps {
  readonly value: string;
  readonly label: string;
  readonly note?: string;
  readonly level?: MetricTrustLevel;
  readonly badgeSubtext?: string;
  readonly className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  note,
  level,
  badgeSubtext,
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-xl border border-ink/10 bg-surface p-4 transition-colors md:p-5 ${className}`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-mono text-[11px] font-semibold tracking-wider text-muted uppercase">
          {label}
        </p>
        {level && (
          <MetricBadge
            level={level}
            subtext={badgeSubtext}
            className="shrink-0"
          />
        )}
      </div>

      <div className="mt-3">
        <p className="text-[clamp(1.6rem,3.2vw,2.2rem)] font-extrabold tracking-tight text-ink">
          {value}
        </p>
        {note && (
          <p className="mt-1 text-[12px] leading-relaxed text-muted">{note}</p>
        )}
      </div>
    </div>
  );
};

/* ==========================================================================
   2. Accessible Bar Chart (Verified File / Evidence Counts)
   ========================================================================== */

export interface BarChartItem {
  readonly label: string;
  readonly value: number;
  readonly sublabel?: string;
}

export interface EvidenceBarChartProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly items: readonly BarChartItem[];
  readonly unit?: string;
  readonly ariaLabel?: string;
  readonly className?: string;
}

export const EvidenceBarChart: React.FC<EvidenceBarChartProps> = ({
  title,
  subtitle,
  items,
  unit = "건",
  ariaLabel,
  className = "",
}) => {
  const maxValue = Math.max(...items.map((it) => it.value), 1);
  const totalCount = items.reduce((acc, it) => acc + it.value, 0);

  return (
    <figure
      aria-label={ariaLabel || `${title} (총 ${totalCount}${unit})`}
      className={`w-full rounded-2xl border border-ink/10 bg-surface/70 p-5 md:p-6 ${className}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
        <div>
          <figcaption className="text-[14px] font-bold text-ink">
            {title}
          </figcaption>
          {subtitle && (
            <p className="mt-0.5 text-[12px] text-muted">{subtitle}</p>
          )}
        </div>
        <MetricBadge level="verified" text="VERIFIED" subtext={`총 ${totalCount}${unit}`} />
      </div>

      {/* Accessible visual bar rows */}
      <div className="mt-4 flex flex-col gap-3.5" role="list">
        {items.map((item) => {
          const pct = Math.max(8, Math.round((item.value / maxValue) * 100));
          return (
            <div
              key={item.label}
              role="listitem"
              className="grid grid-cols-[100px_1fr_40px] items-center gap-3 text-[13px] sm:grid-cols-[130px_1fr_48px]"
            >
              <div className="truncate font-medium text-ink-soft">
                <span title={item.label}>{item.label}</span>
                {item.sublabel && (
                  <span className="block font-mono text-[10.5px] text-muted">
                    {item.sublabel}
                  </span>
                )}
              </div>

              <div
                className="h-6 w-full rounded bg-paper-deep/80 p-0.5"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded bg-clay transition-[width] duration-500 ease-out motion-reduce:transition-none"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className="text-right font-mono text-[13px] font-bold text-ink">
                {item.value}
                <span className="ml-0.5 text-[11px] font-normal text-muted">
                  {unit}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visually hidden accessible data table fallback */}
      <table className="sr-only">
        <caption>{title}</caption>
        <thead>
          <tr>
            <th scope="col">항목</th>
            <th scope="col">수량</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.label}>
              <th scope="row">{it.label}</th>
              <td>
                {it.value}
                {unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
};

/* ==========================================================================
   3. Songpa Case Study Table (Desktop Table / Mobile Stacked Cards)
   ========================================================================== */

export interface SongpaCaseItem {
  readonly id: string;
  readonly title: string;
  readonly problem: string;
  readonly action: string;
  readonly evidence: string;
  readonly outcome: string;
}

export const SongpaCaseStudyTable: React.FC<{
  readonly cases: readonly SongpaCaseItem[];
}> = ({ cases }) => {
  return (
    <div className="w-full">
      {/* Desktop table (sm and up) */}
      <div className="hidden overflow-hidden rounded-xl border border-ink/10 bg-surface sm:block">
        <table className="w-full border-collapse text-left text-[13.5px]">
          <thead>
            <tr className="border-b border-ink/10 bg-paper-deep/70 font-mono text-[11px] uppercase tracking-wider text-muted">
              <th scope="col" className="w-[20%] py-3.5 px-4 font-semibold">
                과제
              </th>
              <th scope="col" className="w-[26%] py-3.5 px-4 font-semibold">
                Problem (현장 문제)
              </th>
              <th scope="col" className="w-[26%] py-3.5 px-4 font-semibold">
                Action (조치 및 제작)
              </th>
              <th scope="col" className="w-[28%] py-3.5 px-4 font-semibold">
                Outcome & Evidence (결과·증빙)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/8 text-ink-soft">
            {cases.map((c) => (
              <tr key={c.id} className="transition-colors hover:bg-paper/50">
                <td className="py-4 px-4 align-top font-bold text-ink">
                  {c.title}
                </td>
                <td className="py-4 px-4 align-top leading-relaxed text-ink-soft">
                  {c.problem}
                </td>
                <td className="py-4 px-4 align-top leading-relaxed text-ink-soft">
                  {c.action}
                </td>
                <td className="py-4 px-4 align-top leading-relaxed">
                  <p className="text-ink">{c.outcome}</p>
                  <p className="mt-1 font-mono text-[11.5px] text-clay">
                    증빙: {c.evidence}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards (< sm) */}
      <div className="flex flex-col gap-3 sm:hidden">
        {cases.map((c, idx) => (
          <article
            key={c.id}
            className="rounded-xl border border-ink/10 bg-surface p-4 text-[13px]"
          >
            <div className="flex items-center justify-between border-b border-ink/10 pb-2">
              <h3 className="font-bold text-ink">
                {idx + 1}. {c.title}
              </h3>
              <span className="font-mono text-[10.5px] text-muted">CASE</span>
            </div>

            <dl className="mt-3 flex flex-col gap-2.5">
              <div>
                <dt className="font-mono text-[11px] font-bold text-clay uppercase">
                  Problem
                </dt>
                <dd className="mt-0.5 leading-relaxed text-ink-soft">
                  {c.problem}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] font-bold text-clay uppercase">
                  Action
                </dt>
                <dd className="mt-0.5 leading-relaxed text-ink-soft">
                  {c.action}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] font-bold text-clay uppercase">
                  Outcome
                </dt>
                <dd className="mt-0.5 leading-relaxed font-medium text-ink">
                  {c.outcome}
                </dd>
                <dd className="mt-1 font-mono text-[11px] text-clay">
                  증빙: {c.evidence}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   4. HTML/CSS Before → After Comparison
   ========================================================================== */

export interface HtmlCssComparisonProps {
  readonly beforeSrc: string;
  readonly afterSrc: string;
  readonly beforeAlt: string;
  readonly afterAlt: string;
  readonly beforeCaption: string;
  readonly afterCaption: string;
  readonly note: string;
  readonly liveUrl?: string;
}

export const HtmlCssComparison: React.FC<HtmlCssComparisonProps> = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeCaption,
  afterCaption,
  note,
  liveUrl,
}) => {
  return (
    <div className="w-full rounded-2xl border border-ink/10 bg-surface/70 p-5 md:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
        <div>
          <h3 className="text-[14px] font-bold text-ink">
            HTML/CSS 구조 리팩토링 Before → After
          </h3>
          <p className="mt-0.5 text-[12px] text-muted">{note}</p>
        </div>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11.5px] font-semibold text-clay transition-colors hover:text-ink"
          >
            실제 게시물 보기
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {/* BEFORE */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="rounded bg-paper-deep px-2 py-0.5 font-mono text-[10.5px] font-bold tracking-wider text-muted uppercase">
              BEFORE
            </span>
            <span className="text-[11.5px] text-muted">초기 레이아웃</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-ink/10 bg-paper-deep">
            <LightboxImage
              src={beforeSrc}
              alt={beforeAlt}
              label={beforeCaption}
              footer="BEFORE · 초기 레이아웃 화면"
              buttonClassName="w-full text-left"
              thumbnailClassName="aspect-[16/11] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
          <p className="mt-2 text-[12px] leading-relaxed text-muted">
            {beforeCaption}
          </p>
        </div>

        {/* AFTER */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="rounded border border-clay/30 bg-clay/10 px-2 py-0.5 font-mono text-[10.5px] font-bold tracking-wider text-clay uppercase">
              AFTER
            </span>
            <span className="text-[11.5px] font-medium text-clay">리팩토링 반영</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-clay/30 bg-paper-deep shadow-sm">
            <LightboxImage
              src={afterSrc}
              alt={afterAlt}
              label={afterCaption}
              footer="AFTER · 목차 구조화 및 CTA 개선 화면"
              buttonClassName="w-full text-left"
              thumbnailClassName="aspect-[16/11] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
          <p className="mt-2 text-[12px] leading-relaxed text-ink-soft">
            {afterCaption}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   5. Lotte World Editorial Metric Strip
   ========================================================================== */

export interface LotteMetricStripProps {
  readonly duration: string;
  readonly role: string;
  readonly award: string;
  readonly radioEpisodes: string;
}

export const LotteMetricStrip: React.FC<LotteMetricStripProps> = ({
  duration,
  role,
  award,
  radioEpisodes,
}) => {
  const items = [
    { label: "근무 기간", value: duration, trust: "approx" as const },
    { label: "직책", value: role, trust: "verified" as const },
    { label: "현장 표창", value: award, trust: "verified" as const },
    { label: "사내 라디오", value: radioEpisodes, trust: "verified" as const },
  ];

  return (
    <div className="w-full rounded-xl border border-ink/10 bg-surface p-3.5 sm:p-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:divide-x sm:divide-ink/10">
        {items.map((it, idx) => (
          <div
            key={it.label}
            className={`flex flex-col ${idx > 0 ? "sm:pl-4" : ""}`}
          >
            <p className="font-mono text-[11px] text-muted">{it.label}</p>
            <p className="mt-1 text-[15px] font-extrabold tracking-tight text-ink sm:text-[16px]">
              {it.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
