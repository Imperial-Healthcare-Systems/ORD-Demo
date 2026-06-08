'use client';
import Phone from '@/components/Phone';
import Topbar from '@/components/Topbar';

export default function MobilePage() {
  return (
    <div className="screen-wrap" style={{ background: 'var(--bg)' }}>
      <Topbar
        title="Mobile Views"
        sub="Fully responsive — the same platform on any device"
      />
      <div
        className="content"
        style={{ display: 'flex', flexWrap: 'wrap', gap: 34, justifyContent: 'center', padding: '40px 24px' }}
      >
        <Phone title="Homepage">
          <div style={{ background: '#0F172A', color: '#fff', padding: '16px 14px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 22, fontSize: 12, fontWeight: 700 }}>
              <span style={{ color: 'var(--gold)' }}>⚖</span> ODR PLATFORM
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 21, lineHeight: 1.2, fontWeight: 600 }}>
              Resolve Disputes Online. Fast. Secure.
            </div>
            <div style={{ marginTop: 14, background: 'var(--gold)', color: '#0F172A', textAlign: 'center', padding: 9, borderRadius: 9, fontWeight: 700, fontSize: 12 }}>
              File a Dispute
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '14px 8px', background: '#fff', fontSize: 11, textAlign: 'center' }}>
            <div>
              <b style={{ color: 'var(--navy)', fontSize: 15, display: 'block' }}>2,548+</b>Resolved
            </div>
            <div>
              <b style={{ color: 'var(--navy)', fontSize: 15, display: 'block' }}>92%</b>Success
            </div>
            <div>
              <b style={{ color: 'var(--navy)', fontSize: 15, display: 'block' }}>28d</b>Avg.
            </div>
          </div>
          <div style={{ padding: '12px 14px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Our Services</div>
            {['Negotiation', 'Mediation', 'Conciliation', 'Arbitration'].map((s, i) => (
              <div
                key={i}
                style={{ background: '#fff', borderRadius: 9, padding: '9px 11px', marginBottom: 7, fontSize: 12, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <span style={{ width: 6, height: 6, background: 'var(--gold)', borderRadius: 2 }} />
                {s}
              </div>
            ))}
          </div>
        </Phone>

        <Phone title="Dashboard">
          <div style={{ background: '#fff', padding: '13px 14px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)' }}>Hi, John 👋</div>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#0F172A,#334155)' }} />
          </div>
          <div style={{ padding: '13px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>
            {[['Active', '3', '#2563EB'], ['Closed', '7', '#059669'], ['Hearings', '2', '#D97706'], ['Paid', '₹48.5K', '#0F172A']].map(([l, v, c], i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 11, padding: 11 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: c, marginBottom: 7 }} />
                <b style={{ fontSize: 16, color: 'var(--navy)', display: 'block' }}>{v}</b>
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>{l}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '0 14px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>Recent Cases</div>
            {[['ODR-2026-001', 'In Progress', '#2563EB'], ['ODR-2026-002', 'Hearing', '#D97706']].map(([id, s, c], i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 9, padding: '10px 11px', marginBottom: 7 }}>
                <b style={{ fontSize: 12, color: 'var(--navy)', display: 'block' }}>{id}</b>
                <span style={{ fontSize: 10, color: c, fontWeight: 600 }}>● {s}</span>
              </div>
            ))}
          </div>
        </Phone>

        <Phone title="Case Details">
          <div style={{ background: '#0F172A', color: '#fff', padding: 14 }}>
            <div style={{ fontSize: 11, opacity: 0.7 }}>CASE</div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>ODR-2026-001</div>
            <span style={{ display: 'inline-block', marginTop: 7, background: 'rgba(212,175,55,.2)', color: 'var(--gold)', fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 20 }}>
              IN PROGRESS
            </span>
          </div>
          <div style={{ padding: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy)', marginBottom: 11 }}>Case Timeline</div>
            {[['Dispute Filed', 'done'], ['Accepted', 'done'], ['Neutral Assigned', 'done'], ['Hearing Scheduled', 'active'], ['Award Issued', '']].map(([t, st], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 11 }}>
                <div
                  style={{ width: 16, height: 16, borderRadius: '50%', background: st === 'done' ? '#059669' : st === 'active' ? 'var(--gold)' : '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 9 }}
                >
                  {st === 'done' ? '✓' : ''}
                </div>
                <span style={{ fontSize: 11, color: st ? 'var(--ink)' : 'var(--muted)', fontWeight: st === 'active' ? 700 : 400 }}>
                  {t}
                </span>
              </div>
            ))}
          </div>
        </Phone>

        <Phone title="Hearing Room">
          <div style={{ background: '#0B1120', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', color: '#fff', fontSize: 10 }}>
              <span style={{ color: 'var(--gold)' }}>● Recording</span>
              <span>01:30:36</span>
            </div>
            <div style={{ flex: 1, display: 'grid', gridTemplateRows: '1fr 1fr', gap: 6, padding: '0 8px' }}>
              <div style={{ background: 'linear-gradient(135deg,#1e293b,#0f172a)', borderRadius: 9, position: 'relative' }}>
                <span style={{ position: 'absolute', bottom: 6, left: 7, color: '#fff', fontSize: 9 }}>John Doe</span>
              </div>
              <div style={{ background: 'linear-gradient(135deg,#334155,#1e293b)', borderRadius: 9, position: 'relative' }}>
                <span style={{ position: 'absolute', bottom: 6, left: 7, color: '#fff', fontSize: 9 }}>Acme Corp Ltd.</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 13, padding: '14px 0' }}>
              {['🎤', '📹', '🖥️'].map((e, i) => (
                <div
                  key={i}
                  style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}
                >
                  {e}
                </div>
              ))}
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                📞
              </div>
            </div>
          </div>
        </Phone>
      </div>
    </div>
  );
}
