import { PauseCircle, ShieldAlert, ShieldCheck, ShieldX } from 'lucide-react';
import { DataTable } from '../components/ui/DataTable';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StatPill } from '../components/ui/StatPill';
import { moderationQueue } from '../data/mockData';
import { Column } from '../types/ui';

interface VerificationRow {
  organizer: string;
  city: string;
  documents: string;
  rating: string;
  status: string;
}

const verificationRows: VerificationRow[] = [
  { organizer: 'Urban Scene LLC', city: 'Moscow', documents: 'Uploaded', rating: '4.8', status: 'Verified' },
  { organizer: 'Volonters Hub', city: 'Kazan', documents: 'Pending', rating: '4.6', status: 'Review' },
  { organizer: 'Cinema Roof Team', city: 'SPB', documents: 'Uploaded', rating: '4.4', status: 'Verified' },
];

const verificationColumns: Column<VerificationRow>[] = [
  { key: 'organizer', label: 'Организатор' },
  { key: 'city', label: 'Город' },
  { key: 'documents', label: 'Документы' },
  { key: 'rating', label: 'Рейтинг' },
  { key: 'status', label: 'Статус' },
];

export const AdminSafetyBoard = () => (
  <section>
    <SectionTitle
      eyebrow="Admin & Safety"
      title="Модерация и безопасность платформы"
      description="Очередь проверок, риск-приоритизация, верификация организаторов и политика антиспама."
    />

    <div className="grid gap-3 xl:grid-cols-[1.2fr_1.8fr]">
      <GlassCard className="space-y-3">
        <p className="text-sm font-semibold text-ink">Очередь модерации</p>
        {moderationQueue.map((item) => (
          <div key={item.id} className="rounded-2xl border border-violet-100 bg-white/70 p-3">
            <div className="mb-2 flex items-center justify-between text-xs text-mutedInk">
              <span>{item.id}</span>
              <span>{item.type}</span>
            </div>
            <p className="text-sm font-semibold text-ink">{item.issue}</p>
            <p className="text-xs text-mutedInk">
              Risk: {item.risk} · {item.location}
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <button className="rounded-lg bg-violet-100 px-2 py-1 text-xs text-violet-800">Открыть</button>
              <button className="flex items-center justify-center rounded-lg bg-amber-100 px-2 py-1 text-xs text-amber-800">
                <PauseCircle size={12} />
              </button>
              <button className="flex items-center justify-center rounded-lg bg-rose-100 px-2 py-1 text-xs text-rose-800">
                <ShieldX size={12} />
              </button>
            </div>
          </div>
        ))}
      </GlassCard>

      <GlassCard className="space-y-3">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <StatPill label="Жалобы" value="1,280" tone="warning" />
          <StatPill label="Проверено" value="1,146" tone="success" />
          <StatPill label="Организаторы" value="624" />
          <StatPill label="Ban rate" value="2.4%" />
        </div>

        <GlassCard className="bg-white/70">
          <p className="mb-2 text-sm font-semibold text-ink">Верификация организаторов</p>
          <DataTable columns={verificationColumns} rows={verificationRows} />
        </GlassCard>

        <div className="grid gap-2 sm:grid-cols-2">
          <GlassCard className="bg-white/70 p-4">
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink">
              <ShieldAlert size={16} /> Жалоба на контент
            </p>
            <p className="text-xs text-mutedInk">User report → human review → action SLA 2h.</p>
          </GlassCard>
          <GlassCard className="bg-white/70 p-4">
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink">
              <ShieldX size={16} /> Блокировка
            </p>
            <p className="text-xs text-mutedInk">Temporary freeze, escalation and permanent ban policy.</p>
          </GlassCard>
          <GlassCard className="bg-white/70 p-4">
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink">
              <ShieldCheck size={16} /> Верификация
            </p>
            <p className="text-xs text-mutedInk">KYC checks for organizers with trust score history.</p>
          </GlassCard>
          <GlassCard className="bg-white/70 p-4">
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink">
              <PauseCircle size={16} /> Антиспам
            </p>
            <p className="text-xs text-mutedInk">Rate limits, link protection and abusive chat heuristics.</p>
          </GlassCard>
        </div>
      </GlassCard>
    </div>
  </section>
);
