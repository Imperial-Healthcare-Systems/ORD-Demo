// Central screen registry: id -> URL path + breadcrumb label.
// The original demo navigated by screen id via go(id); here each screen is a route.
export const SCREENS = {
  'home': { path: '/', crumb: 'Public Website' },
  'login': { path: '/login', crumb: 'Authentication' },
  'claimant-dash': { path: '/claimant-dash', crumb: 'Claimant ▸ Dashboard' },
  'file-dispute': { path: '/file-dispute', crumb: 'Claimant ▸ File a Dispute' },
  'claimant-case': { path: '/claimant-case', crumb: 'Claimant ▸ Case Details' },
  'doc-vault': { path: '/doc-vault', crumb: 'Claimant ▸ Document Vault' },
  'respondent-dash': { path: '/respondent-dash', crumb: 'Respondent ▸ Dashboard' },
  'neutral-dash': { path: '/neutral-dash', crumb: 'Neutral ▸ Dashboard' },
  'hearing-scheduler': { path: '/hearing-scheduler', crumb: 'Neutral ▸ Schedule Hearing' },
  'hearing-room': { path: '/hearing-room', crumb: 'Live Hearing Room' },
  'mediation-room': { path: '/mediation-room', crumb: 'Private Mediation Room' },
  'award': { path: '/award', crumb: 'Neutral ▸ Award Generation' },
  'admin-dash': { path: '/admin-dash', crumb: 'Admin ▸ Dashboard' },
  'case-mgmt': { path: '/case-mgmt', crumb: 'Admin ▸ Case Management' },
  'assign-neutral': { path: '/assign-neutral', crumb: 'Admin ▸ Assign Neutral' },
  'payment-dash': { path: '/payment-dash', crumb: 'Admin ▸ Payments' },
  'analytics': { path: '/analytics', crumb: 'Admin ▸ Analytics' },
  'notifications': { path: '/notifications', crumb: 'Admin ▸ Notifications' },
  'mobile': { path: '/mobile', crumb: 'Responsive Views' },
} as const;

export type ScreenId = keyof typeof SCREENS;

export function pathFor(id: ScreenId): string {
  return SCREENS[id].path;
}

export function crumbForPath(pathname: string): string {
  const entry = Object.values(SCREENS).find((s) => s.path === pathname);
  return entry?.crumb ?? 'ODR Platform';
}
