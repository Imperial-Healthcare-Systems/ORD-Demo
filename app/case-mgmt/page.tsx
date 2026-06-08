'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { adminNav } from '@/lib/nav';

export default function CaseMgmtPage() {
  const go = useGo();
  const filters = ['All', 'Pending', 'Assigned', 'In Progress', 'Hearing', 'Closed'];
  const pages = ['1', '2', '3', '4', '5'];
  return (
    <div className="portal">
      <Sidebar role="admin" active="cases" items={adminNav} />
      <div className="main">
        <Topbar
          title="Case Management"
          sub="632 active cases across the platform"
          cta={
            <button className="btn btn-ghost btn-sm">
              <Icon name="doc" width={15} height={15} /> Export
            </button>
          }
        />
        <div className="content">
          <div className="card">
            <div
              className="card-pad"
              style={{
                paddingBottom: 14,
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                borderBottom: '1px solid var(--line)',
              }}
            >
              {filters.map((f, i) => (
                <button className={`btn ${i === 0 ? 'btn-navy' : 'btn-ghost'} btn-sm`} key={i}>
                  {f}
                </button>
              ))}
              <div className="spacer" style={{ flex: 1 }} />
              <div className="searchbox" style={{ width: 220 }}>
                <Icon name="search" />
                <span>Search…</span>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Claimant</th>
                  <th>Respondent</th>
                  <th>Status</th>
                  <th>Neutral</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={() => go('assign-neutral')}>
                  <td className="cid">ODR-2026-024</td>
                  <td>Priya Mehta</td>
                  <td>Beta Industries</td>
                  <td>
                    <span className="chip chip-pending">
                      <span className="d" />
                      Unassigned
                    </span>
                  </td>
                  <td className="muted">—</td>
                  <td className="muted">10 May</td>
                </tr>
                <tr onClick={() => go('hearing-room')}>
                  <td className="cid">ODR-2026-001</td>
                  <td>John Doe</td>
                  <td>Acme Corp Ltd.</td>
                  <td>
                    <span className="chip chip-scheduled">
                      <span className="d" />
                      Hearing
                    </span>
                  </td>
                  <td>A. Sharma</td>
                  <td className="muted">09 May</td>
                </tr>
                <tr>
                  <td className="cid">ODR-2026-014</td>
                  <td>Rahul Verma</td>
                  <td>Gamma Pvt. Ltd.</td>
                  <td>
                    <span className="chip chip-evidence">
                      <span className="d" />
                      Evidence
                    </span>
                  </td>
                  <td>A. Sharma</td>
                  <td className="muted">08 May</td>
                </tr>
                <tr>
                  <td className="cid">ODR-2026-019</td>
                  <td>Sneha Iyer</td>
                  <td>Delta Solutions</td>
                  <td>
                    <span className="chip chip-progress">
                      <span className="d" />
                      Award Due
                    </span>
                  </td>
                  <td>R. Kapoor</td>
                  <td className="muted">07 May</td>
                </tr>
                <tr>
                  <td className="cid">ODR-2026-031</td>
                  <td>Arjun Singh</td>
                  <td>Omega Corp</td>
                  <td>
                    <span className="chip chip-assigned">
                      <span className="d" />
                      Assigned
                    </span>
                  </td>
                  <td>M. Iyer</td>
                  <td className="muted">06 May</td>
                </tr>
                <tr>
                  <td className="cid">ODR-2026-008</td>
                  <td>Kavya Rao</td>
                  <td>Zeta Traders</td>
                  <td>
                    <span className="chip chip-closed">
                      <span className="d" />
                      Closed
                    </span>
                  </td>
                  <td>A. Sharma</td>
                  <td className="muted">04 May</td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--line)',
              }}
            >
              <span className="muted" style={{ fontSize: '12.5px' }}>
                Showing 6 of 632 cases
              </span>
              <div style={{ display: 'flex', gap: 6 }}>
                {pages.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer',
                      ...(i === 0
                        ? { background: 'var(--navy)', color: '#fff' }
                        : { border: '1px solid var(--line)', color: 'var(--navy-2)' }),
                    }}
                  >
                    {p}
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
