import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface ChipProps {
  variant?: 'solid' | 'outline';
  className?: string;
}

export const Chip = ({ children, variant = 'solid', className }: PropsWithChildren<ChipProps>) => (
  <span
    className={clsx(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
      variant === 'solid' ? 'bg-violet-100 text-violet-700' : 'border border-violet-300 text-violet-700',
      className,
    )}
  >
    {children}
  </span>
);
