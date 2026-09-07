import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ContactChannels } from "@/components/site/ContactChannels";
import { ProjectTeaserCard, type ProjectTeaser } from "@/components/site/ProjectTeaserCard";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/") as Metadata;

/** Selected teasers, grounded in src/data/projects.ts. KBO-Hub first. */
const SELECTED_TEASERS: readonly ProjectTeaser[] = [
  {
    slug: "kbo-hub",
    name: "KBO-Hub",
    nameEn: "HOMEPLATE",
    what: "경기·기록·포토카드·직관 기록·커뮤니티를 묶은 야구 플랫폼.",
    why: "흩어진 팬 경험을 한 곳에 모으기 위해 만들었다.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Cloudflare Pages"],
    slotPath: "/images/projects/kbo-hub/cover-1600x1000.webp",
  },
  {
    slug: "ai-hub-pet",
    name: "AI-Hub-pet",
    nameEn: "Doro Hub Pet",
    what: "AI 에이전트 작업 상태를 보여주고 세션으로 데려가는 macOS 플로팅 앱.",
    why: "창을 옮겨 다니며 상태를 확인하는 수고를 줄이기 위해 만들었다.",
    stack: ["Swift", "AppKit", "SwiftUI"],
    slotPath: "/images/projects/ai-hub-pet/cover-1600x1000.webp",
    githubUrl: "https://github.com/Keyco55/AI-Hub-pet",
  },
  {
    slug: "multi-agent-orchestration",
    name: "Multi-Agent Orchestration",
    nameEn: "Parallel Worktree Pipeline",
    what: "작업을 나누고 독립 리뷰와 보안 게이트를 거치는 병렬 개발 방식.",
    why: "한 컨텍스트에서 큰 작업을 할 때 생기는 오염과 회귀를 줄이기 위해 만들었다.",
    stack: ["cmux", "Git Worktree", "Security Gate"],
    slotPath: "/images/projects/multi-agent/cover-1600x1000.webp",
  },
];

const SKILL_SNAPSHOT = [
  { group: "Development", items: "TypeScript · Next.js · React · Python · Swift" },
  { group: "Styling & Markup", items: "HTML · CSS · Tailwind CSS · 반응형 · 접근성" },
  { group: "Backend & Management", items: "Supabase · PostgreSQL · Auth · RLS · Storage" },
  { group: "Tools & Workflow", items: "Git · GitHub · Git Worktree · cmux · Cloudflare" },
] as const;

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1–3. Identity + short intro + small portrait */}
      <section aria-labelledby="home-identity" className="border-b border-ink/10">
        <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between md:py-20">
          <div className="max-w-xl">
            <p className="mb-3 font-mono text-[13px] tracking-wide text-muted">
              KEYCO · 김범우
            </p>
            <h1
              id="home-identity"
              className="text-[2rem] font-bold leading-[1.25] tracking-tight text-ink md:text-5xl md:leading-[1.15]"
            >
              고객과 서비스를 이해하고,
              <br />
              콘텐츠와 기술로 직접 만드는 사람.
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted md:text-base">
              현장에서 고객을 응대하며 시작해 마케팅과 웹 운영을 거쳤고, 지금은
              필요한 서비스를 직접 기획하고 개발한다. KBO-Hub를 만들고 있다.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-navy px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                프로젝트 보기
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[44px] items-center rounded-lg border border-ink/15 bg-surface px-5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/25"
              >
                소개 보기
              </Link>
            </div>
          </div>

          {/* Editorial portrait accent, ~144px */}
          <figure className="m-0 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export + images.unoptimized; raw <img> is intentional */}
            <img
              src="/images/profile/keyco-profile-main.webp"
              alt="김범우(KEYCO) 프로필"
              width={144}
              height={180}
              className="h-[180px] w-[144px] rounded-2xl border border-ink/10 object-cover object-top"
            />
          </figure>
        </Container>
      </section>

      {/* 4. Selected projects carousel */}
      <section aria-labelledby="home-projects">
        <Container className="pb-4 pt-12 md:pt-16">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="home-projects"
              className="text-xl font-bold tracking-tight text-ink md:text-2xl"
            >
              선택한 프로젝트
            </h2>
            <Link
              href="/projects"
              className="flex min-h-[44px] items-center text-sm font-semibold text-navy"
            >
              모두 보기 <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>
          <p className="mt-2 text-sm text-muted">
            옆으로 밀어 더 볼 수 있다.
          </p>
        </Container>
        <Container>
          <div className="snap-row">
            {SELECTED_TEASERS.map((project) => (
              <ProjectTeaserCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Compact skill snapshot */}
      <section aria-labelledby="home-skills">
        <Container className="py-12 md:py-16">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="home-skills"
              className="text-xl font-bold tracking-tight text-ink md:text-2xl"
            >
              다룰 수 있는 것
            </h2>
            <Link
              href="/skills"
              className="flex min-h-[44px] items-center text-sm font-semibold text-navy"
            >
              자세히 <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {SKILL_SNAPSHOT.map((row) => (
              <div key={row.group} className="border-t border-ink/10 pt-3">
                <dt className="text-[13px] font-semibold uppercase tracking-wide text-navy">
                  {row.group}
                </dt>
                <dd className="mt-1 text-sm text-ink-soft">{row.items}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 6. Minimal contact */}
      <section aria-labelledby="home-contact" className="border-t border-ink/10">
        <Container className="py-12 md:py-16">
          <h2
            id="home-contact"
            className="text-xl font-bold tracking-tight text-ink md:text-2xl"
          >
            연락
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
            공개 채널로 편하게 연락하면 된다.
          </p>
          <div className="mt-6 max-w-2xl">
            <ContactChannels />
          </div>
        </Container>
      </section>
    </div>
  );
}
