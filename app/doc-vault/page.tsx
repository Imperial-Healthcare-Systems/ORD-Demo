'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useToast } from '@/components/ToastProvider';
import { claimantNav } from '@/lib/nav';

const folders: [string, string, string][] = [
  ['Evidence', '5 files', '#2563EB'],
  ['Awards', '2 files', '#7C3AED'],
  ['Orders', '3 files', '#D97706'],
  ['Settlements', '1 file', '#059669'],
  ['Invoices', '4 files', '#0F172A'],
  ['Correspondence', '8 files', '#64748B'],
];

export default function DocVaultPage() {
  const toast = useToast();
  return (
    <div className="portal">
      <Sidebar role="claimant" active="docs" items={claimantNav} />
      <div className="main">
        <Topbar
          title="Document Vault"
          sub="Encrypted storage for all case documents"
          cta={
            <button
              className="btn btn-gold btn-sm hot"
              onClick={() => toast('Upload dialog (demo)')}
            >
              <Icon name="plus" width={15} height={15} /> Upload
            </button>
          }
        />
        <div className="content">
          <div className="grid-3" style={{ marginBottom: 22 }}>
            {folders.map(([t, n, c], i) => (
              <div
                key={i}
                className="card card-pad"
                style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}
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
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{n}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="card-pad" style={{ paddingBottom: 0 }}>
              <div className="section-head">
                <h2>All Documents</h2>
                <div className="searchbox" style={{ width: 200 }}>
                  <Icon name="search" />
                  <span>Search files…</span>
                </div>
              </div>
            </div>
            <div className="card-pad" style={{ paddingTop: 8 }}>
              <div className="doc-row">
                <div className="fic pdf">PDF</div>
                <div style={{ flex: 1 }}>
                  <div className="nm">Contract_Agreement.pdf</div>
                  <div className="sz">Evidence · 2.4 MB · ODR-2026-001</div>
                </div>
                <span className="muted" style={{ fontSize: 12 }}>
                  02 May
                </span>
              </div>
              <div className="doc-row">
                <div className="fic pdf">PDF</div>
                <div style={{ flex: 1 }}>
                  <div className="nm">Invoice_Advance.pdf</div>
                  <div className="sz">Invoices · 880 KB · ODR-2026-001</div>
                </div>
                <span className="muted" style={{ fontSize: 12 }}>
                  02 May
                </span>
              </div>
              <div className="doc-row">
                <div className="fic zip">ZIP</div>
                <div style={{ flex: 1 }}>
                  <div className="nm">Email_Correspondence.zip</div>
                  <div className="sz">Correspondence · 5.1 MB · ODR-2026-001</div>
                </div>
                <span className="muted" style={{ fontSize: 12 }}>
                  04 May
                </span>
              </div>
              <div className="doc-row">
                <div className="fic doc">DOC</div>
                <div style={{ flex: 1 }}>
                  <div className="nm">Statement_of_Claim.docx</div>
                  <div className="sz">Evidence · 320 KB · ODR-2026-001</div>
                </div>
                <span className="muted" style={{ fontSize: 12 }}>
                  02 May
                </span>
              </div>
              <div className="doc-row">
                <div className="fic img">IMG</div>
                <div style={{ flex: 1 }}>
                  <div className="nm">Delivery_Photos.png</div>
                  <div className="sz">Evidence · 1.8 MB · ODR-2026-001</div>
                </div>
                <span className="muted" style={{ fontSize: 12 }}>
                  06 May
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
