'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { claimantNav } from '@/lib/nav';

export default function ClaimantDashPage() {
  const go = useGo();
  return (
    <div className="portal">
      <Sidebar role="claimant" active="dash" items={claimantNav} />
      <div className="main">
        <Topbar
          title="Welcome back, John"
          sub="Here's what's happening with your cases today."
          cta={
            <a className="btn btn-gold hot" onClick={() => go('file-dispute')}>
              <Icon name="plus" width={16} height={16} /> File New Dispute
            </a>
          }
        />
        <div className="content">
          <div className="kpi-grid">
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--amber-soft)', color: 'var(--amber)' }}>
                <Icon name="folder" />
              </div>
              <div className="lbl">Active Cases</div>
              <div className="val">3</div>
              <span className="trend up">▲ 1 this month</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--emerald-soft)', color: 'var(--emerald)' }}>
                <Icon name="check" />
              </div>
              <div className="lbl">Closed Cases</div>
              <div className="val">7</div>
              <span className="trend up">▲ 92% settled</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
                <Icon name="calendar" />
              </div>
              <div className="lbl">Upcoming Hearings</div>
              <div className="val">2</div>
              <span className="trend flat">Next in 4 days</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Icon name="card" />
              </div>
              <div className="lbl">Payments Made</div>
              <div className="val" style={{ fontSize: 24 }}>
                ₹48,500
              </div>
              <span className="trend flat">Across 10 cases</span>
            </div>
          </div>

          <div className="grid-2">
            <div className="card">
              <div className="card-pad" style={{ paddingBottom: 0 }}>
                <div className="section-head">
                  <h2>Recent Cases</h2>
                  <a className="link-gold" onClick={() => go('claimant-case')}>
                    View all →
                  </a>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Respondent</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={() => go('claimant-case')}>
                    <td className="cid">ODR-2026-001</td>
                    <td>Acme Corp Ltd.</td>
                    <td>Commercial</td>
                    <td>
                      <span className="chip chip-progress">
                        <span className="d" />
                        In Progress
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>→</td>
                  </tr>
                  <tr onClick={() => go('claimant-case')}>
                    <td className="cid">ODR-2026-002</td>
                    <td>Beta Industries</td>
                    <td>Service Dispute</td>
                    <td>
                      <span className="chip chip-scheduled">
                        <span className="d" />
                        Hearing Scheduled
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>→</td>
                  </tr>
                  <tr onClick={() => go('claimant-case')}>
                    <td className="cid">ODR-2026-003</td>
                    <td>Gamma Pvt. Ltd.</td>
                    <td>Contractual</td>
                    <td>
                      <span className="chip chip-evidence">
                        <span className="d" />
                        Evidence Stage
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>→</td>
                  </tr>
                  <tr onClick={() => go('claimant-case')}>
                    <td className="cid">ODR-2025-118</td>
                    <td>Delta Services</td>
                    <td>Commercial</td>
                    <td>
                      <span className="chip chip-closed">
                        <span className="d" />
                        Resolved
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>→</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card card-pad">
              <div className="section-head">
                <h2>Upcoming Hearings</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div
                  style={{
                    display: 'flex',
                    gap: 13,
                    padding: 15,
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 11,
                      background: 'var(--navy)',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <b style={{ fontSize: 16, fontFamily: 'var(--serif)' }}>12</b>
                    <small style={{ fontSize: 9, letterSpacing: '.5px' }}>MAY</small>
                  </div>
                  <div style={{ flex: 1 }}>
                    <b style={{ fontSize: 13.5, color: 'var(--navy)' }}>
                      ODR-2026-001 · Acme Corp
                    </b>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                      <Icon name="clock" width={12} height={12} style={{ verticalAlign: -2 }} /> 10:30
                      AM · Video Hearing
                    </div>
                  </div>
                  <button className="btn btn-gold btn-sm hot" onClick={() => go('hearing-room')}>
                    Join
                  </button>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 13,
                    padding: 15,
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 11,
                      background: 'var(--navy-3)',
                      color: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <b style={{ fontSize: 16, fontFamily: 'var(--serif)' }}>18</b>
                    <small style={{ fontSize: 9, letterSpacing: '.5px' }}>MAY</small>
                  </div>
                  <div style={{ flex: 1 }}>
                    <b style={{ fontSize: 13.5, color: 'var(--navy)' }}>
                      ODR-2026-002 · Beta Inds.
                    </b>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                      <Icon name="clock" width={12} height={12} style={{ verticalAlign: -2 }} /> 03:00
                      PM · Mediation
                    </div>
                  </div>
                  <button className="btn btn-ghost btn-sm">Details</button>
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,var(--navy),var(--navy-2))',
                    borderRadius: 13,
                    padding: 18,
                    color: '#fff',
                    marginTop: 4,
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 5 }}>
                    Need to raise a new dispute?
                  </div>
                  <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 13 }}>
                    File online in under 5 minutes with guided steps.
                  </div>
                  <button className="btn btn-gold btn-sm" onClick={() => go('file-dispute')}>
                    <Icon name="plus" width={14} height={14} /> Start Filing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
