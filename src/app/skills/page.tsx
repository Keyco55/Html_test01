import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { createSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = createSiteMetadata("/skills") as Metadata;

/**
 * Four approved groups. Every item is cross-checked against repository
 * evidence (src/data/skills.ts, projects.ts techStack, education.ts,
 * developer-tools.ts). VS Code has no in-repo evidence and is omitted.
 */
const SKILL_GROUPS = [
  {
    name: "Development",
    note: "KBO-Hub와 일일 도구 개발에 사용. JavaScript는 부스트캠프 챌린지에서 ES6+ 과제로 다룸.",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Python", "Swift"],
  },
  {
    name: "Styling & Markup",
    note: "마케팅 랜딩 수정과 KBO-Hub UI에 사용. 시맨틱 마크업과 접근성을 고려.",
    items: ["HTML", "CSS", "Tailwind CSS", "Responsive Web", "Accessibility"],
  },
  {
    name: "Backend & Management",
    note: "KBO-Hub 인증·데이터 계층에 사용. 사용자 데이터 격리를 위한 RLS 정책 포함.",
    items: ["Supabase", "PostgreSQL", "Auth", "RLS", "Storage"],
  },
  {
    name: "Tools & Workflow",
    note: "병렬 작업과 배포에 매일 사용. worktree 격리와 cmux 세션 운영.",
    items: ["Git", "GitHub", "Git Worktree", "cmux", "Cloudflare"],
  },
] as const;

export default function SkillsPage() {
  return (
    <div className="w-full">
      <PageHeader
        eyebrow="Skills"
        title="다룰 수 있는 것"
        lede="실제로 써 본 것만 적었다. 수준 표시나 별점은 매기지 않는다."
      />

      <Container className="grid max-w-4xl grid-cols-1 gap-x-10 gap-y-10 py-12 sm:grid-cols-2 md:py-16">
        {SKILL_GROUPS.map((group) => (
          <section key={group.name} aria-labelledby={`skill-${group.name}`}>
            <h2
              id={`skill-${group.name}`}
              className="border-t-2 border-ink pt-3 text-lg font-bold tracking-tight text-ink"
            >
              {group.name}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-ink/12 bg-surface px-2.5 py-1.5 text-sm font-medium text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[13px] leading-relaxed text-muted">{group.note}</p>
          </section>
        ))}
      </Container>
    </div>
  );
}
