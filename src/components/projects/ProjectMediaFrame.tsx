import React from 'react';

interface ProjectMediaFrameProps {
  readonly title: string;
  readonly type?: 'browser' | 'terminal' | 'macos-app' | 'workflow';
  readonly badgeText?: string;
  readonly caption?: string;
  /** Expected future asset path, reserved for when a real image is added. */
  readonly slotPath?: string;
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly children?: React.ReactNode;
  readonly className?: string;
}

/**
 * Light Editorial screenshot slot.
 * Renders a real image when supplied; otherwise a clean neutral placeholder
 * that clearly behaves as an asset slot. No decorative fake UI is rendered.
 */
export const ProjectMediaFrame: React.FC<ProjectMediaFrameProps> = ({
  title,
  badgeText,
  caption,
  imageSrc,
  imageAlt,
  children,
  className = '',
}) => {
  return (
    <figure
      className={className}
      style={{
        margin: 0,
        borderRadius: 'var(--radius-media)',
        overflow: 'hidden',
        border: '1px solid var(--line)',
        backgroundColor: 'var(--bg-surface)',
      }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 10',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'var(--bg-wash)',
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
              height: '100%',
              display: 'block',
              objectFit: 'cover',
            }}
            loading="lazy"
          />
        ) : children ? (
          children
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '24px 20px',
              textAlign: 'center',
            }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: 30, height: 30, color: 'var(--faint)' }}
            >
              <rect x="4" y="6" width="24" height="20" rx="3" />
              <circle cx="11.5" cy="12.5" r="2.4" />
              <path d="M27 22l-4.5-4.5-4 4L11 14l-7 8" />
            </svg>
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--ink-soft)',
                letterSpacing: '0.01em',
              }}
            >
              {title}
            </span>
            {badgeText && (
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  border: '1px solid var(--line)',
                  color: 'var(--muted)',
                }}
              >
                {badgeText}
              </span>
            )}
          </div>
        )}
      </div>

      {caption && (
        <figcaption
          style={{
            padding: '10px 14px',
            borderTop: '1px solid var(--line-soft)',
            fontSize: '0.76rem',
            color: 'var(--muted)',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
