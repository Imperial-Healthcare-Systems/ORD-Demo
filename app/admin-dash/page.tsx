'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Donut from '@/components/Donut';
import CountUp from '@/components/CountUp';
import { useGo } from '@/lib/useGo';
import { adminNav } from '@/lib/nav';
import { useEffect, useState } from 'react';

type Act = { di: string; e: string; b: string; t: string; tm: string };

const SEED: Act[] = [
  { di: 'var(--blue-soft)', e: '📁', b: 'New case filed', t: '— ODR-2026-024 by Priya Mehta', tm: '2 min ago' },
  { di: 'var(--emerald-soft)', e: '✅', b: 'Award issued', t: '— ODR-2026-007 closed', tm: '26 min ago' },
  { di: 'var(--amber-soft)', e: '📹', b: 'Hearing scheduled', t: '— ODR-2026-001 on 12 May', tm: '1 hr ago' },
  { di: '#EDE9FE', e: '💳', b: 'Payment received', t: '— ₹25,000 filing fee', tm: '2 hrs ago' },
];

const NEW: Act[] = [
  { di: 'var(--blue-soft)', e: '📁', b: 'New case filed', t: '— a new dispute just arrived', tm: 'just now' },
  { di: 'var(--emerald-soft)', e: '✅', b: 'Settlement reached', t: '— mediation closed amicably', tm: 'just now' },
  { di: '#FEE2E2', e: '⚖️', b: 'Hearing started', t: '— arbitration now live', tm: 'just now' },
  { di: '#EDE9FE', e: '💳', b: 'Payment received', t: '— filing fee cleared', tm: 'just now' },
  { di: 'var(--amber-soft)', e: '👤', b: 'Neutral assigned', t: '— expert matched to case', tm: 'just now' },
];

export default function AdminDashPage() {
  const go = useGo();
  const [feed, setFeed] = useState<Act[]>(SEED);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      const base = NEW[i % NEW.length];
      const item: Act = { ...base, t: `${base.t} #${i + 1}` };
      i += 1;
      setFeed((prev) => [item, ...prev].slice(0, 6));
    }, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="portal">
      <Sidebar role="admin" active="dash" items={adminNav} />
      <div className="main">
        <Topbar
          title="Control Dashboard"
          sub={<>Platform-wide overview · <span className="live-dot" /> live as of today</>}
        />
        <div className="content">
          <div className="kpi-grid">
            <div className="kpi reveal">
              <div className="ic" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
                <Icon name="folder" />
              </div>
              <div className="lbl">Total Cases</div>
              <div className="val"><CountUp value={1248} /></div>
              <span className="trend up">▲ 12% MoM</span>
            </div>
            <div className="kpi reveal">
              <div className="ic" style={{ background: 'var(--amber-soft)', color: 'var(--amber)' }}>
                <Icon name="clock" />
              </div>
              <div className="lbl">Active Cases</div>
              <div className="val"><CountUp value={632} /></div>
              <span className="trend up">▲ 8% MoM</span>
            </div>
            <div className="kpi reveal">
              <div className="ic" style={{ background: 'var(--emerald-soft)', color: 'var(--emerald)' }}>
                <Icon name="card" />
              </div>
              <div className="lbl">Revenue (This Month)</div>
              <div className="val" style={{ fontSize: 23 }}>
                <CountUp value={18.7} prefix="₹" suffix="L" />
              </div>
              <span className="trend up">▲ 9% MoM</span>
            </div>
            <div className="kpi reveal">
              <div className="ic" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Icon name="check" />
              </div>
              <div className="lbl">Settlement Rate</div>
              <div className="val"><CountUp value={92} suffix="%" /></div>
              <span className="trend up">▲ 3% MoM</span>
            </div>
          </div>

          <div className="grid-3" style={{ marginBottom: 22 }}>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Cases by Status</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <Donut
                  segs={[
                    { v: 52, color: '#D97706' },
                    { v: 25, color: '#2563EB' },
                    { v: 8, color: '#64748B' },
                    { v: 15, color: '#059669' },
                  ]}
                />
                <div className="legend">
                  <div className="lg">
                    <span className="sw" style={{ background: '#D97706' }} />
                    In Progress<span className="v">632</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#2563EB' }} />
                    Hearing<span className="v">312</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#64748B' }} />
                    Pending<span className="v">100</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#059669' }} />
                    Closed<span className="v">204</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Cases by Type</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <Donut
                  segs={[
                    { v: 45, color: '#0F172A' },
                    { v: 25, color: '#D4AF37' },
                    { v: 15, color: '#2563EB' },
                    { v: 15, color: '#94A3B8' },
                  ]}
                />
                <div className="legend">
                  <div className="lg">
                    <span className="sw" style={{ background: '#0F172A' }} />
                    Commercial<span className="v">45%</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#D4AF37' }} />
                    Service<span className="v">25%</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#2563EB' }} />
                    Contractual<span className="v">15%</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#94A3B8' }} />
                    Others<span className="v">15%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Monthly Revenue</h2>
              </div>
              <div className="bars">
                {[55, 68, 60, 82, 74, 95].map((h, i) => (
                  <div className="bgrp" key={i}>
                    <div className="bcol">
                      <div
                        className="b"
                        style={{
                          height: `${h}%`,
                          background: 'linear-gradient(180deg,var(--gold),var(--gold-deep))',
                        }}
                      />
                    </div>
                    <div className="bl">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid-2">
            <div className="card">
              <div className="card-pad" style={{ paddingBottom: 0 }}>
                <div className="section-head">
                  <h2>Recent Cases</h2>
                  <a className="link-gold" onClick={() => go('case-mgmt')}>
                    Manage all →
                  </a>
                </div>
              </div>
              <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Parties</th>
                    <th>Status</th>
                    <th>Neutral</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={() => go('case-mgmt')}>
                    <td className="cid">ODR-2026-001</td>
                    <td>Doe vs Acme</td>
                    <td>
                      <span className="chip chip-scheduled">
                        <span className="d" />
                        Hearing
                      </span>
                    </td>
                    <td>A. Sharma</td>
                  </tr>
                  <tr onClick={() => go('assign-neutral')}>
                    <td className="cid">ODR-2026-024</td>
                    <td>Priya M. vs Beta</td>
                    <td>
                      <span className="chip chip-pending">
                        <span className="d" />
                        Unassigned
                      </span>
                    </td>
                    <td>—</td>
                  </tr>
                  <tr onClick={() => go('case-mgmt')}>
                    <td className="cid">ODR-2026-019</td>
                    <td>Sneha vs Delta</td>
                    <td>
                      <span className="chip chip-progress">
                        <span className="d" />
                        Award Due
                      </span>
                    </td>
                    <td>A. Sharma</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Activity Feed</h2>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'var(--red)',
                  }}
                >
                  <span className="live-dot" />
                  LIVE
                </span>
              </div>
              <div className="activity">
                {feed.map((it, i) => (
                  <div className="a" key={i} style={{ animation: 'slideInMsg .4s both' }}>
                    <div className="di" style={{ background: it.di }}>
                      {it.e}
                    </div>
                    <div>
                      <div className="tx">
                        <b>{it.b}</b> {it.t}
                      </div>
                      <div className="tm">{it.tm}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
