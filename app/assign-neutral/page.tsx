'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';
import { adminNav } from '@/lib/nav';

export default function AssignNeutralPage() {
  const go = useGo();
  const toast = useToast();
  return (
    <div className="portal">
      <Sidebar role="admin" active="neutrals" items={adminNav} />
      <div className="main">
        <Topbar
          title="Assign Neutral"
          sub="ODR-2026-024 · Priya Mehta vs Beta Industries"
        />
        <div className="content">
          <div className="grid-2">
            <div className="card card-pad">
              <div className="section-head">
                <h2>Select a Neutral</h2>
                <span className="muted" style={{ fontSize: 13 }}>
                  Matched by expertise
                </span>
              </div>
              <div className="neutral-row sel">
                <div className="radio" />
                <div className="av av-n">AS</div>
                <div style={{ flex: 1 }}>
                  <b style={{ fontSize: '13.5px', color: 'var(--navy)' }}>Ms. Ananya Sharma</b>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                    Commercial · Contract · 12 yrs
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="rating">★ 4.9</div>
                  <span className="chip chip-paid" style={{ marginTop: 4 }}>
                    <span className="d" />
                    Available
                  </span>
                </div>
              </div>
              <div className="neutral-row">
                <div className="radio" />
                <div className="av" style={{ background: 'linear-gradient(135deg,#6366F1,#4338CA)' }}>
                  RV
                </div>
                <div style={{ flex: 1 }}>
                  <b style={{ fontSize: '13.5px', color: 'var(--navy)' }}>Mr. Rohit Verma</b>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                    Commercial · Arbitration · 10 yrs
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="rating">★ 4.7</div>
                  <span className="chip chip-paid" style={{ marginTop: 4 }}>
                    <span className="d" />
                    Available
                  </span>
                </div>
              </div>
              <div className="neutral-row">
                <div className="radio" />
                <div className="av" style={{ background: 'linear-gradient(135deg,#EC4899,#BE185D)' }}>
                  MI
                </div>
                <div style={{ flex: 1 }}>
                  <b style={{ fontSize: '13.5px', color: 'var(--navy)' }}>Dr. Meera Iyer</b>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                    Corporate · Civil · 15 yrs
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="rating">★ 4.8</div>
                  <span className="chip chip-pending" style={{ marginTop: 4 }}>
                    <span className="d" />
                    Busy
                  </span>
                </div>
              </div>
              <div className="neutral-row">
                <div className="radio" />
                <div className="av" style={{ background: 'linear-gradient(135deg,#0EA5E9,#0369A1)' }}>
                  AK
                </div>
                <div style={{ flex: 1 }}>
                  <b style={{ fontSize: '13.5px', color: 'var(--navy)' }}>Mr. Arvind Kapoor</b>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>Commercial · 20 yrs</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="rating">★ 4.6</div>
                  <span className="chip chip-paid" style={{ marginTop: 4 }}>
                    <span className="d" />
                    Available
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-pad" style={{ marginBottom: 22 }}>
                <div className="section-head">
                  <h2>Case Information</h2>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 13,
                    fontSize: 13,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Case ID</span>
                    <b>ODR-2026-024</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Claimant</span>
                    <b>Priya Mehta</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Respondent</span>
                    <b>Beta Industries</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Type</span>
                    <b>Service Dispute</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Claim Amount</span>
                    <b>₹12,00,000</b>
                  </div>
                </div>
              </div>
              <div
                className="card card-pad"
                style={{
                  background: 'linear-gradient(135deg,var(--navy),var(--navy-2))',
                  color: '#fff',
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>
                  Selected: Ms. Ananya Sharma
                </div>
                <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 16 }}>
                  ★ 4.9 rating · Commercial & Contract specialist · 96% awards upheld
                </div>
                <button
                  className="btn btn-gold hot"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => {
                    toast('Ananya Sharma assigned to ODR-2026-024');
                    setTimeout(() => go('case-mgmt'), 1000);
                  }}
                >
                  <Icon name="scale" width={16} height={16} /> Confirm Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
