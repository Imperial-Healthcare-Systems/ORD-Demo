'use client';
import { useState } from 'react';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useToast } from '@/components/ToastProvider';
import { DB, useRerender } from '@/lib/data';
import { claimantNav } from '@/lib/nav';

const categories: [string, string][] = [
  ['Evidence', '#2563EB'],
  ['Awards', '#7C3AED'],
  ['Orders', '#D97706'],
  ['Settlements', '#059669'],
  ['Invoices', '#0F172A'],
  ['Correspondence', '#64748B'],
];

export default function DocVaultPage() {
  const toast = useToast();
  const rerender = useRerender();
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');

  function upload() {
    const names = ['New_Evidence.pdf', 'Reply_Statement.docx', 'Settlement_Draft.pdf'];
    const n = names[DB.documents.length % names.length];
    DB.documents.unshift({
      nm: n,
      ext: n.split('.').pop()!.slice(0, 3) as any,
      cat: 'Evidence',
      size: (0.3 + (DB.documents.length % 9) * 0.4).toFixed(1) + ' MB',
      case: 'ODR-2026-001',
      date: 'Today',
    });
    rerender();
    toast('File uploaded to vault');
  }

  const counts: Record<string, number> = {};
  DB.documents.forEach((d) => {
    counts[d.cat] = (counts[d.cat] || 0) + 1;
  });

  const filtered = DB.documents.filter(
    (d) =>
      (cat === 'All' || d.cat === cat) &&
      (!search || (d.nm + d.cat + d.case).toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="portal">
      <Sidebar role="claimant" active="docs" items={claimantNav} />
      <div className="main">
        <Topbar
          title="Document Vault"
          sub="Encrypted storage for all case documents"
          cta={
            <button className="btn btn-gold btn-sm hot" onClick={upload}>
              <Icon name="plus" width={15} height={15} /> Upload
            </button>
          }
        />
        <div className="content">
          <div className="grid-3" style={{ marginBottom: 22 }}>
            {categories.map(([t, c]) => {
              const cnt = counts[t] || 0;
              return (
                <div
                  key={t}
                  className={`card card-pad${cat === t ? ' cat-on' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}
                  onClick={() => setCat(cat === t ? 'All' : t)}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 11,
                      background: c,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                    }}
                  >
                    <Icon name="folder" width={20} height={20} />
                  </div>
                  <div>
                    <b style={{ fontSize: 14, color: 'var(--navy)' }}>{t}</b>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                      {cnt} file{cnt === 1 ? '' : 's'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card">
            <div className="card-pad" style={{ paddingBottom: 0 }}>
              <div className="section-head">
                <h2>{cat === 'All' ? 'All Documents' : cat}</h2>
                <div className="searchbox live" style={{ width: 220 }}>
                  <Icon name="search" />
                  <input
                    placeholder="Search files…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="card-pad" style={{ paddingTop: 8 }}>
              {filtered.length === 0 ? (
                <div
                  className="muted"
                  style={{ fontSize: 13, textAlign: 'center', padding: 18 }}
                >
                  No documents match.
                </div>
              ) : (
                filtered.map((d, i) => (
                  <div
                    key={d.nm + i}
                    className="doc-row"
                    onClick={() => toast('Opening ' + d.nm)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={`fic ${d.ext}`}>{d.ext.toUpperCase()}</div>
                    <div style={{ flex: 1 }}>
                      <div className="nm">{d.nm}</div>
                      <div className="sz">
                        {d.cat} · {d.size} · {d.case}
                      </div>
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>
                      {d.date}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
