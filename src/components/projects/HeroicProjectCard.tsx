import React from 'react';
import { Project } from '../../types/projects';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { TechBadgeList } from './TechBadgeList';
import { ProjectMediaFrame } from './ProjectMediaFrame';

interface HeroicProjectCardProps {
  readonly project: Project;
  readonly className?: string;
}

export const HeroicProjectCard: React.FC<HeroicProjectCardProps> = ({
  project,
  className = '',
}) => {
  return (
    <article
      id={project.slug}
      className={`heroic-project-card ${className}`}
      style={{
        position: 'relative',
        borderRadius: '20px',
        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(10, 14, 23, 0.95) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 40px -15px rgba(56, 189, 248, 0.1)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      aria-labelledby={`${project.id}-title`}
    >
      {/* Subtle top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #38bdf8 0%, #34d399 50%, #818cf8 100%)',
        }}
        aria-hidden="true"
      />

      <div
        style={{
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}
      >
        {/* Header: Project Index, Category & Status Badge */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                fontSize: '0.8rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
              }}
            >
              01 FEATURED SPOTLIGHT
            </span>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#94a3b8',
                letterSpacing: '0.02em',
              }}
            >
              {project.category}
            </span>
          </div>

          <ProjectStatusBadge status={project.status} />
        </div>

        {/* Title & Subtitle */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
            <h3
              id={`${project.id}-title`}
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#38bdf8',
                fontFamily: 'var(--font-mono, ui-monospace, monospace)',
              }}
            >
              / {project.nameEn}
            </span>
          </div>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#94a3b8',
              marginTop: '8px',
              marginBottom: 0,
              fontWeight: 500,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Main 2-Column Content: Left Narrative vs Right Visual/Meta */}
        <div
          className="heroic-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Summary & Contributions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: '#e2e8f0',
                margin: 0,
              }}
            >
              {project.summary}
            </p>

            {/* Scope / Key Contributions List */}
            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '20px',
              }}
            >
              <h4
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                }}
              >
                Key Architecture & Contributions
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {project.narrative.keyContributions.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                      color: '#cbd5e1',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#34d399',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Restrained Tech Stack */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#94a3b8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                }}
              >
                Core Tech Stack
              </div>
              <TechBadgeList items={project.featuredStack} />
            </div>
          </div>

          {/* Right Column: Interactive Visual Frame & Verified Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Project Media Frame (Screenshot Slot) */}
            <ProjectMediaFrame
              title="kbo-hub.app"
              type="browser"
              badgeText="Closed Beta"
              caption="Next.js App Router · Supabase RLS · 3D Photocard Engine"
            >
              {/* High-fidelity browser mockup inner preview */}
              <div
                style={{
                  width: '100%',
                  padding: '24px 20px',
                  backgroundColor: '#070b13',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {/* Visual Header Mockup */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingBottom: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        color: '#ffffff',
                      }}
                    >
                      KBO-HUB
                    </span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        backgroundColor: '#ef4444',
                        color: '#fff',
                        fontWeight: 700,
                      }}
                    >
                      LIVE SCORE
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                      color: '#64748b',
                    }}
                  >
                    Supabase Auth Session Active
                  </div>
                </div>

                {/* Scoreboard & Photocard 3D preview cards */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                  }}
                >
                  {/* Mini Card 1: Scoreboard */}
                  <div
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '12px',
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '6px' }}>
                      KBO LEAGUE MATCH
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: '#f8fafc',
                      }}
                    >
                      <span>LG 트윈스</span>
                      <span style={{ color: '#38bdf8' }}>5 : 3</span>
                      <span>KIA 타이거즈</span>
                    </div>
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: '#10b981',
                        marginTop: '4px',
                        textAlign: 'right',
                      }}
                    >
                      ● 8회말 진행중
                    </div>
                  </div>

                  {/* Mini Card 2: 3D Tilt Photocard */}
                  <div
                    style={{
                      backgroundColor: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: 'radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.15), transparent 70%)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#38bdf8',
                        marginBottom: '2px',
                      }}
                    >
                      3D Hologram Glare
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>
                      DOM-Controlled Tilt Viewer
                    </div>
                  </div>
                </div>

                {/* Security RLS callout */}
                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    fontSize: '0.72rem',
                    color: '#6ee7b7',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                  }}
                >
                  <span>✓</span>
                  <span>Row Level Security (RLS) Policy Enforced · Session Persisted</span>
                </div>
              </div>
            </ProjectMediaFrame>

            {/* Verified Metrics 4-Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
              }}
            >
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '10px',
                    padding: '14px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: '#94a3b8',
                      fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    {metric.label}
                  </div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#38bdf8',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                    }}
                  >
                    {metric.value}
                  </div>
                  {metric.note && (
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: '#64748b',
                        marginTop: '4px',
                      }}
                    >
                      {metric.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Links / Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    backgroundColor: link.icon === 'github' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: link.icon === 'github' ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: link.icon === 'github' ? '#38bdf8' : '#e2e8f0',
                    transition: 'all 0.2s ease',
                  }}
                  className="interactive-action-link"
                >
                  {link.icon === 'github' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  )}
                  {link.icon === 'doc' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  )}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#94a3b8',
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
