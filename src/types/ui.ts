import { ReactNode } from 'react';

export type RoleType = 'user' | 'organizer' | 'admin';

export interface MiniEvent {
  id: string;
  title: string;
  date: string;
  city: string;
  category: string;
  attendees: number;
  badge?: string;
}

export interface SalesTrendPoint {
  day: string;
  sales: number;
  revenue: number;
}

export interface FunnelPoint {
  stage: string;
  value: number;
}

export interface CategorySharePoint {
  name: string;
  value: number;
}

export interface TrafficSourcePoint {
  channel: string;
  visits: number;
}

export interface EventPerformanceRow {
  event: string;
  views: number;
  clicks: number;
  orders: number;
  paid: number;
  revenue: string;
  status: 'Active' | 'Paused' | 'Draft';
}

export interface CampaignRow {
  campaign: string;
  budget: string;
  spend: string;
  impressions: number;
  ctr: string;
  regs: number;
  cpa: string;
  state: 'Running' | 'Learning' | 'Paused';
}

export interface ModerationItem {
  id: string;
  type: 'Event' | 'Organizer' | 'Message' | 'Group';
  issue: string;
  risk: 'High' | 'Medium';
  location: string;
}

export interface MvpMatrixRow {
  module: string;
  features: string;
  priority: 'P0' | 'P1' | 'P2';
  status: 'In MVP' | 'In Progress' | 'Planned';
}

export interface RoadmapRow {
  sprint: string;
  title: string;
  focus: string;
}

export interface Column<T> {
  key: keyof T;
  label: string;
  align?: 'left' | 'right' | 'center';
}

export interface StatItem {
  label: string;
  value: string;
  tone?: 'default' | 'success' | 'warning';
}

export interface IconAction {
  icon: ReactNode;
  label: string;
}
