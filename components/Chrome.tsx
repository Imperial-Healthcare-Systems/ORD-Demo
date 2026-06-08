'use client';
import { usePathname } from 'next/navigation';
import { useGo } from '@/lib/useGo';
import { crumbForPath } from '@/lib/routes';

export default function Chrome() {
  const pathname = usePathname();
  const go = useGo();
  return (
    <div className="chrome">
      <div className="brand">
        <div className="mark">⚖</div>
        <div>
          ODR Platform <small>by Imperial Tech Innovations</small>
        </div>
      </div>
      <span className="demo-tag">● Interactive Demo</span>
      <div className="spacer" />
      <div className="crumbs">
        <b>{crumbForPath(pathname)}</b>
      </div>
      <button className="reset-btn" onClick={() => go('home')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
          <path d="M3 3v5h5" />
        </svg>
        Restart Demo
      </button>
    </div>
  );
}
