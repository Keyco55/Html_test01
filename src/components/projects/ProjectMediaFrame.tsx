import React from 'react';

interface ProjectMediaFrameProps {
  readonly title: string;
  readonly type?: 'browser' | 'terminal' | 'macos-app' | 'workflow';
  readonly badgeText?: string;
  readonly caption?: string;
  /** Expected future asset path, shown only while no image exists. */
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
  slotPath,
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
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--ink-soft)',
              }}
            >
              {title}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
              실제 스크린샷 준비 중
            </span>
            {slotPath && (
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--faint)',
                }}
              >
                {slotPath}
              </code>
            )}
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
