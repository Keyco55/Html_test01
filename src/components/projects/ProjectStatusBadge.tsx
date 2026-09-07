import React from 'react';
import { ProjectStatusType } from '../../types/projects';

interface ProjectStatusBadgeProps {
  readonly status: ProjectStatusType;
  readonly className?: string;
  readonly showDot?: boolean;
}

const STATUS_CONFIG: Record<
  ProjectStatusType,
  {
    readonly label: string;
    readonly dotColor: string;
    readonly bg: string;
    readonly border: string;
    readonly text: string;
    readonly pulse: boolean;
  }
> = {
  'Closed Beta': {
    label: 'Closed Beta',
    dotColor: '#10b981', // emerald
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.35)',
    text: '#34d399',
    pulse: true,
  },
  'Active Production': {
    label: 'Active Production',
    dotColor: '#38bdf8', // cyan
    bg: 'rgba(56, 189, 248, 0.12)',
    border: 'rgba(56, 189, 248, 0.35)',
    text: '#38bdf8',
    pulse: true,
  },
  'Open Source': {
    label: 'Open Source',
    dotColor: '#818cf8', // indigo
    bg: 'rgba(129, 140, 248, 0.12)',
    border: 'rgba(129, 140, 248, 0.35)',
    text: '#a5b4fc',
    pulse: false,
  },
  'Preparing Public Release': {
    label: 'Preparing Public Release',
    dotColor: '#fbbf24', // amber
    bg: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.35)',
    text: '#fbbf24',
    pulse: true,
  },
  'Internal Production Verified': {
    label: 'Production Verified',
    dotColor: '#94a3b8', // slate
    bg: 'rgba(148, 163, 184, 0.12)',
    border: 'rgba(148, 163, 184, 0.35)',
    text: '#cbd5e1',
    pulse: false,
  },
};

export const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({
  status,
  className = '',
  showDot = true,
}) => {
  const config = STATUS_CONFIG[status] ?? {
    label: status,
    dotColor: '#94a3b8',
    bg: 'rgba(148, 163, 184, 0.12)',
    border: 'rgba(148, 163, 184, 0.35)',
    text: '#cbd5e1',
    pulse: false,
  };

  return (
    <span
      className={`project-status-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
        color: config.text,
        fontFamily: 'var(--font-mono, ui-monospace, monospace)',
        whiteSpace: 'nowrap',
        lineHeight: 1.2,
      }}
      aria-label={`프로젝트 상태: ${config.label}`}
    >
      {showDot && (
        <span
          style={{
            position: 'relative',
            display: 'inline-flex',
            width: '6px',
            height: '6px',
          }}
          aria-hidden="true"
        >
          {config.pulse && (
            <span
              className="status-pulse-anim"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                backgroundColor: config.dotColor,
                opacity: 0.75,
              }}
            />
          )}
          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: config.dotColor,
            }}
          />
        </span>
      )}
      <span>{config.label}</span>
    </span>
  );
};
