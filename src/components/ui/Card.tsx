import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  as: Component = 'div',
  hoverEffect = true,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'rounded-2xl bg-slate-900/60 border border-slate-800/80 p-5 sm:p-6 backdrop-blur-sm',
        hoverEffect &&
          'transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/80',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
