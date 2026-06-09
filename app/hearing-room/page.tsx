'use client';
import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/Icon';
import VidTile from '@/components/VidTile';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';

type Msg = { who: string; role: string; time: string; m: string; color?: string };

const HR_AUTO = [
  {
    who: 'John Doe',
    role: 'Claimant',
    color: '#93C5FD',
    m: 'Sharing the signed contract and the advance payment receipt now.',
  },
  {
    who: 'Acme Corp Ltd.',
    role: 'Respondent',
    color: '#FCD34D',
    m: 'We dispute the delivery timeline — our dispatch records are attached.',
  },
  {
    who: 'Ananya Sharma',
    role: 'Neutral',
    color: undefined as string | undefined,
    m: 'Thank you. I will review both sets of documents before issuing directions.',
  },
];

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

  const [msgs, setMsgs] = useState<Msg[]>([
    {
      who: 'Ananya Sharma',
      role: 'Neutral',
      time: '10:15',
      m: 'Please share the invoice related to the advance payment for the record.',
    },
    {
      who: 'John Doe',
      role: 'Claimant',
      time: '10:16',
      m: "Uploading the invoice now — it's the advance payment receipt dated 12 Jan.",
      color: '#93C5FD',
    },
    {
      who: 'Acme Corp Ltd.',
      role: 'Respondent',
      time: '10:18',
      m: 'We have delivery documents to share that show the goods were dispatched.',
      color: '#FCD34D',
    },
    {
      who: 'Ananya Sharma',
      role: 'Neutral',
      time: '10:19',
      m: 'Noted. Both parties, please keep evidence to the documents already on record.',
    },
  ]);
  const [text, setText] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [msgs]);

  const now = () => {
    const d = new Date();
    return (
      String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0')
    );
  };

  function send() {
    const v = text.trim();
    if (!v) return;
    setMsgs((m) => [...m, { who: 'Ananya Sharma (You)', role: 'Neutral', time: now(), m: v }]);
    setText('');
  }

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setMsgs((m) => [...m, { ...HR_AUTO[i % 3], time: now() }]);
      i++;
      if (i >= 6) clearInterval(t);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  const [off, setOff] = useState<{ mute?: boolean; video?: boolean; share?: boolean }>({});
  function toggle(key: 'mute' | 'video' | 'share', onL: string, offL: string) {
    setOff((o) => {
      const n = { ...o, [key]: !o[key] };
      return n;
    });
    toast(off[key] ? onL : offL);
  }

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
            <div
              className={`cb${off.mute ? ' ctl-off' : ''}`}
              onClick={() => toggle('mute', 'Mute', 'Unmute')}
            >
              <div className="b">
                <Icon name="bell" width={20} height={20} />
              </div>
              <small>{off.mute ? 'Unmute' : 'Mute'}</small>
            </div>
            <div
              className={`cb${off.video ? ' ctl-off' : ''}`}
              onClick={() => toggle('video', 'Stop Video', 'Start Video')}
            >
              <div className="b">
                <Icon name="video" width={20} height={20} />
              </div>
              <small>{off.video ? 'Start Video' : 'Stop Video'}</small>
            </div>
            <div
              className={`cb${off.share ? ' ctl-off' : ''}`}
              onClick={() => toggle('share', 'Share Screen', 'Stop Sharing')}
            >
              <div className="b">
                <Icon name="grid" width={20} height={20} />
              </div>
              <small>{off.share ? 'Stop Sharing' : 'Share Screen'}</small>
            </div>
            <div className="cb" onClick={() => toast('3 participants connected')}>
              <div className="b">
                <Icon name="users" width={20} height={20} />
              </div>
              <small>Participants</small>
            </div>
            <div className="cb" onClick={() => inputRef.current?.focus()}>
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
          <div className="hr-chat" ref={chatRef}>
            {msgs.map((c, i) => (
              <div className="hr-msg" key={i}>
                <div className="who" style={c.color ? { color: c.color } : undefined}>
                  {c.who}{' '}
                  <small>
                    {c.role} · {c.time}
                  </small>
                </div>
                <div className="bub">{c.m}</div>
              </div>
            ))}
          </div>
          <div className="hr-input">
            <input
              ref={inputRef}
              value={text}
              placeholder="Type a message…"
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  send();
                }
              }}
            />
            <div className="snd" onClick={send}>
              <Icon name="msg" width={17} height={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
