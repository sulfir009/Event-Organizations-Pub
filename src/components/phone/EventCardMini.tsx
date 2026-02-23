import { Users } from 'lucide-react';
import { MiniEvent } from '../../types/ui';
import { Chip } from '../ui/Chip';

export const EventCardMini = ({ event }: { event: MiniEvent }) => (
  <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-3">
    <div className="mb-2 flex items-center justify-between">
      <Chip>{event.category}</Chip>
      {event.badge && <Chip variant="outline">{event.badge}</Chip>}
    </div>
    <p className="text-sm font-semibold text-ink">{event.title}</p>
    <p className="mt-1 text-xs text-mutedInk">
      {event.date} · {event.city}
    </p>
    <p className="mt-2 flex items-center gap-1 text-xs text-violet-700">
      <Users size={12} /> {event.attendees} going
    </p>
  </div>
);
