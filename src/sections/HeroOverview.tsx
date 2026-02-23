import { motion } from 'framer-motion';
import { BarChart3, Ticket, UsersRound, WandSparkles } from 'lucide-react';
import { MoonFisherLogo } from '../components/brand/MoonFisherLogo';
import { GlassCard } from '../components/ui/GlassCard';
import { StatPill } from '../components/ui/StatPill';

const pillars = [
  { icon: <WandSparkles size={18} />, title: 'События', text: 'Афиша города + персональные рекомендации.' },
  { icon: <UsersRound size={18} />, title: 'Люди', text: 'Кто идёт, собрать компанию, сообщества.' },
  { icon: <Ticket size={18} />, title: 'Билеты', text: 'Покупка, QR-доступ, календарь и чат события.' },
  { icon: <BarChart3 size={18} />, title: 'B2B', text: 'Реклама, аналитика, кабинет организатора.' },
];

export const HeroOverview = () => (
  <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
    <GlassCard className="bg-gradient-to-br from-white/70 to-violet-100/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <MoonFisherLogo />
            <div>
              <h1 className="text-3xl font-bold text-ink">Event Pub</h1>
              <p className="text-sm text-mutedInk">События · Люди · Билеты · Сообщества · B2B</p>
            </div>
          </div>
          <p className="max-w-2xl text-sm text-mutedInk sm:text-base">
            Investor-ready MVP UI-концепт: гибрид афиши, социальной платформы и рекламно-аналитического кабинета для
            организаторов.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:min-w-72">
          <StatPill label="Экраны MVP" value="11" />
          <StatPill label="Графики" value="4" />
          <StatPill label="Таблицы" value="4" />
          <StatPill label="Роли" value="user / organizer / admin" />
        </div>
      </div>
    </GlassCard>

    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {pillars.map((pillar) => (
        <GlassCard key={pillar.title} className="p-4">
          <div className="mb-2 w-fit rounded-xl bg-violet-100 p-2 text-violet-700">{pillar.icon}</div>
          <h3 className="text-base font-semibold text-ink">{pillar.title}</h3>
          <p className="mt-1 text-sm text-mutedInk">{pillar.text}</p>
        </GlassCard>
      ))}
    </div>
  </motion.section>
);
