import { motion } from 'framer-motion';
import { CalendarPlus2, CheckCircle2, Crown, LockKeyhole, QrCode, ShieldCheck, Sparkles, TicketPlus } from 'lucide-react';
import { BottomNav } from '../components/phone/BottomNav';
import { EventCardMini } from '../components/phone/EventCardMini';
import { MobileHeader } from '../components/phone/MobileHeader';
import { PhoneFrame } from '../components/phone/PhoneFrame';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionTitle } from '../components/ui/SectionTitle';
import { miniEvents } from '../data/mockData';

export const MobileScreensMVP = () => (
  <section>
    <SectionTitle
      eyebrow="Mobile MVP"
      title="Пользовательские и организаторские мобильные экраны"
      description="11 ключевых экранов с фокусом на покупку билета, social-механику “кто идёт” и работу организатора."
    />

    <GlassCard>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <PhoneFrame title="1. Splash">
          <div className="flex h-52 flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-violet-100 to-white text-center">
            <Sparkles className="mb-2 text-violet-700" size={24} />
            <p className="text-lg font-bold text-ink">Event Pub</p>
            <p className="text-xs text-mutedInk">find people for events</p>
          </div>
        </PhoneFrame>

        <PhoneFrame title="2. Главная">
          <MobileHeader city="Moscow" />
          <div className="space-y-2">
            {miniEvents.slice(0, 2).map((event) => (
              <EventCardMini key={event.id} event={event} />
            ))}
          </div>
          <BottomNav />
        </PhoneFrame>

        <PhoneFrame title="3. Карточка события">
          <div className="rounded-2xl bg-violet-100/70 p-3">
            <p className="text-sm font-semibold text-ink">Neon Indie Night</p>
            <p className="text-xs text-mutedInk">Кто идёт: 128 · 6 друзей</p>
            <button className="mt-3 w-full rounded-xl bg-violet-600 py-2 text-xs font-semibold text-white">Купить билет</button>
          </div>
        </PhoneFrame>

        <PhoneFrame title="4. Checkout">
          <div className="space-y-2 text-xs text-mutedInk">
            <p className="rounded-xl bg-violet-50 p-2">Ticket: Standard · ₽2200</p>
            <p className="rounded-xl bg-violet-50 p-2">Promo: FIRST10</p>
            <button className="w-full rounded-xl bg-violet-700 py-2 font-semibold text-white">Оплатить</button>
          </div>
        </PhoneFrame>

        <PhoneFrame title="5. Мои билеты">
          <div className="space-y-2">
            <div className="rounded-xl bg-violet-50 p-3 text-xs">
              <p className="font-semibold text-ink">Rooftop Cinema</p>
              <p className="text-mutedInk">QR + вход</p>
              <QrCode className="mt-2 text-violet-700" size={20} />
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2 text-xs text-white">
              <CalendarPlus2 size={14} /> Add to calendar
            </button>
          </div>
        </PhoneFrame>

        <PhoneFrame title="6. Группы и чат">
          <div className="space-y-2 text-xs">
            <p className="rounded-xl bg-violet-50 p-2 text-mutedInk">Group: Indie Friends (4/4)</p>
            <p className="rounded-xl border border-violet-200 p-2 text-violet-700">+1 участник доступен в Premium</p>
            <div className="flex items-center gap-1 text-violet-700">
              <Crown size={14} /> Premium group unlock
            </div>
          </div>
        </PhoneFrame>

        <PhoneFrame title="7. Создание события (2/4)">
          <div className="space-y-2 text-xs">
            <p className="rounded-xl bg-violet-50 p-2">Step 2: Date, venue, limits</p>
            <p className="rounded-xl bg-violet-50 p-2">Category: Volunteering</p>
            <button className="w-full rounded-xl bg-violet-600 py-2 text-white">Next</button>
          </div>
        </PhoneFrame>

        <PhoneFrame title="8. Кабинет организатора">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl bg-violet-50 p-2">Views: 18.8k</div>
            <div className="rounded-xl bg-violet-50 p-2">Orders: 940</div>
            <div className="rounded-xl bg-violet-50 p-2">Revenue: ₽1.48M</div>
            <div className="rounded-xl bg-violet-50 p-2">CTR: 2.8%</div>
          </div>
        </PhoneFrame>

        <PhoneFrame title="9. Продвижение события">
          <div className="space-y-2 text-xs">
            <p className="rounded-xl bg-violet-50 p-2">Budget: ₽120 000</p>
            <p className="rounded-xl bg-violet-50 p-2">Forecast: +1 180 registrations</p>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-700 py-2 text-white">
              <TicketPlus size={14} /> Promote Event
            </button>
          </div>
        </PhoneFrame>

        <PhoneFrame title="10. Профиль пользователя">
          <div className="space-y-2 text-xs">
            <p className="rounded-xl bg-violet-50 p-2">Interests: Music, Product, Volunteering</p>
            <p className="rounded-xl bg-violet-50 p-2">Achievements: 14 badges</p>
            <CheckCircle2 className="text-violet-700" size={18} />
          </div>
        </PhoneFrame>

        <PhoneFrame title="11. Настройки / безопасность">
          <div className="space-y-2 text-xs">
            <p className="flex items-center gap-1 rounded-xl bg-violet-50 p-2">
              <LockKeyhole size={13} /> 2FA enabled
            </p>
            <p className="flex items-center gap-1 rounded-xl bg-violet-50 p-2">
              <ShieldCheck size={13} /> Report & block controls
            </p>
          </div>
        </PhoneFrame>
      </div>
    </GlassCard>
  </section>
);
