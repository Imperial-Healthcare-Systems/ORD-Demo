'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { neutralNav } from '@/lib/nav';

export default function NeutralDashPage() {
  const go = useGo();
  return (
    <div className="portal">
      <Sidebar role="neutral" active="dash" items={neutralNav} />
      <div className="main">
        <Topbar
          title="Welcome, Ananya"
          sub="Your arbitration & mediation workload at a glance."
        />
        <div className="content">
          <div className="kpi-grid">
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
                <Icon name="folder" />
              </div>
              <div className="lbl">Assigned Cases</div>
              <div className="val">5</div>
              <span className="trend up">▲ 2 new</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--amber-soft)', color: 'var(--amber)' }}>
                <Icon name="calendar" />
              </div>
              <div className="lbl">Upcoming Hearings</div>
              <div className="val">3</div>
              <span className="trend flat">This week</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Icon name="award" />
              </div>
              <div className="lbl">Awards Pending</div>
              <div className="val">2</div>
              <span className="trend flat">To be drafted</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--emerald-soft)', color: 'var(--emerald)' }}>
                <Icon name="check" />
              </div>
              <div className="lbl">Completed</div>
              <div className="val">18</div>
              <span className="trend up">▲ 96% upheld</span>
            </div>
          </div>
          <div className="grid-2">
            <div className="card">
              <div className="card-pad" style={{ paddingBottom: 0 }}>
                <div className="section-head">
                  <h2>Assigned Cases</h2>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Parties</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={() => go('hearing-scheduler')}>
                    <td className="cid">ODR-2026-001</td>
                    <td>John Doe vs Acme Corp Ltd.</td>
                    <td>
                      <span className="chip chip-scheduled">
                        <span className="d" />
                        Hearing Scheduled
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>→</td>
                  </tr>
                  <tr onClick={() => go('hearing-scheduler')}>
                    <td className="cid">ODR-2026-014</td>
                    <td>Rahul V. vs Gamma Pvt. Ltd.</td>
                    <td>
                      <span className="chip chip-evidence">
                        <span className="d" />
                        Evidence Stage
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>→</td>
                  </tr>
                  <tr onClick={() => go('award')}>
                    <td className="cid">ODR-2026-019</td>
                    <td>Sneha I. vs Delta Solutions</td>
                    <td>
                      <span className="chip chip-progress">
                        <span className="d" />
                        Award Due
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>→</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>This Week</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div
                  style={{
                    display: 'flex',
                    gap: 13,
                    padding: 14,
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 11,
                      background: 'var(--gold)',
                      color: 'var(--navy)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <b style={{ fontSize: 15, fontFamily: 'var(--serif)' }}>12</b>
                    <small style={{ fontSize: 9 }}>MAY</small>
                  </div>
                  <div style={{ flex: 1 }}>
                    <b style={{ fontSize: 13, color: 'var(--navy)' }}>Hearing · ODR-2026-001</b>
                    <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                      10:30 AM · John Doe vs Acme Corp
                    </div>
                  </div>
                  <button className="btn btn-gold btn-sm hot" onClick={() => go('hearing-room')}>
                    Start
                  </button>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 13,
                    padding: 14,
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 11,
                      background: 'var(--navy-3)',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <b style={{ fontSize: 15, fontFamily: 'var(--serif)' }}>15</b>
                    <small style={{ fontSize: 9 }}>MAY</small>
                  </div>
                  <div style={{ flex: 1 }}>
                    <b style={{ fontSize: 13, color: 'var(--navy)' }}>Mediation · ODR-2026-014</b>
                    <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                      02:00 PM · Rahul V. vs Gamma
                    </div>
                  </div>
                  <button className="btn btn-ghost btn-sm" onClick={() => go('hearing-scheduler')}>
                    View
                  </button>
                </div>
                <button
                  className="btn btn-ghost"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
                  onClick={() => go('hearing-scheduler')}
                >
                  <Icon name="calendar" width={15} height={15} /> Open Full Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
