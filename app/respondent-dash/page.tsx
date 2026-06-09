'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';
import { respNav } from '@/lib/nav';

export default function RespondentDashPage() {
  const go = useGo();
  const toast = useToast();
  return (
    <div className="portal">
      <Sidebar role="respondent" active="dash" items={respNav} />
      <div className="main">
        <Topbar
          title="Respondent Dashboard"
          sub="You have been served notice in 1 active dispute."
        />
        <div className="content">
          <div
            className="card"
            style={{
              border: '1.5px solid var(--gold)',
              background: '#FFFEF8',
              marginBottom: 22,
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: 22 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 13,
                  background: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  flexShrink: 0,
                }}
              >
                📩
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '.6px',
                    textTransform: 'uppercase',
                    color: 'var(--gold-deep)',
                    marginBottom: 3,
                  }}
                >
                  New Notice Received · 05 May 2026
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>
                  You have been named as respondent in Case ODR-2026-001
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>
                  Filed by <b>John Doe</b> · Commercial Dispute · Claim ₹25,00,000 · Response
                  due within 7 days.
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button className="btn btn-ghost" onClick={() => toast('Notice declined')}>
                  Decline
                </button>
                <button
                  className="btn btn-gold hot"
                  onClick={() => {
                    toast('Participation accepted · Case joined');
                    setTimeout(() => go('claimant-case'), 900);
                  }}
                >
                  Accept &amp; Respond
                </button>
              </div>
            </div>
          </div>

          <div className="kpi-grid">
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--amber-soft)', color: 'var(--amber)' }}>
                <Icon name="folder" />
              </div>
              <div className="lbl">Active Disputes</div>
              <div className="val">1</div>
              <span className="trend flat">Response pending</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
                <Icon name="calendar" />
              </div>
              <div className="lbl">Upcoming Hearings</div>
              <div className="val">1</div>
              <span className="trend flat">12 May</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Icon name="doc" />
              </div>
              <div className="lbl">Documents to Submit</div>
              <div className="val">2</div>
              <span className="trend flat">Reply + evidence</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--emerald-soft)', color: 'var(--emerald)' }}>
                <Icon name="check" />
              </div>
              <div className="lbl">Resolved</div>
              <div className="val">4</div>
              <span className="trend up">All settled</span>
            </div>
          </div>

          <div className="grid-2">
            <div className="card">
              <div className="card-pad" style={{ paddingBottom: 0 }}>
                <div className="section-head">
                  <h2>My Disputes</h2>
                </div>
              </div>
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Case ID</th>
                      <th>Claimant</th>
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr onClick={() => go('claimant-case')}>
                      <td className="cid">ODR-2026-001</td>
                      <td>John Doe</td>
                      <td>
                        <span className="chip chip-progress">
                          <span className="d" />
                          Response Pending
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>→</td>
                    </tr>
                    <tr onClick={() => go('claimant-case')}>
                      <td className="cid">ODR-2025-097</td>
                      <td>Sigma LLP</td>
                      <td>
                        <span className="chip chip-closed">
                          <span className="d" />
                          Settled
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>→</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Submit Your Reply</h2>
              </div>
              <div className="field">
                <label>Statement of Defence</label>
                <textarea
                  placeholder="Enter your response to the claim…"
                  defaultValue="The goods were delivered as per the revised timeline communicated to the claimant. Supporting delivery records are attached."
                />
              </div>
              <div
                className="doc-row"
                style={{ borderStyle: 'dashed', justifyContent: 'center', color: 'var(--muted)' }}
                onClick={() => toast('Upload dialog (demo)')}
              >
                <Icon name="doc" width={16} height={16} /> Click to upload reply &amp; evidence
              </div>
              <button
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}
                onClick={() => toast('Reply submitted to the case')}
              >
                Submit Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
