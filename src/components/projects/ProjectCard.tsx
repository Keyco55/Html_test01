import React from 'react';
import { Project } from '../../types/projects';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { TechBadgeList } from './TechBadgeList';
import { WorkflowContainer } from './WorkflowContainer';

interface ProjectCardProps {
  readonly project: Project;
  readonly className?: string;
  readonly workflowArtifactSlot?: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
  workflowArtifactSlot,
}) => {
  const isOrchestration = project.id === 'multi-agent-orchestration';

  return (
    <article
      id={project.slug}
      className={`project-card ${className}`}
      style={{
        borderRadius: '16px',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease',
      }}
      aria-labelledby={`${project.id}-title`}
    >
      {/* Top Header: Index / Category & Status */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono, ui-monospace, monospace)',
              color: '#38bdf8',
            }}
          >
            0{project.displayOrder}
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {project.category}
          </span>
        </div>

        <ProjectStatusBadge status={project.status} />
      </div>

      {/* Title & Subtitle */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
          <h3
            id={`${project.id}-title`}
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.01em',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
          {project.nameEn && (
            <span
              style={{
                fontSize: '0.85rem',
                color: '#64748b',
                fontFamily: 'var(--font-mono, ui-monospace, monospace)',
              }}
            >
              / {project.nameEn}
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: '0.92rem',
            color: '#38bdf8',
            marginTop: '4px',
            marginBottom: 0,
            fontWeight: 500,
          }}
        >
          {project.subtitle}
        </p>
      </div>

      {/* Project Metadata Table / Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '8px 16px',
          padding: '12px 14px',
          borderRadius: '8px',
          backgroundColor: 'rgba(10, 14, 23, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.78rem',
        }}
      >
        <div>
          <span style={{ color: '#64748b', display: 'block', fontSize: '0.7rem' }}>역할 & 소유권</span>
          <strong style={{ color: '#cbd5e1', fontWeight: 600 }}>{project.metadata.role}</strong>
        </div>
        <div>
          <span style={{ color: '#64748b', display: 'block', fontSize: '0.7rem' }}>플랫폼 & 환경</span>
          <strong style={{ color: '#cbd5e1', fontWeight: 600 }}>{project.metadata.platform}</strong>
        </div>
        <div>
          <span style={{ color: '#64748b', display: 'block', fontSize: '0.7rem' }}>수행 기간</span>
          <span style={{ color: '#94a3b8' }}>{project.metadata.timeline}</span>
        </div>
      </div>

      {/* Summary Narrative */}
      <p
        style={{
          fontSize: '0.92rem',
          lineHeight: 1.65,
          color: '#cbd5e1',
          margin: 0,
        }}
      >
        {project.summary}
      </p>

      {/* Key Contributions or Specific Highlights */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          padding: '14px 16px',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            fontFamily: 'var(--font-mono, ui-monospace, monospace)',
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Key Contributions
        </span>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {project.narrative.keyContributions.slice(0, 3).map((item, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                fontSize: '0.84rem',
                lineHeight: 1.45,
                color: '#cbd5e1',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#38bdf8',
                  marginTop: '7px',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Architecture Visual Container (for 02 Multi-Agent Orchestration) */}
      {isOrchestration && project.architecture && (
        <div style={{ marginTop: '4px' }}>
          <WorkflowContainer architecture={project.architecture}>
            {workflowArtifactSlot}
          </WorkflowContainer>
        </div>
      )}

      {/* Metrics Row */}
      {project.metrics.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '10px',
          }}
        >
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(10, 14, 23, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '10px 12px',
              }}
            >
              <div
                style={{
                  fontSize: '0.68rem',
                  color: '#94a3b8',
                  fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#e2e8f0',
                  marginTop: '2px',
                }}
              >
                {metric.value}
              </div>
              {metric.note && (
                <div
                  style={{
                    fontSize: '0.68rem',
                    color: '#64748b',
                    marginTop: '2px',
                  }}
                >
                  {metric.note}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer: Tech Stack & Action Links */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          paddingTop: '8px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          marginTop: 'auto',
        }}
      >
        <TechBadgeList items={project.featuredStack} limit={5} variant="compact" />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 600,
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#e2e8f0',
                transition: 'all 0.2s ease',
              }}
              className="interactive-action-link"
            >
              {link.icon === 'github' && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              )}
              {link.icon === 'lock' && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              )}
              <span>{link.label}</span>
              {link.badge && (
                <span
                  style={{
                    fontSize: '0.65rem',
                    padding: '1px 5px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(251, 191, 36, 0.15)',
                    color: '#fbbf24',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                  }}
                >
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};
