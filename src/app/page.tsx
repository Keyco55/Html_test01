import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ContactChannels } from "@/components/site/ContactChannels";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/") as Metadata;

/** Live statuses — grounded in src/data/projects.ts. No invented facts. */
const LIVE_STATUSES = [
  { label: "KBO-Hub", badge: "Closed Beta", note: "통합 야구팬 라이프스타일 C2C 플랫폼 · HOMEPLATE", dot: "var(--grass)" },
  { label: "keyco AI Status Hub", badge: "Public · Open Source", note: "AI 서비스 사용량을 모아 보는 로컬 도구", dot: "var(--clay-bright)" },
  { label: "Doro Hub Pet", badge: "Open Source", note: "작업 상태를 알려주는 macOS 플로팅 앱", dot: "var(--sand)" },
] as const;

const MARQUEE_ITEMS = [
  "Next.js",
  "TypeScript",
  "React",
  "Supabase",
  "PostgreSQL",
  "Row Level Security",
  "Swift",
  "Python",
  "Git Worktree",
  "cmux",
  "Cloudflare Workers",
  "Tailwind CSS",
] as const;

/** Supporting work — condensed from src/data/projects.ts. Order: 02 Status Hub, 03 GOM, 04 Doro Hub Pet. */
const SUPPORTING = [
  {
    slug: "ai-status-hub",
    monogram: "STS",
    name: "keyco AI Status Hub",
    nameEn: "AI Usage Status Hub",
    what: "여러 AI 서비스의 사용량과 초기화 시각을 메뉴바와 터미널에서 한 번에 확인하는 로컬 도구입니다.",
    stack: "Python · Swift · cmux",
    badge: "Public · Open Source",
    slotPath: "/images/projects/status-hub/status-hub-detail.webp",
    alt: "keyco AI Status Hub — AI 서비스별 쿼터와 리셋 시각을 보여주는 상태 상세 화면",
    fit: "contain" as const,
    span: "md:col-span-2",
  },
  {
    slug: "gom-marketing-automation",
    monogram: "GOM",
    name: "GOM Automation",
    nameEn: "Marketing × Web × Python",
    what: "Python으로 반복적인 마케팅 데이터 정리를 자동화하고, HTML/CSS로 랜딩 페이지를 수정한 실무 작업입니다.",
    stack: "Python · pandas · openpyxl",
    badge: "Work Project",
    slotPath: "/images/projects/gom/gom-blog-source-workflow.webp",
    alt: "GOM 마케팅 웹 소스 정리 및 트랜지션 애니메이션 코드",
    fit: "contain" as const,
    span: "md:col-span-2",
  },
  {
    slug: "ai-hub-pet",
    monogram: "PET",
    name: "Doro Hub Pet",
    nameEn: "AI-Hub-pet",
    what: "AI 에이전트의 작업 상태를 말풍선으로 보여주고, 클릭하면 해당 세션으로 이동하는 macOS 플로팅 앱입니다.",
    stack: "Swift · AppKit · SwiftUI",
    badge: "Open Source",
    slotPath: "/images/projects/ai-hub-pet/doro-hub-pet-cover.webp",
    alt: "Doro Hub Pet — 화면 위에 떠 있는 펫 캐릭터와 컨트롤 메뉴",
    fit: "contain" as const,
    span: "md:col-span-2",
  },
] as const;

/** Restrained 20px line icons — decorative; text carries all meaning. */
const GROUP_ICONS: Record<string, React.ReactNode> = {
  Development: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m8 6-5 6 5 6M16 6l5 6-5 6" />
    </svg>
  ),
  "Styling & Markup": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v5" />
    </svg>
  ),
  "Backend & Management": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="8" ry="2.8" />
      <path d="M4 5.5v6c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8v-6M4 11.5v6c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8v-6" />
    </svg>
  ),
  "Tools & Workflow": (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 6.5a4 4 0 0 0 5 5L21 21l-8.5-1.5a4 4 0 0 1-5-5L3 3l8.5 1.5z" transform="rotate(0)" />
      <path d="M6 18 3 21" />
    </svg>
  ),
};

const SKILL_SNAPSHOT = [
  { group: "Development", items: "JavaScript · TypeScript · React · Next.js · Python · Swift" },
  { group: "Styling & Markup", items: "HTML · CSS · Tailwind CSS · Responsive Web · Accessibility" },
  { group: "Backend & Management", items: "Supabase · PostgreSQL · Auth · RLS · Storage" },
  { group: "Tools & Workflow", items: "Git · GitHub · Git Worktree · cmux · Cloudflare · Notion" },
] as const;

const WORKFLOW_STEPS = [
  "Plan",
  "Documentation",
  "Branch",
  "Worktree",
  "Agents",
  "Review",
  "QA",
  "Release",
] as const;

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ============ HERO — night editorial band ============ */}
      <section aria-labelledby="home-hero" className="dot-grid relative overflow-hidden bg-night text-night-ink">
        {/* atmosphere: soft clay glow + floating stitch arc */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(181,56,38,0.28) 0%, transparent 65%)" }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 320 120"
          className="float-slow pointer-events-none absolute top-24 right-[6%] hidden w-[280px] opacity-60 lg:block"
          fill="none"
        >
          <path d="M10 100 Q160 -10 310 100" stroke="rgba(226,112,74,0.55)" strokeWidth="2" strokeDasharray="7 9" strokeLinecap="round" />
          <circle cx="160" cy="44" r="5" fill="var(--sand)" />
        </svg>

        <Container className="relative flex flex-col gap-14 pb-14 pt-16 md:pb-20 md:pt-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-clay-bright">안녕하세요, 김범우입니다.</p>
            </Reveal>

            <h1
              id="home-hero"
              className="mt-5 text-[clamp(2rem,6.4vw,3.9rem)] font-extrabold leading-[1.14] text-night-ink"
            >
              <span className="rise-mask" style={{ ["--rise-delay" as string]: "80ms" }}>
                <span>고객과 서비스를 이해하고,</span>
              </span>
              <span className="rise-mask" style={{ ["--rise-delay" as string]: "200ms" }}>
                <span>콘텐츠와 기술로</span>
              </span>
              <span className="rise-mask" style={{ ["--rise-delay" as string]: "320ms" }}>
                <span>
                  직접{" "}
                  <em
                    className="not-italic"
                    style={{
                      color: "var(--clay-bright)",
                      textDecoration: "underline",
                      textDecorationStyle: "dashed",
                      textUnderlineOffset: "0.18em",
                      textDecorationThickness: "2px",
                    }}
                  >
                    만드는
                  </em>{" "}
                  사람.
                </span>
              </span>
            </h1>

            {/* Editorial career path — restrained line + clay point + arrow */}
            <Reveal delay={420}>
              <p
                aria-label="Customer Experience, Content, Product Development"
                className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] tracking-[0.14em] text-night-soft uppercase md:text-[13.5px]"
              >
                <span className="font-bold text-night-ink">Customer Experience</span>
                <span aria-hidden="true" className="flex items-center gap-1.5 text-clay-bright">
                  <span className="h-px w-6 bg-current opacity-60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  →
                </span>
                <span className="font-bold text-night-ink">Content</span>
                <span aria-hidden="true" className="flex items-center gap-1.5 text-clay-bright">
                  <span className="h-px w-6 bg-current opacity-60" />
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  →
                </span>
                <span className="font-bold text-night-ink">Product Development</span>
              </p>
            </Reveal>

            <Reveal delay={500}>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-night-soft md:text-[17px]">
                현장에서 고객을 응대하는 일로 시작해 콘텐츠와 마케팅, 웹 운영을
                거쳤고, 지금은 서비스를 직접 기획하고 개발합니다. 야구팬 플랫폼{" "}
                <a
                  href="https://kbo-hub.9ren5dezvous.workers.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep font-bold text-night-ink"
                >
                  KBO-Hub (HOMEPLATE)
                </a>
                를 Closed Beta로 운영하며, 필요한 도구는 웹과 macOS 네이티브로
                직접 만듭니다.
              </p>
            </Reveal>

            <Reveal delay={580}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-clay px-6 text-[14.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay-bright"
                >
                  프로젝트 보기
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-h-[48px] items-center rounded-full border border-night-line px-6 text-[14.5px] font-bold text-night-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-clay-bright hover:text-clay-bright"
                >
                  소개 보기
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Live status panel */}
          <Reveal delay={300} className="w-full shrink-0 lg:max-w-[320px]">
            <div className="rounded-2xl border border-night-line bg-night-raise/80 p-5 backdrop-blur-sm">
              <p className="font-mono text-[10.5px] tracking-[0.18em] text-night-muted uppercase">
                Now Building
              </p>
              <ul className="mt-4 flex flex-col gap-4">
                {LIVE_STATUSES.map((status) => (
                  <li key={status.label} className="flex items-start gap-3">
                    <span
                      className="pulse-dot mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: status.dot, color: status.dot }}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="flex flex-wrap items-baseline gap-x-2">
                        <span className="text-[14.5px] font-bold text-night-ink">
                          {status.label}
                        </span>
                        <span className="font-mono text-[10.5px] tracking-wide text-clay-bright">
                          {status.badge}
                        </span>
                      </p>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-night-muted">
                        {status.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>

        {/* Marquee ticker at hero base */}
        <div
          className="marquee-host relative border-t border-night-line py-3"
          aria-hidden="true"
        >
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {MARQUEE_ITEMS.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center whitespace-nowrap px-5 font-mono text-[12px] tracking-[0.1em] text-night-muted uppercase"
                  >
                    <span className="mr-5 inline-block h-1.5 w-1.5 rotate-45 bg-clay-bright/80" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      <section aria-labelledby="home-featured" className="bg-paper">
        <Container className="pt-16 md:pt-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2
                id="home-featured"
                className="mt-2 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold text-ink"
              >
                직접 만든 주요 작업
              </h2>
            </div>
            <Link
              href="/projects"
              className="link-sweep flex min-h-[44px] items-center gap-1.5 text-[14px] font-bold text-clay"
            >
              모든 프로젝트 <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </Container>

        {/* KBO-Hub — dominant feature card */}
        <Container className="pt-8 md:pt-10">
          <Reveal>
            <article
              aria-labelledby="home-kbo-hub"
              className="dot-grid relative overflow-hidden rounded-[22px] border border-night-line bg-night text-night-ink"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 -bottom-24 h-[320px] w-[320px] rounded-full opacity-60 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(46,93,67,0.5) 0%, transparent 70%)" }}
              />
              <div className="relative grid grid-cols-1 gap-8 p-6 md:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
                <div className="flex flex-col">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-clay-bright uppercase">
                    01 — Full-Stack Product
                  </p>
                  <h3
                    id="home-kbo-hub"
                    className="mt-3 text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.05]"
                  >
                    KBO-Hub
                  </h3>
                  <p className="mt-1 font-mono text-[13px] tracking-[0.16em] text-sand uppercase">
                    HOMEPLATE
                  </p>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-night-soft">
                    경기 일정·직관 기록, 포토카드 아카이브 및 도감, 팬 커뮤니티,
                    야구 굿즈 전문 중고 장터를 하나로 묶은 통합 야구팬
                    라이프스타일 C2C 서비스입니다. 기획과 프론트엔드, Supabase
                    인증·RLS 설계, 배포와 QA까지 직접 맡았습니다.
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {["Next.js App Router", "Supabase", "PostgreSQL", "RLS", "Cloudflare Workers"].map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-night-line px-3 py-1 font-mono text-[11px] text-night-soft"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
                    <Link
                      href="/projects#kbo-hub"
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-night-ink px-5 text-[14px] font-bold text-night transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay-bright hover:text-white"
                    >
                      케이스 보기 <span aria-hidden="true">→</span>
                    </Link>
                    <a
                      href="https://kbo-hub.9ren5dezvous.workers.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] items-center gap-1.5 rounded-full border border-night-line px-5 text-[14px] font-bold text-night-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-clay-bright hover:text-clay-bright"
                    >
                      서비스 바로가기 <span aria-hidden="true">↗</span>
                    </a>
                    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-grass/60 px-3.5 py-1.5 font-mono text-[11px] text-night-soft">
                      <span
                        className="pulse-dot h-1.5 w-1.5 rounded-full bg-grass"
                        style={{ color: "var(--grass)" }}
                        aria-hidden="true"
                      />
                      Deployed · Closed Beta
                    </span>
                  </div>
                </div>

                {/* Layered media: desktop + phone overlap — real HOMEPLATE assets */}
                <div className="relative flex items-center justify-center lg:justify-end">
                  <ProjectMedia
                    title="KBO-Hub 메인 대시보드"
                    monogram="KBO"
                    slotPath="/images/projects/kbo-hub/cover.webp"
                    alt="HOMEPLATE 야구팬 플랫폼 메인 화면"
                    tone="dark"
                    className="w-full max-w-[520px]"
                  />
                  <div className="absolute -bottom-5 -left-2 w-[104px] md:-left-6 md:w-[132px]">
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
              </div>
            </article>
          </Reveal>
        </Container>

        {/* Supporting work — asymmetric grid (desktop) / snap rail (mobile) */}
        <Container className="pb-16 pt-10 md:pb-24 md:pt-12">
          <div className="snap-rail md:grid-cols-6 md:gap-6">
            {SUPPORTING.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80} className={`flex ${project.span}`}>
                <article
                  aria-labelledby={`home-support-${project.slug}`}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface p-3.5 pb-0 transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-[0_20px_44px_-28px_rgba(20,22,26,0.35)]"
                >
                  <div className="overflow-hidden rounded-xl border border-ink/8 bg-paper/40">
                    <ProjectMedia
                      title={project.name}
                      monogram={project.monogram}
                      slotPath={project.slotPath}
                      alt={
                        (project as { alt?: string }).alt ?? `${project.name} 대표 이미지`
                      }
                      badgeText={project.badge}
                      aspect="16 / 10"
                      fit={(project as { fit?: "cover" | "contain" }).fit}
                      className="rounded-none border-0 shadow-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-1.5 py-4">
                    <h3
                      id={`home-support-${project.slug}`}
                      className="text-[17px] font-extrabold tracking-tight text-ink"
                    >
                      {project.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">
                      {project.nameEn}
                    </p>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                      {project.what}
                    </p>
                    <p className="mt-auto pt-4 font-mono text-[11px] text-muted">
                      {project.stack}
                    </p>
                    <Link
                      href={`/projects#${project.slug}`}
                      className="mt-3 inline-flex min-h-[40px] items-center gap-1.5 text-[13.5px] font-bold text-clay"
                    >
                      <span className="link-sweep">자세히 보기</span>
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ HOW I WORK — workflow strip ============ */}
      <section aria-labelledby="home-workflow" className="border-y border-ink/10 bg-paper-deep/70">
        <Container className="py-12 md:py-16">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">How I Work</p>
              <h2 id="home-workflow" className="mt-2 text-[clamp(1.4rem,3.4vw,2rem)] font-extrabold text-ink">
                기록하고, 나누어 만들고, 직접 확인합니다
              </h2>
            </div>
            <Link
              href="/skills#workflow"
              className="link-sweep flex min-h-[44px] items-center gap-1.5 text-[14px] font-bold text-clay"
            >
              워크플로 자세히 <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            {/* Mobile: single horizontal swipe rail with next-item peek.
                Desktop: inline wrapped flow (unchanged V3 treatment). */}
            <ol
              className="workflow-rail mt-8 flex items-center gap-x-2"
              aria-label="개발 워크플로 단계"
              tabIndex={0}
            >
              {WORKFLOW_STEPS.map((step, i) => (
                <li key={step} className="flex shrink-0 items-center gap-2">
                  <span className="rounded-full border border-ink/15 bg-surface px-3.5 py-1.5 whitespace-nowrap text-[12.5px] font-bold text-ink-soft">
                    <span aria-hidden="true" className="mr-1.5 font-mono text-[10px] text-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </span>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <span aria-hidden="true" className="font-mono text-[11px] text-muted">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      {/* ============ SKILL SNAPSHOT ============ */}
      <section aria-labelledby="home-skills" className="bg-paper">
        <Container className="py-16 md:py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 id="home-skills" className="mt-2 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold text-ink">
                다룰 수 있는 기술
              </h2>
            </div>
            <Link
              href="/skills"
              className="link-sweep flex min-h-[44px] items-center gap-1.5 text-[14px] font-bold text-clay"
            >
              전체 보기 <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <dl className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            {SKILL_SNAPSHOT.map((row, i) => (
              <Reveal key={row.group} delay={i * 70}>
                <div className="border-t-2 border-ink pt-4">
                  <dt className="flex items-center gap-2.5 font-mono text-[11.5px] font-semibold tracking-[0.16em] text-clay uppercase">
                    <span className="text-clay" aria-hidden="true">
                      {GROUP_ICONS[row.group]}
                    </span>
                    {row.group}
                  </dt>
                  <dd className="mt-2 text-[15px] font-medium leading-relaxed text-ink">
                    {row.items}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ============ CONTACT ============ */}
      <section aria-labelledby="home-contact" className="border-t border-ink/10 bg-paper-deep/70">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2 id="home-contact" className="mt-2 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold text-ink">
                함께할 이야기를 기다립니다.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                프로젝트, 협업, 채용 이야기 모두 환영합니다. 이메일로 편하게
                연락 주세요. GitHub, YouTube, 네이버 블로그, Instagram에서도
                만나실 수 있습니다.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href="mailto:9ren5dezvous@gmail.com"
                  className="link-sweep inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-bold text-clay"
                >
                  9ren5dezvous@gmail.com <span aria-hidden="true">↗</span>
                </a>
                <Link
                  href="/about#contact"
                  className="link-sweep inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-bold text-ink-soft"
                >
                  About에서 자세히 보기 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-ink/10 bg-surface px-5 py-3 md:px-7">
                <ContactChannels />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
