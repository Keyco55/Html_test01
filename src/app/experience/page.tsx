import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { LightboxImage } from "@/components/site/ImageLightbox";
import {
  MetricCard,
  EvidenceBarChart,
  SongpaCaseStudyTable,
  HtmlCssComparison,
  LotteMetricStrip,
  SongpaCaseItem,
} from "@/components/site/ImpactEvidence";
import { experienceData } from "@/data/experience";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/experience") as Metadata;

/* ==========================================================================
   Static Evidence Data Definitions
   ========================================================================== */

/** GOM career-scale work volume (user-confirmed portfolio-safe approximations) */
const GOM_CHART_DATA = [
  { label: "영상 콘텐츠", value: 20, valueLabel: "20+", sublabel: "기획 · 촬영 · 편집" },
  { label: "아티클·포스트", value: 200, valueLabel: "200+", sublabel: "GOMLab · Naver Blog" },
] as const;

/** GOM Representative Public Work Cards (8 Verified URLs) */
const GOM_PUBLIC_WORKS = [
  {
    title: "영상 공모전 숏폼 릴스",
    role: "기획 · 촬영 · 편집",
    note: "학생 참가자 영상 공개 및 공모전 홍보 릴스",
    thumb: "/images/experience/gom/gom-instagram-contest-grid.webp",
    url: "https://www.instagram.com/reel/DEjqgeBu_IQ/",
    channel: "Instagram Reel",
  },
  {
    title: "2분 컷 바이럴 챌린지 릴스",
    role: "기획 · 편집 · 출연",
    note: "제품 기능 바이럴 마케팅 숏폼 콘텐츠",
    thumb: "/images/experience/gom/gom-instagram-reel-challenge.webp",
    url: "https://www.instagram.com/reel/DC0mCecOLlE/",
    channel: "Instagram Reel",
  },
  {
    title: "배드민턴 꿀팁 숏츠",
    role: "기획 · 편집 · 출연",
    note: "곰믹스 소프트웨어 기능 소개 유튜브 숏츠",
    thumb: "/images/experience/gom/gom-youtube-short-badminton.webp",
    url: "https://youtube.com/shorts/FFj4-Z3e1LY",
    channel: "YouTube Shorts",
  },
  {
    title: "영상 컷 편집 비교 가이드",
    role: "기획 · 작성 · 발행",
    note: "공식 네이버 블로그 검색 유입용 실전 가이드",
    thumb: "/images/experience/gom/gom-naver-blog-cut-edit.webp",
    url: "https://blog.naver.com/gomandcompany/223642446733",
    channel: "Naver Blog",
  },
] as const;

/** Songpa Verified Category Count */
const SONGPA_CHART_DATA = [
  { label: "CS 콘텐츠", value: 4, sublabel: "CS Day 내부 소통 자료" },
  { label: "고객 안내물", value: 1, sublabel: "간편사전접수 안내" },
  { label: "문화전 포스터", value: 1, sublabel: "지점 홍보용 편집" },
  { label: "예금 이벤트", value: 1, sublabel: "고객 홍보 안내물" },
] as const;

/** Songpa Case Study Items (Problem → Action → Evidence → Outcome) */
const SONGPA_CASES: readonly SongpaCaseItem[] = [
  {
    id: "songpa-case-prereg",
    title: "간편사전접수 고객 안내",
    problem: "간편사전접수 절차가 낯설어 창구 문의가 반복됨",
    action: "단계별 이용 방법을 시각 자료로 제작",
    evidence: "간편사전접수 안내물 · 창구 고객 직접 안내",
    outcome: "고객이 절차를 한 화면에서 이해하도록 지원",
  },
  {
    id: "songpa-case-cs-day",
    title: "CS Day 사내 소통",
    problem: "CS 메시지를 반복적으로 공유할 필요",
    action: "CS Day 내부 커뮤니케이션 콘텐츠 기획·촬영·편집",
    evidence: "CS Day 콘텐츠 4종",
    outcome: "서비스 메시지를 구성원에게 반복 전달",
  },
  {
    id: "songpa-case-promo",
    title: "문화전 & 예금 이벤트 홍보",
    problem: "공모전·금융 이벤트 정보를 고객에게 쉽게 전달할 필요",
    action: "홍보물 편집·제작·발행",
    evidence: "문화전 홍보 · 예금 이벤트 홍보",
    outcome: "고객 접점에서 핵심 정보를 이해하기 쉽게 전달",
  },
];

/** Representative Songpa visuals (max 4) */
const SONGPA_VISUALS = [
  {
    src: "/images/experience/songpa/songpa-prereg-guide.webp",
    alt: "우체국 간편사전접수 이용 안내 포스터",
    label: "간편사전접수 안내 포스터",
    caption: "간편사전접수 이용 안내 (창구 부착)",
  },
  {
    src: "/images/experience/songpa/songpa-cs-day-intro.webp",
    alt: "송파우체국 수요일 CS Day 사내 커뮤니케이션 콘텐츠",
    label: "CS Day 내부 커뮤니케이션",
    caption: "수요일 CS Day 사내 커뮤니케이션",
  },
  {
    src: "/images/experience/songpa/songpa-culture-contest.webp",
    alt: "우체국 문화전 어린이 그림그리기 글짓기 공모전 포스터",
    label: "우체국 문화전 홍보 포스터",
    caption: "우체국 문화전 공모전 홍보",
  },
  {
    src: "/images/experience/songpa/songpa-savings-event.webp",
    alt: "우체국 예금 신규 예치 이벤트 안내 홍보물",
    label: "우체국 예금 이벤트 안내물",
    caption: "예금 신규 예치 이벤트 안내",
  },
] as const;

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
        lede="고객 응대와 현장 운영에서 시작해 콘텐츠·마케팅과 웹 운영을 맡았고, 지금은 서비스를 직접 만들고 있습니다."
      />

      <Container className="max-w-5xl py-14 md:py-20">
        <ol className="relative flex flex-col">
          {/* Timeline Spine */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-[repeating-linear-gradient(180deg,var(--line)_0_6px,transparent_6px_12px)] md:left-[110px]"
          />

          {experienceData.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 50} className="relative">
              <div className="grid grid-cols-1 gap-x-10 gap-y-1 py-10 md:grid-cols-[110px_1fr] md:py-14">
                {/* Period Rail */}
                <div className="mb-3 flex items-center gap-3 md:mb-0 md:block">
                  <span
                    aria-hidden="true"
                    className="relative z-10 h-[15px] w-[15px] shrink-0 rounded-full border-[3px] border-clay bg-paper"
                  />
                  <p className="font-mono text-[12px] font-medium tracking-wide text-muted md:mt-4 md:pr-6 md:text-right md:leading-relaxed">
                    {item.period}
                    {item.duration && (
                      <span className="mt-1 block text-[10.5px] text-muted/80">
                        {item.duration}
                      </span>
                    )}
                  </p>
                </div>

                {/* Content Body */}
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
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-ink/12 bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {/* =========================================================
                      CASE 1: GOM & COMPANY (Impact & Evidence Block)
                      ========================================================= */}
                  {item.id === "gom-and-company" && (
                    <section
                      aria-labelledby="gom-evidence-heading"
                      className="mt-8 flex flex-col gap-6 rounded-2xl border border-ink/10 bg-paper-deep/40 p-4 sm:p-6"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
                        <div>
                          <p className="font-mono text-[11px] tracking-wider text-clay uppercase">
                            Work Highlights
                          </p>
                          <h3
                            id="gom-evidence-heading"
                            className="text-[16px] font-bold text-ink"
                          >
                            콘텐츠 운영 규모와 성과
                          </h3>
                        </div>
                        <p className="font-mono text-[11px] text-muted">
                          대표 공개 콘텐츠 4건 연결
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <MetricCard
                          label="영상 콘텐츠 제작"
                          value="20+"
                          note="숏폼과 제품·캠페인 영상 기획·촬영·편집"
                        />
                        <MetricCard
                          label="콘텐츠 발행"
                          value="200+"
                          note="자사 홈페이지·Naver Blog 아티클과 포스트"
                        />
                      </div>

                      <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-ink/10 bg-surface sm:grid-cols-3">
                        <div className="p-4 sm:border-r sm:border-ink/10">
                          <p className="font-mono text-[11px] font-semibold text-muted">6개 채널</p>
                          <p className="mt-1 text-[12px] leading-relaxed text-ink-soft">
                            SNS · Instagram · YouTube · TikTok · Threads<br />
                            Owned Media · GOMLab · Naver Blog
                          </p>
                        </div>
                        <div className="border-t border-ink/10 p-4 sm:border-t-0 sm:border-r">
                          <p className="text-[1.35rem] font-extrabold text-ink">약 +4K</p>
                          <p className="text-[12px] text-muted">Instagram Followers</p>
                        </div>
                        <div className="border-t border-ink/10 p-4 sm:border-t-0">
                          <p className="text-[1.35rem] font-extrabold text-ink">약 +1K</p>
                          <p className="text-[12px] text-muted">Naver Blog 일 방문자</p>
                        </div>
                      </div>

                      {/* 2. Verified Evidence Counts Bar Chart */}
                      <EvidenceBarChart
                        title="콘텐츠 운영 규모"
                        subtitle="재직 기간 전체 작업을 기준으로 한 약식 표기"
                        items={GOM_CHART_DATA}
                        unit="건"
                        showTotalBadge={false}
                        ariaLabel="곰앤컴퍼니 운영 규모: 영상 콘텐츠 20건 이상, 자사 홈페이지와 네이버 블로그 콘텐츠 200건 이상"
                      />

                      {/* 3. Representative Public Work Cards */}
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="text-[13.5px] font-bold text-ink">
                            대표 공개 콘텐츠
                          </h4>
                          <span className="font-mono text-[11px] text-muted">
                            클릭 시 원문 새 탭 이동
                          </span>
                        </div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {GOM_PUBLIC_WORKS.map((work) => (
                            <a
                              key={work.url}
                              href={work.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex gap-3 rounded-xl border border-ink/10 bg-surface p-3 transition-all hover:border-clay/40 hover:shadow-sm"
                            >
                              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-paper-deep">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={work.thumb}
                                  alt={work.title}
                                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  loading="lazy"
                                />
                              </div>
                              <div className="flex flex-1 flex-col justify-between py-0.5">
                                <div>
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="font-mono text-[10.5px] font-semibold text-clay">
                                      {work.channel}
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="font-mono text-[11px] text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    >
                                      ↗
                                    </span>
                                  </div>
                                  <p className="mt-1 text-[13px] font-bold text-ink group-hover:text-clay">
                                    {work.title}
                                  </p>
                                </div>
                                <p className="text-[11.5px] text-muted">
                                  {work.role}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* 4. HTML/CSS Before → After Comparison */}
                      <HtmlCssComparison
                        beforeSrc="/images/experience/gom/gom-blog-layout-before.webp"
                        afterSrc="/images/experience/gom/gom-blog-layout-after.webp"
                        beforeAlt="곰앤컴퍼니 자사 블로그 수정 전 아티클 화면"
                        afterAlt="곰앤컴퍼니 자사 블로그 구조와 화면을 직접 수정한 결과"
                        beforeCaption="기존 화면: 긴 본문과 분산된 이동 링크"
                        afterCaption="개선 화면: 목차·콘텐츠 단계·CTA 영역을 다시 구성"
                        note="HTML·CSS·JavaScript 구조를 정리하고 레이아웃·탐색 흐름·CTA 영역을 전반적으로 수정했습니다."
                        liveUrl="https://www.gomlab.com/blog/561"
                      />

                      {/* 5. Python Automation Script Evidence */}
                      <div className="rounded-2xl border border-ink/10 bg-surface/70 p-5 md:p-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
                          <div>
                            <h4 className="text-[14px] font-bold text-ink">
                              Python으로 반복 Excel 작업 자동화
                            </h4>
                            <p className="mt-0.5 text-[12px] text-muted">
                              pandas · openpyxl로 정리·분류·파일 생성을 한 번에 처리
                            </p>
                          </div>
                          <span className="font-mono text-[11px] text-muted">
                            실제 작업 화면 일부
                          </span>
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1fr_260px]">
                          <div className="overflow-hidden rounded-xl border border-ink/10 bg-night p-1">
                            <LightboxImage
                              src="/images/experience/gom/gom-python-pandas-automation.webp"
                              alt="Python pandas를 활용한 엑셀 데이터 필터링 자동화 스크립트 화면"
                              label="Python 엑셀 자동화 스크립트"
                              footer="Python pandas/openpyxl 자동화 스크립트 (클릭 확대)"
                              buttonClassName="w-full text-left"
                              thumbnailClassName="aspect-[16/11] w-full object-cover object-top"
                            />
                          </div>

                          <div className="flex flex-col justify-center text-[13px] leading-relaxed text-ink-soft">
                            <p className="font-bold text-ink">
                              반복되는 데이터 정리 자동화
                            </p>
                            <p className="mt-1.5 text-muted">
                              반복되는 Excel 데이터 정리와 조건별 분류 작업을
                              Python으로 자동화했습니다. 중복 데이터를 정리하고,
                              필요한 조건으로 나눈 결과 파일까지 자동으로 만들었습니다.
                            </p>
                            <p className="mt-2 font-mono text-[11.5px] text-clay">
                              반복 수작업을 줄인 실제 자동화 코드의 일부입니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* =========================================================
                      CASE 2: SONGPA POST OFFICE (Compact Case Study)
                      ========================================================= */}
                  {item.id === "songpa-post-office" && (
                    <section
                      aria-labelledby="songpa-evidence-heading"
                      className="mt-8 flex flex-col gap-6 rounded-2xl border border-ink/10 bg-paper-deep/40 p-4 sm:p-6"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
                        <div>
                          <p className="font-mono text-[11px] tracking-wider text-clay uppercase">
                            Field Work
                          </p>
                          <h3
                            id="songpa-evidence-heading"
                            className="text-[16px] font-bold text-ink"
                          >
                            현장 안내와 콘텐츠 제작
                          </h3>
                        </div>
                        <p className="font-mono text-[11px] text-muted">
                          실제 현장에서 사용한 작업
                        </p>
                      </div>

                      {/* 1. Metric Cards (2 verified cards only) */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <MetricCard
                          label="주요 작업"
                          value="5개 프로젝트"
                          note="안내물 제작 · 고객 직접 안내 · CS 콘텐츠 · 문화전 · 예금 이벤트"
                        />
                        <MetricCard
                          label="콘텐츠 제작"
                          value="7개 제작물"
                          note="창구 부착 안내물, 사내 카드뉴스, 홍보 포스터 등"
                        />
                      </div>

                      {/* 2. Accessible Bar Chart */}
                      <EvidenceBarChart
                        title="제작물 구성"
                        subtitle="5개 주요 작업 중 직접 만든 콘텐츠 7개"
                        items={SONGPA_CHART_DATA}
                        unit="종"
                        ariaLabel="송파우체국 제작물: CS 콘텐츠 4개, 고객 안내물 1개, 문화전 포스터 1개, 예금 이벤트 안내물 1개"
                      />

                      {/* 3. Problem → Action → Evidence → Outcome Table */}
                      <div>
                        <div className="mb-3">
                          <h4 className="text-[13.5px] font-bold text-ink">
                            주요 작업
                          </h4>
                          <p className="mt-0.5 text-[12px] text-muted">
                            불편했던 점을 보고 직접 만들고 현장에서 사용했습니다.
                          </p>
                        </div>
                        <SongpaCaseStudyTable cases={SONGPA_CASES} />
                      </div>

                      {/* 4. Representative Visuals (Max 4 in primary layout) */}
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="text-[13.5px] font-bold text-ink">
                            실제 제작물
                          </h4>
                          <span className="font-mono text-[11px] text-muted">
                            클릭 시 확대 보기
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                          {SONGPA_VISUALS.map((vis) => (
                            <div key={vis.src} className="flex flex-col">
                              <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface">
                                <LightboxImage
                                  src={vis.src}
                                  alt={vis.alt}
                                  label={vis.label}
                                  footer={vis.caption}
                                  buttonClassName="w-full text-left"
                                  thumbnailClassName="aspect-[3/4] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                                />
                              </div>
                              <p className="mt-1.5 text-center font-mono text-[11px] text-muted truncate">
                                {vis.caption}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}

                  {/* =========================================================
                      CASE 3: OUR TOWN COMMERCE (Clean Supporting Block)
                      ========================================================= */}
                  {/* Kept restrained and clean as supporting experience */}

                  {/* =========================================================
                      CASE 4: LOTTE WORLD (Compact Metric Strip & Abstract Evidence)
                      ========================================================= */}
                  {item.id === "lotte-world" && (
                    <section
                      aria-labelledby="lotte-evidence-heading"
                      className="mt-8 flex flex-col gap-6 rounded-2xl border border-ink/10 bg-paper-deep/40 p-4 sm:p-6"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
                        <div>
                          <p className="font-mono text-[11px] tracking-wider text-clay uppercase">
                            Field Leadership
                          </p>
                          <h3
                            id="lotte-evidence-heading"
                            className="text-[16px] font-bold text-ink"
                          >
                            현장 운영과 팀 리딩
                          </h3>
                        </div>
                        <p className="font-mono text-[11px] text-muted">
                          어트랙션서비스팀 팀장 역임
                        </p>
                      </div>

                      {/* 1. Compact Editorial Metric Strip (Horizontal on desktop, 2x2 mobile) */}
                      <LotteMetricStrip
                        duration="약 2년 1개월"
                        role="Team Lead"
                        award="Best Lotty 1회"
                        radioEpisodes="사내 라디오 20회"
                      />

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* A. Field Service Animation (3.5s loop, muted, no other faces) */}
                        <div className="flex flex-col">
                          <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface">
                            <LightboxImage
                              src="/images/experience/lotteworld/lotte-field-service.webp"
                              reducedMotionSrc="/images/experience/lotteworld/lotte-field-service-static.webp"
                              alt="어트랙션 현장에서 고객 안전 및 탑승 안내를 진행하는 현장 기록 (3.5초 반복 영상)"
                              label="현장 안전 및 탑승 안내"
                              footer="어트랙션 현장 안전 및 탑승 안내 기록 (3.5초 무음 루프)"
                              buttonClassName="w-full text-left"
                              thumbnailClassName="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02] sm:aspect-[2/3]"
                            />
                          </div>
                          <p className="mt-2 text-[12.5px] font-bold text-ink">
                            현장 대기열 동선 통제
                          </p>
                          <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">
                            성수기 대규모 인파 밀집 시 안전 수칙 직접 안내 (3.5초 무음 루프)
                          </p>
                        </div>

                        <div className="flex flex-col">
                          <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface">
                            <LightboxImage
                              src="/images/experience/lotteworld/lotte-ojt-document.webp"
                              alt="개인정보와 운영 세부 내용을 제외한 캐스트 OJT 일지 상단"
                              label="신규 캐스트 OJT 자료"
                              footer="신규 캐스트 교육을 위해 직접 정리한 OJT 자료"
                              buttonClassName="w-full text-left"
                              thumbnailClassName="aspect-[16/7] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                            />
                          </div>
                          <p className="mt-2 text-[12.5px] font-bold text-ink">신규 캐스트 OJT 자료</p>
                          <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">
                            교육 담당자와 신규 캐스트가 함께 참고할 내용을 직접 문서로 정리
                          </p>
                        </div>

                        {/* B. Wait Time Information Map */}
                        <div className="flex flex-col">
                          <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface">
                            <LightboxImage
                              src="/images/experience/lotteworld/lotte-wait-time-board.webp"
                              alt="어트랙션 대기시간 동선 안내 맵 시각화 자료"
                              label="대기시간 동선 안내 맵"
                              footer="구간별 예상 대기시간 시각화 맵"
                              buttonClassName="w-full text-left"
                              thumbnailClassName="aspect-[2/3] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                            />
                          </div>
                          <p className="mt-2 text-[12.5px] font-bold text-ink">
                            대기시간 정보 시각화
                          </p>
                          <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">
                            구간별 예상 소요 시간을 맵 형태로 구조화하여 고객 문의 분산
                          </p>
                        </div>

                        {/* C. Internal Radio Episodes */}
                        <div className="flex flex-col">
                          <div className="overflow-hidden rounded-xl border border-ink/10 bg-surface">
                            <LightboxImage
                              src="/images/experience/lotteworld/lotte-radio-episodes.webp"
                              alt="사내 라디오 커뮤니케이션 20회 운영 녹음 파일 목록 증빙"
                              label="사내 라디오 20회 운영"
                              footer="팀 내부 소통을 위한 사내 라디오 20회 기획·진행 (음원 비공개)"
                              buttonClassName="w-full text-left"
                              thumbnailClassName="aspect-[2/3] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                            />
                          </div>
                          <p className="mt-2 text-[12.5px] font-bold text-ink">
                            사내 라디오 20회 진행
                          </p>
                          <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">
                            팀 내 분위기 개선과 업무 노하우 공유를 위해 자발적으로 기획·운영
                          </p>
                        </div>
                      </div>

                      <p className="border-t border-ink/8 pt-3 text-[12px] leading-relaxed text-muted">
                        OJT 자료는 개인정보와 세부 운영 내용을 제외한 문서 상단만 공개합니다.
                      </p>
                    </section>
                  )}

                  {/* Privacy / Compliance Note */}
                  {item.contextNote && (
                    <p className="mt-5 max-w-2xl border-l-2 border-ink/15 pl-3 text-[12.5px] leading-relaxed text-muted">
                      {item.contextNote}
                    </p>
                  )}
                  {item.privacyComplianceNote && (
                    <p className="mt-3 max-w-2xl border-l-2 border-ink/15 pl-3 text-[12.5px] leading-relaxed text-muted">
                      {item.privacyComplianceNote}
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
