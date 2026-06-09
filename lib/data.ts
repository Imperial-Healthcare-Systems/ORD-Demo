// In-memory demo state. A module-level singleton that persists across
// client-side navigation (mirrors the original demo's global `DB`).
import { useReducer } from 'react';

export type StatusKey =
  | 'pending'
  | 'scheduled'
  | 'evidence'
  | 'progress'
  | 'assigned'
  | 'closed'
  | 'paid';

export type Case = {
  id: string;
  claimant: string;
  respondent: string;
  status: string;
  stKey: StatusKey;
  neutral: string;
  updated: string;
  amount: string;
  cat: string;
};

export type NotificationItem = {
  sub: string;
  to: string;
  type: 'Email' | 'SMS';
  st: string;
  stKey: StatusKey;
  date: string;
  read: boolean;
};

export type DocItem = {
  nm: string;
  ext: 'pdf' | 'doc' | 'zip' | 'img';
  cat: string;
  size: string;
  case: string;
  date: string;
};

export type Draft = {
  step: number;
  claimantName: string;
  claimantEmail: string;
  claimantPhone: string;
  respName: string;
  respEmail: string;
  respPhone: string;
  category: string;
  subCategory: string;
  desc: string;
  relief: string;
  amount: string;
  currency: 'INR' | 'USD' | 'GBP';
  files: { nm: string; size: string }[];
  agree: boolean;
};

type Role = 'claimant' | 'respondent' | 'neutral' | 'admin';

export const DB: {
  user: Role | null;
  caseSeq: number;
  cases: Case[];
  notifications: NotificationItem[];
  documents: DocItem[];
  draft: Draft;
  lastFiled?: string;
} = {
  user: null,
  caseSeq: 24,
  cases: [
    { id: 'ODR-2026-024', claimant: 'Priya Mehta', respondent: 'Beta Industries', status: 'Unassigned', stKey: 'pending', neutral: '—', updated: '10 May', amount: '₹2,40,000', cat: 'Commercial Dispute' },
    { id: 'ODR-2026-001', claimant: 'John Doe', respondent: 'Acme Corp Ltd.', status: 'Hearing', stKey: 'scheduled', neutral: 'A. Sharma', updated: '09 May', amount: '₹4,50,000', cat: 'Contractual Dispute' },
    { id: 'ODR-2026-014', claimant: 'Rahul Verma', respondent: 'Gamma Pvt. Ltd.', status: 'Evidence', stKey: 'evidence', neutral: 'A. Sharma', updated: '08 May', amount: '₹1,80,000', cat: 'Service Dispute' },
    { id: 'ODR-2026-019', claimant: 'Sneha Iyer', respondent: 'Delta Solutions', status: 'Award Due', stKey: 'progress', neutral: 'R. Kapoor', updated: '07 May', amount: '₹6,20,000', cat: 'Commercial Dispute' },
    { id: 'ODR-2026-031', claimant: 'Arjun Singh', respondent: 'Omega Corp', status: 'Assigned', stKey: 'assigned', neutral: 'M. Iyer', updated: '06 May', amount: '₹95,000', cat: 'Property Dispute' },
    { id: 'ODR-2026-008', claimant: 'Kavya Rao', respondent: 'Zeta Traders', status: 'Closed', stKey: 'closed', neutral: 'A. Sharma', updated: '04 May', amount: '₹3,10,000', cat: 'Service Dispute' },
  ],
  notifications: [
    { sub: 'Notice of Dispute — ODR-2026-001', to: 'Acme Corp Ltd.', type: 'Email', st: 'Delivered', stKey: 'paid', date: '05 May', read: true },
    { sub: 'Hearing Scheduled — 12 May', to: 'John Doe', type: 'Email', st: 'Delivered', stKey: 'paid', date: '09 May', read: true },
    { sub: 'Hearing Reminder', to: 'All Parties', type: 'SMS', st: 'Delivered', stKey: 'paid', date: '11 May', read: false },
    { sub: 'Award Issued — ODR-2026-007', to: 'Kavya Rao', type: 'Email', st: 'Delivered', stKey: 'paid', date: '04 May', read: true },
    { sub: 'Payment Receipt', to: 'Priya Mehta', type: 'Email', st: 'Queued', stKey: 'pending', date: 'Today', read: false },
  ],
  documents: [
    { nm: 'Contract_Agreement.pdf', ext: 'pdf', cat: 'Evidence', size: '2.4 MB', case: 'ODR-2026-001', date: '02 May' },
    { nm: 'Invoice_Advance.pdf', ext: 'pdf', cat: 'Invoices', size: '880 KB', case: 'ODR-2026-001', date: '02 May' },
    { nm: 'Email_Correspondence.zip', ext: 'zip', cat: 'Correspondence', size: '5.1 MB', case: 'ODR-2026-001', date: '04 May' },
    { nm: 'Statement_of_Claim.docx', ext: 'doc', cat: 'Evidence', size: '320 KB', case: 'ODR-2026-001', date: '02 May' },
    { nm: 'Delivery_Photos.png', ext: 'img', cat: 'Evidence', size: '1.8 MB', case: 'ODR-2026-001', date: '06 May' },
  ],
  draft: freshDraft(),
};

export function freshDraft(): Draft {
  return {
    step: 1,
    claimantName: 'John Doe',
    claimantEmail: 'john.doe@email.com',
    claimantPhone: '+91 98765 43210',
    respName: '',
    respEmail: '',
    respPhone: '',
    category: 'Commercial Dispute',
    subCategory: 'Breach of Contract',
    desc: '',
    relief: '',
    amount: '',
    currency: 'INR',
    files: [],
    agree: false,
  };
}

export const CHIP_CLASS: Record<StatusKey, string> = {
  pending: 'chip-pending',
  scheduled: 'chip-scheduled',
  evidence: 'chip-evidence',
  progress: 'chip-progress',
  assigned: 'chip-assigned',
  closed: 'chip-closed',
  paid: 'chip-paid',
};

export function nextCaseId(): string {
  DB.caseSeq += 7;
  return 'ODR-2026-0' + String(40 + (DB.caseSeq % 50)).slice(-2);
}

export function feeCalc(amount: string, currency: string) {
  const n = parseFloat(String(amount || '').replace(/[, ]/g, '')) || 0;
  const fee = Math.round(n * 0.02 * 1.18);
  const sym = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '₹';
  return { sym, amtFmt: n.toLocaleString('en-IN'), feeFmt: fee.toLocaleString('en-IN') };
}

/** Force a re-render after mutating the module-level DB. */
export function useRerender() {
  const [, force] = useReducer((x: number) => x + 1, 0);
  return force as () => void;
}
