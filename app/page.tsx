'use client';
import { useGo } from '@/lib/useGo';
import BrandMark from '@/components/BrandMark';
import HeroArt from '@/components/HeroArt';
import CountUp from '@/components/CountUp';

export default function HomePage() {
  const go = useGo();
  return (
    <div className="pub">
      <nav className="pub-nav">
        <div className="lg">
          <BrandMark size={42} />
          <div>
            ODR Platform<small>BY IMPERIAL TECH INNOVATIONS</small>
          </div>
        </div>
        <div className="links">
          <a onClick={() => go('home')}>Home</a>
          <a>About</a>
          <a>Services</a>
          <a onClick={() => go('home')}>How It Works</a>
          <a>Pricing</a>
          <a>Contact</a>
        </div>
        <div className="spacer" />
        <a className="btn btn-ghost btn-sm" onClick={() => go('login')}>
          Login
        </a>
        <a className="btn btn-gold btn-sm hot" onClick={() => go('login')}>
          File a Dispute
        </a>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow">RESOLVING DISPUTES.</div>
          <h1 className="hero-title">
            RESTORING
            <br />
            <span className="gold">JUSTICE.</span>
          </h1>
          <div className="hero-rule" />
          <p className="hero-sub">
            A seamless Online Dispute Resolution platform
            <br />
            for faster, fairer and effective justice.
          </p>
          <a className="hero-btn" onClick={() => go('login')}>
            START A CASE <span className="arr">→</span>
          </a>
        </div>
        <div className="hero-visual">
          <HeroArt />
          <div className="float-card fc1">
            <div className="ic" style={{ background: 'var(--emerald-soft)' }}>
              ✅
            </div>
            <div>
              <b>Case Resolved</b>
              <small>ODR-2026-001 · 18 days</small>
            </div>
          </div>
          <div className="float-card fc2">
            <div className="ic" style={{ background: 'var(--blue-soft)' }}>
              📹
            </div>
            <div>
              <b>Hearing Live</b>
              <small>3 parties connected</small>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="st reveal">
          <div className="ic">⚖️</div>
          <div>
            <div className="v">
              <CountUp value={2548} suffix="+" />
            </div>
            <div className="l">Cases Resolved</div>
          </div>
        </div>
        <div className="st reveal">
          <div className="ic">📈</div>
          <div>
            <div className="v">
              <CountUp value={92} suffix="%" />
            </div>
            <div className="l">Settlement Rate</div>
          </div>
        </div>
        <div className="st reveal">
          <div className="ic">⏱️</div>
          <div>
            <div className="v">
              <CountUp value={28} suffix=" Days" />
            </div>
            <div className="l">Avg. Resolution</div>
          </div>
        </div>
        <div className="st reveal">
          <div className="ic">👥</div>
          <div>
            <div className="v">
              <CountUp value={150} suffix="+" />
            </div>
            <div className="l">Expert Neutrals</div>
          </div>
        </div>
      </div>

      <section className="svc">
        <h2>Four Ways to Resolve</h2>
        <p className="lead">
          Every dispute is different. Choose the path that fits — or let our
          neutrals guide you to the right one.
        </p>
        <div className="svc-grid">
          <div className="svc-card">
            <div className="ic">🤝</div>
            <h3>Negotiation</h3>
            <p>
              Parties communicate directly with the help of our online tools to
              reach a mutually acceptable solution.
            </p>
          </div>
          <div className="svc-card">
            <div className="ic">🕊️</div>
            <h3>Mediation</h3>
            <p>
              A neutral mediator helps parties identify issues and reach an
              amicable, private settlement.
            </p>
          </div>
          <div className="svc-card">
            <div className="ic">💬</div>
            <h3>Conciliation</h3>
            <p>
              A conciliator facilitates discussions and proposes balanced
              settlement options to both sides.
            </p>
          </div>
          <div className="svc-card">
            <div className="ic">⚖️</div>
            <h3>Arbitration</h3>
            <p>
              A neutral arbitrator hears the case and issues a binding,
              enforceable award.
            </p>
          </div>
        </div>
      </section>

      <section className="works">
        <h2>How ODR Works</h2>
        <div className="works-grid">
          <div className="work-step">
            <div className="n">1</div>
            <h4>File Dispute</h4>
            <p>
              Submit your dispute online with party details, claim amount and
              supporting evidence.
            </p>
          </div>
          <div className="work-step">
            <div className="n">2</div>
            <h4>Notify Parties</h4>
            <p>
              The respondent is automatically served notice with a secure link
              to log in and respond.
            </p>
          </div>
          <div className="work-step">
            <div className="n">3</div>
            <h4>Conduct Proceedings</h4>
            <p>
              An expert neutral is assigned. Hearings happen over secure video
              with shared evidence.
            </p>
          </div>
          <div className="work-step">
            <div className="n">4</div>
            <h4>Resolution</h4>
            <p>
              A settlement or binding award is issued digitally — signed, sealed
              and downloadable.
            </p>
          </div>
        </div>
      </section>

      <footer className="pub-foot">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="fb-row">
              <BrandMark size={44} />
              <div className="fb-name">
                ODR Platform<small>BY IMPERIAL TECH INNOVATIONS</small>
              </div>
            </div>
            <p>
              A seamless Online Dispute Resolution platform for faster, fairer
              and effective justice — secure, transparent and accessible from
              anywhere.
            </p>
            <div className="fb-badges">
              <span>🔐 ISO 27001</span>
              <span>⚖ Arbitration &amp; Conciliation Act</span>
              <span>🇮🇳 Made in India</span>
            </div>
          </div>
          <div className="foot-cols">
            <div className="fcol">
              <h5>Platform</h5>
              <a onClick={() => go('login')}>File a Dispute</a>
              <a onClick={() => go('login')}>Track a Case</a>
              <a onClick={() => go('login')}>Become a Neutral</a>
              <a onClick={() => go('login')}>Pricing</a>
            </div>
            <div className="fcol">
              <h5>Resolve</h5>
              <a>Negotiation</a>
              <a>Mediation</a>
              <a>Conciliation</a>
              <a>Arbitration</a>
            </div>
            <div className="fcol">
              <h5>Company</h5>
              <a>About Us</a>
              <a>Panel of Neutrals</a>
              <a>Contact</a>
              <a>Careers</a>
            </div>
            <div className="fcol">
              <h5>Legal</h5>
              <a>Terms of Use</a>
              <a>Privacy Policy</a>
              <a>Grievance Redressal</a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Imperial Tech Innovations™ · All rights reserved.</span>
          <span className="foot-conf">
            Confidential Demo · Prepared for Mr. Rudvik Reddy
          </span>
        </div>
      </footer>
    </div>
  );
}
