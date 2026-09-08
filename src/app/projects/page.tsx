import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
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
    "통합 야구팬 라이프스타일 C2C 플랫폼. 경기 일정·직관 기록, 포토카드 아카이브 및 도감, 팬 커뮤니티, 야구 굿즈 전문 중고 장터를 하나의 제품으로 묶었습니다.",
  why: "경기 일정과 기록, 굿즈·티켓 정보가 여러 플랫폼에 흩어져 있어 야구팬의 일상 경험이 파편화되어 있었습니다.",
  what: "경기 일정·직관 기록, 포토카드 아카이브 및 도감, 팬 커뮤니티, 야구 굿즈 전문 중고 장터를 연결하는 웹 플랫폼입니다. 1인 빌더로 기획부터 배포·QA까지 전 과정을 담당했습니다.",
  how: "Next.js App Router와 Supabase 인증·RLS 기반으로 설계했고, 외부 라이브러리 없이 순수 DOM으로 3D 포토카드 인터랙션을 구현했습니다. 보안 리뷰와 Human Runtime QA를 거쳐 Closed Beta로 운영 중이며, 2027.02 Open Beta, 2027.03 정식 서비스 출시를 목표로 합니다.",
  serviceUrl: "https://kbo-hub.9ren5dezvous.workers.dev/",
  roadmap: "Closed Beta (현재) → 2027.02 Open Beta → 2027.03 정식 서비스 출시 목표",
  stackGroups: [
    { group: "Frontend", items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS"] },
    { group: "Data & Security", items: ["Supabase", "PostgreSQL", "RLS"] },
    { group: "Infrastructure", items: ["Cloudflare Workers"] },
  ],
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
    why: "AI 서비스마다 쿼터와 리셋 시각을 브라우저와 대시보드를 오가며 따로 확인해야 했습니다.",
    what: "여러 AI 서비스의 사용량과 초기화 시각을 메뉴바와 터미널 상태줄에 모아 보여주는 프라이버시 보존형 로컬 도구입니다.",
    how: "오픈소스 CodexBar의 로컬 루프백 데이터를 최소 수치만 추출해 소비하는 독립 통합 레이어를 Python 수집기와 Swift 메뉴바 헬퍼로 직접 개발했습니다. 자격증명·프롬프트·쿠키는 보관하지 않습니다.",
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
    badge: "사내 적용 · 자산 비공개",
    slotPath: undefined,
    aspect: "1 / 1",
    mediaSpan: "md:col-span-4",
    contentSpan: "md:col-span-8",
    mediaFirst: false,
    why: "매주 반복되는 엑셀 데이터 취합에 시간이 쌓이고 수작업 실수가 반복되었습니다.",
    what: "국내·글로벌 마케팅 콘텐츠 운영과 공식 SNS 채널(Instagram·YouTube·네이버 블로그·TikTok·Threads) 관리, 랜딩 페이지 HTML/CSS 수정, 데이터 취합 자동화를 담당한 실무 프로젝트입니다.",
    how: "Python(pandas·openpyxl) 스크립트로 리포트 집계와 검증을 자동화하고, 프로모션 페이지의 마크업과 CTA를 직접 수정해 실험 주기를 줄였습니다. 회사 내부 자산은 공개하지 않습니다.",
    stack: ["Python", "pandas", "openpyxl", "HTML5 / CSS3", "Excel Automation"],
    externalLinks: [],
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
    why: "여러 터미널에서 돌아가는 에이전트의 상태를 확인하기 위해 창을 계속 전환해야 했습니다.",
    what: "로컬 AI 에이전트의 작업 상태와 사용량을 말풍선으로 보여주고, 클릭 한 번으로 해당 세션으로 이동시키는 macOS 플로팅 앱입니다.",
    how: "Swift와 AppKit/SwiftUI로 가볍게 구현했고, 상태별 스프라이트 애니메이션을 지원합니다. 프롬프트·토큰·비밀번호에는 접근하지 않고 프로세스 상태와 로컬 캐시만 확인합니다.",
    stack: ["Swift", "macOS AppKit", "SwiftUI", "Universal Binary", "Sprite Animation"],
    externalLinks: [{ label: "GitHub 저장소", url: "https://github.com/Keyco55/AI-Hub-pet" }],
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
        lede="제품 기획과 개발, 배포와 QA까지 직접 진행한 작업들입니다. 가장 큰 작업은 KBO-Hub이며, 현재 Closed Beta로 운영 중입니다."
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
                      {String(index + 2).padStart(2, "0")} — {project.category}
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
              프로젝트에 대한 질문이 있으신가요?
            </h2>
            <p className="mt-2 text-[14.5px] text-night-soft">
              각 프로젝트의 세부 과정과 기술적 판단은 공개 채널에서 더 자세히 확인하실 수 있습니다.
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
