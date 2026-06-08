import type { IconName } from '@/lib/icons';
import type { ScreenId } from '@/lib/routes';

export type NavItem = {
  id: string;
  go: ScreenId;
  icon: IconName;
  t: string;
  badge?: string;
};
export type NavGroup = { label?: string; items: NavItem[] };

export type Role = 'claimant' | 'respondent' | 'neutral' | 'admin';

export const ROLE_META: Record<
  Role,
  { name: string; role: string; av: string; cls: string }
> = {
  claimant: { name: 'John Doe', role: 'Claimant', av: 'JD', cls: 'av-c' },
  respondent: { name: 'Acme Corp Ltd.', role: 'Respondent', av: 'AC', cls: 'av-r' },
  neutral: { name: 'Ananya Sharma', role: 'Arbitrator', av: 'AS', cls: 'av-n' },
  admin: { name: 'R. Reddy', role: 'Administrator', av: 'RR', cls: 'av-a' },
};

export const claimantNav: NavGroup[] = [
  {
    items: [
      { id: 'dash', go: 'claimant-dash', icon: 'grid', t: 'Dashboard' },
      { id: 'cases', go: 'claimant-case', icon: 'folder', t: 'My Cases' },
      { id: 'file', go: 'file-dispute', icon: 'plus', t: 'File New Dispute' },
      { id: 'hear', go: 'hearing-room', icon: 'video', t: 'Hearings' },
      { id: 'docs', go: 'doc-vault', icon: 'doc', t: 'Documents' },
      { id: 'pay', go: 'claimant-dash', icon: 'card', t: 'Payments' },
    ],
  },
  {
    label: 'Account',
    items: [
      { id: 'notif', go: 'notifications', icon: 'bell', t: 'Notifications', badge: '3' },
      { id: 'prof', go: 'claimant-dash', icon: 'user', t: 'Profile' },
    ],
  },
];

export const respNav: NavGroup[] = [
  {
    items: [
      { id: 'dash', go: 'respondent-dash', icon: 'grid', t: 'Dashboard' },
      { id: 'cases', go: 'claimant-case', icon: 'folder', t: 'My Cases', badge: '1' },
      { id: 'ev', go: 'doc-vault', icon: 'doc', t: 'Evidence' },
      { id: 'hear', go: 'hearing-room', icon: 'video', t: 'Hearings' },
      { id: 'set', go: 'mediation-room', icon: 'msg', t: 'Settlement' },
    ],
  },
  {
    label: 'Account',
    items: [
      { id: 'notif', go: 'notifications', icon: 'bell', t: 'Notifications', badge: '2' },
      { id: 'prof', go: 'respondent-dash', icon: 'user', t: 'Profile' },
    ],
  },
];

export const neutralNav: NavGroup[] = [
  {
    items: [
      { id: 'dash', go: 'neutral-dash', icon: 'grid', t: 'Dashboard' },
      { id: 'cases', go: 'neutral-dash', icon: 'folder', t: 'Assigned Cases', badge: '3' },
      { id: 'cal', go: 'hearing-scheduler', icon: 'calendar', t: 'Calendar' },
      { id: 'hear', go: 'hearing-room', icon: 'video', t: 'Hearings' },
      { id: 'awards', go: 'award', icon: 'award', t: 'Awards' },
    ],
  },
  {
    label: 'Account',
    items: [
      { id: 'msg', go: 'notifications', icon: 'msg', t: 'Messages', badge: '5' },
      { id: 'avail', go: 'neutral-dash', icon: 'clock', t: 'Availability' },
    ],
  },
];

export const adminNav: NavGroup[] = [
  {
    items: [
      { id: 'dash', go: 'admin-dash', icon: 'grid', t: 'Dashboard' },
      { id: 'cases', go: 'case-mgmt', icon: 'folder', t: 'Cases', badge: '12' },
      { id: 'users', go: 'admin-dash', icon: 'users', t: 'Users' },
      { id: 'neutrals', go: 'assign-neutral', icon: 'scale', t: 'Neutrals' },
      { id: 'pay', go: 'payment-dash', icon: 'card', t: 'Payments' },
      { id: 'rep', go: 'analytics', icon: 'chart', t: 'Reports' },
    ],
  },
  {
    label: 'System',
    items: [
      { id: 'notif', go: 'notifications', icon: 'bell', t: 'Notifications' },
      { id: 'cms', go: 'admin-dash', icon: 'doc', t: 'CMS' },
      { id: 'set', go: 'admin-dash', icon: 'gear', t: 'Settings' },
    ],
  },
];
