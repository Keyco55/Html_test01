import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  id?: string;
  ariaLabelledBy?: string;
}

export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  id,
  ariaLabelledBy,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('py-16 md:py-24 border-b border-slate-900/60', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
