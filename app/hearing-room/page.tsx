'use client';
import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import VidTile from '@/components/VidTile';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';

export default function HearingRoomPage() {
  const go = useGo();
  const toast = useToast();
  const [elapsed, setElapsed] = useState(1 * 3600 + 21 * 60 + 36); // 01:21:36
  useEffect(() => {
    const t = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = (s: number) =>
    [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
      .map((n) => String(n).padStart(2, '0'))
      .join(':');

  return (
    <div className="hr-wrap">
      <div className="hr-top">
        <div>
          <div className="cid">ODR-2026-001 · Arbitration Hearing</div>
        </div>
        <div className="sub">John Doe vs Acme Corp Ltd.</div>
        <div className="rec">
          <span className="d" />
          Recording
        </div>
        <div className="tm">{fmt(elapsed)}</div>
      </div>
      <div className="hr-body">
        <div className="hr-stage">
          <div className="hr-vids">
            <VidTile name="John Doe" role="Claimant" init="JD" bg="#3B82F6,#1D4ED8" />
            <VidTile name="Acme Corp Ltd." role="Respondent" init="AC" bg="#F59E0B,#D97706" />
            <VidTile
              name="Ananya Sharma"
              role="Neutral / Arbitrator"
              init="AS"
              bg="#10B981,#059669"
              neutral
            />
            <div className="hr-vid" style={{ background: 'var(--navy-2)' }}>
              <div style={{ textAlign: 'center', color: '#94A3B8' }}>
                <div style={{ fontSize: 30, marginBottom: 6 }}>📄</div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: '#E2E8F0' }}>
                  Shared: Contract_Agreement.pdf
                </div>
                <div style={{ fontSize: 11, marginTop: 3 }}>Presented by Claimant</div>
              </div>
            </div>
          </div>
          <div className="hr-ctrl">
            <div className="cb">
              <div className="b">
                <Icon name="bell" width={20} height={20} />
              </div>
              <small>Mute</small>
            </div>
            <div className="cb">
              <div className="b">
                <Icon name="video" width={20} height={20} />
              </div>
              <small>Stop Video</small>
            </div>
            <div className="cb">
              <div className="b">
                <Icon name="grid" width={20} height={20} />
              </div>
              <small>Share Screen</small>
            </div>
            <div className="cb">
              <div className="b">
                <Icon name="users" width={20} height={20} />
              </div>
              <small>Participants</small>
            </div>
            <div className="cb">
              <div className="b">
                <Icon name="msg" width={20} height={20} />
              </div>
              <small>Chat</small>
            </div>
            <div
              className="cb end"
              onClick={() => {
                toast('Hearing ended · recording saved to case vault');
                setTimeout(() => go('award'), 1100);
              }}
            >
              <div className="b">
                <Icon name="logout" width={18} height={18} /> End Hearing
              </div>
            </div>
          </div>
        </div>
        <div className="hr-side">
          <div className="hr-side-tabs">
            <button>Participants (3)</button>
            <button className="on">Chat</button>
          </div>
          <div className="hr-chat">
            <div className="hr-msg">
              <div className="who">
                Ananya Sharma <small>Neutral · 10:15</small>
              </div>
              <div className="bub">
                Please share the invoice related to the advance payment for the record.
              </div>
            </div>
            <div className="hr-msg">
              <div className="who" style={{ color: '#93C5FD' }}>
                John Doe <small>Claimant · 10:16</small>
              </div>
              <div className="bub">
                Uploading the invoice now — it&apos;s the advance payment receipt dated 12 Jan.
              </div>
            </div>
            <div className="hr-msg">
              <div className="who" style={{ color: '#FCD34D' }}>
                Acme Corp Ltd. <small>Respondent · 10:18</small>
              </div>
              <div className="bub">
                We have delivery documents to share that show the goods were dispatched.
              </div>
            </div>
            <div className="hr-msg">
              <div className="who">
                Ananya Sharma <small>Neutral · 10:19</small>
              </div>
              <div className="bub">
                Noted. Both parties, please keep evidence to the documents already on record.
              </div>
            </div>
          </div>
          <div className="hr-input">
            <input placeholder="Type a message…" />
            <div className="snd">
              <Icon name="msg" width={17} height={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
