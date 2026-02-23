import { CalendarDays, House, Ticket, UserCircle2 } from 'lucide-react';

export const BottomNav = () => {
  const items = [House, CalendarDays, Ticket, UserCircle2];

  return (
    <div className="mt-3 flex justify-between rounded-2xl bg-violet-50 px-3 py-2 text-violet-600">
      {items.map((Icon, idx) => (
        <Icon key={idx} size={16} className={idx === 0 ? 'text-violet-800' : ''} />
      ))}
    </div>
  );
};
