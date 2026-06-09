'use client';
import { useState } from 'react';
import Icon from '@/components/Icon';
import BrandMark from '@/components/BrandMark';
import { useGo } from '@/lib/useGo';
import { useToast } from '@/components/ToastProvider';
import { DB } from '@/lib/data';
import type { ScreenId } from '@/lib/routes';

type Role = 'claimant' | 'respondent' | 'neutral' | 'admin';
const DEST: Record<Role, ScreenId> = {
  claimant: 'claimant-dash',
  respondent: 'respondent-dash',
  neutral: 'neutral-dash',
  admin: 'admin-dash',
};

export default function LoginPage() {
  const go = useGo();
  const toast = useToast();
  const [mode, setMode] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('john.doe@email.com');
  const [pass, setPass] = useState('demodemo');
  const [otp, setOtp] = useState('481920');
  const [err, setErr] = useState<string | null>(null);

  function doLogin(role: Role) {
    if (mode === 'email') {
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
        setErr('email');
        toast('Enter a valid email address');
        return;
      }
      if (pass.length < 4) {
        setErr('pass');
        toast('Enter your password');
        return;
      }
    } else if (otp.replace(/\D/g, '').length < 4) {
      setErr('otp');
      toast('Enter the 6-digit OTP');
      return;
    }
    setErr(null);
    DB.user = role;
    toast('Signed in successfully');
    setTimeout(() => go(DEST[role]), 500);
  }

  return (
    <div className="login-wrap">
      <div className="login-art">
        <div className="glow" />
        <div className="login-brandrow">
          <BrandMark size={52} radius={14} />
          <div className="lbt">
            ODR Platform<small>BY IMPERIAL TECH INNOVATIONS</small>
          </div>
        </div>
        <h2>
          Welcome back to
          <br />
          justice, online.
        </h2>
        <p>
          Sign in to file disputes, track your cases, attend hearings and access
          settlements — all in one secure workspace.
        </p>
        <div className="pts">
          <div className="p">
            <span className="c">
              <Icon name="check" />
            </span>{' '}
            Bank-grade encrypted case storage
          </div>
          <div className="p">
            <span className="c">
              <Icon name="check" />
            </span>{' '}
            OTP-secured login for every role
          </div>
          <div className="p">
            <span className="c">
              <Icon name="check" />
            </span>{' '}
            Full audit trail on every action
          </div>
        </div>
      </div>
      <div className="login-form">
        <div className="login-card">
          <h3>Sign in to your account</h3>
          <p className="sub">Choose how you&apos;d like to continue.</p>
          <div className="login-tabs">
            <button
              className={mode === 'email' ? 'on' : ''}
              onClick={() => setMode('email')}
            >
              Email Login
            </button>
            <button
              className={mode === 'otp' ? 'on' : ''}
              onClick={() => setMode('otp')}
            >
              OTP Login
            </button>
          </div>

          {mode === 'email' ? (
            <>
              <div className="field">
                <label>Email Address</label>
                <input
                  className={err === 'email' ? 'err' : ''}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErr(null);
                  }}
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  className={err === 'pass' ? 'err' : ''}
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                    setErr(null);
                  }}
                />
              </div>
              <div className="row">
                <label>
                  <input type="checkbox" defaultChecked style={{ width: 'auto' }} />{' '}
                  Remember me
                </label>
                <a className="link-gold">Forgot password?</a>
              </div>
            </>
          ) : (
            <>
              <div className="field">
                <label>Mobile Number</label>
                <input defaultValue="+91 98765 43210" />
              </div>
              <div className="field">
                <label>
                  Enter OTP{' '}
                  <span className="muted" style={{ fontWeight: 500 }}>
                    (demo: any 6 digits)
                  </span>
                </label>
                <input
                  className={err === 'otp' ? 'err' : ''}
                  placeholder="• • • • • •"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setErr(null);
                  }}
                />
              </div>
              <div className="row">
                <span className="muted" style={{ fontSize: 12.5 }}>
                  OTP sent to your registered mobile.
                </span>
                <a className="link-gold">Resend</a>
              </div>
            </>
          )}

          <button
            className="btn btn-gold hot"
            style={{ width: '100%', justifyContent: 'center', padding: 13 }}
            onClick={() => doLogin('claimant')}
          >
            Login as Claimant
          </button>
          <p
            style={{
              textAlign: 'center',
              fontSize: 12.5,
              color: 'var(--muted)',
              marginTop: 18,
            }}
          >
            New here?{' '}
            <a className="link-gold" onClick={() => go('file-dispute')}>
              Create an account
            </a>
          </p>

          <div
            style={{
              marginTop: 26,
              borderTop: '1px solid var(--line)',
              paddingTop: 20,
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '.6px',
                textTransform: 'uppercase',
                color: 'var(--muted-2)',
                textAlign: 'center',
                marginBottom: 13,
              }}
            >
              Demo — jump to any portal
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>
              <button
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center' }}
                onClick={() => doLogin('claimant')}
              >
                👤 Claimant
              </button>
              <button
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center' }}
                onClick={() => doLogin('respondent')}
              >
                📩 Respondent
              </button>
              <button
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center' }}
                onClick={() => doLogin('neutral')}
              >
                ⚖️ Neutral
              </button>
              <button
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center' }}
                onClick={() => doLogin('admin')}
              >
                🛡️ Admin
              </button>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              style={{ justifyContent: 'center', width: '100%', marginTop: 9 }}
              onClick={() => go('mobile')}
            >
              📱 Mobile / Responsive Views
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
