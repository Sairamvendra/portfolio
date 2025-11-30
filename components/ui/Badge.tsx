import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'yellow' | 'cyan' | 'pink' | 'purple' | 'green';
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variantStyles = {
      default: 'bg-neobrutalism-white',
      yellow: 'bg-neobrutalism-yellow',
      cyan: 'bg-neobrutalism-cyan',
      pink: 'bg-neobrutalism-pink',
      purple: 'bg-neobrutalism-purple',
      green: 'bg-neobrutalism-green',
    };

    return (
      <div
        className={cn(
          'inline-flex items-center px-3 py-1 text-sm font-bold border-3 border-neobrutalism-black shadow-neobrutalism-sm',
          variantStyles[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
