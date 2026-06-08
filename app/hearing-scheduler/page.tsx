'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';
import { neutralNav } from '@/lib/nav';

export default function HearingSchedulerPage() {
  const go = useGo();
  const toast = useToast();
  const slots = ['09:00 AM', '10:30 AM', '11:45 AM', '02:00 PM', '03:30 PM', '04:45 PM'];
  return (
    <div className="portal">
      <Sidebar role="neutral" active="cal" items={neutralNav} />
      <div className="main">
        <Topbar title="Schedule Hearing" sub="ODR-2026-001 — John Doe vs Acme Corp Ltd." />
        <div className="content">
          <div className="grid-2">
            <div className="card card-pad">
              <div className="section-head">
                <h2>Select Date</h2>
                <span className="muted" style={{ fontSize: 13, fontWeight: 600 }}>
                  May 2026
                </span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7,1fr)',
                  gap: 6,
                  textAlign: 'center',
                }}
              >
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                  <div
                    key={`h${i}`}
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: 'var(--muted-2)',
                      padding: '6px 0',
                    }}
                  >
                    {d}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const d = i - 3;
                  if (d < 1 || d > 31) return <div key={i} />;
                  const sel = d === 12;
                  const today = d === 8;
                  const style: React.CSSProperties = {
                    padding: '9px 0',
                    borderRadius: 9,
                    fontSize: 13,
                    fontWeight: sel ? 700 : 500,
                    cursor: 'pointer',
                  };
                  if (sel) {
                    style.background = 'var(--navy)';
                    style.color = '#fff';
                  } else if (today) {
                    style.background = 'var(--bg)';
                    style.color = 'var(--gold-deep)';
                    style.fontWeight = 700;
                  } else {
                    style.color = 'var(--navy-2)';
                  }
                  return (
                    <div key={i} style={style}>
                      {d}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Available Time Slots</h2>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                {slots.map((t, i) => {
                  const on = i === 1;
                  const style: React.CSSProperties = {
                    padding: 11,
                    textAlign: 'center',
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: `1px solid ${on ? 'var(--gold)' : 'var(--line)'}`,
                  };
                  if (on) {
                    style.background = '#FFFEF8';
                    style.color = 'var(--gold-deep)';
                  } else {
                    style.color = 'var(--navy-2)';
                  }
                  return (
                    <div key={i} style={style}>
                      {t}
                    </div>
                  );
                })}
              </div>
              <div className="section-head">
                <h2>Participants</h2>
              </div>
              <div className="person" style={{ marginBottom: 11 }}>
                <div className="av av-c">JD</div>
                <div className="meta">
                  <b>John Doe</b>
                  <small>Claimant</small>
                </div>
                <span className="chip chip-paid" style={{ marginLeft: 'auto' }}>
                  <span className="d" />
                  Invited
                </span>
              </div>
              <div className="person" style={{ marginBottom: 11 }}>
                <div className="av av-r">AC</div>
                <div className="meta">
                  <b>Acme Corp Ltd.</b>
                  <small>Respondent</small>
                </div>
                <span className="chip chip-paid" style={{ marginLeft: 'auto' }}>
                  <span className="d" />
                  Invited
                </span>
              </div>
              <div className="field" style={{ marginTop: 14 }}>
                <label>Meeting Link</label>
                <input defaultValue="https://odr.platform/hearing/ODR-2026-001" readOnly />
              </div>
              <button
                className="btn btn-gold hot"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  toast('Hearing scheduled · invites sent to all parties');
                  setTimeout(() => go('hearing-room'), 1000);
                }}
              >
                <Icon name="calendar" width={16} height={16} /> Confirm & Schedule Hearing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
