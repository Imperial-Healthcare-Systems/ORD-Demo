'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { claimantNav } from '@/lib/nav';

export default function ClaimantCasePage() {
  const go = useGo();
  return (
    <div className="portal">
      <Sidebar role="claimant" active="cases" items={claimantNav} />
      <div className="main">
        <Topbar
          title="Case ODR-2026-001"
          sub="Acme Corp Ltd. · Commercial Dispute · Filed 02 May 2026"
        />
        <div className="content">
          <div className="grid-2">
            <div>
              <div className="card card-pad" style={{ marginBottom: 22 }}>
                <div className="section-head">
                  <h2>Case Timeline</h2>
                  <span className="chip chip-progress">
                    <span className="d" />
                    In Progress
                  </span>
                </div>
                <div className="tl" style={{ marginTop: 8 }}>
                  <div className="ev done">
                    <div className="dot">
                      <Icon name="check" />
                    </div>
                    <div className="dt">02 MAY 2026</div>
                    <div className="ti">Dispute Filed</div>
                    <div className="ds">
                      You filed the dispute successfully. Case number auto-generated.
                    </div>
                  </div>
                  <div className="ev done">
                    <div className="dot">
                      <Icon name="check" />
                    </div>
                    <div className="dt">05 MAY 2026</div>
                    <div className="ti">Respondent Accepted</div>
                    <div className="ds">
                      Acme Corp Ltd. accepted the notice and joined the proceedings.
                    </div>
                  </div>
                  <div className="ev done">
                    <div className="dot">
                      <Icon name="check" />
                    </div>
                    <div className="dt">08 MAY 2026</div>
                    <div className="ti">Neutral Assigned</div>
                    <div className="ds">
                      Ms. Ananya Sharma (Arbitrator) was assigned to the case.
                    </div>
                  </div>
                  <div className="ev cur">
                    <div className="dot" />
                    <div className="dt">12 MAY 2026 · 10:30 AM</div>
                    <div className="ti">Hearing Scheduled</div>
                    <div className="ds">
                      Virtual hearing scheduled. Join from your dashboard.
                    </div>
                  </div>
                  <div className="ev">
                    <div className="dot" />
                    <div className="dt">PENDING</div>
                    <div className="ti">Award / Settlement</div>
                    <div className="ds">
                      Final decision will be issued after the hearing concludes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-pad">
                <div className="section-head">
                  <h2>Messages</h2>
                  <a className="link-gold">View thread →</a>
                </div>
                <div className="hr-msg" style={{ marginBottom: 14 }}>
                  <div className="who" style={{ color: 'var(--navy)' }}>
                    Ananya Sharma <small>Neutral · 09:15 AM</small>
                  </div>
                  <div
                    className="bub"
                    style={{ background: 'var(--bg)', color: 'var(--navy-2)' }}
                  >
                    Please ensure all evidence is uploaded before the hearing on 12 May.
                    We'll review the contract and delivery records together.
                  </div>
                </div>
                <div className="hr-msg">
                  <div className="who" style={{ color: 'var(--navy)' }}>
                    You <small>09:22 AM</small>
                  </div>
                  <div
                    className="bub"
                    style={{
                      background: '#FFFEF8',
                      border: '1px solid #F0E4B8',
                      color: 'var(--navy-2)',
                    }}
                  >
                    Understood. All documents have been uploaded to the case vault.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card card-pad" style={{ marginBottom: 22 }}>
                <div className="section-head">
                  <h2>Case Summary</h2>
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
                    <span className="muted">Case Type</span>
                    <b>Commercial</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Respondent</span>
                    <b>Acme Corp Ltd.</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Claim Amount</span>
                    <b>₹25,00,000</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Neutral</span>
                    <b>Ananya Sharma</b>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="muted">Next Hearing</span>
                    <b style={{ color: 'var(--gold-deep)' }}>12 May, 10:30 AM</b>
                  </div>
                </div>
                <button
                  className="btn btn-gold hot"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 18 }}
                  onClick={() => go('hearing-room')}
                >
                  <Icon name="video" width={16} height={16} /> Join Hearing
                </button>
              </div>
              <div className="card card-pad">
                <div className="section-head">
                  <h2>Documents</h2>
                  <a className="link-gold" onClick={() => go('doc-vault')}>
                    View all →
                  </a>
                </div>
                <div className="doc-row">
                  <div className="fic pdf">PDF</div>
                  <div style={{ flex: 1 }}>
                    <div className="nm">Contract_Agreement.pdf</div>
                    <div className="sz">2.4 MB · Uploaded 02 May</div>
                  </div>
                  <Icon name="doc" width={16} height={16} style={{ color: 'var(--muted)' }} />
                </div>
                <div className="doc-row">
                  <div className="fic pdf">PDF</div>
                  <div style={{ flex: 1 }}>
                    <div className="nm">Invoice_Advance.pdf</div>
                    <div className="sz">880 KB · Uploaded 02 May</div>
                  </div>
                  <Icon name="doc" width={16} height={16} style={{ color: 'var(--muted)' }} />
                </div>
                <div className="doc-row">
                  <div className="fic zip">ZIP</div>
                  <div style={{ flex: 1 }}>
                    <div className="nm">Email_Correspondence.zip</div>
                    <div className="sz">5.1 MB · Uploaded 04 May</div>
                  </div>
                  <Icon name="doc" width={16} height={16} style={{ color: 'var(--muted)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
