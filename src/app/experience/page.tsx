import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { OptionalImage } from "@/components/site/OptionalImage";
import { experienceData } from "@/data/experience";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/experience") as Metadata;

/** Short factual scope notes — condensed from contextNote in src/data/experience.ts. */
/** Optional future work-photo slots — invisible until real assets exist. */
const MEDIA_SLOTS: Record<string, { dir: string; alt: string } | undefined> = {
  "gom-and-company": { dir: "/images/experience/gom", alt: "곰앤컴퍼니 근무 사진" },
  "lotte-world": { dir: "/images/experience/lotteworld", alt: "롯데월드 근무 사진" },
};

const SCOPE_NOTES: Record<string, string | undefined> = {
  "gom-and-company":
    "프론트엔드·백엔드 서비스 전체 개발이 아닌, 콘텐츠·마케팅 페이지 수정과 데이터 자동화 업무 범위입니다.",
  "songpa-post-office":
    "공공기관 내부 규정에 따라 내부 전산망·비공개 데이터·고객 개인정보는 포함하지 않습니다.",
  "lotte-world":
    "정확한 근무 기간은 이력 검증이 끝나는 대로 확정해 표기할 예정입니다.",
};

export default function ExperiencePage() {
  return (
    <div className="w-full">
      <PageHeader
        index="03"
        eyebrow="Experience"
        title={
          <>
            현장에서 시작해
            <br />
            제품 개발까지
          </>
        }
        lede="고객 응대와 현장 운영에서 출발해 콘텐츠·마케팅, 웹 운영을 거쳐 지금은 서비스를 직접 개발합니다. 모든 이력은 실제 수행한 업무 기준으로 정리했습니다."
      />

      <Container className="max-w-5xl py-14 md:py-20">
        <ol className="relative flex flex-col">
          {/* spine */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-[repeating-linear-gradient(180deg,var(--line)_0_6px,transparent_6px_12px)] md:left-[110px]"
          />

          {experienceData.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 60} className="relative">
              <div className="grid grid-cols-1 gap-x-10 gap-y-1 py-10 md:grid-cols-[110px_1fr] md:py-14">
                {/* Period rail */}
                <div className="mb-3 flex items-center gap-3 md:mb-0 md:block">
                  <span
                    aria-hidden="true"
                    className="relative z-10 h-[15px] w-[15px] shrink-0 rounded-full border-[3px] border-clay bg-paper"
                  />
                  <p className="font-mono text-[12px] font-medium tracking-wide text-muted md:mt-4 md:pr-6 md:text-right md:leading-relaxed">
                    {item.periodNeedsConfirmation ? (
                      <>
                        기간 확인 중
                        <span className="mt-1 block text-[10.5px] text-muted/80">
                          (Resume Master 검증)
                        </span>
                      </>
                    ) : (
                      item.period
                    )}
                  </p>
                </div>

                {/* Content */}
                <div className="pl-8 md:pl-0">
                  <h2 className="text-[clamp(1.35rem,3vw,1.8rem)] font-extrabold tracking-tight text-ink">
                    {item.company}
                  </h2>
                  <p className="mt-1.5 text-[15px] font-bold text-clay">{item.role}</p>
                  {item.department && (
                    <p className="mt-1 font-mono text-[11.5px] tracking-wide text-muted">
                      {item.department}
                    </p>
                  )}
                  <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
                    {item.description}
                  </p>

                  <ul className="mt-5 flex max-w-2xl flex-col gap-2.5">
                    {item.verifiedHighlights.slice(0, 4).map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex gap-3 text-[14px] leading-relaxed text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-sand"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {item.skills.slice(0, 6).map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-ink/12 bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {/* optional work photos — layout collapses when absent */}
                  {MEDIA_SLOTS[item.id] && (
                    <div className="mt-5 flex max-w-2xl flex-wrap gap-3">
                      {[1, 2].map((n) => (
                        <OptionalImage
                          key={n}
                          src={`${MEDIA_SLOTS[item.id]!.dir}/work-${n}.webp`}
                          alt={`${MEDIA_SLOTS[item.id]!.alt} ${n}`}
                          className="rounded-xl border border-ink/10"
                          aspect="4 / 3"
                          wrapperClassName="w-[calc(50%-6px)] max-w-[240px]"
                        />
                      ))}
                    </div>
                  )}

                  {SCOPE_NOTES[item.id] && (
                    <p className="mt-5 max-w-2xl border-l-2 border-ink/15 pl-3 text-[12.5px] leading-relaxed text-muted">
                      {SCOPE_NOTES[item.id]}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </div>
  );
}
