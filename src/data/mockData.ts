import {
  CampaignRow,
  CategorySharePoint,
  EventPerformanceRow,
  FunnelPoint,
  MiniEvent,
  ModerationItem,
  MvpMatrixRow,
  RoadmapRow,
  SalesTrendPoint,
  TrafficSourcePoint,
} from '../types/ui';

export const miniEvents: MiniEvent[] = [
  { id: 'e1', title: 'Neon Indie Night', date: 'Fri, 19:00', city: 'Moscow', category: 'Music', attendees: 128 },
  { id: 'e2', title: 'Volunteering: River Cleanup', date: 'Sat, 10:00', city: 'Kazan', category: 'Volunteering', attendees: 64, badge: 'Impact' },
  { id: 'e3', title: 'Startup Meetup #42', date: 'Sun, 15:00', city: 'SPB', category: 'Business', attendees: 212 },
];

export const salesTrend: SalesTrendPoint[] = [
  { day: 'Mon', sales: 34, revenue: 1200 },
  { day: 'Tue', sales: 49, revenue: 1730 },
  { day: 'Wed', sales: 58, revenue: 2210 },
  { day: 'Thu', sales: 72, revenue: 3090 },
  { day: 'Fri', sales: 81, revenue: 3650 },
  { day: 'Sat', sales: 96, revenue: 4420 },
  { day: 'Sun', sales: 69, revenue: 2980 },
];

export const funnelData: FunnelPoint[] = [
  { stage: 'Impressions', value: 108000 },
  { stage: 'Opens', value: 47300 },
  { stage: 'Clicks', value: 18500 },
  { stage: 'Orders', value: 6100 },
  { stage: 'Paid', value: 4920 },
];

export const categoryShare: CategorySharePoint[] = [
  { name: 'Music', value: 34 },
  { name: 'Education', value: 18 },
  { name: 'Volunteering', value: 15 },
  { name: 'Sport', value: 14 },
  { name: 'Community', value: 19 },
];

export const trafficSources: TrafficSourcePoint[] = [
  { channel: 'In-app Ads', visits: 6200 },
  { channel: 'Social', visits: 3900 },
  { channel: 'Search / SEO', visits: 2800 },
  { channel: 'Direct', visits: 2100 },
  { channel: 'Referral', visits: 1600 },
];

export const topEventsTable: EventPerformanceRow[] = [
  { event: 'Neon Indie Night', views: 18800, clicks: 3550, orders: 940, paid: 870, revenue: '₽1.48M', status: 'Active' },
  { event: 'Volunteer Bootcamp', views: 8200, clicks: 1270, orders: 420, paid: 386, revenue: '₽0.32M', status: 'Active' },
  { event: 'AI Product Breakfast', views: 11200, clicks: 2025, orders: 560, paid: 521, revenue: '₽0.95M', status: 'Paused' },
  { event: 'Rooftop Cinema', views: 6400, clicks: 990, orders: 310, paid: 282, revenue: '₽0.24M', status: 'Draft' },
];

export const campaignsTable: CampaignRow[] = [
  { campaign: 'Lookalike: music lovers', budget: '₽120k', spend: '₽92k', impressions: 530000, ctr: '2.8%', regs: 1090, cpa: '₽84', state: 'Running' },
  { campaign: 'Retarget: cart abandoners', budget: '₽65k', spend: '₽41k', impressions: 202000, ctr: '3.5%', regs: 690, cpa: '₽59', state: 'Learning' },
  { campaign: 'Volunteer communities', budget: '₽40k', spend: '₽34k', impressions: 148000, ctr: '2.1%', regs: 404, cpa: '₽84', state: 'Paused' },
];

export const moderationQueue: ModerationItem[] = [
  { id: 'M-1092', type: 'Event', issue: 'Potential prohibited content in description', risk: 'High', location: 'Moscow' },
  { id: 'M-1093', type: 'Organizer', issue: 'Document mismatch during verification', risk: 'Medium', location: 'SPB' },
  { id: 'M-1094', type: 'Message', issue: 'Spam links in group chat', risk: 'High', location: 'Kazan' },
  { id: 'M-1095', type: 'Group', issue: 'Premium bypass attempt (>4 users)', risk: 'Medium', location: 'Novosibirsk' },
];

export const mvpMatrix: MvpMatrixRow[] = [
  { module: 'Auth / Profile', features: 'Phone login, interests, achievements', priority: 'P0', status: 'In MVP' },
  { module: 'Events Catalog', features: 'Search, filters, categories, city feed', priority: 'P0', status: 'In MVP' },
  { module: 'Event Details', features: 'Who is going, invite friends, CTA', priority: 'P0', status: 'In MVP' },
  { module: 'Ticketing', features: 'Checkout, QR ticket, wallet and calendar', priority: 'P0', status: 'In MVP' },
  { module: 'Groups & Chat', features: 'Group chat, premium >4 participants', priority: 'P1', status: 'In Progress' },
  { module: 'Organizer Studio', features: 'KPI board, event management', priority: 'P0', status: 'In MVP' },
  { module: 'Ads Cabinet', features: 'Promote event, budget and forecast', priority: 'P1', status: 'In Progress' },
  { module: 'Moderation', features: 'Queue, risk levels, actions', priority: 'P0', status: 'In MVP' },
  { module: 'Achievements', features: 'Gamified profile progression', priority: 'P2', status: 'Planned' },
  { module: 'SEO + ICS', features: 'Search indexing + calendar sync', priority: 'P2', status: 'Planned' },
];

export const roadmapRows: RoadmapRow[] = [
  { sprint: 'S1', title: 'Core Auth + Event Feed', focus: 'Onboarding, city feed, filters' },
  { sprint: 'S2', title: 'Event Card + Ticket Flow', focus: 'Event details, checkout, QR ticket' },
  { sprint: 'S3', title: 'Organizer Studio', focus: 'Event management and baseline KPI' },
  { sprint: 'S4', title: 'Analytics + Ads', focus: 'Traffic channels, campaign optimization' },
  { sprint: 'S5', title: 'Groups + Chat', focus: 'Invite friends, premium groups >4' },
  { sprint: 'S6', title: 'Moderation & Safety', focus: 'Risk queue, verification and anti-spam' },
];
