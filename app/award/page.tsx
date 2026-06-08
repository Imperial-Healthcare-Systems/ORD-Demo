'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';
import { neutralNav } from '@/lib/nav';

export default function AwardPage() {
  const go = useGo();
  const toast = useToast();
  return (
    <div className="portal">
      <Sidebar role="neutral" active="awards" items={neutralNav} />
      <div className="main">
        <Topbar title="Award Generation" sub="ODR-2026-001 · Issue the final arbitral award" />
        <div className="content">
          <div className="grid-2">
            <div className="card card-pad">
              <div className="section-head">
                <h2>Award Details</h2>
              </div>
              <div className="field">
                <label>Findings of the Case</label>
                <textarea defaultValue="The respondent failed to perform their contractual obligations to deliver goods as per the agreement dated 12 Jan 2026, despite receiving full advance payment from the claimant." />
              </div>
              <div className="field">
                <label>Decision / Award</label>
                <textarea defaultValue="The respondent is directed to refund ₹15,00,000 to the claimant within 30 days, along with applicable interest. The claim is allowed in part." />
              </div>
              <div className="grid-2b">
                <div className="field">
                  <label>Compensation Amount (₹)</label>
                  <input defaultValue="15,00,000" />
                </div>
                <div className="field">
                  <label>Date of Award</label>
                  <input defaultValue="15 May 2026" />
                </div>
              </div>
            </div>
            <div>
              <div className="card card-pad" style={{ marginBottom: 22 }}>
                <div className="section-head">
                  <h2>Preview</h2>
                </div>
                <div className="legal-doc" style={{ fontSize: 12.5, padding: 24 }}>
                  <h3 style={{ fontSize: 17 }}>ARBITRAL AWARD</h3>
                  <div className="ctr">Case No. ODR-2026-001 · John Doe vs Acme Corp Ltd.</div>
                  <p>
                    Having considered the submissions, evidence and the hearing held on 12 May
                    2026, the Tribunal finds that the respondent breached the contract dated 12 Jan
                    2026.
                  </p>
                  <p style={{ marginTop: 10 }}>
                    <b>Award:</b> The respondent shall refund ₹15,00,000 to the claimant within 30
                    days.
                  </p>
                  <div className="sig">
                    <div>
                      <div className="sig-name">Ananya Sharma</div>
                      <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                        Ms. Ananya Sharma · Arbitrator
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: 11, color: 'var(--muted)' }}>
                      Digitally signed
                      <br />
                      15 May 2026
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  className="btn btn-ghost"
                  style={{ flex: 1, justifyContent: 'center' }}
                  onClick={() => toast('Award preview opened')}
                >
                  <Icon name="doc" width={15} height={15} /> Preview
                </button>
                <button
                  className="btn btn-gold hot"
                  style={{ flex: 1.4, justifyContent: 'center' }}
                  onClick={() => {
                    toast('Award issued & case ODR-2026-001 closed');
                    setTimeout(() => go('admin-dash'), 1100);
                  }}
                >
                  <Icon name="award" width={16} height={16} /> Generate & Issue Award
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
