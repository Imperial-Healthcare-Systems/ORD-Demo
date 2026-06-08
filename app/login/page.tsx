'use client';
import Icon from '@/components/Icon';
import { useGo } from '@/lib/useGo';

export default function LoginPage() {
  const go = useGo();
  return (
    <div className="login-wrap">
      <div className="login-art">
        <div className="glow" />
        <div className="mark">⚖</div>
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
            <button className="on">Email Login</button>
            <button>OTP Login</button>
          </div>
          <div className="field">
            <label>Email Address</label>
            <input defaultValue="john.doe@email.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" defaultValue="••••••••••" />
          </div>
          <div className="row">
            <label>
              <input type="checkbox" defaultChecked style={{ width: 'auto' }} />{' '}
              Remember me
            </label>
            <a className="link-gold">Forgot password?</a>
          </div>
          <button
            className="btn btn-gold hot"
            style={{ width: '100%', justifyContent: 'center', padding: 13 }}
            onClick={() => go('claimant-dash')}
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
            New here? <a className="link-gold">Create an account</a>
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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 9,
              }}
            >
              <button
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center' }}
                onClick={() => go('claimant-dash')}
              >
                👤 Claimant
              </button>
              <button
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center' }}
                onClick={() => go('respondent-dash')}
              >
                📩 Respondent
              </button>
              <button
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center' }}
                onClick={() => go('neutral-dash')}
              >
                ⚖️ Neutral
              </button>
              <button
                className="btn btn-ghost btn-sm"
                style={{ justifyContent: 'center' }}
                onClick={() => go('admin-dash')}
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
