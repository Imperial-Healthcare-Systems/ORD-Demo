'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { adminNav } from '@/lib/nav';

export default function NotificationsPage() {
  const filters = ['Email Logs', 'SMS Logs', 'Notice Status'];
  return (
    <div className="portal">
      <Sidebar role="admin" active="notif" items={adminNav} />
      <div className="main">
        <Topbar
          title="Notification Center"
          sub="Email, SMS & notice delivery tracking"
        />
        <div className="content">
          <div className="card">
            <div
              className="card-pad"
              style={{
                paddingBottom: 14,
                display: 'flex',
                gap: 8,
                borderBottom: '1px solid var(--line)',
              }}
            >
              {filters.map((f, i) => (
                <button className={`btn ${i === 0 ? 'btn-navy' : 'btn-ghost'} btn-sm`} key={i}>
                  {f}
                </button>
              ))}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>To</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="strong">Notice of Dispute — ODR-2026-001</td>
                  <td>Acme Corp Ltd.</td>
                  <td>Email</td>
                  <td>
                    <span className="chip chip-paid">
                      <span className="d" />
                      Delivered
                    </span>
                  </td>
                  <td className="muted">05 May</td>
                </tr>
                <tr>
                  <td className="strong">Hearing Scheduled — 12 May</td>
                  <td>John Doe</td>
                  <td>Email</td>
                  <td>
                    <span className="chip chip-paid">
                      <span className="d" />
                      Delivered
                    </span>
                  </td>
                  <td className="muted">09 May</td>
                </tr>
                <tr>
                  <td className="strong">Hearing Reminder</td>
                  <td>All Parties</td>
                  <td>SMS</td>
                  <td>
                    <span className="chip chip-paid">
                      <span className="d" />
                      Delivered
                    </span>
                  </td>
                  <td className="muted">11 May</td>
                </tr>
                <tr>
                  <td className="strong">Award Issued — ODR-2026-007</td>
                  <td>Kavya Rao</td>
                  <td>Email</td>
                  <td>
                    <span className="chip chip-paid">
                      <span className="d" />
                      Delivered
                    </span>
                  </td>
                  <td className="muted">04 May</td>
                </tr>
                <tr>
                  <td className="strong">Payment Receipt</td>
                  <td>Priya Mehta</td>
                  <td>Email</td>
                  <td>
                    <span className="chip chip-pending">
                      <span className="d" />
                      Queued
                    </span>
                  </td>
                  <td className="muted">Today</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
