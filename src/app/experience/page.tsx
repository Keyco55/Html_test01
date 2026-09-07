import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { experienceData } from "@/data/experience";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/experience") as Metadata;

export default function ExperiencePage() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Experience"
        title="경력"
        lede="증빙할 수 있는 일만 적었다. 확인 중인 기간은 확인 중이라고 밝힌다."
      />

      <Container className="max-w-3xl py-12 md:py-16">
        <ol className="relative ml-1.5 flex flex-col gap-12 border-l border-ink/15 pl-7 md:pl-9">
          {experienceData.map((item) => (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-7 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-navy bg-paper md:-left-9"
              />
              <p className="font-mono text-[13px] text-muted">
                {item.period}
                {item.periodNeedsConfirmation && (
                  <span className="ml-2 rounded-full border border-ink/15 px-2 py-0.5 text-xs font-semibold text-muted">
                    기간 확인 중
                  </span>
                )}
              </p>
              <h2 className="mt-1.5 text-xl font-bold tracking-tight text-ink">
                {item.company}
              </h2>
              <p className="mt-0.5 text-[15px] font-medium text-ink-soft">{item.role}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {item.verifiedHighlights.slice(0, 3).map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="border-l-2 border-ink/10 pl-3 text-sm leading-relaxed text-ink-soft"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
}
