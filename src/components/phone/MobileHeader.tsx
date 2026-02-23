import { Bell, Search } from 'lucide-react';

export const MobileHeader = ({ city }: { city: string }) => (
  <div className="mb-3 flex items-center justify-between">
    <div>
      <p className="text-xs text-mutedInk">Current city</p>
      <p className="text-sm font-semibold text-ink">{city}</p>
    </div>
    <div className="flex gap-2 text-violet-600">
      <button className="rounded-xl bg-violet-100 p-2">
        <Search size={14} />
      </button>
      <button className="rounded-xl bg-violet-100 p-2">
        <Bell size={14} />
      </button>
    </div>
  </div>
);
