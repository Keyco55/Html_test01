import React from 'react';
import { DEVELOPER_TOOLS } from '../../data/developer-tools';
import { TechBadgeList } from '../projects/TechBadgeList';

interface DeveloperToolingProps {
  readonly className?: string;
}

export const DeveloperTooling: React.FC<DeveloperToolingProps> = ({
  className = '',
}) => {
  return (
    <section
      id="developer-tooling"
      className={`developer-tooling-section ${className}`}
      style={{
        position: 'relative',
        padding: 'clamp(50px, 10vh, 100px) 0',
      }}
      aria-labelledby="developer-tooling-heading"
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
        <div style={{ marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono, ui-monospace, monospace)',
              color: '#34d399',
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
                backgroundColor: '#34d399',
              }}
              aria-hidden="true"
            />
            System &amp; Productivity Stack
          </div>

          <h2
            id="developer-tooling-heading"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: '0 0 12px 0',
              lineHeight: 1.2,
            }}
          >
            Developer Tooling &amp; Environment
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              color: '#94a3b8',
              maxWidth: '700px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            개발 속도와 코드 품질을 극대화하기 위해 직접 설계하고 매일 활용하는 네이티브 툴과 자동화
            인프라입니다. 다중 에이전트 병렬화, 터미널 제어, 프라이버시 보호 파이프라인을 구축했습니다.
          </p>
        </div>

        {/* 2x2 Grid of Developer Tooling Cards */}
        <div
          className="developer-tooling-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {DEVELOPER_TOOLS.map((tool) => (
            <article
              key={tool.id}
              className="developer-tool-card"
              style={{
                borderRadius: '16px',
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 25px -10px rgba(0, 0, 0, 0.5)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
              aria-labelledby={`${tool.id}-title`}
            >
              {/* Card Header: Category & Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                    color: '#34d399',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tool.category}
                </span>

                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(52, 211, 153, 0.1)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    color: '#6ee7b7',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                  }}
                >
                  {tool.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3
                  id={`${tool.id}-title`}
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: '0 0 4px 0',
                    lineHeight: 1.3,
                  }}
                >
                  {tool.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {tool.subtitle}
                </p>
              </div>

              {/* Terminal Command Snippet (if available) */}
              {tool.terminalCommand && (
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    backgroundColor: '#090d15',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                    fontSize: '0.75rem',
                    color: '#38bdf8',
                    overflowX: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  aria-label="터미널 실행 명령어 예시"
                >
                  <span style={{ color: '#64748b' }}>$</span>
                  <code>{tool.terminalCommand}</code>
                </div>
              )}

              {/* Purpose */}
              <p
                style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  color: '#cbd5e1',
                  margin: 0,
                }}
              >
                {tool.purpose}
              </p>

              {/* Key Features */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(10, 14, 23, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                  }}
                >
                  Core Highlights
                </span>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {tool.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6px',
                        fontSize: '0.82rem',
                        color: '#94a3b8',
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: '#34d399', fontSize: '0.8rem' }} aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Footer */}
              <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                <TechBadgeList items={tool.techStack} variant="compact" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
