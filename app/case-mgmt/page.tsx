'use client';
import { useState } from 'react';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import StatusChip from '@/components/StatusChip';
import { DB } from '@/lib/data';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';
import { adminNav } from '@/lib/nav';

export default function CaseMgmtPage() {
  const go = useGo();
  const toast = useToast();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filters = ['All', 'Pending', 'Assigned', 'In Progress', 'Hearing', 'Closed'];
  const pages = ['1', '2', '3', '4', '5'];

  const filtered = DB.cases.filter((c) => {
    const fOk =
      filter === 'All' ||
      (filter === 'Pending' && c.stKey === 'pending') ||
      (filter === 'Assigned' && c.stKey === 'assigned') ||
      (filter === 'In Progress' && ['evidence', 'progress'].includes(c.stKey)) ||
      (filter === 'Hearing' && c.stKey === 'scheduled') ||
      (filter === 'Closed' && c.stKey === 'closed');
    const sOk =
      !search ||
      (c.id + c.claimant + c.respondent + c.neutral + c.status)
        .toLowerCase()
        .includes(search.toLowerCase());
    return fOk && sOk;
  });

  return (
    <div className="portal">
      <Sidebar role="admin" active="cases" items={adminNav} />
      <div className="main">
        <Topbar
          title="Case Management"
          sub={`${DB.cases.length} cases across the platform`}
          cta={
            <button className="btn btn-ghost btn-sm" onClick={() => toast('Exporting CSV…')}>
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
              {filters.map((f) => (
                <button
                  className={`btn ${filter === f ? 'btn-navy' : 'btn-ghost'} btn-sm`}
                  key={f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
              <div className="spacer" style={{ flex: 1 }} />
              <div className="searchbox live" style={{ width: 240 }}>
                <Icon name="search" />
                <input
                  placeholder="Search cases, parties…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="table-scroll">
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
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="muted" style={{ textAlign: 'center', padding: 30 }}>
                        No cases match your filters.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((c) => (
                      <tr
                        key={c.id}
                        onClick={() =>
                          c.stKey === 'pending'
                            ? go('assign-neutral')
                            : c.stKey === 'scheduled'
                            ? go('hearing-room')
                            : go('claimant-case')
                        }
                      >
                        <td className="cid">{c.id}</td>
                        <td>{c.claimant}</td>
                        <td>{c.respondent}</td>
                        <td>
                          <StatusChip stKey={c.stKey} label={c.status} />
                        </td>
                        <td className={c.neutral === '—' ? 'muted' : ''}>{c.neutral}</td>
                        <td className="muted">{c.updated}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
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
                Showing {filtered.length} of {DB.cases.length} cases
              </span>
              <div style={{ display: 'flex', gap: 6 }}>
                {pages.map((p, i) => (
                  <div
                    key={p}
                    onClick={() => toast('Page ' + p)}
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
