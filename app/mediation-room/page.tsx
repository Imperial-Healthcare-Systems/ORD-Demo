'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useToast } from '@/components/ToastProvider';
import { neutralNav } from '@/lib/nav';

export default function MediationRoomPage() {
  const toast = useToast();
  return (
    <div className="portal">
      <Sidebar role="neutral" active="cases" items={neutralNav} />
      <div className="main">
        <Topbar
          title="Private Mediation Room"
          sub="ODR-2026-014 · Confidential — visible only to parties present"
          cta={
            <div
              className="tm"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                color: 'var(--navy)',
                fontWeight: 700,
                padding: '7px 14px',
                borderRadius: 9,
                fontSize: 13,
              }}
            >
              00:45:12
            </div>
          }
        />
        <div className="content">
          <div className="grid-2">
            <div>
              <div className="card card-pad" style={{ marginBottom: 22 }}>
                <div className="section-head">
                  <h2>🔒 Confidential Discussion</h2>
                  <span className="chip chip-live">
                    <span className="d" />
                    Private
                  </span>
                </div>
                <div
                  className="hr-chat"
                  style={{
                    background: 'var(--bg)',
                    borderRadius: 12,
                    padding: 18,
                    maxHeight: 'none',
                  }}
                >
                  <div className="hr-msg" style={{ marginBottom: 14 }}>
                    <div className="who" style={{ color: 'var(--navy)' }}>
                      Ananya Sharma <small>Mediator · 11:02</small>
                    </div>
                    <div className="bub" style={{ background: '#fff', color: 'var(--navy-2)' }}>
                      Let's explore whether a partial settlement is acceptable to both sides
                      today.
                    </div>
                  </div>
                  <div className="hr-msg" style={{ marginBottom: 14 }}>
                    <div className="who" style={{ color: 'var(--blue)' }}>
                      John Doe <small>11:04</small>
                    </div>
                    <div
                      className="bub"
                      style={{ background: 'var(--blue-soft)', color: 'var(--navy-2)' }}
                    >
                      We are open to a compromise if the refund is timely.
                    </div>
                  </div>
                  <div className="hr-msg">
                    <div className="who" style={{ color: 'var(--amber)' }}>
                      Acme Corp Ltd. <small>11:06</small>
                    </div>
                    <div
                      className="bub"
                      style={{ background: 'var(--amber-soft)', color: 'var(--navy-2)' }}
                    >
                      We can offer a partial refund of ₹15,00,000 as full settlement.
                    </div>
                  </div>
                </div>
                <div className="hr-input" style={{ border: 'none', padding: '14px 0 0' }}>
                  <input
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--line)',
                      color: 'var(--navy)',
                    }}
                    placeholder="Type a confidential message…"
                  />
                  <div className="snd">
                    <Icon name="msg" width={17} height={17} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-pad" style={{ marginBottom: 22 }}>
                <div className="section-head">
                  <h2>Participants</h2>
                </div>
                <div className="person" style={{ marginBottom: 13 }}>
                  <div className="av av-n">AS</div>
                  <div className="meta">
                    <b>Ananya Sharma</b>
                    <small>Mediator (You)</small>
                  </div>
                </div>
                <div className="person" style={{ marginBottom: 13 }}>
                  <div className="av av-c">JD</div>
                  <div className="meta">
                    <b>John Doe</b>
                    <small>Claimant</small>
                  </div>
                </div>
                <div className="person">
                  <div className="av av-r">AC</div>
                  <div className="meta">
                    <b>Acme Corp Ltd.</b>
                    <small>Respondent</small>
                  </div>
                </div>
              </div>
              <div className="card card-pad">
                <div className="section-head">
                  <h2>Settlement Draft</h2>
                </div>
                <div className="field">
                  <label>Terms</label>
                  <textarea defaultValue="Acme Corp Ltd. agrees to pay ₹15,00,000 to John Doe as full and final settlement of the dispute, within 15 working days. Both parties waive further claims." />
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    className="btn btn-ghost"
                    style={{ flex: 1, justifyContent: 'center' }}
                    onClick={() => toast('Draft saved')}
                  >
                    Save Draft
                  </button>
                  <button
                    className="btn btn-gold hot"
                    style={{ flex: 1, justifyContent: 'center' }}
                    onClick={() => toast('Settlement sent to both parties for approval')}
                  >
                    Send to Parties
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
