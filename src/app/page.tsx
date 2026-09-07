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
  { label: "KBO-Hub", badge: "Closed Beta", note: "통합 KBO 팬 라이프스타일 플랫폼", dot: "var(--grass)" },
  { label: "AI-Hub-pet", badge: "Open Source", note: "macOS 네이티브 에이전트 모니터", dot: "var(--sand)" },
  { label: "Status Hub", badge: "공개 준비 중", note: "AI 사용량 통합 로컬 레이어", dot: "var(--clay-bright)" },
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
  "Cloudflare Pages",
  "Tailwind CSS",
] as const;

/** Supporting work — condensed from src/data/projects.ts. */
const SUPPORTING = [
  {
    slug: "ai-hub-pet",
    monogram: "PET",
    name: "AI-Hub-pet",
    nameEn: "Doro Hub Pet",
    what: "AI 에이전트의 작업 상태를 말풍선으로 알리고, 클릭 한 번으로 해당 세션으로 이동시키는 macOS 플로팅 앱입니다.",
    stack: "Swift · AppKit · SwiftUI",
    badge: "Open Source",
    slotPath: "/images/projects/ai-hub-pet/cover-1600x1000.webp",
    span: "md:col-span-3",
  },
  {
    slug: "multi-agent-orchestration",
    monogram: "AGT",
    name: "Multi-Agent Orchestration",
    nameEn: "Parallel Worktree Pipeline",
    what: "Git worktree 격리와 독립 리뷰, 보안 게이트를 거쳐 대규모 작업을 병렬로 진행하는 개발 프로세스입니다.",
    stack: "cmux · Git Worktree · Security Gate",
    badge: "Development Process",
    slotPath: "/images/projects/multi-agent/cover-1600x1000.webp",
    span: "md:col-span-3",
  },
  {
    slug: "ai-status-hub",
    monogram: "STS",
    name: "AI Usage Status Hub",
    nameEn: "Local Quota Layer",
    what: "여러 AI 서비스의 사용량과 리셋 시각을 메뉴바와 터미널에 모아 보여주는 프라이버시 보존형 로컬 도구입니다.",
    stack: "Python · Swift · cmux",
    badge: "공개 준비 중",
    slotPath: "/images/projects/status-hub/cover-1600x1000.webp",
    span: "md:col-span-4",
  },
  {
    slug: "gom-marketing-automation",
    monogram: "GOM",
    name: "GOM Automation",
    nameEn: "Marketing × Web × Python",
    what: "마케팅 데이터 취합·리포트 작성과 랜딩 페이지 수정 업무를 Python 파이프라인으로 자동화한 실무 프로젝트입니다.",
    stack: "Python · pandas · openpyxl",
    badge: "Work Project",
    slotPath: "/images/projects/gom/cover-1600x1000.webp",
    span: "md:col-span-2",
  },
] as const;

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
              <p className="eyebrow text-clay-bright">Hello, Keyco — 김범우</p>
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

            <Reveal delay={420}>
              <p className="mt-5 font-mono text-[12.5px] tracking-[0.12em] text-night-muted uppercase md:text-[13.5px]">
                Customer Experience · Content · Product Development
              </p>
            </Reveal>

            <Reveal delay={500}>
              <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-night-soft md:text-[17px]">
                현장에서 고객을 응대하는 일로 시작해 콘텐츠와 마케팅, 웹 운영을
                거쳤고, 지금은 서비스를 직접 기획하고 개발합니다. KBO 팬 플랫폼
                KBO-Hub를 Closed Beta로 운영하며, 필요한 도구는 웹과 macOS
                네이티브로 직접 만듭니다.
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
                    경기 일정과 기록, 포토카드 아카이브, 직관 기록, 커뮤니티를
                    하나로 묶은 통합 KBO 팬 라이프스타일 플랫폼입니다. 기획부터
                    프론트엔드, Supabase 인증·RLS 설계, 배포와 QA까지 1인
                    빌더로 완성했습니다.
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {["Next.js App Router", "Supabase", "PostgreSQL", "RLS", "Cloudflare Pages"].map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-night-line px-3 py-1 font-mono text-[11px] text-night-soft"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-5 pt-7">
                    <Link
                      href="/projects#kbo-hub"
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-night-ink px-5 text-[14px] font-bold text-night transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay-bright hover:text-white"
                    >
                      케이스 보기 <span aria-hidden="true">→</span>
                    </Link>
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

                {/* Layered media: desktop + phone overlap */}
                <div className="relative flex items-center justify-center lg:justify-end">
                  <ProjectMedia
                    title="KBO-Hub 메인 대시보드"
                    monogram="KBO"
                    slotPath="/images/projects/kbo-hub/desktop-1600x1000.webp"
                    alt="KBO-Hub 메인 대시보드 스크린샷"
                    tone="dark"
                    className="w-full max-w-[520px]"
                  />
                  <div className="absolute -bottom-5 -left-2 w-[104px] md:-left-6 md:w-[132px]">
                    <ProjectMedia
                      title="모바일 뷰"
                      monogram="M"
                      slotPath="/images/projects/kbo-hub/mobile-600x1200.webp"
                      alt="KBO-Hub 모바일 스크린샷"
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
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-[0_20px_44px_-28px_rgba(20,22,26,0.35)]"
                >
                  <ProjectMedia
                    title={project.name}
                    monogram={project.monogram}
                    slotPath={project.slotPath}
                    alt={`${project.name} 대표 이미지`}
                    badgeText={project.badge}
                    aspect="16 / 9"
                    className="rounded-none border-0 shadow-none"
                  />
                  <div className="flex flex-1 flex-col p-5">
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
                문서화로 시작해 QA 게이트로 끝냅니다
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
            <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="개발 워크플로 단계">
              {WORKFLOW_STEPS.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-ink/15 bg-surface px-3.5 py-1.5 text-[12.5px] font-bold text-ink-soft">
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
                  <dt className="font-mono text-[11.5px] font-semibold tracking-[0.16em] text-clay uppercase">
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
                연락은 공개 채널로
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                GitHub, YouTube, 네이버 블로그, Instagram 등 공개 채널로 문의를
                보내 주시면 확인 후 답변드립니다.
              </p>
              <Link
                href="/about#contact"
                className="link-sweep mt-6 inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-bold text-clay"
              >
                About에서 자세히 보기 <span aria-hidden="true">→</span>
              </Link>
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
