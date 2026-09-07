import React from "react";
import Link from "next/link";
import { ProjectMediaFrame } from "@/components/projects/ProjectMediaFrame";

export interface ProjectTeaser {
  readonly slug: string;
  readonly name: string;
  readonly nameEn?: string;
  readonly what: string;
  readonly why: string;
  readonly stack: readonly string[];
  readonly slotPath: string;
  readonly githubUrl?: string;
  readonly liveUrl?: string;
}

const linkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: "44px",
  fontSize: "0.85rem",
  fontWeight: 600,
  color: "var(--accent-navy)",
  textDecoration: "none",
};

export const ProjectTeaserCard: React.FC<{ project: ProjectTeaser }> = ({ project }) => {
  return (
    <article
      className="snap-card flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20"
      aria-labelledby={`teaser-${project.slug}`}
    >
      <ProjectMediaFrame title={project.name} slotPath={project.slotPath} />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3
            id={`teaser-${project.slug}`}
            className="text-lg font-bold tracking-tight text-ink"
          >
            {project.name}
            {project.nameEn && (
              <span className="ml-2 font-mono text-xs font-normal text-faint">
                {project.nameEn}
              </span>
            )}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{project.what}</p>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">{project.why}</p>
        </div>

        <p className="font-mono text-xs leading-relaxed text-muted">
          {project.stack.join(" · ")}
        </p>

        <div className="mt-auto flex items-center gap-5 border-t border-ink/5 pt-1">
          <Link href={`/projects#${project.slug}`} style={linkStyle}>
            프로젝트 보기
            <span aria-hidden="true" className="ml-1">→</span>
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
