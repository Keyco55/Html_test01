import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { OptionalImage } from "@/components/site/OptionalImage";
import { WorkflowPipeline } from "@/components/site/WorkflowPipeline";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/skills") as Metadata;

/** Core groups — same factual categorization, stronger presentation. */
const CORE_GROUPS = [
  {
    index: "01",
    name: "Development",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Python", "Swift"],
    note: "KBO-Hub와 macOS 도구, 자동화 스크립트 개발에 사용합니다. JavaScript는 부스트캠프 챌린지에서 ES6+ 과제로 다뤘습니다.",
  },
  {
    index: "02",
    name: "Styling & Markup",
    items: ["HTML", "CSS", "Tailwind CSS", "Responsive Web", "Accessibility"],
    note: "마케팅 랜딩 페이지 수정과 KBO-Hub UI 구축에 사용했습니다. 시맨틱 마크업과 접근성을 함께 고려합니다.",
  },
  {
    index: "03",
    name: "Backend & Management",
    items: ["Supabase", "PostgreSQL", "Auth", "RLS", "Storage"],
    note: "KBO-Hub의 인증과 데이터 계층에 사용했습니다. Row Level Security로 사용자 데이터를 격리합니다.",
  },
] as const;

const WORKFLOW_TOOLS = ["Git", "GitHub", "Git Worktree", "cmux", "Cloudflare"] as const;
const COLLAB_TOOLS = ["Jira", "Slack", "Microsoft Teams"] as const;
const DEV_ENVIRONMENT = ["VS Code", "Ghostty", "Yazi", "btop", "LazyGit"] as const;

const NOTION_USES = [
  { label: "프로젝트 기획", detail: "요구사항과 범위 정의 문서화" },
  { label: "Day Log", detail: "작업 단위별 진행 기록" },
  { label: "디자인 결정", detail: "판단 근거와 대안 비교 기록" },
  { label: "QA 체크포인트", detail: "검증 항목과 결과 정리" },
  { label: "HANDOFF 문서", detail: "트랙 간 인수인계 문서화" },
  { label: "프로젝트 아카이브", detail: "완료 후 기록 보존" },
] as const;

const NOTION_SLOTS = [
  { src: "/images/process/notion-project-overview.webp", caption: "프로젝트 개요 문서" },
  { src: "/images/process/notion-day-log.webp", caption: "Day Log 기록" },
  { src: "/images/process/notion-qa-checkpoint.webp", caption: "QA 체크포인트" },
] as const;

export default function SkillsPage() {
  return (
    <div className="w-full">
      <PageHeader
        index="04"
        eyebrow="Skills & Tools"
        title={
          <>
            다룰 수 있는 기술,
            <br />
            그리고 일하는 도구
          </>
        }
        lede="실제 프로젝트와 업무에서 사용한 기술과 도구입니다. 수준 표시나 별점은 두지 않았습니다."
      />

      {/* ============ CORE GROUPS ============ */}
      <section aria-labelledby="skills-core" className="bg-paper">
        <Container className="max-w-5xl py-14 md:py-20">
          <h2 id="skills-core" className="sr-only">
            핵심 기술
          </h2>
          <div className="flex flex-col">
            {CORE_GROUPS.map((group, i) => (
              <Reveal
                as="section"
                key={group.name}
                delay={i * 70}
                aria-labelledby={`skill-${group.name}`}
                className="grid grid-cols-1 gap-5 border-t-2 border-ink py-9 last:border-b md:grid-cols-[240px_1fr] md:gap-12"
              >
                <div>
                  <p aria-hidden="true" className="font-mono text-[11.5px] text-clay">
                    [{group.index}]
                  </p>
                  <h3
                    id={`skill-${group.name}`}
                    className="mt-1.5 text-[clamp(1.3rem,2.6vw,1.7rem)] font-extrabold tracking-tight text-ink"
                  >
                    {group.name}
                  </h3>
                </div>
                <div>
                  <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    {group.items.map((item, idx) => (
                      <li
                        key={item}
                        className="text-[clamp(1.05rem,2vw,1.35rem)] font-bold text-ink-soft transition-colors duration-200 hover:text-clay"
                      >
                        {item}
                        {idx < group.items.length - 1 && (
                          <span aria-hidden="true" className="ml-3 font-normal text-clay/50">
                            ·
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 max-w-xl text-[13.5px] leading-relaxed text-muted">
                    {group.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ TOOLS & WORKFLOW ============ */}
      <section aria-labelledby="skills-tools" className="border-y border-ink/10 bg-paper-deep/60">
        <Container className="max-w-5xl py-14 md:py-20">
          <Reveal>
            <p className="eyebrow">Tools & Workflow</p>
            <h2 id="skills-tools" className="mt-2 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-ink">
              매일 사용하는 도구
            </h2>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={60}>
              <div className="h-full rounded-2xl border border-ink/10 bg-surface p-6">
                <p className="font-mono text-[11px] tracking-[0.16em] text-clay uppercase">
                  Version Control · Deploy · Agent Ops
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {WORKFLOW_TOOLS.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-ink/12 bg-paper px-3.5 py-1.5 text-[13.5px] font-bold text-ink-soft"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] leading-relaxed text-muted">
                  Git worktree로 작업을 격리하고 cmux로 에이전트 세션을 병렬
                  운영하며, Cloudflare Pages로 배포합니다.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-ink/10 bg-surface p-6">
                <p className="font-mono text-[11px] tracking-[0.16em] text-clay uppercase">
                  Collaboration
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {COLLAB_TOOLS.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-ink/12 bg-paper px-3.5 py-1.5 text-[13.5px] font-bold text-ink-soft"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] leading-relaxed text-muted">
                  이슈 트래킹, 메신저, 화상 협업 등 팀 업무 환경에서 사용해 온
                  도구입니다.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Notion — documentation practice, media-ready */}
          <Reveal delay={80}>
            <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-surface">
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
                <div className="p-6 md:p-8">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-clay uppercase">
                    Documentation — Notion
                  </p>
                  <h3 className="mt-2 text-[1.35rem] font-extrabold text-ink">
                    기록이 곧 인수인계입니다
                  </h3>
                  <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ink-soft">
                    Notion은 단순 메모가 아니라 프로젝트 운영의 중심 도구로
                    사용합니다. 기획부터 릴리스까지의 기록을 한 곳에서 관리합니다.
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    {NOTION_USES.map((use) => (
                      <li key={use.label} className="border-t border-ink/10 pt-2.5">
                        <p className="text-[13.5px] font-bold text-ink">{use.label}</p>
                        <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted">
                          {use.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Sanitized screenshot slots — hidden until real media is added */}
                <div className="dot-grid-light flex flex-col gap-4 border-t border-ink/10 bg-paper-deep/50 p-6 md:border-t-0 md:border-l md:p-8">
                  {NOTION_SLOTS.map((slot) => (
                    <OptionalImage
                      key={slot.src}
                      src={slot.src}
                      alt={`Notion ${slot.caption} 스크린샷`}
                      caption={slot.caption}
                      className="rounded-xl border border-ink/10"
                      aspect="16 / 10"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Development environment — typographic, not a logo wall */}
          <Reveal delay={60}>
            <div className="mt-6 rounded-2xl border border-ink/10 bg-night p-6 text-night-ink md:p-8">
              <p className="font-mono text-[11px] tracking-[0.16em] text-clay-bright uppercase">
                Development Environment
              </p>
              <p className="mt-4 font-mono text-[clamp(1rem,2.4vw,1.5rem)] font-medium leading-relaxed text-night-soft">
                {DEV_ENVIRONMENT.map((tool, i) => (
                  <span key={tool} className="inline-block whitespace-nowrap">
                    <span className="font-bold text-night-ink">{tool}</span>
                    {i < DEV_ENVIRONMENT.length - 1 && (
                      <span aria-hidden="true" className="mx-3 text-clay-bright">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-night-muted">
                터미널 중심의 개발 환경을 꾸려 사용합니다 — 에디터는 VS Code,
                터미널은 Ghostty, 파일 탐색은 Yazi, 모니터링은 btop, Git 작업은
                LazyGit.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ DEVELOPMENT WORKFLOW ============ */}
      <section
        id="workflow"
        aria-labelledby="skills-workflow"
        className="dot-grid scroll-mt-20 bg-night py-16 text-night-ink md:py-24"
      >
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-clay-bright">Development Workflow</p>
            <h2
              id="skills-workflow"
              className="mt-3 text-[clamp(1.7rem,4.4vw,2.6rem)] font-extrabold"
            >
              계획부터 릴리스 게이트까지
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-night-soft">
              KBO-Hub와 이 포트폴리오 모두 아래 프로세스로 개발했습니다. 작업을
              격리하고, 구현과 검증을 분리하고, 사람이 최종 확인합니다. 스크롤에
              따라 파이프라인이 진행됩니다.
            </p>
          </Reveal>

          <div className="mt-14">
            <WorkflowPipeline />
          </div>
        </Container>
      </section>
    </div>
  );
}
