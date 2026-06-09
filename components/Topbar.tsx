'use client';
import type { ReactNode } from 'react';
import Icon from './Icon';
import { useGo } from '@/lib/useGo';
import { useNav } from './NavProvider';

export default function Topbar({
  title,
  sub,
  cta,
}: {
  title: ReactNode;
  sub?: ReactNode;
  cta?: ReactNode;
}) {
  const go = useGo();
  const { setOpen } = useNav();
  return (
    <header className="topbar">
      <button className="hamb" aria-label="Menu" onClick={() => setOpen(true)}>
        <Icon name="grid" width={20} height={20} />
      </button>
      <h1>
        {title}
        {sub && <small>{sub}</small>}
      </h1>
      <div className="spacer" />
      <div className="searchbox">
        <Icon name="search" />
        <span>Search cases, parties, documents…</span>
      </div>
      <div className="icon-btn" onClick={() => go('notifications')}>
        <Icon name="bell" />
        <span className="dot" />
      </div>
      {cta}
    </header>
  );
}
