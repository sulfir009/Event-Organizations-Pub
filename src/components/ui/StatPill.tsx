import clsx from 'clsx';

interface StatPillProps {
  label: string;
  value: string;
  tone?: 'default' | 'success' | 'warning';
}

const toneClasses = {
  default: 'bg-white/70 text-ink',
  success: 'bg-emerald-100/85 text-emerald-800',
  warning: 'bg-amber-100/85 text-amber-800',
};

export const StatPill = ({ label, value, tone = 'default' }: StatPillProps) => (
  <div className={clsx('rounded-2xl px-4 py-3', toneClasses[tone])}>
    <p className="text-xs text-mutedInk">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);
