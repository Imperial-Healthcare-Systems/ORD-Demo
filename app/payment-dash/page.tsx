'use client';
import Icon from '@/components/Icon';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { adminNav } from '@/lib/nav';
import { useToast } from '@/components/ToastProvider';

export default function PaymentDashPage() {
  const toast = useToast();
  return (
    <div className="portal">
      <Sidebar role="admin" active="pay" items={adminNav} />
      <div className="main">
        <Topbar
          title="Payments Dashboard"
          sub="Fees, invoices & refunds across the platform"
        />
        <div className="content">
          <div className="kpi-grid">
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--emerald-soft)', color: 'var(--emerald)' }}>
                <Icon name="card" />
              </div>
              <div className="lbl">Total Revenue</div>
              <div className="val" style={{ fontSize: 22 }}>
                ₹1.25 Cr
              </div>
              <span className="trend up">▲ 14% YoY</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
                <Icon name="file" />
              </div>
              <div className="lbl">Filing Fees</div>
              <div className="val" style={{ fontSize: 23 }}>
                ₹45.2L
              </div>
              <span className="trend up">▲ 6%</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: '#EDE9FE', color: '#7C3AED' }}>
                <Icon name="scale" />
              </div>
              <div className="lbl">Arbitrator Fees</div>
              <div className="val" style={{ fontSize: 23 }}>
                ₹60.3L
              </div>
              <span className="trend up">▲ 11%</span>
            </div>
            <div className="kpi">
              <div className="ic" style={{ background: 'var(--amber-soft)', color: 'var(--amber)' }}>
                <Icon name="grid" />
              </div>
              <div className="lbl">Platform Fees</div>
              <div className="val" style={{ fontSize: 23 }}>
                ₹20.3L
              </div>
              <span className="trend up">▲ 9%</span>
            </div>
          </div>
          <div className="grid-2">
            <div className="card">
              <div className="card-pad" style={{ paddingBottom: 0 }}>
                <div className="section-head">
                  <h2>Recent Transactions</h2>
                  <a className="link-gold">View all →</a>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Txn ID</th>
                    <th>Case</th>
                    <th>Payer</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cid">TXN-9001</td>
                    <td>ODR-2026-001</td>
                    <td>John Doe</td>
                    <td>Filing</td>
                    <td className="strong">₹25,000</td>
                    <td>
                      <span className="chip chip-paid">
                        <span className="d" />
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cid">TXN-9002</td>
                    <td>ODR-2026-024</td>
                    <td>Priya Mehta</td>
                    <td>Filing</td>
                    <td className="strong">₹18,000</td>
                    <td>
                      <span className="chip chip-paid">
                        <span className="d" />
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cid">TXN-9003</td>
                    <td>ODR-2026-014</td>
                    <td>Rahul Verma</td>
                    <td>Arbitrator</td>
                    <td className="strong">₹40,000</td>
                    <td>
                      <span className="chip chip-paid">
                        <span className="d" />
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cid">TXN-9004</td>
                    <td>ODR-2026-019</td>
                    <td>Sneha Iyer</td>
                    <td>Platform</td>
                    <td className="strong">₹8,000</td>
                    <td>
                      <span className="chip chip-pending">
                        <span className="d" />
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Refund Requests</h2>
              </div>
              <div className="doc-row" style={{ cursor: 'default' }}>
                <div className="fic" style={{ background: 'var(--amber)' }}>
                  ↺
                </div>
                <div style={{ flex: 1 }}>
                  <div className="nm">ODR-2026-015 · ₹25,000</div>
                  <div className="sz">Requested 06 May · Filing fee</div>
                </div>
                <button className="btn btn-gold btn-sm" onClick={() => toast('Refund approved')}>
                  Approve
                </button>
              </div>
              <div className="doc-row" style={{ cursor: 'default' }}>
                <div className="fic" style={{ background: 'var(--amber)' }}>
                  ↺
                </div>
                <div style={{ flex: 1 }}>
                  <div className="nm">ODR-2026-011 · ₹12,000</div>
                  <div className="sz">Requested 04 May · Withdrawn</div>
                </div>
                <button className="btn btn-gold btn-sm" onClick={() => toast('Refund approved')}>
                  Approve
                </button>
              </div>
              <div style={{ marginTop: 18 }}>
                <div className="section-head">
                  <h2>Invoices</h2>
                </div>
                <div className="doc-row">
                  <div className="fic pdf">PDF</div>
                  <div style={{ flex: 1 }}>
                    <div className="nm">Invoice_ODR-2026-001.pdf</div>
                    <div className="sz">Generated 02 May</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
