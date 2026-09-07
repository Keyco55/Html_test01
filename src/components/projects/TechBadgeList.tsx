import React from 'react';

interface TechBadgeListProps {
  readonly items: readonly string[];
  readonly limit?: number;
  readonly className?: string;
  readonly variant?: 'subtle' | 'outline' | 'compact';
}

export const TechBadgeList: React.FC<TechBadgeListProps> = ({
  items,
  limit,
  className = '',
  variant = 'subtle',
}) => {
  const displayItems = limit ? items.slice(0, limit) : items;
  const remainingCount = limit && items.length > limit ? items.length - limit : 0;

  const isOutline = variant === 'outline';
  const isCompact = variant === 'compact';

  return (
    <ul
      className={`tech-badge-list ${className}`}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: isCompact ? '4px 6px' : '6px 8px',
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
      aria-label="기술 스택"
    >
      {displayItems.map((tech) => (
        <li
          key={tech}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: isCompact ? '2px 7px' : '3px 9px',
            borderRadius: '6px',
            fontSize: isCompact ? '0.7rem' : '0.75rem',
            fontWeight: 500,
            fontFamily: 'var(--font-mono, ui-monospace, monospace)',
            color: '#cbd5e1',
            backgroundColor: isOutline ? 'transparent' : 'rgba(30, 41, 59, 0.7)',
            border: isOutline ? '1px solid rgba(148, 163, 184, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)',
            lineHeight: 1.3,
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
        >
          {tech}
        </li>
      ))}
      {remainingCount > 0 && (
        <li
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: isCompact ? '2px 6px' : '3px 8px',
            borderRadius: '6px',
            fontSize: isCompact ? '0.7rem' : '0.75rem',
            fontWeight: 500,
            fontFamily: 'var(--font-mono, ui-monospace, monospace)',
            color: '#94a3b8',
            backgroundColor: 'rgba(15, 23, 42, 0.5)',
            border: '1px dashed rgba(148, 163, 184, 0.2)',
          }}
          aria-label={`외 ${remainingCount}개 기술`}
        >
          +{remainingCount}
        </li>
      )}
    </ul>
  );
};
