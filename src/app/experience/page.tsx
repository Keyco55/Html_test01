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

/** GOM Verified File / Content Count */
const GOM_CHART_DATA = [
  { label: "숏폼 영상 콘텐츠", value: 5, sublabel: "Short-form (인스타·유튜브)" },
  { label: "공개 아티클", value: 3, sublabel: "Public Articles (네이버·자사 블로그)" },
  { label: "웹 워크플로우", value: 2, sublabel: "Web Layout Before/After" },
  { label: "업무 자동화", value: 1, sublabel: "Python Automation Script" },
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
  { label: "CS 커뮤니케이션", value: 4, sublabel: "CS Day 내부 안내 4종" },
  { label: "고객 접점 안내", value: 1, sublabel: "간편사전접수 가이드 포스터" },
  { label: "문화 행사 홍보", value: 1, sublabel: "우체국 문화전 포스터 편집" },
  { label: "금융 이벤트", value: 1, sublabel: "예금 이벤트 홍보 안내물" },
] as const;

/** Songpa Case Study Items (Problem → Action → Evidence → Outcome) */
const SONGPA_CASES: readonly SongpaCaseItem[] = [
  {
    id: "songpa-case-prereg",
    title: "간편사전접수 고객 안내",
    problem: "간편사전접수 절차가 낯설어 창구 문의가 반복되고 대기 시간이 길어짐",
    action: "단계별 스마트폰 이용 절차를 시각 안내물로 제작하고 창구에서 1:1 안내 진행",
    evidence: "간편사전접수 안내 포스터 + 창구 현장 직접 안내",
    outcome: "방문 고객이 접수 절차를 한눈에 이해하고 스마트폰으로 직접 접수하도록 유도",
  },
  {
    id: "songpa-case-cs-day",
    title: "수요일 CS Day 소통",
    problem: "고객 응대 기준과 CS 메시지를 지점 직원들에게 주기적으로 환기할 필요",
    action: "매주 수요일 CS Day에 맞춰 내부 서비스 기준과 공감 메시지 콘텐츠 기획·편집",
    evidence: "CS Day 내부 커뮤니케이션 비주얼 자료 4종",
    outcome: "친절 응대 기준과 근무 환경 개선 내용을 지점 구성원에게 효과적으로 공유",
  },
  {
    id: "songpa-case-promo",
    title: "문화전 & 예금 이벤트 홍보",
    problem: "공모전 규격과 금융 이벤트 혜택 정보가 복잡해 고객이 조건을 놓치기 쉬움",
    action: "공모전 포스터 편집 및 예금 신규 예치 핵심 혜택을 강조한 홍보물 제작·게시",
    evidence: "문화전 포스터 1종 + 예금 이벤트 안내물 1종",
    outcome: "창구 방문 고객에게 복잡한 이벤트 조건과 일정을 명확하게 전달",
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
                            Employment Evidence
                          </p>
                          <h3
                            id="gom-evidence-heading"
                            className="text-[16px] font-bold text-ink"
                          >
                            운영 채널 및 정량 성과 증빙
                          </h3>
                        </div>
                        <p className="font-mono text-[11px] text-muted">
                          8개 공개 URL 증빙 검증
                        </p>
                      </div>

                      {/* 1. Impact KPI Cards (Verified channels + Approx growth) */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <MetricCard
                          label="공식 운영 채널"
                          value="5 Channels"
                          note="Instagram · YouTube · Naver Blog · TikTok · Threads"
                          level="verified"
                          badgeSubtext="공식 채널"
                        />
                        <MetricCard
                          label="Instagram Followers"
                          value="약 +4K"
                          note="Approx. · 운영 기간 중 기억 기반 성장 규모"
                          level="approx"
                          badgeSubtext="기억 기반"
                        />
                        <MetricCard
                          label="Naver Blog Daily Visitors"
                          value="약 +1K"
                          note="Approx. · 운영 기간 중 기억 기반 성장 규모"
                          level="approx"
                          badgeSubtext="기억 기반"
                        />
                      </div>

                      {/* 2. Verified Evidence Counts Bar Chart */}
                      <EvidenceBarChart
                        title="검증 산출물 분류별 건수"
                        subtitle="실제 공개 콘텐츠 및 보유 화면 증빙 기준"
                        items={GOM_CHART_DATA}
                        unit="건"
                        ariaLabel="곰앤컴퍼니 검증 산출물: 숏폼 콘텐츠 5건, 공개 아티클 3건, 웹 워크플로우 2건, 업무 자동화 1건"
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
                        beforeAlt="곰앤컴퍼니 자사 블로그 초기 아티클 레이아웃 (목차 및 CTA 부재)"
                        afterAlt="곰앤컴퍼니 자사 블로그 리팩토링 후 레이아웃 (목차 카드, 스텝 뱃지, CTA 버튼 개선)"
                        beforeCaption="초기 레이아웃: 긴 텍스트 나열 위주 구성 및 링크 분산"
                        afterCaption="리팩토링 반영: 상단 목차 박스화, 스텝별 넘버링 뱃지, 하단 라운드 CTA 버튼 적용"
                        note="마케팅 블로그 아티클 HTML/CSS 직접 수정 및 레이아웃 개선"
                        liveUrl="https://www.gomlab.com/blog/561"
                      />

                      {/* 5. Python Automation Script Evidence */}
                      <div className="rounded-2xl border border-ink/10 bg-surface/70 p-5 md:p-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
                          <div>
                            <h4 className="text-[14px] font-bold text-ink">
                              Python 데이터 취합 자동화 스크립트
                            </h4>
                            <p className="mt-0.5 text-[12px] text-muted">
                              pandas · openpyxl 기반 반복 엑셀 정제 파이프라인
                            </p>
                          </div>
                          <span className="font-mono text-[11px] text-muted">
                            내부 데이터 비공개 처리
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
                              반복 취합 시간 단축
                            </p>
                            <p className="mt-1.5 text-muted">
                              여러 캠페인에서 유입된 수천 행의 엑셀 데이터를
                              중복 이메일 제거, 구매 여부 조건 필터링, 결과 파일
                              생성까지 CLI 스크립트로 처리했습니다.
                            </p>
                            <p className="mt-2 font-mono text-[11.5px] text-clay">
                              ※ 사내 회원 정보 및 내부 원시 데이터는 제외하고
                              익명화된 프로세스 구조만 공개했습니다.
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
                            Operational Case Study
                          </p>
                          <h3
                            id="songpa-evidence-heading"
                            className="text-[16px] font-bold text-ink"
                          >
                            현장 서비스 개선 & 시각물 제작 사례
                          </h3>
                        </div>
                        <p className="font-mono text-[11px] text-muted">
                          문제 정의부터 실행 결과까지
                        </p>
                      </div>

                      {/* 1. Metric Cards (2 verified cards only) */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <MetricCard
                          label="추진 프로젝트"
                          value="4 Initiatives"
                          note="고객 안내 · CS 커뮤니케이션 · 문화전 · 예금 이벤트"
                          level="verified"
                          badgeSubtext="보유 산출물"
                        />
                        <MetricCard
                          label="고유 제작 시각물"
                          value="7 Visual Assets"
                          note="창구 부착 안내물, 사내 카드뉴스, 홍보 포스터 등"
                          level="verified"
                          badgeSubtext="고유 제작물"
                        />
                      </div>

                      {/* 2. Accessible Bar Chart */}
                      <EvidenceBarChart
                        title="추진 분야별 시각 자료 현황"
                        subtitle="현장 제작 및 편집 산출물 기준"
                        items={SONGPA_CHART_DATA}
                        unit="종"
                        ariaLabel="송파우체국 시각 자료: CS 커뮤니케이션 4종, 고객 접점 안내 1종, 문화 행사 홍보 1종, 금융 이벤트 1종"
                      />

                      {/* 3. Problem → Action → Evidence → Outcome Table */}
                      <div>
                        <div className="mb-3">
                          <h4 className="text-[13.5px] font-bold text-ink">
                            추진 과제별 프로세스 요약
                          </h4>
                          <p className="mt-0.5 text-[12px] text-muted">
                            추정 비율 대신 실제 수행한 조치와 현장 결과 중심 기록
                          </p>
                        </div>
                        <SongpaCaseStudyTable cases={SONGPA_CASES} />
                      </div>

                      {/* 4. Representative Visuals (Max 4 in primary layout) */}
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="text-[13.5px] font-bold text-ink">
                            대표 현장 시각 자료
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
                            Operational Foundation
                          </p>
                          <h3
                            id="lotte-evidence-heading"
                            className="text-[16px] font-bold text-ink"
                          >
                            현장 운영 관리 및 팀 리딩 증빙
                          </h3>
                        </div>
                        <p className="font-mono text-[11px] text-muted">
                          어트랙션서비스팀 팀장 역임
                        </p>
                      </div>

                      {/* 1. Compact Editorial Metric Strip (Horizontal on desktop, 2x2 mobile) */}
                      <LotteMetricStrip
                        duration="약 2년 1개월"
                        role="팀장 (Team Lead)"
                        award="베스트로티상 1회"
                        radioEpisodes="20개 에피소드"
                      />

                      {/* 2. Abstract Process & Field Evidence (No confidential safety manual leaks) */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
                              thumbnailClassName="aspect-[2/3] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                            />
                          </div>
                          <p className="mt-2 text-[12.5px] font-bold text-ink">
                            현장 대기열 동선 통제
                          </p>
                          <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted">
                            성수기 대규모 인파 밀집 시 안전 수칙 직접 안내 (3.5초 무음 루프)
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
                        ※ 안전 관련 규정 및 사내 OJT 매뉴얼 원문은 보호 규정에
                        따라 공개하지 않고 프로세스 요약으로만 안내합니다.
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
