'use client';
import { useState } from 'react';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import StatusChip from '@/components/StatusChip';
import { DB, useRerender } from '@/lib/data';
import { useToast } from '@/components/ToastProvider';
import { adminNav } from '@/lib/nav';

export default function NotificationsPage() {
  const toast = useToast();
  const rerender = useRerender();
  const [tab, setTab] = useState('Email Logs');

  const tabs = ['Email Logs', 'SMS Logs', 'Notice Status'];
  const unread = DB.notifications.filter((n) => !n.read).length;

  function markAll() {
    DB.notifications.forEach((n) => (n.read = true));
    rerender();
    toast('All marked as read');
  }

  const rows = DB.notifications.filter((n) =>
    tab === 'Email Logs'
      ? n.type === 'Email'
      : tab === 'SMS Logs'
      ? n.type === 'SMS'
      : n.sub.startsWith('Notice')
  );

  return (
    <div className="portal">
      <Sidebar role="admin" active="notif" items={adminNav} />
      <div className="main">
        <Topbar
          title="Notification Center"
          sub="Email, SMS & notice delivery tracking"
          cta={
            <button className="btn btn-ghost btn-sm" onClick={markAll}>
              <Icon name="check" width={15} height={15} /> Mark all read
              {unread ? ` (${unread})` : ''}
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
                borderBottom: '1px solid var(--line)',
              }}
            >
              {tabs.map((t) => (
                <button
                  className={`btn ${tab === t ? 'btn-navy' : 'btn-ghost'} btn-sm`}
                  key={t}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="table-scroll">
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
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="muted" style={{ textAlign: 'center', padding: 30 }}>
                        No entries in this log.
                      </td>
                    </tr>
                  ) : (
                    rows.map((n, i) => (
                      <tr key={i} style={{ background: n.read ? undefined : '#FBF7E9' }}>
                        <td>
                          {!n.read && (
                            <span
                              style={{
                                display: 'inline-block',
                                width: 7,
                                height: 7,
                                borderRadius: '50%',
                                background: 'var(--gold)',
                                marginRight: 7,
                              }}
                            />
                          )}
                          <span className="strong">{n.sub}</span>
                        </td>
                        <td>{n.to}</td>
                        <td>{n.type}</td>
                        <td>
                          <StatusChip stKey={n.stKey} label={n.st} />
                        </td>
                        <td className="muted">{n.date}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
