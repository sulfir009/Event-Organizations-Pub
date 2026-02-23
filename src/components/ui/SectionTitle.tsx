interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => (
  <div className="mb-5">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">{eyebrow}</p>
    <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
    {description && <p className="mt-2 max-w-3xl text-sm text-mutedInk sm:text-base">{description}</p>}
  </div>
);
