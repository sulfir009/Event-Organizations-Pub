import { Download, Megaphone, PlusCircle, ShieldCheck } from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StatPill } from '../components/ui/StatPill';
import { campaignsTable, categoryShare, funnelData, salesTrend, topEventsTable, trafficSources } from '../data/mockData';
import { CampaignRow, Column, EventPerformanceRow } from '../types/ui';
import { DataTable } from '../components/ui/DataTable';

const eventColumns: Column<EventPerformanceRow>[] = [
  { key: 'event', label: 'Событие' },
  { key: 'views', label: 'Views' },
  { key: 'clicks', label: 'Clicks' },
  { key: 'orders', label: 'Orders' },
  { key: 'paid', label: 'Paid' },
  { key: 'revenue', label: 'Выручка' },
  { key: 'status', label: 'Статус' },
];

const campaignColumns: Column<CampaignRow>[] = [
  { key: 'campaign', label: 'Кампания' },
  { key: 'budget', label: 'Бюджет' },
  { key: 'spend', label: 'Spend' },
  { key: 'impressions', label: 'Impressions' },
  { key: 'ctr', label: 'CTR' },
  { key: 'regs', label: 'Regs' },
  { key: 'cpa', label: 'CPA' },
  { key: 'state', label: 'State' },
];

const pieColors = ['#6F49E8', '#7C5CE6', '#9B80FF', '#B79EFF', '#D4C5FF'];

export const OrganizerAnalyticsBoard = () => (
  <section>
    <SectionTitle
      eyebrow="Organizer Studio"
      title="Аналитика + рекламный кабинет"
      description="Desktop board с KPI, воронкой, разрезом категорий и таблицами по событиям/кампаниям."
    />
    <GlassCard className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <StatPill label="Показы" value="108k" />
        <StatPill label="Клики" value="18.5k" />
        <StatPill label="Заказы" value="6.1k" />
        <StatPill label="Выручка" value="₽4.9M" tone="success" />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <GlassCard className="bg-white/70">
          <p className="mb-2 text-sm font-semibold text-ink">Продажи и выручка по дням</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8defb" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line dataKey="sales" stroke="#6F49E8" strokeWidth={2} />
                <Line dataKey="revenue" stroke="#B79EFF" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="bg-white/70">
          <p className="mb-2 text-sm font-semibold text-ink">Воронка: показы → оплаты</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8defb" />
                <XAxis dataKey="stage" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#7C5CE6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="bg-white/70">
          <p className="mb-2 text-sm font-semibold text-ink">Категории событий</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryShare} dataKey="value" nameKey="name" outerRadius={85} label>
                  {categoryShare.map((entry, index) => (
                    <Cell key={`slice-${entry.name}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="bg-white/70">
          <p className="mb-2 text-sm font-semibold text-ink">Трафик по каналам</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficSources}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e8defb" />
                <XAxis dataKey="channel" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="visits" stroke="#6F49E8" fill="#cbb9ff" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-3 xl:grid-cols-[2fr_1fr]">
        <GlassCard className="bg-white/70">
          <p className="mb-3 text-sm font-semibold text-ink">Таблица событий и результатов</p>
          <DataTable columns={eventColumns} rows={topEventsTable} />
        </GlassCard>

        <GlassCard className="space-y-2 bg-white/70">
          <p className="text-sm font-semibold text-ink">Быстрые действия</p>
          <button className="flex w-full items-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-sm text-white">
            <PlusCircle size={16} /> Создать событие
          </button>
          <button className="flex w-full items-center gap-2 rounded-xl bg-violet-200 px-3 py-2 text-sm text-violet-900">
            <Megaphone size={16} /> Продвигать
          </button>
          <button className="flex w-full items-center gap-2 rounded-xl bg-violet-100 px-3 py-2 text-sm text-violet-800">
            <Download size={16} /> Экспорт CSV
          </button>
          <button className="flex w-full items-center gap-2 rounded-xl bg-violet-100 px-3 py-2 text-sm text-violet-800">
            <ShieldCheck size={16} /> Верификация
          </button>
        </GlassCard>
      </div>

      <GlassCard className="bg-white/70">
        <p className="mb-3 text-sm font-semibold text-ink">Ads Cabinet</p>
        <DataTable columns={campaignColumns} rows={campaignsTable} />
      </GlassCard>
    </GlassCard>
  </section>
);
