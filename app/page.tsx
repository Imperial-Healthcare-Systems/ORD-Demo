'use client';
import Icon from '@/components/Icon';
import { useGo } from '@/lib/useGo';

export default function HomePage() {
  const go = useGo();
  return (
    <div className="pub">
      <nav className="pub-nav">
        <div className="lg">
          <div className="mark">⚖</div>
          <div>
            ODR Platform<small>RESOLVE • ONLINE</small>
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
        <div>
          <span className="eyebrow">⚖ Trusted Online Dispute Resolution</span>
          <h1>
            Resolve Disputes
            <br />
            <em>Online.</em> Fast.
            <br />
            Secure. Transparent.
          </h1>
          <p>
            Our ODR platform helps individuals and businesses resolve disputes
            end-to-end through negotiation, mediation, conciliation and
            arbitration — without ever stepping into a courtroom.
          </p>
          <div className="cta">
            <a className="btn btn-gold hot" onClick={() => go('login')}>
              <Icon name="file" width={17} height={17} /> File a Dispute
            </a>
            <a className="btn btn-ghost" onClick={() => go('login')}>
              Become a Neutral
            </a>
          </div>
        </div>
        <div className="hero-art">
          <div className="glow" />
          <div className="glow2" />
          <div className="scales">⚖️</div>
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
        <div className="st">
          <div className="ic">⚖️</div>
          <div>
            <div className="v">2,548+</div>
            <div className="l">Cases Resolved</div>
          </div>
        </div>
        <div className="st">
          <div className="ic">📈</div>
          <div>
            <div className="v">92%</div>
            <div className="l">Settlement Rate</div>
          </div>
        </div>
        <div className="st">
          <div className="ic">⏱️</div>
          <div>
            <div className="v">28 Days</div>
            <div className="l">Avg. Resolution</div>
          </div>
        </div>
        <div className="st">
          <div className="ic">👥</div>
          <div>
            <div className="v">150+</div>
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
        <div className="lg">
          <div className="mark">⚖</div>ODR Platform
        </div>
        <div className="spacer" />
        <span>
          © 2026 Imperial Tech Innovations · Confidential Demo · Built for Mr.
          Rudvik Reddy
        </span>
      </footer>
    </div>
  );
}
