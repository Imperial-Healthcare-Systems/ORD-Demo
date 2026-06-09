'use client';
import { useState } from 'react';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';
import { claimantNav } from '@/lib/nav';
import { DB, freshDraft, nextCaseId, feeCalc, type Draft } from '@/lib/data';

const STEPS = ['Claimant', 'Respondent', 'Dispute Details', 'Claim Amount', 'Evidence', 'Review & Pay'];

function Stepper({ cur }: { cur: number }) {
  return (
    <div className="steps">
      {STEPS.map((lbl, i) => {
        const n = i + 1;
        const cls = n < cur ? 'done' : n === cur ? 'cur' : '';
        return (
          <div key={lbl} style={{ display: 'contents' }}>
            <div className={`st ${cls}`}>
              <div className="num">
                {n < cur ? <Icon name="check" width={16} height={16} /> : n}
              </div>
              <div className="lbl">{lbl}</div>
            </div>
            {i < STEPS.length - 1 && <div className={`bar ${n < cur ? 'fill' : ''}`} />}
          </div>
        );
      })}
    </div>
  );
}

export default function FileDisputePage() {
  const go = useGo();
  const toast = useToast();
  const [draft, setDraft] = useState<Draft>(() => DB.draft);

  const set = (patch: Partial<Draft>) => {
    const next = { ...draft, ...patch };
    DB.draft = next;
    setDraft(next);
  };

  const s = draft.step;
  const fee = feeCalc(draft.amount, draft.currency);

  function next() {
    if (s === 1) {
      if (!draft.claimantName.trim()) return toast('Enter claimant name');
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(draft.claimantEmail.trim()))
        return toast('Enter a valid claimant email');
    }
    if (s === 2 && !draft.respName.trim()) return toast('Enter respondent name');
    if (s === 3 && !draft.desc.trim()) return toast('Describe the dispute');
    if (s === 4 && (!draft.amount || isNaN(parseFloat(String(draft.amount).replace(/[, ]/g, '')))))
      return toast('Enter a valid claim amount');
    if (s < 6) {
      set({ step: s + 1 });
      toast('Step ' + s + ' saved');
    }
  }
  function back() {
    if (s > 1) set({ step: s - 1 });
    else go('claimant-dash');
  }
  function addFile() {
    const names = ['Contract_Agreement.pdf', 'Invoice_Advance.pdf', 'Email_Thread.pdf', 'Delivery_Note.pdf', 'WhatsApp_Chat.pdf'];
    const sizes = ['2.4 MB', '880 KB', '1.2 MB', '640 KB', '410 KB'];
    set({ files: [...draft.files, { nm: names[draft.files.length % names.length], size: sizes[draft.files.length % sizes.length] }] });
    toast('Evidence attached');
  }
  function removeFile(i: number) {
    set({ files: draft.files.filter((_, idx) => idx !== i) });
  }
  function submit() {
    if (!draft.agree) return toast('Please accept the declaration');
    const id = nextCaseId();
    const sym = draft.currency === 'USD' ? '$' : draft.currency === 'GBP' ? '£' : '₹';
    DB.cases.unshift({
      id,
      claimant: draft.claimantName,
      respondent: draft.respName,
      status: 'Unassigned',
      stKey: 'pending',
      neutral: '—',
      updated: 'Today',
      amount: sym + Number(String(draft.amount).replace(/[, ]/g, '')).toLocaleString('en-IN'),
      cat: draft.category,
    });
    DB.notifications.unshift({
      sub: 'Notice of Dispute — ' + id,
      to: draft.respName,
      type: 'Email',
      st: 'Queued',
      stKey: 'pending',
      date: 'Today',
      read: false,
    });
    DB.lastFiled = id;
    toast('Dispute ' + id + ' filed & fee paid ✓');
    DB.draft = freshDraft();
    setTimeout(() => go('claimant-case'), 800);
  }

  return (
    <div className="portal">
      <Sidebar role="claimant" active="file" items={claimantNav} />
      <div className="main">
        <Topbar title="File a New Dispute" sub={`Step ${s} of 6 — ${STEPS[s - 1]}`} />
        <div className="content">
          <div className="card card-pad" style={{ maxWidth: 880, margin: '0 auto' }}>
            <Stepper cur={s} />

            {s === 1 && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>Your details (Claimant)</h2>
                <p className="muted" style={{ fontSize: 13.5, marginBottom: 24 }}>
                  Confirm the details of the party raising the dispute.
                </p>
                <div className="grid-2b">
                  <div className="field">
                    <label>Full Name / Entity</label>
                    <input value={draft.claimantName} onChange={(e) => set({ claimantName: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Email Address</label>
                    <input value={draft.claimantEmail} onChange={(e) => set({ claimantEmail: e.target.value })} />
                  </div>
                </div>
                <div className="field" style={{ maxWidth: 430 }}>
                  <label>Mobile Number</label>
                  <input value={draft.claimantPhone} onChange={(e) => set({ claimantPhone: e.target.value })} />
                </div>
              </>
            )}

            {s === 2 && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>Respondent details</h2>
                <p className="muted" style={{ fontSize: 13.5, marginBottom: 24 }}>
                  Who is the dispute against? They&apos;ll be served a secure notice.
                </p>
                <div className="grid-2b">
                  <div className="field">
                    <label>Respondent Name / Entity</label>
                    <input value={draft.respName} placeholder="e.g. Acme Corp Ltd." onChange={(e) => set({ respName: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Email Address</label>
                    <input value={draft.respEmail} placeholder="notices@company.com" onChange={(e) => set({ respEmail: e.target.value })} />
                  </div>
                </div>
                <div className="field" style={{ maxWidth: 430 }}>
                  <label>
                    Mobile Number <span className="muted" style={{ fontWeight: 500 }}>(optional)</span>
                  </label>
                  <input value={draft.respPhone} placeholder="+91 ..." onChange={(e) => set({ respPhone: e.target.value })} />
                </div>
              </>
            )}

            {s === 3 && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>Tell us about the dispute</h2>
                <p className="muted" style={{ fontSize: 13.5, marginBottom: 24 }}>
                  Provide the nature of the dispute so the right neutral can be assigned.
                </p>
                <div className="grid-2b">
                  <div className="field">
                    <label>Dispute Category</label>
                    <select value={draft.category} onChange={(e) => set({ category: e.target.value })}>
                      {['Commercial Dispute', 'Service Dispute', 'Contractual Dispute', 'Property Dispute'].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label>Sub Category</label>
                    <select value={draft.subCategory} onChange={(e) => set({ subCategory: e.target.value })}>
                      {['Breach of Contract', 'Non-payment', 'Quality of Service', 'Possession'].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label>Brief Description of Dispute</label>
                  <textarea value={draft.desc} placeholder="Describe what happened…" onChange={(e) => set({ desc: e.target.value })} />
                </div>
                <div className="field">
                  <label>Relief Sought</label>
                  <textarea value={draft.relief} placeholder="What outcome are you seeking?" onChange={(e) => set({ relief: e.target.value })} />
                </div>
              </>
            )}

            {s === 4 && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>Claim amount</h2>
                <p className="muted" style={{ fontSize: 13.5, marginBottom: 24 }}>
                  The platform fee is calculated on the value of the claim.
                </p>
                <div className="grid-2b" style={{ maxWidth: 520 }}>
                  <div className="field">
                    <label>Currency</label>
                    <select value={draft.currency} onChange={(e) => set({ currency: e.target.value as Draft['currency'] })}>
                      {['INR', 'USD', 'GBP'].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label>Claim Amount</label>
                    <input value={draft.amount} placeholder="e.g. 250000" onChange={(e) => set({ amount: e.target.value })} />
                  </div>
                </div>
                <div className="fee-box">
                  <div>
                    <div className="muted" style={{ fontSize: 12.5 }}>Platform filing fee (2% + GST)</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--navy)' }}>
                      {draft.amount ? fee.sym + fee.feeFmt : '—'}
                    </div>
                  </div>
                  <span className="chip chip-paid">
                    <span className="d" />
                    Secured payment
                  </span>
                </div>
              </>
            )}

            {s === 5 && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>Supporting evidence</h2>
                <p className="muted" style={{ fontSize: 13.5, marginBottom: 20 }}>
                  Attach contracts, invoices, correspondence and any proof.
                </p>
                <div className="dropzone" onClick={addFile}>
                  <Icon name="file" width={26} height={26} />
                  <div>
                    <b>Click to attach a file</b>
                    <div className="muted" style={{ fontSize: 12.5 }}>
                      PDF, DOCX, PNG, ZIP · up to 25 MB each
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 16 }}>
                  {draft.files.length ? (
                    draft.files.map((f, i) => (
                      <div className="doc-row" key={i}>
                        <div className="fic pdf">{f.nm.split('.').pop()!.toUpperCase().slice(0, 3)}</div>
                        <div style={{ flex: 1 }}>
                          <div className="nm">{f.nm}</div>
                          <div className="sz">{f.size}</div>
                        </div>
                        <span style={{ cursor: 'pointer', color: 'var(--red)', fontSize: 18, lineHeight: 1 }} onClick={() => removeFile(i)}>
                          ×
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="muted" style={{ fontSize: 13, textAlign: 'center', padding: 14 }}>
                      No files attached yet.
                    </div>
                  )}
                </div>
              </>
            )}

            {s === 6 && (
              <>
                <h2 style={{ fontSize: 18, marginBottom: 4 }}>Review &amp; confirm</h2>
                <p className="muted" style={{ fontSize: 13.5, marginBottom: 20 }}>
                  Verify the details below, then pay the filing fee to submit.
                </p>
                <div className="review">
                  <div className="rev-row"><span>Claimant</span><b>{draft.claimantName}</b></div>
                  <div className="rev-row"><span>Respondent</span><b>{draft.respName || '—'}</b></div>
                  <div className="rev-row"><span>Category</span><b>{draft.category} · {draft.subCategory}</b></div>
                  <div className="rev-row"><span>Claim Amount</span><b>{fee.sym}{fee.amtFmt}</b></div>
                  <div className="rev-row"><span>Evidence Files</span><b>{draft.files.length} attached</b></div>
                  <div className="rev-row total"><span>Filing Fee (2% + GST)</span><b>{fee.sym}{fee.feeFmt}</b></div>
                </div>
                <label style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginTop: 18, fontSize: 13, color: 'var(--ink)' }}>
                  <input type="checkbox" checked={draft.agree} style={{ width: 'auto', marginTop: 2 }} onChange={(e) => set({ agree: e.target.checked })} />{' '}
                  I declare that the information provided is true and I agree to the platform&apos;s dispute resolution terms.
                </label>
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 22 }}>
              <button className="btn btn-ghost" onClick={back}>← Back</button>
              {s < 6 ? (
                <button className="btn btn-gold hot" onClick={next}>Save &amp; Continue →</button>
              ) : (
                <button className="btn btn-gold hot" onClick={submit}>
                  <Icon name="check" width={16} height={16} /> Pay &amp; Submit Dispute
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
