'use client';
import Icon from './Icon';
import BrandMark from './BrandMark';
import { useGo } from '@/lib/useGo';
import { useNav } from './NavProvider';
import { ROLE_META, type NavGroup, type Role } from '@/lib/nav';

export default function Sidebar({
  role,
  active,
  items,
}: {
  role: Role;
  active: string;
  items: NavGroup[];
}) {
  const go = useGo();
  const { open, setOpen } = useNav();
  const meta = ROLE_META[role];
  return (
    <>
      <div
        className={`nav-backdrop${open ? ' show' : ''}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="s-brand">
          <BrandMark size={36} />
          <div className="t">
            ODR<small>PLATFORM</small>
          </div>
        </div>
        <nav className="nav">
          {items.map((g, gi) => (
            <div key={gi}>
              {g.label && <div className="nav-label">{g.label}</div>}
              {g.items.map((it) => (
                <a
                  key={it.id}
                  className={it.id === active ? 'on' : ''}
                  onClick={() => {
                    setOpen(false);
                    go(it.go);
                  }}
                >
                  <Icon name={it.icon} />
                  <span>{it.t}</span>
                  {it.badge && <span className="badge">{it.badge}</span>}
                </a>
              ))}
            </div>
          ))}
        </nav>
        <div className="s-foot">
          <div className={`av ${meta.cls}`} style={{ width: 34, height: 34 }}>
            {meta.av}
          </div>
          <div className="nm">
            {meta.name}
            <small>{meta.role}</small>
          </div>
          <span
            style={{ marginLeft: 'auto', cursor: 'pointer', color: '#64748B' }}
            onClick={() => go('login')}
          >
            <Icon name="logout" width={16} height={16} />
          </span>
        </div>
      </aside>
    </>
  );
}
