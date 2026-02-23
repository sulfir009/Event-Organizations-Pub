import { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface GlassCardProps {
  className?: string;
}

export const GlassCard = ({ children, className }: PropsWithChildren<GlassCardProps>) => (
  <div
    className={clsx(
      'rounded-3xl border border-white/35 bg-white/60 p-5 shadow-soft backdrop-blur-xl',
      className,
    )}
  >
    {children}
  </div>
);
