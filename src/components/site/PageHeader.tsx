import React from "react";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly lede?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, lede }) => {
  return (
    <div className="border-b border-ink/10">
      <Container className="pb-10 pt-12 md:pb-14 md:pt-16">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-navy">
          {eyebrow}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-ink md:text-[2.5rem] md:leading-[1.2]">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted md:text-base">
            {lede}
          </p>
        )}
      </Container>
    </div>
  );
};
