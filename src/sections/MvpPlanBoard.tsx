import { GlassCard } from '../components/ui/GlassCard';
import { SectionTitle } from '../components/ui/SectionTitle';
import { DataTable } from '../components/ui/DataTable';
import { mvpMatrix, roadmapRows } from '../data/mockData';
import { Column, MvpMatrixRow } from '../types/ui';

const matrixColumns: Column<MvpMatrixRow>[] = [
  { key: 'module', label: 'Модуль' },
  { key: 'features', label: 'Фичи' },
  { key: 'priority', label: 'Priority' },
  { key: 'status', label: 'Status' },
];

const afterMvp = [
  'Мультиязык / страны',
  'Рекомендации людей',
  'Синхронизация с календарями',
  'Продвинутый Ads кабинет',
];

export const MvpPlanBoard = () => (
  <section>
    <SectionTitle
      eyebrow="MVP Matrix"
      title="Roadmap и рамка поставки"
      description="Прозрачная матрица MVP, спринты и список улучшений после релиза первой версии."
    />

    <div className="space-y-3">
      <GlassCard>
        <p className="mb-3 text-sm font-semibold text-ink">MVP Matrix</p>
        <DataTable columns={matrixColumns} rows={mvpMatrix} />
      </GlassCard>

      <div className="grid gap-3 lg:grid-cols-2">
        <GlassCard>
          <p className="mb-3 text-sm font-semibold text-ink">Roadmap Sprints</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {roadmapRows.map((row) => (
              <div key={row.sprint} className="rounded-2xl border border-violet-100 bg-white/70 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">{row.sprint}</p>
                <p className="text-sm font-semibold text-ink">{row.title}</p>
                <p className="text-xs text-mutedInk">{row.focus}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <p className="mb-3 text-sm font-semibold text-ink">After MVP</p>
          <div className="grid gap-2">
            {afterMvp.map((item) => (
              <div key={item} className="rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-white p-3 text-sm text-ink">
                {item}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
);
