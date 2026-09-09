import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { OptionalImage } from "@/components/site/OptionalImage";
import { WorkflowPipeline } from "@/components/site/WorkflowPipeline";
import { ArchitectureTopology } from "@/components/site/ArchitectureTopology";
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

/** Working toolkit — semantic groups, evidenced tools only. */
const TOOLKIT_GROUPS = [
  {
    name: "Development & Version Control",
    tools: ["Git", "GitHub", "Git Worktree", "Cloudflare"],
    note: "브랜치 전략과 worktree 격리, Cloudflare 기반 배포.",
  },
  {
    name: "AI & CLI Development",
    tools: ["cmux", "Claude Code", "Codex CLI", "Google Antigravity", "Aider", "OpenCode"],
    note: "작업을 나누고 독립 검수하는 터미널 중심 개발 환경.",
  },
  {
    name: "Collaboration & Documentation",
    tools: ["Notion", "Jira", "Slack", "Microsoft Teams"],
    note: "기획·이슈 트래킹·인수인계 문서화와 팀 협업.",
  },
  {
    name: "Content & Marketing",
    tools: ["Final Cut Pro", "Google Analytics", "Blog / SEO", "SNS"],
    note: "영상 편집과 채널 콘텐츠 기획, 유입 데이터 분석 및 마케팅 도구 파이프라인.",
  },
] as const;

/** AI/CLI agent operations — brands are supporting tools, not the protagonist. */
const AI_CLI_TOOLS = [
  { name: "Claude / Claude Code", role: "복합 구현 · 리팩터링 트랙" },
  { name: "Codex / Codex CLI", role: "빠른 단위 작업 · 보조 트랙" },
  { name: "Google Antigravity", role: "탐색 · 프로토타이핑" },
  { name: "Aider", role: "Git 연동 pair 편집" },
  { name: "OpenCode", role: "CLI 범용 에이전트" },
  { name: "기타 CLI 개발 도구", role: "스크립트 · 자동화 유틸" },
] as const;

const AI_CLI_PRACTICES = [
  { label: "Agent Routing", detail: "작업 성격에 맞는 도구를 사람이 선택" },
  { label: "Parallel Workers", detail: "서로 겹치지 않는 작업은 worktree로 나누어 진행" },
  { label: "Independent Review", detail: "구현과 검수를 분리해 빌드·타입·보안·회귀 확인" },
  { label: "Human Final QA", detail: "실제 화면은 사람이 확인하고 최종 판단" },
] as const;

const ARCHITECTURE_PRINCIPLES = [
  "branch / worktree 명시적 격리",
  "병렬 독립 워커 운영",
  "worktree당 수정 주체 1개",
  "독립 시니어 리뷰",
  "Remediation / 재검토 루프",
  "Human Runtime QA",
  "Security / Release Gate",
  "HANDOFF 문서화",
] as const;

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
  { src: undefined, caption: "프로젝트 개요 문서" },
  { src: undefined, caption: "Day Log 기록" },
  { src: undefined, caption: "QA 체크포인트" },
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
        lede="실제 업무와 프로젝트에서 사용한 기술과 도구를 정리했습니다. 필요한 도구를 골라 적용하고, 독립 검수와 직접 확인을 거쳐 작업합니다."
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

      {/* ============ AI / CLI DEVELOPMENT ============ */}
      <section aria-labelledby="skills-ai-cli" className="dot-grid border-y border-night-line bg-night py-14 text-night-ink md:py-20">
        <Container className="max-w-5xl">
          <Reveal>
            <p className="eyebrow text-clay-bright">AI-assisted Development</p>
            <h2 id="skills-ai-cli" className="mt-2 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold">
              CLI Agent Operations
            </h2>
            <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-night-soft">
              필요한 AI 도구를 작업에 맞게 고르고, KBO-Hub와 이 포트폴리오를
              만드는 데 활용했습니다. 구현과 검수를 나누되, 작업 방향과 최종
              판단은 사람이 맡습니다.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.1fr]">
            <Reveal delay={60}>
              <div className="h-full rounded-2xl border border-night-line bg-night-raise/70 p-6">
                <p className="font-mono text-[11px] tracking-[0.16em] text-clay-bright uppercase">
                  Tools in Operation
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {AI_CLI_TOOLS.map((tool) => (
                    <li key={tool.name} className="flex flex-wrap items-baseline gap-x-3 border-t border-night-line pt-3 first:border-t-0 first:pt-0">
                      <span className="text-[14px] font-bold text-night-ink">{tool.name}</span>
                      <span className="font-mono text-[11.5px] text-night-muted">{tool.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-night-line bg-night-raise/70 p-6">
                <p className="font-mono text-[11px] tracking-[0.16em] text-clay-bright uppercase">
                  How They Are Operated
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {AI_CLI_PRACTICES.map((practice) => (
                    <li key={practice.label}>
                      <p className="text-[13.5px] font-bold text-night-ink">{practice.label}</p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-night-muted">
                        {practice.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ TOOLS & WORKFLOW ============ */}
      <section aria-labelledby="skills-tools" className="border-y border-ink/10 bg-paper-deep/60">
        <Container className="max-w-5xl py-14 md:py-20">
          <Reveal>
            <p className="eyebrow">Tools & Workflow</p>
            <h2 id="skills-tools" className="mt-2 text-[clamp(1.5rem,3.6vw,2.2rem)] font-extrabold text-ink">
              일하는 도구 체계
            </h2>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TOOLKIT_GROUPS.map((group, i) => (
              <Reveal key={group.name} delay={60 + i * 60}>
                <div className="h-full rounded-2xl border border-ink/10 bg-surface p-6">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-clay uppercase">
                    {group.name}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-ink/12 bg-paper px-3.5 py-1.5 text-[13.5px] font-bold text-ink-soft"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[13px] leading-relaxed text-muted">
                    {group.note}
                  </p>
                </div>
              </Reveal>
            ))}
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
                    기획과 작업 기록, QA 결과를 Notion에서 관리합니다. 다음 작업을
                    이어갈 때 필요한 결정과 진행 상황도 함께 남깁니다.
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
                      key={slot.caption}
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
              KBO-Hub와 이 포트폴리오 모두 작업 범위를 나누고, 구현과 검수를
              분리한 뒤 사람이 실제 화면을 확인하는 순서로 개발했습니다.
            </p>
          </Reveal>

          <div className="mt-14">
            <WorkflowPipeline />
          </div>
        </Container>
      </section>

      {/* ============ DEVELOPMENT ARCHITECTURE — system topology ============ */}
      <section
        id="architecture"
        aria-labelledby="skills-architecture"
        className="scroll-mt-20 bg-paper py-16 md:py-24"
      >
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Development Architecture</p>
            <h2
              id="skills-architecture"
              className="mt-3 text-[clamp(1.7rem,4.4vw,2.6rem)] font-extrabold text-ink"
            >
              개발 환경이 연결되는 방식
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              위의 워크플로우가 <strong className="font-bold text-ink">작업 순서</strong>라면,
              이 다이어그램은 <strong className="font-bold text-ink">도구의 연결 관계</strong>를
              보여줍니다. 사람이 범위를 정하고 문서화한 뒤, cmux와 Git worktree로
              작업을 나누고 검수·QA·HANDOFF까지 이어지는 구조입니다.
            </p>
          </Reveal>

          <div className="mt-12">
            <ArchitectureTopology />
          </div>

          <Reveal delay={100}>
            <ul
              aria-label="아키텍처 원칙"
              className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
            >
              {ARCHITECTURE_PRINCIPLES.map((principle, i) => (
                <li key={principle} className="flex items-baseline gap-3 border-t border-ink/10 pt-3">
                  <span aria-hidden="true" className="font-mono text-[10.5px] text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13.5px] font-semibold text-ink-soft">{principle}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
