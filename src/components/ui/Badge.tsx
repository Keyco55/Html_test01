import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'emerald' | 'amber' | 'cyan' | 'outline';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  dot = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide';

  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    emerald: 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60',
    amber: 'bg-amber-950/70 text-amber-400 border border-amber-800/60',
    cyan: 'bg-sky-950/70 text-sky-400 border border-sky-800/60',
    outline: 'bg-transparent text-slate-300 border border-slate-700/80',
  };

  const dotColorStyles = {
    default: 'bg-slate-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    cyan: 'bg-sky-400',
    outline: 'bg-slate-400',
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full', dotColorStyles[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
