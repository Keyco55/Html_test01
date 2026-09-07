import React from 'react';
import { HERO_DATA } from '../../data/projects';

interface HeroProps {
  readonly className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section
      id="hero"
      className={`hero-section ${className}`}
      style={{
        position: 'relative',
        padding: 'clamp(60px, 12vh, 120px) 0 clamp(40px, 8vh, 80px)',
        overflow: 'hidden',
      }}
      aria-labelledby="hero-name"
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
        {/* Live Status Indicators (현재 상태 표현) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px 12px',
            marginBottom: '28px',
          }}
          aria-label="현재 프로젝트 활성 상태"
        >
          {HERO_DATA.liveStatuses.map((status) => (
            <a
              key={status.id}
              href={status.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textDecoration: 'none',
                color: '#e2e8f0',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                transition: 'all 0.2s ease',
              }}
              className="status-pill-link"
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor:
                    status.indicatorColor === 'emerald'
                      ? '#10b981'
                      : status.indicatorColor === 'cyan'
                      ? '#38bdf8'
                      : '#60a5fa',
                  boxShadow:
                    status.indicatorColor === 'emerald'
                      ? '0 0 8px #10b981'
                      : '0 0 8px #38bdf8',
                }}
                aria-hidden="true"
              />
              <strong style={{ color: '#ffffff', fontWeight: 600 }}>{status.label}</strong>
              <span style={{ color: '#64748b' }}>/</span>
              <span
                style={{
                  color:
                    status.indicatorColor === 'emerald'
                      ? '#34d399'
                      : status.indicatorColor === 'cyan'
                      ? '#38bdf8'
                      : '#93c5fd',
                  fontWeight: 500,
                }}
              >
                {status.badge}
              </span>
            </a>
          ))}
        </div>

        {/* Identity & Role Title */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '12px',
            }}
          >
            <h1
              id="hero-name"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              {HERO_DATA.nameKo}
            </h1>
            <span
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                color: '#38bdf8',
                letterSpacing: '-0.01em',
              }}
            >
              / {HERO_DATA.nameEn}
            </span>
          </div>

          <div
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
              fontWeight: 600,
              color: '#94a3b8',
              letterSpacing: '-0.01em',
            }}
          >
            {HERO_DATA.roleTitle}
          </div>
        </div>

        {/* Slogan */}
        <div
          style={{
            maxWidth: '780px',
            marginBottom: '28px',
          }}
        >
          <blockquote
            style={{
              margin: 0,
              padding: '0 0 0 20px',
              borderLeft: '3px solid #38bdf8',
              fontSize: 'clamp(1.25rem, 2.8vw, 1.75rem)',
              fontWeight: 700,
              lineHeight: 1.45,
              color: '#f8fafc',
              whiteSpace: 'pre-line',
            }}
          >
            “{HERO_DATA.slogan}”
          </blockquote>
        </div>

        {/* Sub-description */}
        <p
          style={{
            maxWidth: '720px',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            lineHeight: 1.7,
            color: '#94a3b8',
            marginBottom: '36px',
          }}
        >
          {HERO_DATA.subDescription}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          {HERO_DATA.ctaButtons.map((btn) => {
            const isPrimary = btn.variant === 'primary';
            const isSecondary = btn.variant === 'secondary';

            return (
              <a
                key={btn.id}
                href={btn.href}
                target={btn.isExternal ? '_blank' : undefined}
                rel={btn.isExternal ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: isPrimary ? '14px 28px' : '13px 22px',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  backgroundColor: isPrimary
                    ? '#38bdf8'
                    : isSecondary
                    ? 'rgba(255, 255, 255, 0.06)'
                    : 'transparent',
                  color: isPrimary ? '#090d16' : '#f1f5f9',
                  border: isPrimary
                    ? '1px solid #38bdf8'
                    : isSecondary
                    ? '1px solid rgba(255, 255, 255, 0.15)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isPrimary
                    ? '0 10px 25px -5px rgba(56, 189, 248, 0.35)'
                    : 'none',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  minHeight: '44px',
                }}
                className={`btn-hero-${btn.variant}`}
              >
                <span>{btn.label}</span>
                {btn.id === 'projects' && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
                {btn.id === 'github' && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                )}
                {'badge' in btn && Boolean(btn.badge) && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      padding: '1px 6px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#94a3b8',
                      fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                    }}
                  >
                    {btn.badge}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
