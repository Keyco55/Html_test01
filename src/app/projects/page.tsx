import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { LightboxImage } from "@/components/site/ImageLightbox";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/projects") as Metadata;

/**
 * Editorial copy per project, condensed from src/data/projects.ts.
 * No URLs, dates, or facts beyond the source data.
 * KBO-Hub fact safety: Deployed · Closed Beta — NOT public launch.
 */
const KBO_FEATURE = {
  monogram: "KBO",
  nameEn: "HOMEPLATE",
  category: "Full-Stack Product",
  period: "2026.08 ~ 현재",
  status: "Deployed · Closed Beta",
  intro:
    "경기 일정과 직관 기록, 포토카드 아카이브 및 도감, 팬 커뮤니티, 야구 굿즈 중고 장터를 한곳에 모은 야구팬용 C2C 서비스입니다.",
  why: "경기 기록과 굿즈·티켓 정보가 여러 서비스에 흩어져 있어 필요한 정보를 한 번에 확인하기 어려웠습니다.",
  what: "경기 일정과 직관 기록부터 포토카드, 팬 커뮤니티, 굿즈 거래까지 이어지는 웹 서비스를 만들었습니다. 1인 빌더로 기획부터 배포와 QA까지 맡았습니다.",
  how: "Next.js App Router와 Supabase 인증·RLS로 구성하고, 외부 라이브러리 없이 DOM 기반 3D 포토카드 인터랙션을 구현했습니다. 보안 리뷰와 Human Runtime QA를 거쳐 Closed Beta로 운영 중이며, 2027.02 Open Beta와 2027.03 정식 출시를 목표로 합니다.",
  serviceUrl: "https://kbo-hub.9ren5dezvous.workers.dev/",
  roadmap: "Closed Beta (현재) → 2027.02 Open Beta → 2027.03 정식 서비스 출시 목표",
  stackGroups: [
    { group: "Frontend", items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS"] },
    { group: "Data & Security", items: ["Supabase", "PostgreSQL", "RLS"] },
    { group: "Infrastructure", items: ["Cloudflare Workers"] },
  ],
} as const;

const MULTI_AGENT_FEATURE = {
  name: "Multi-Agent Development Orchestration",
  nameEn: "Multi-Agent Development Environment",
  category: "Development Orchestration",
  status: "Public · Open Source",
  intro:
    "여러 CLI 에이전트를 역할별로 나누고, Git Worktree로 작업 공간을 격리해 구현·검수·QA를 분리해서 운영하는 개인 개발환경입니다.",
  why: "한 에이전트가 구현과 검수, 통합까지 모두 맡으면 문맥과 책임이 섞이고 동시에 수정할 때 작업이 충돌하기 쉬웠습니다.",
  what: "Human/HQ가 범위를 정하고 Worker와 Worker Fast가 구현을 맡습니다. 별도의 Senior Review와 Security Gate, Human Runtime QA를 거친 뒤에만 통합 여부를 결정합니다.",
  how: "Day마다 하나의 feature branch와 임시 worktree를 만들고, 수정 주체는 worktree당 하나로 제한합니다. 역할은 특정 모델에 고정하지 않으며 merge와 push는 사람이 최종 결정합니다.",
  actualUse: "HOMEPLATE와 이 포트폴리오를 포함한 개인 프로젝트 개발에 실제로 적용하고 있습니다.",
  principles: [
    "One Modifier per Worktree",
    "feature branch isolation",
    "Worker / Senior role separation",
    "Independent Review",
    "Security Gate",
    "Human Runtime QA",
    "Human-controlled merge / push",
  ],
  repositoryUrl: "https://github.com/Keyco55/multi-agent-project",
} as const;

/**
 * Editorial project entry. Real screenshots wire into slotPath;
 * tall/low-res evidence uses fit "contain" (+ optional width cap and
 * a lower-hierarchy secondary frame) so nothing is awkwardly cropped
 * or visibly over-enlarged.
 */
interface OtherProjectEntry {
  readonly slug: string;
  readonly monogram: string;
  readonly name: string;
  readonly nameEn: string;
  readonly category: string;
  readonly period: string;
  readonly badge: string;
  readonly slotPath: string | undefined;
  readonly aspect: string;
  readonly fit?: "cover" | "contain";
  readonly mediaAlt?: string;
  readonly mediaMaxWidth?: string;
  readonly primaryCaption?: string;
  readonly mediaLayout?: "gallery" | "stacked";
  readonly secondarySlotPath?: string;
  readonly secondaryAspect?: string;
  readonly secondaryAlt?: string;
  readonly secondaryCaption?: string;
  readonly secondaryMaxWidth?: string;
  readonly mediaSpan: string;
  readonly contentSpan: string;
  readonly mediaFirst: boolean;
  readonly why: string;
  readonly what: string;
  readonly how: string;
  readonly stack: readonly string[];
  readonly externalLinks: readonly { readonly label: string; readonly url: string }[];
  readonly supportingEvidence?: {
    readonly countSummary: string;
    readonly items: readonly {
      readonly src: string;
      readonly alt: string;
      readonly label: string;
      readonly caption: string;
    }[];
  };
}

const OTHER_PROJECTS: readonly OtherProjectEntry[] = [
  {
    slug: "ai-status-hub",
    monogram: "STS",
    name: "keyco AI Status Hub",
    nameEn: "AI Usage Status Hub",
    category: "Developer Infrastructure",
    period: "2026.08 ~ 현재",
    badge: "Public · Open Source",
    slotPath: "/images/projects/status-hub/status-hub-cover.webp",
    aspect: "4 / 5",
    fit: "contain",
    mediaAlt: "keyco AI Status Hub 대시보드 — AI 서비스별 사용량과 리셋 시각",
    primaryCaption: "전체 메뉴바 대시보드 (클릭 확대)",
    mediaLayout: "gallery",
    secondarySlotPath: "/images/projects/status-hub/status-hub-detail.webp",
    secondaryAspect: "4 / 5",
    secondaryAlt: "AI 리소스 쿼터 상태 상세 — provider별 잔여율과 리셋 카운트다운",
    secondaryCaption: "쿼터·리셋 상세 (클릭 확대)",
    mediaSpan: "md:col-span-6",
    contentSpan: "md:col-span-6",
    mediaFirst: true,
    why: "AI 서비스마다 남은 사용량과 초기화 시각을 서로 다른 화면에서 확인해야 했습니다.",
    what: "여러 AI 서비스의 사용량과 초기화 시각을 메뉴바와 터미널 상태줄에서 함께 확인하는 로컬 도구입니다.",
    how: "오픈소스 CodexBar의 로컬 데이터에서 필요한 수치만 읽는 Python 수집기와 Swift 메뉴바 도구를 만들었습니다. 자격증명·프롬프트·쿠키는 저장하지 않습니다.",
    stack: ["Python 3", "Swift", "macOS AppKit", "CodexBar 로컬 데이터 연동", "cmux / tmux"],
    externalLinks: [{ label: "GitHub 저장소", url: "https://github.com/Keyco55/keyco-ai-status-hub" }],
  },
  {
    slug: "gom-marketing-automation",
    monogram: "GOM",
    name: "GOM Marketing × Web × Automation",
    nameEn: "Marketing Tech & Data Pipeline",
    category: "Work Project",
    period: "2024 ~ 2025",
    badge: "사내 적용 · 익명화 프로세스",
    slotPath: "/images/projects/gom/gom-blog-layout-after.webp",
    aspect: "16 / 10",
    fit: "contain",
    mediaAlt: "GOM 블로그 웹 구조 리팩토링 및 CTA 개선 화면",
    primaryCaption: "블로그 웹 구조 리팩토링 및 CTA 개선 (클릭 확대)",
    secondarySlotPath: "/images/projects/gom/gom-python-pandas-automation.webp",
    secondaryAspect: "16 / 9",
    secondaryAlt: "Python 마케팅 데이터 필터링 및 엑셀 취합 자동화 스크립트",
    secondaryCaption: "Python 엑셀 데이터 취합 자동화 스크립트 (클릭 확대)",
    secondaryMaxWidth: "max-w-[340px]",
    mediaSpan: "md:col-span-6",
    contentSpan: "md:col-span-6",
    mediaFirst: false,
    why: "매주 여러 캠페인의 엑셀 데이터를 취합하면서 반복 작업과 수작업 오류가 생겼고, 프로모션 페이지 수정 요청도 신속한 반영이 필요했습니다.",
    what: "공식 마케팅 채널을 운영하며 프로모션 페이지의 HTML/CSS와 CTA를 직접 수정하고, 반복적인 데이터 취합·정리는 Python으로 자동화했습니다.",
    how: "pandas와 openpyxl로 리포트 집계·중복 검증 스크립트를 만들어 처리 시간을 줄였습니다. 웹 업무는 별도로 프로모션 페이지의 마크업과 링크 구조를 직접 수정했습니다. 회사 내부 정보는 비공개 원칙을 준수했습니다.",
    stack: ["Python", "pandas", "openpyxl", "HTML5 / CSS3", "Excel Automation"],
    externalLinks: [{ label: "경력 상세에서 전체 증빙 보기", url: "/experience#gom-and-company" }],
  },
  {
    slug: "ai-hub-pet",
    monogram: "PET",
    name: "Doro Hub Pet",
    nameEn: "AI-Hub-pet (repo)",
    category: "macOS Native Tool",
    period: "2026.08",
    badge: "Open Source",
    slotPath: "/images/projects/ai-hub-pet/doro-hub-pet-cover.webp",
    aspect: "16 / 10",
    fit: "contain",
    mediaAlt: "Doro Hub Pet 플로팅 캐릭터와 컨트롤 메뉴",
    mediaMaxWidth: "max-w-[360px]",
    primaryCaption: "플로팅 캐릭터 및 상태 메뉴 (클릭 확대)",
    secondarySlotPath: "/images/projects/ai-hub-pet/doro-hub-pet-feature.webp",
    secondaryAspect: "4 / 3",
    secondaryAlt: "Doro Hub Pet 쿼터 부족 경고 인터랙션",
    secondaryCaption: "쿼터 부족 경고 상태 (클릭 확대)",
    secondaryMaxWidth: "max-w-[280px]",
    mediaSpan: "md:col-span-6",
    contentSpan: "md:col-span-6",
    mediaFirst: false,
    why: "여러 터미널에서 실행 중인 에이전트의 상태를 확인하려고 창을 계속 전환해야 했습니다.",
    what: "로컬 AI 에이전트의 작업 상태와 사용량을 말풍선으로 보여주고, 클릭하면 해당 세션으로 이동하는 macOS 플로팅 앱입니다.",
    how: "Swift와 AppKit/SwiftUI로 구현하고 상태별 캐릭터 움직임을 더했습니다. 프롬프트·토큰·비밀번호에는 접근하지 않고 프로세스 상태와 로컬 캐시만 확인합니다.",
    stack: ["Swift", "macOS AppKit", "SwiftUI", "Universal Binary", "Sprite Animation"],
    externalLinks: [{ label: "GitHub 저장소", url: "https://github.com/Keyco55/AI-Hub-pet" }],
  },
  {
    slug: "university-content",
    monogram: "UNI",
    name: "대학 콘텐츠 기획·제작 & 데이터 수집",
    nameEn: "Content · Storytelling · Automation",
    category: "Academic & Creative",
    period: "2021 ~ 2023",
    badge: "경진대회 대상 · 최우수상",
    slotPath: "/images/projects/university-content/univ-competition-2023.webp",
    aspect: "16 / 9",
    fit: "contain",
    mediaAlt: "2023 콘텐츠 기획·제작 경진대회 대상 수상작 영상 화면",
    primaryCaption: "2023 경진대회 대상 수상작 (클릭 확대)",
    secondarySlotPath: "/images/projects/university-content/univ-webtoon-cover.webp",
    secondaryAspect: "3 / 4",
    secondaryAlt: "인스타툰 '베트남에서 생긴 일 EP.1' 표지",
    secondaryCaption: "인스타툰 에피소드 표지 (클릭 확대)",
    secondaryMaxWidth: "max-w-[240px]",
    mediaSpan: "md:col-span-6",
    contentSpan: "md:col-span-6",
    mediaFirst: true,
    why: "학과 홍보와 교내 경진대회, 데이터 수집 실습 과정에서 시각 콘텐츠 기획과 웹 크롤링이 필요했습니다.",
    what: "홍보영상 기획·촬영부터 인스타툰 스토리텔링, Python 웹 크롤링을 활용한 데이터 수집까지 하나의 파이프라인으로 수행했습니다.",
    how: "전공 홍보영상과 경진대회 콘텐츠를 제작해 대상(2023)과 최우수상(2021)을 수상했고, 4부작 인스타툰을 발행했습니다. 실습에서는 Python(BeautifulSoup/Selenium)으로 웹 데이터를 수집했습니다.",
    stack: ["콘텐츠 기획", "영상 편집", "인스타툰", "Python", "BeautifulSoup", "Selenium"],
    externalLinks: [],
    supportingEvidence: {
      countSummary: "2 Awards (대상·최우수상) · 2 Promo Videos · 2 Competitions · 2 Webtoons (4 Parts) · 1 Python Automation",
      items: [
        {
          src: "/images/projects/university-content/univ-department-promo.webp",
          alt: "학과 홍보영상 프레임",
          label: "학과 홍보영상",
          caption: "학과 홍보영상 프레임 (영상 기획·촬영)",
        },
        {
          src: "/images/projects/university-content/univ-competition-2023.webp",
          alt: "2023 경진대회 대상 수상작",
          label: "경진대회 대상",
          caption: "2023 경진대회 대상 수상작 (기획·편집)",
        },
        {
          src: "/images/projects/university-content/univ-webtoon-cover.webp",
          alt: "인스타툰 표지",
          label: "인스타툰 4부작",
          caption: "인스타툰 에피소드 표지 (스토리텔링)",
        },
        {
          src: "/images/projects/university-content/univ-python-scraping.webp",
          alt: "Python 웹 크롤링 스크립트",
          label: "Python 데이터 수집",
          caption: "Python 웹 크롤링 자동화 (데이터 수집)",
        },
      ],
    },
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <PageHeader
        tone="dark"
        index="02"
        eyebrow="Projects"
        title={
          <>
            기획부터 배포까지,
            <br />
            직접 만든 프로젝트
          </>
        }
        lede="기획부터 개발, 배포와 QA까지 직접 맡은 작업을 모았습니다. KBO-Hub는 현재 Closed Beta로 운영하고 있습니다."
      />

      {/* ============ KBO-HUB — dominant feature ============ */}
      <section aria-labelledby="kbo-hub-heading" className="bg-paper">
        <Container className="py-14 md:py-20" >
          <Reveal>
            <article id="kbo-hub" className="scroll-mt-24">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">01 — {KBO_FEATURE.category}</p>
                <span className="font-mono text-[11px] text-muted">{KBO_FEATURE.period}</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-grass/60 bg-grass/5 px-3 py-1 font-mono text-[10.5px] font-semibold text-grass">
                  <span
                    className="pulse-dot h-1.5 w-1.5 rounded-full bg-grass"
                    style={{ color: "var(--grass)" }}
                    aria-hidden="true"
                  />
                  {KBO_FEATURE.status}
                </span>
              </div>

              <h2
                id="kbo-hub-heading"
                className="mt-4 text-[clamp(2.4rem,7vw,4.4rem)] font-extrabold leading-[1.02] text-ink"
              >
                KBO-Hub{" "}
                <span className="align-middle font-mono text-[clamp(0.9rem,2vw,1.3rem)] font-medium tracking-[0.2em] text-clay uppercase">
                  {KBO_FEATURE.nameEn}
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft md:text-[17.5px]">
                {KBO_FEATURE.intro}
              </p>
            </article>
          </Reveal>

          {/* Layered media composition — desktop + mobile (representative) */}
          <Reveal delay={100}>
            <div className="relative mt-10">
              <ProjectMedia
                title="KBO-Hub 메인 대시보드 · 실시간 경기/포토카드 아카이브"
                monogram="KBO"
                slotPath="/images/projects/kbo-hub/cover.webp"
                alt="HOMEPLATE 야구팬 플랫폼 메인 화면"
                badgeText="Closed Beta Verified"
                tone="dark"
                caption="HOMEPLATE — 통합 야구팬 라이프스타일 C2C 플랫폼"
              />
              <div className="absolute -right-2 -bottom-8 w-[112px] md:-right-6 md:-bottom-10 md:w-[168px]">
                <ProjectMedia
                  title="모바일 뷰"
                  monogram="M"
                  slotPath="/images/projects/kbo-hub/mobile.webp"
                  alt="HOMEPLATE 모바일 메인 화면"
                  tone="dark"
                  aspect="9 / 16"
                />
              </div>
            </div>
          </Reveal>

          {/* Story + stack */}
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-7">
              <dl className="flex flex-col">
                {[
                  { t: "배경", d: KBO_FEATURE.why },
                  { t: "만든 것", d: KBO_FEATURE.what },
                  { t: "방식", d: KBO_FEATURE.how },
                ].map((row) => (
                  <div key={row.t} className="grid grid-cols-[88px_1fr] gap-4 border-t border-ink/10 py-5 last:border-b">
                    <dt className="pt-0.5 font-mono text-[11.5px] font-semibold tracking-[0.12em] text-clay uppercase">
                      {row.t}
                    </dt>
                    <dd className="text-[15px] leading-relaxed text-ink">{row.d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <div className="dot-grid-light rounded-2xl border border-ink/10 bg-surface p-6">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  Main Technologies
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {KBO_FEATURE.stackGroups.map((group) => (
                    <div key={group.group}>
                      <p className="flex items-center gap-2 text-[11.5px] font-bold tracking-wide text-clay">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-clay" />
                        {group.group}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {group.items.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-ink/12 bg-paper px-3 py-1.5 text-[12.5px] font-semibold text-ink-soft"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <hr className="stitch-rule my-5 opacity-50" aria-hidden="true" />
                <p className="text-[13px] leading-relaxed text-ink-soft">
                  {KBO_FEATURE.roadmap}
                </p>
                <a
                  href={KBO_FEATURE.serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-clay px-5 text-[13.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay-bright"
                >
                  서비스 바로가기 (HOMEPLATE) <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Feature gallery — supporting HOMEPLATE screens (lower, editorial) */}
          <Reveal delay={160}>
            <div className="mt-14 border-t border-ink/10 pt-10">
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                HOMEPLATE — Feature Screens
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <figure className="flex flex-col">
                  <ProjectMedia
                    title="팬킹덤 및 어워즈"
                    monogram="FAN"
                    slotPath="/images/projects/kbo-hub/feature-fan-kingdom.webp"
                    alt="HOMEPLATE 팬킹덤 및 어워즈 화면"
                    caption="팬킹덤 · 어워즈 — 팬 커뮤니티와 투표"
                    aspect="16 / 10"
                  />
                  <figcaption className="mt-2.5 font-mono text-[11px] leading-relaxed text-muted">
                    팬킹덤 · 어워즈
                  </figcaption>
                </figure>
                <figure className="flex flex-col">
                  <ProjectMedia
                    title="포토카드 아카이브"
                    monogram="CARD"
                    slotPath="/images/projects/kbo-hub/feature-photocard.webp"
                    alt="HOMEPLATE 포토카드 아카이브 및 도감"
                    caption="포토카드 아카이브 및 도감"
                    aspect="16 / 10"
                  />
                  <figcaption className="mt-2.5 font-mono text-[11px] leading-relaxed text-muted">
                    포토카드 아카이브 및 도감
                  </figcaption>
                </figure>
                <figure className="flex flex-col">
                  <ProjectMedia
                    title="야구 굿즈 장터"
                    monogram="MKT"
                    slotPath="/images/projects/kbo-hub/feature-marketplace.webp"
                    alt="HOMEPLATE 야구장 직거래 및 굿즈 중고장터"
                    caption="야구장 직거래 · 굿즈 중고장터"
                    aspect="16 / 10"
                  />
                  <figcaption className="mt-2.5 font-mono text-[11px] leading-relaxed text-muted">
                    야구장 직거래 · 굿즈 중고장터
                  </figcaption>
                </figure>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ MULTI-AGENT — second main project ============ */}
      <section
        id="multi-agent-orchestration"
        aria-labelledby="multi-agent-heading"
        className="scroll-mt-20 border-t border-ink/10 bg-paper-deep/60"
      >
        <Container className="py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow">02 — {MULTI_AGENT_FEATURE.category}</p>
              <span className="rounded-full border border-ink/15 bg-surface px-3 py-1 font-mono text-[10.5px] font-semibold text-clay">
                {MULTI_AGENT_FEATURE.status}
              </span>
            </div>
            <h2
              id="multi-agent-heading"
              className="mt-4 max-w-4xl text-[clamp(2rem,6vw,3.8rem)] font-extrabold leading-[1.04] text-ink"
            >
              {MULTI_AGENT_FEATURE.name}
            </h2>
            <p className="mt-2 font-mono text-[11.5px] tracking-[0.16em] text-clay uppercase">
              {MULTI_AGENT_FEATURE.nameEn}
            </p>
            <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-ink-soft md:text-[17.5px]">
              {MULTI_AGENT_FEATURE.intro}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10">
              <ProjectMedia
                title="역할·브랜치 분리 구조"
                monogram="MA"
                slotPath="/images/projects/multi-agent/multi-agent-role-branch-architecture.webp"
                alt="초기 멀티에이전트 실험에서 역할별 에이전트와 feature branch를 분리한 구조"
                caption="초기 역할·브랜치 분리 실험 — 현재는 Day별 단일 feature worktree로 운영"
                aspect="16 / 9"
                fit="contain"
                lightbox={true}
              />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-7">
              <dl className="flex flex-col">
                {[
                  { t: "만든 이유", d: MULTI_AGENT_FEATURE.why },
                  { t: "운영 구조", d: MULTI_AGENT_FEATURE.what },
                  { t: "격리 방식", d: MULTI_AGENT_FEATURE.how },
                  { t: "실제 사용", d: MULTI_AGENT_FEATURE.actualUse },
                ].map((row) => (
                  <div key={row.t} className="grid grid-cols-[88px_1fr] gap-4 border-t border-ink/10 py-5 last:border-b">
                    <dt className="pt-0.5 font-mono text-[11px] font-semibold tracking-[0.12em] text-clay uppercase">
                      {row.t}
                    </dt>
                    <dd className="text-[14.5px] leading-relaxed text-ink-soft">{row.d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <div className="h-full rounded-2xl border border-ink/10 bg-surface p-6">
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  Operating Principles
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {MULTI_AGENT_FEATURE.principles.map((principle) => (
                    <li key={principle} className="flex items-baseline gap-2.5 text-[13.5px] text-ink-soft">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-clay" />
                      {principle}
                    </li>
                  ))}
                </ul>
                <a
                  href={MULTI_AGENT_FEATURE.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-clay px-5 text-[13.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay-bright"
                >
                  GitHub에서 보기 <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <ProjectMedia
                title="CLI Agent Runtime"
                monogram="CLI"
                slotPath="/images/projects/multi-agent/multi-agent-cli-runtime.webp"
                alt="cmux에서 여러 CLI 에이전트를 역할별로 나누어 실행하는 화면"
                caption="cmux에서 역할별 CLI Agent를 나누어 실행하는 환경"
                aspect="16 / 9"
                fit="contain"
                lightbox={true}
              />
            </Reveal>
            <Reveal delay={60}>
              <ProjectMedia
                title="Independent Senior Review"
                monogram="SR"
                slotPath="/images/projects/multi-agent/multi-agent-senior-review.webp"
                alt="Worker 작업과 별도로 여러 검수 결과를 확인하는 Senior Review 화면"
                caption="Worker와 분리해 진행한 Senior Review와 Security Gate"
                aspect="16 / 10"
                fit="contain"
                lightbox={true}
              />
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="mx-auto mt-6 max-w-3xl">
              <ProjectMedia
                title="CLI Agent Operations"
                monogram="OPS"
                slotPath="/images/projects/multi-agent/multi-agent-operations-map.webp"
                alt="웹 개발, QA, 자동화, 문서화 등 작업 영역으로 이어지는 CLI 운영 구조"
                caption="프로젝트와 작업 성격에 맞춰 확장한 CLI 운영 범위"
                aspect="16 / 9"
                fit="contain"
                lightbox={true}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <hr className="stitch-rule mx-auto max-w-6xl opacity-60" aria-hidden="true" />

      {/* ============ OTHER PROJECTS — alternating editorial ============ */}
      <section aria-labelledby="projects-more-heading" className="bg-paper">
        <Container className="py-14 md:py-20">
          <Reveal>
            <h2
              id="projects-more-heading"
              className="text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-ink"
            >
              그 외 직접 만든 작업
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col gap-20 md:gap-28">
            {OTHER_PROJECTS.map((project, index) => (
              <Reveal key={project.slug}>
                <article
                  id={project.slug}
                  aria-labelledby={`${project.slug}-heading`}
                  className="grid scroll-mt-24 grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10"
                >
                  <div className={`${project.mediaSpan} ${project.mediaFirst ? "" : "md:order-2"}`}>
                    {project.mediaLayout === "gallery" && project.secondarySlotPath ? (
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <ProjectMedia
                          title={project.name}
                          monogram={project.monogram}
                          slotPath={project.slotPath}
                          alt={project.mediaAlt ?? `${project.name} 대표 이미지`}
                          badgeText={project.badge}
                          aspect={project.aspect}
                          fit={project.fit}
                          caption={project.primaryCaption}
                          lightbox={Boolean(project.slotPath)}
                        />
                        <ProjectMedia
                          title={`${project.name} 상세`}
                          monogram={project.monogram}
                          slotPath={project.secondarySlotPath}
                          alt={project.secondaryAlt ?? `${project.name} 상세 이미지`}
                          aspect={project.secondaryAspect ?? project.aspect}
                          fit="contain"
                          caption={project.secondaryCaption}
                          lightbox={true}
                        />
                      </div>
                    ) : (
                      <>
                        <div className={`w-full ${project.mediaMaxWidth ?? ""}`}>
                          <ProjectMedia
                            title={project.name}
                            monogram={project.monogram}
                            slotPath={project.slotPath}
                            alt={project.mediaAlt ?? `${project.name} 대표 이미지`}
                            badgeText={project.badge}
                            aspect={project.aspect}
                            fit={project.fit}
                            caption={project.primaryCaption}
                            lightbox={Boolean(project.slotPath)}
                          />
                        </div>
                        {project.secondarySlotPath && (
                          <div className={`mt-4 w-full ${project.secondaryMaxWidth ?? "max-w-[300px]"}`}>
                            <ProjectMedia
                              title={`${project.name} 상세`}
                              monogram={project.monogram}
                              slotPath={project.secondarySlotPath}
                              alt={project.secondaryAlt ?? `${project.name} 상세 이미지`}
                              aspect={project.secondaryAspect ?? "4 / 3"}
                              fit="contain"
                              caption={project.secondaryCaption}
                              lightbox={true}
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className={project.contentSpan}>
                    <p className="font-mono text-[11.5px] tracking-[0.16em] text-clay uppercase">
                      {String(index + 3).padStart(2, "0")} — {project.category}
                      <span className="ml-2 normal-case text-muted">{project.period}</span>
                    </p>
                    <h3
                      id={`${project.slug}-heading`}
                      className="mt-2.5 text-[clamp(1.4rem,3vw,1.9rem)] font-extrabold tracking-tight text-ink"
                    >
                      {project.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                      {project.nameEn}
                    </p>

                    <dl className="mt-5 flex flex-col text-[14.5px] leading-relaxed">
                      {[
                        { t: "배경", d: project.why },
                        { t: "만든 것", d: project.what },
                        { t: "방식", d: project.how },
                      ].map((row) => (
                        <div key={row.t} className="border-t border-ink/10 py-3.5 last:border-b">
                          <dt className="font-mono text-[10.5px] font-semibold tracking-[0.14em] text-muted uppercase">
                            {row.t}
                          </dt>
                          <dd className="mt-1 text-ink-soft">{row.d}</dd>
                        </div>
                      ))}
                    </dl>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full bg-ink/[0.05] px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {project.externalLinks.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-x-6">
                        {project.externalLinks.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-sweep inline-flex min-h-[44px] items-center gap-1 text-[14px] font-bold text-clay"
                          >
                            {link.label} <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {project.supportingEvidence && (
                      <div className="mt-5 rounded-xl border border-ink/10 bg-paper-deep/60 p-3.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10.5px] font-bold text-clay uppercase">
                            Verified Summary
                          </span>
                          <span className="font-mono text-[10.5px] text-muted">
                            4개 대표 증빙
                          </span>
                        </div>
                        <p className="mt-1 font-mono text-[11.5px] text-ink-soft">
                          {project.supportingEvidence.countSummary}
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {project.supportingEvidence.items.map((it) => (
                            <div key={it.src} className="flex flex-col">
                              <LightboxImage
                                src={it.src}
                                alt={it.alt}
                                label={it.label}
                                footer={it.caption}
                                buttonClassName="w-full overflow-hidden rounded-lg border border-ink/10 bg-surface text-left transition-transform duration-200 hover:scale-105"
                                thumbnailClassName="aspect-[4/3] w-full object-cover"
                              />
                              <p className="mt-1 text-center font-mono text-[9.5px] text-muted truncate">
                                {it.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section aria-labelledby="projects-contact" className="dot-grid bg-night text-night-ink">
        <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <Reveal>
            <h2 id="projects-contact" className="text-[clamp(1.4rem,3.4vw,2rem)] font-extrabold">
              작업이 더 궁금하신가요?
            </h2>
            <p className="mt-2 text-[14.5px] text-night-soft">
              프로젝트를 만든 과정과 기술 선택은 공개 채널에 더 자세히 기록하고 있습니다.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap gap-3">
            <Link
              href="/about#contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-clay px-6 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay-bright"
            >
              연락 채널 <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/skills#workflow"
              className="inline-flex min-h-[48px] items-center rounded-full border border-night-line px-6 text-[14px] font-bold text-night-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-clay-bright hover:text-clay-bright"
            >
              개발 워크플로 보기
            </Link>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
