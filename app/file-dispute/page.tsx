'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';
import { claimantNav } from '@/lib/nav';

export default function FileDisputePage() {
  const go = useGo();
  const toast = useToast();
  return (
    <div className="portal">
      <Sidebar role="claimant" active="file" items={claimantNav} />
      <div className="main">
        <Topbar title="File a New Dispute" sub="Step 3 of 6 — Dispute Details" />
        <div className="content">
          <div className="card card-pad" style={{ maxWidth: 880, margin: '0 auto' }}>
            <div className="steps">
              <div className="st done">
                <div className="num">
                  <Icon name="check" width={16} height={16} />
                </div>
                <div className="lbl">Claimant</div>
              </div>
              <div className="bar fill" />
              <div className="st done">
                <div className="num">
                  <Icon name="check" width={16} height={16} />
                </div>
                <div className="lbl">Respondent</div>
              </div>
              <div className="bar fill" />
              <div className="st cur">
                <div className="num">3</div>
                <div className="lbl">Dispute Details</div>
              </div>
              <div className="bar" />
              <div className="st">
                <div className="num">4</div>
                <div className="lbl">Claim Amount</div>
              </div>
              <div className="bar" />
              <div className="st">
                <div className="num">5</div>
                <div className="lbl">Evidence</div>
              </div>
              <div className="bar" />
              <div className="st">
                <div className="num">6</div>
                <div className="lbl">Payment</div>
              </div>
            </div>

            <h2 style={{ fontSize: 18, marginBottom: 4 }}>Tell us about the dispute</h2>
            <p className="muted" style={{ fontSize: '13.5px', marginBottom: 24 }}>
              Provide the nature of the dispute so the right neutral can be assigned.
            </p>

            <div className="grid-2b">
              <div className="field">
                <label>Dispute Category</label>
                <select>
                  <option>Commercial Dispute</option>
                  <option>Service Dispute</option>
                  <option>Contractual Dispute</option>
                  <option>Property Dispute</option>
                </select>
              </div>
              <div className="field">
                <label>Sub Category</label>
                <select>
                  <option>Breach of Contract</option>
                  <option>Non-payment</option>
                  <option>Quality of Service</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Brief Description of Dispute</label>
              <textarea defaultValue="The respondent failed to deliver the goods as per the terms agreed in the contract dated 12 Jan 2026, despite full advance payment. Repeated follow-ups have not resulted in delivery or refund." />
            </div>
            <div className="field">
              <label>Relief Sought</label>
              <textarea defaultValue="We seek a refund of the advance amount along with compensation for financial losses and costs incurred due to the breach of contract." />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <button className="btn btn-ghost" onClick={() => go('claimant-dash')}>
                ← Back
              </button>
              <button
                className="btn btn-gold hot"
                onClick={() => {
                  toast('Dispute details saved · Step 4');
                  setTimeout(() => go('claimant-case'), 900);
                }}
              >
                Save & Continue →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
