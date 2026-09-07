import React from 'react';
import { ProjectArchitecture } from '../../types/projects';

interface WorkflowContainerProps {
  readonly architecture: ProjectArchitecture;
  readonly className?: string;
  readonly children?: React.ReactNode;
}

const PIPELINE_STEPS = [
  {
    step: '01',
    role: 'Human Director',
    action: 'Scope & Final Decisions',
    icon: '👤',
    color: '#38bdf8', // cyan
  },
  {
    step: '02',
    role: 'Track Decomposition',
    action: 'Ownership & Prompt Boundaries',
    icon: '🧭',
    color: '#38bdf8', // cyan
  },
  {
    step: '03',
    role: 'Git Worktree',
    action: 'Isolated Working Directories',
    icon: '⚡',
    color: '#34d399', // emerald
  },
  {
    step: '04',
    role: 'Parallel Workers',
    action: 'Scoped Implementation',
    icon: '⚡',
    color: '#34d399', // emerald
  },
  {
    step: '05',
    role: 'Independent Senior',
    action: 'Strict Review (Build / Type / Security)',
    icon: '🔍',
    color: '#fbbf24', // amber
  },
  {
    step: '06',
    role: 'Remediation',
    action: 'Scoped Defect Fixes',
    icon: '🔄',
    color: '#a78bfa', // purple
  },
  {
    step: '07',
    role: 'Re-Review',
    action: 'Independent Gate Re-run',
    icon: '🛡️',
    color: '#f43f5e', // rose
  },
  {
    step: '08',
    role: 'Integration',
    action: 'Reviewed Changes to Dev',
    icon: '🚀',
    color: '#60a5fa', // blue
  },
  {
    step: '09',
    role: 'Human Runtime QA',
    action: 'Final Runtime Sign-off',
    icon: '👤',
    color: '#fbbf24', // amber
  },
] as const;

/**
 * Presentation container designed to host Platform Track's architecture diagrams
 * with a fallback structured pipeline visual when artifact is loading or unavailable.
 */
export const WorkflowContainer: React.FC<WorkflowContainerProps> = ({
  architecture,
  className = '',
  children,
}) => {
  return (
    <div
      id={architecture.containerId}
      className={`workflow-presentation-container ${className}`}
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        backgroundColor: 'rgba(10, 14, 23, 0.95)',
        padding: '24px',
        boxShadow: '0 16px 36px -12px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden',
      }}
      aria-labelledby={`${architecture.containerId}-title`}
    >
      {/* Container Header */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '16px',
          marginBottom: '20px',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.72rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono, ui-monospace, monospace)',
              color: '#38bdf8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '4px',
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
            Architecture Pipeline Visual
          </div>
          <h4
            id={`${architecture.containerId}-title`}
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
            }}
          >
            {architecture.title}
          </h4>
        </div>

        <span
          style={{
            fontSize: '0.72rem',
            padding: '4px 10px',
            borderRadius: '6px',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            color: '#7dd3fc',
            fontFamily: 'var(--font-mono, ui-monospace, monospace)',
          }}
        >
          Artifact Container
        </span>
      </div>

      <p
        style={{
          fontSize: '0.85rem',
          color: '#94a3b8',
          lineHeight: 1.5,
          marginBottom: '20px',
        }}
      >
        {architecture.description}
      </p>

      {/* Platform Artifact Insertion Slot (Platform Track Ownership) */}
      {children ? (
        <div className="platform-artifact-slot" style={{ width: '100%', overflowX: 'auto' }}>
          {children}
        </div>
      ) : architecture.svgArtifactPath ? (
        /* Render SVG artifact reference if available, otherwise graceful fallback */
        <div
          className="workflow-artifact-preview"
          style={{
            width: '100%',
            overflowX: 'auto',
            borderRadius: '10px',
            backgroundColor: '#070a10',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '16px',
            marginBottom: '20px',
          }}
        >
          {/* Light structured workflow visual representation */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px',
              minWidth: '280px',
            }}
          >
            {PIPELINE_STEPS.map((step, idx) => (
              <div
                key={step.step}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgba(18, 24, 38, 0.8)',
                  border: `1px solid ${step.color}33`,
                  borderRadius: '10px',
                  padding: '14px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                      color: step.color,
                      fontWeight: 700,
                    }}
                  >
                    STEP {step.step}
                  </span>
                  <span style={{ fontSize: '0.9rem' }} aria-hidden="true">
                    {step.icon}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#f1f5f9',
                  }}
                >
                  {step.role}
                </div>
                <div
                  style={{
                    fontSize: '0.73rem',
                    color: '#94a3b8',
                    lineHeight: 1.35,
                  }}
                >
                  {step.action}
                </div>

                {/* Arrow connector for non-last steps */}
                {idx < PIPELINE_STEPS.length - 1 && (
                  <span
                    className="pipeline-arrow-indicator"
                    style={{
                      position: 'absolute',
                      right: '-8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '0.7rem',
                      color: '#64748b',
                      zIndex: 2,
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Verification footer notes */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          fontSize: '0.72rem',
          color: '#64748b',
          fontFamily: 'var(--font-mono, ui-monospace, monospace)',
        }}
      >
        <span>Isolation: Git Worktree Per Track</span>
        <span>Gates: Independent Senior + Human Runtime QA</span>
      </div>
    </div>
  );
};
