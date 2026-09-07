import React from 'react';
import { FEATURED_PROJECTS } from '../../data/projects';
import { HeroicProjectCard } from '../projects/HeroicProjectCard';
import { ProjectCard } from '../projects/ProjectCard';

interface FeaturedProjectsProps {
  readonly className?: string;
  readonly multiAgentWorkflowSlot?: React.ReactNode;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  className = '',
  multiAgentWorkflowSlot,
}) => {
  // 01 KBO-Hub is heroic tier
  const heroicProject = FEATURED_PROJECTS.find((p) => p.tier === 'heroic');
  // 02-05 projects
  const standardProjects = FEATURED_PROJECTS.filter((p) => p.tier !== 'heroic');

  return (
    <section
      id="featured-projects"
      className={`featured-projects-section ${className}`}
      style={{
        position: 'relative',
        padding: 'clamp(50px, 10vh, 100px) 0',
      }}
      aria-labelledby="featured-projects-heading"
    >
      <div
        className="container"
        style={{
          width: '100%',
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 24px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: '44px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono, ui-monospace, monospace)',
              color: '#38bdf8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#38bdf8',
              }}
              aria-hidden="true"
            />
            Selected Engineering & Products
          </div>

          <h2
            id="featured-projects-heading"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: '0 0 12px 0',
              lineHeight: 1.2,
            }}
          >
            Featured Projects
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              color: '#94a3b8',
              maxWidth: '680px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            단순 데모나 AI 결과물 나열을 넘어, 사용자 페인포인트를 해결하기 위해 직접 기획하고
            인증·보안·배포·네이티브 시스템까지 완성도 있게 구현한 핵심 프로젝트들입니다.
          </p>
        </div>

        {/* 01 Spotlight Heroic Project: KBO-Hub */}
        {heroicProject && (
          <div style={{ marginBottom: '36px' }}>
            <HeroicProjectCard project={heroicProject} />
          </div>
        )}

        {/* 02-05 Featured Projects: Dynamic Grid (No forced equal heights) */}
        <div
          className="featured-projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
            alignItems: 'start', // natural variable height per card
          }}
        >
          {standardProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              workflowArtifactSlot={
                project.id === 'multi-agent-orchestration'
                  ? multiAgentWorkflowSlot
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
