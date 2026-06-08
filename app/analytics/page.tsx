'use client';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Donut from '@/components/Donut';
import { adminNav } from '@/lib/nav';
import { linePath } from '@/lib/charts';

export default function AnalyticsPage() {
  return (
    <div className="portal">
      <Sidebar role="admin" active="rep" items={adminNav} />
      <div className="main">
        <Topbar title="Analytics & Reports" sub="Operational and financial insights" />
        <div className="content">
          <div className="grid-2b" style={{ marginBottom: 22 }}>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Settlement Rate</h2>
                <span className="chip chip-paid">
                  <span className="d" />
                  92% · ▲ 5%
                </span>
              </div>
              <svg className="linechart" viewBox="0 0 400 170" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(5,150,105,.25)" />
                    <stop offset="1" stopColor="rgba(5,150,105,0)" />
                  </linearGradient>
                </defs>
                <path
                  d={`${linePath([60, 64, 62, 70, 74, 78, 82, 88, 92], 400, 170)} L400 170 L0 170 Z`}
                  fill="url(#g1)"
                />
                <path
                  d={linePath([60, 64, 62, 70, 74, 78, 82, 88, 92], 400, 170)}
                  fill="none"
                  stroke="#059669"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Avg. Resolution Time</h2>
                <span className="chip chip-scheduled">
                  <span className="d" />
                  28 days · ▼ 7
                </span>
              </div>
              <svg className="linechart" viewBox="0 0 400 170" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(37,99,235,.25)" />
                    <stop offset="1" stopColor="rgba(37,99,235,0)" />
                  </linearGradient>
                </defs>
                <path
                  d={`${linePath([48, 46, 44, 40, 38, 35, 33, 30, 28], 400, 170)} L400 170 L0 170 Z`}
                  fill="url(#g2)"
                />
                <path
                  d={linePath([48, 46, 44, 40, 38, 35, 33, 30, 28], 400, 170)}
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
          <div className="grid-2b">
            <div className="card card-pad">
              <div className="section-head">
                <h2>Revenue Trend (This Year)</h2>
              </div>
              <div className="bars" style={{ height: 180 }}>
                {[40, 52, 48, 60, 55, 70, 65, 78, 72, 85, 80, 95].map((h, i) => (
                  <div className="bgrp" key={i}>
                    <div className="bcol">
                      <div
                        className="b"
                        style={{
                          height: `${h}%`,
                          width: 10,
                          background: 'linear-gradient(180deg,var(--navy),var(--navy-3))',
                        }}
                      />
                    </div>
                    <div className="bl" style={{ fontSize: 9 }}>
                      {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card card-pad">
              <div className="section-head">
                <h2>Top Dispute Categories</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
                <Donut
                  segs={[
                    { v: 45, color: '#0F172A' },
                    { v: 25, color: '#D4AF37' },
                    { v: 18, color: '#2563EB' },
                    { v: 12, color: '#94A3B8' },
                  ]}
                />
                <div className="legend">
                  <div className="lg">
                    <span className="sw" style={{ background: '#0F172A' }} />
                    Commercial<span className="v">45%</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#D4AF37' }} />
                    Service<span className="v">25%</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#2563EB' }} />
                    Contractual<span className="v">18%</span>
                  </div>
                  <div className="lg">
                    <span className="sw" style={{ background: '#94A3B8' }} />
                    Others<span className="v">12%</span>
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
