import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectMediaFrame } from "@/components/projects/ProjectMediaFrame";
import { FEATURED_PROJECTS } from "@/data/projects";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/projects") as Metadata;

/**
 * Short editorial copy per project, condensed from src/data/projects.ts.
 * No URLs, dates, or facts beyond the source data.
 */
const EDITORIAL: Record<string, { why: string; what: string; how: string }> = {
  "kbo-hub": {
    why: "경기 일정과 기록, 굿즈와 티켓 정보가 여러 곳에 흩어져 있었다.",
    what: "경기 관람과 기록, 포토카드 아카이브, 직관 기록, 커뮤니티를 묶은 웹 플랫폼.",
    how: "Next.js App Router와 Supabase 인증·RLS로 기획부터 배포·QA까지 직접 만들었다.",
  },
  "multi-agent-orchestration": {
    why: "한 컨텍스트에서 큰 작업을 하면 오염과 회귀 위험이 컸다.",
    what: "작업을 독립 트랙으로 나누고 병렬로 진행하는 개발 방식.",
    how: "구현과 독립 리뷰를 분리하고 보안 게이트와 Human QA를 통과해야 병합한다.",
  },
  "ai-hub-pet": {
    why: "여러 터미널의 에이전트 상태를 확인하느라 창을 계속 옮겨 다녔다.",
    what: "작업 상태와 사용량을 말풍선으로 보여주고 세션으로 데려가는 macOS 플로팅 앱.",
    how: "Swift·AppKit으로 가볍게 만들고 프롬프트와 토큰에는 접근하지 않는다.",
  },
  "gom-marketing-automation": {
    why: "매주 반복되는 엑셀 취합에 시간과 실수가 쌓였다.",
    what: "마케팅 데이터 정리·리포트와 랜딩 수정을 묶은 실무 자동화.",
    how: "Python(pandas·openpyxl) 스크립트와 직접 HTML·CSS 수정으로 실험 주기를 줄였다.",
  },
  "ai-status-hub": {
    why: "서비스마다 쿼터와 리셋 시간을 따로 확인해야 했다.",
    what: "여러 AI 서비스 사용량을 메뉴바와 터미널에 모아 보여주는 로컬 도구.",
    how: "CodexBar 로컬 데이터를 최소 수치만 추출해 프라이버시 보존 캐시로 공급한다.",
  },
};

const SLOT_PATHS: Record<string, string> = {
  "kbo-hub": "/images/projects/kbo-hub/cover-1600x1000.webp",
  "multi-agent-orchestration": "/images/projects/multi-agent/cover-1600x1000.webp",
  "ai-hub-pet": "/images/projects/ai-hub-pet/cover-1600x1000.webp",
  "gom-marketing-automation": "/images/projects/gom/cover-1600x1000.webp",
  "ai-status-hub": "/images/projects/status-hub/cover-1600x1000.webp",
};

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Projects"
        title="프로젝트"
        lede="직접 기획하고 끝까지 만든 것들. KBO-Hub가 가장 먼저다."
      />

      <Container className="flex flex-col gap-14 py-12 md:gap-20 md:py-16">
        {FEATURED_PROJECTS.map((project, index) => {
          const editorial = EDITORIAL[project.id];
          return (
            <article
              key={project.id}
              id={project.slug}
              aria-labelledby={`${project.id}-heading`}
              className="grid scroll-mt-24 grid-cols-1 gap-6 md:grid-cols-2 md:gap-10"
            >
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <ProjectMediaFrame
                  title={project.title}
                  badgeText={project.status}
                  slotPath={SLOT_PATHS[project.id]}
                  caption={project.subtitle}
                />
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : undefined}>
                <p className="font-mono text-xs text-faint">
                  {String(index + 1).padStart(2, "0")} · {project.category}
                </p>
                <h2
                  id={`${project.id}-heading`}
                  className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-[1.75rem]"
                >
                  {project.title}
                  {project.nameEn && (
                    <span className="ml-2 font-mono text-sm font-normal text-muted">
                      {project.nameEn}
                    </span>
                  )}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {project.summary.split(".")[0]}.
                </p>

                <dl className="mt-5 flex flex-col gap-3 text-sm leading-relaxed">
                  <div>
                    <dt className="text-[13px] font-semibold text-navy">왜 만들었는가</dt>
                    <dd className="mt-0.5 text-ink-soft">{editorial.why}</dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-semibold text-navy">무엇을 만들었는가</dt>
                    <dd className="mt-0.5 text-ink-soft">{editorial.what}</dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-semibold text-navy">어떻게 만들었는가</dt>
                    <dd className="mt-0.5 text-ink-soft">{editorial.how}</dd>
                  </div>
                </dl>

                <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
                  {project.featuredStack.join(" · ")}
                </p>

                {project.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                    {project.links
                      .filter((link) => link.isExternal && link.url.startsWith("https://"))
                      .map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center text-sm font-semibold text-navy"
                        >
                          {link.label} <span aria-hidden="true" className="ml-1">↗</span>
                        </a>
                      ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </Container>
    </div>
  );
}
