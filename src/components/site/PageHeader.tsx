import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

interface PageHeaderProps {
  readonly eyebrow: string;
  readonly title: React.ReactNode;
  readonly lede?: string;
  readonly index?: string;
  readonly tone?: "light" | "dark";
}

/**
 * Editorial page header — mono index + eyebrow, oversized display title
 * with a stitched accent rule, readable lede.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  lede,
  index,
  tone = "light",
}) => {
  const dark = tone === "dark";
  return (
    <div
      className={
        dark
          ? "dot-grid border-b border-night-line bg-night text-night-ink"
          : "border-b border-ink/10 bg-paper-deep/60"
      }
    >
      <Container className="pb-12 pt-14 md:pb-16 md:pt-20">
        <Reveal>
          <div className="flex items-center gap-3">
            {index && (
              <span
                aria-hidden="true"
                className={
                  dark
                    ? "font-mono text-xs text-clay-bright"
                    : "font-mono text-xs text-clay"
                }
              >
                [{index}]
              </span>
            )}
            <p className={dark ? "eyebrow text-clay-bright" : "eyebrow"}>{eyebrow}</p>
            <span
              aria-hidden="true"
              className="h-px w-10 md:w-16"
              style={{
                background: dark
                  ? "repeating-linear-gradient(90deg, rgba(226,112,74,0.6) 0 5px, transparent 5px 10px)"
                  : "repeating-linear-gradient(90deg, rgba(181,56,38,0.5) 0 5px, transparent 5px 10px)",
              }}
            />
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h1
            className={
              dark
                ? "mt-4 text-[clamp(2.2rem,6vw,3.6rem)] font-extrabold text-night-ink"
                : "mt-4 text-[clamp(2.2rem,6vw,3.6rem)] font-extrabold text-ink"
            }
          >
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={160}>
            <p
              className={
                dark
                  ? "mt-5 max-w-2xl text-[15.5px] text-night-soft md:text-[17px]"
                  : "mt-5 max-w-2xl text-[15.5px] text-ink-soft md:text-[17px]"
              }
            >
              {lede}
            </p>
          </Reveal>
        )}
      </Container>
    </div>
  );
};
