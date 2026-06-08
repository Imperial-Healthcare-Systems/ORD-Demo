'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Donut from '@/components/Donut';
import { useGo } from '@/lib/useGo';
import { adminNav } from '@/lib/nav';

export default function AdminDashPage() {
  const go = useGo();
  return (
    <div className="portal">
      <Sidebar role="admin" active="dash" items={adminNav} />
      <div className="main">
        <Topbar title="Control Dashboard" sub="Platform-wide overview · live as of today" />
        <div className="content">
          <div className="kpi-grid">
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
                <Icon name="folder" />
              </div>
              <div className="lbl">Total Cases</div>
              <div className="val">1,248</div>
              <span className="trend up">▲ 12% MoM</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--amber-soft)', color: 'var(--amber)' }}>
                <Icon name="clock" />
              </div>
              <div className="lbl">Active Cases</div>
              <div className="val">632</div>
              <span className="trend up">▲ 8% MoM</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--emerald-soft)', color: 'var(--emerald)' }}>
                <Icon name="card" />
              </div>
              <div className="lbl">Revenue (This Month)</div>
              <div className="val" style={{ fontSize: 23 }}>
                ₹18.7L
              </div>
              <span className="trend up">▲ 9% MoM</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Icon name="check" />
              </div>
              <div className="lbl">Settlement Rate</div>
              <div className="val">92%</div>
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
            <div className="card card-pad">
              <div className="section-head">
                <h2>Activity Feed</h2>
              </div>
              <div className="activity">
                <div className="a">
                  <div className="di" style={{ background: 'var(--blue-soft)' }}>
                    📁
                  </div>
                  <div>
                    <div className="tx">
                      <b>New case filed</b> — ODR-2026-024 by Priya Mehta
                    </div>
                    <div className="tm">2 min ago</div>
                  </div>
                </div>
                <div className="a">
                  <div className="di" style={{ background: 'var(--emerald-soft)' }}>
                    ✅
                  </div>
                  <div>
                    <div className="tx">
                      <b>Award issued</b> — ODR-2026-007 closed
                    </div>
                    <div className="tm">26 min ago</div>
                  </div>
                </div>
                <div className="a">
                  <div className="di" style={{ background: 'var(--amber-soft)' }}>
                    📹
                  </div>
                  <div>
                    <div className="tx">
                      <b>Hearing scheduled</b> — ODR-2026-001 on 12 May
                    </div>
                    <div className="tm">1 hr ago</div>
                  </div>
                </div>
                <div className="a">
                  <div className="di" style={{ background: '#EDE9FE' }}>
                    💳
                  </div>
                  <div>
                    <div className="tx">
                      <b>Payment received</b> — ₹25,000 filing fee
                    </div>
                    <div className="tm">2 hrs ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
