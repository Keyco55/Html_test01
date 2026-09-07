import React from 'react';

interface ProjectMediaFrameProps {
  readonly title: string;
  readonly type: 'browser' | 'terminal' | 'macos-app' | 'workflow';
  readonly badgeText?: string;
  readonly caption?: string;
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly children?: React.ReactNode;
  readonly className?: string;
}

export const ProjectMediaFrame: React.FC<ProjectMediaFrameProps> = ({
  title,
  type,
  badgeText,
  caption,
  imageSrc,
  imageAlt,
  children,
  className = '',
}) => {
  return (
    <figure
      className={`project-media-frame ${className}`}
      style={{
        margin: 0,
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: '#0d131f',
        boxShadow: '0 12px 30px -10px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Frame Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 14px',
          backgroundColor: '#0a0e17',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono, ui-monospace, monospace)',
          color: '#94a3b8',
        }}
      >
        {/* Window controls (traffic lights) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} aria-hidden="true">
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#ef4444',
              opacity: 0.8,
            }}
          />
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#f59e0b',
              opacity: 0.8,
            }}
          />
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              opacity: 0.8,
            }}
          />
        </div>

        {/* Title or URL Address Bar */}
        <div
          style={{
            flex: 1,
            maxWidth: '380px',
            margin: '0 12px',
            padding: '2px 10px',
            borderRadius: '4px',
            backgroundColor: type === 'browser' ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
            border: type === 'browser' ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: '#cbd5e1',
          }}
        >
          <span>{title}</span>
        </div>

        {/* Status Badge in window header */}
        {badgeText && (
          <span
            style={{
              fontSize: '0.68rem',
              padding: '2px 6px',
              borderRadius: '4px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              fontWeight: 500,
            }}
          >
            {badgeText}
          </span>
        )}
      </div>

      {/* Frame Content Body */}
      <div
        style={{
          position: 'relative',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #0d131f 0%, #080b12 100%)',
          overflow: 'hidden',
        }}
      >
        {imageSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element -- static export + images.unoptimized; raw <img> is intentional for exported output */
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
            }}
            loading="lazy"
          />
        ) : children ? (
          children
        ) : (
          /* High-fidelity architectural mockup placeholder when no raw screenshot is supplied */
          <div
            style={{
              width: '100%',
              padding: '28px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8',
              }}
              aria-hidden="true"
            >
              {type === 'browser' && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              )}
              {type === 'terminal' && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              )}
              {type === 'macos-app' && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              )}
              {type === 'workflow' && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              )}
            </div>

            <div style={{ maxWidth: '420px' }}>
              <p
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  marginBottom: '4px',
                }}
              >
                {title}
              </p>
              <p
                style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {caption ?? '검증된 아키텍처 및 인터랙티브 인터페이스 프리뷰'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Frame Footer Caption (Optional) */}
      {caption && (
        <figcaption
          style={{
            padding: '8px 14px',
            backgroundColor: '#090d14',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.72rem',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>{caption}</span>
          <span style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}>Illustrative Preview</span>
        </figcaption>
      )}
    </figure>
  );
};
