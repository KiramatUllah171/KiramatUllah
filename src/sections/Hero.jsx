import { ButtonLink } from '../components/ButtonLink.jsx'
import { Icon } from '../components/Icon.jsx'
import { heroBadges, owner, stats } from '../data/portfolio.js'

export function Hero() {
  return (
    <section className="hero-section section" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Full Stack .NET Engineer</p>
          <h1>Building secure, scalable and high-performance software systems.</h1>
          <p className="hero-lede">
            {owner.headline}. 3+ years across ASP.NET Core, PostgreSQL, microservices, React, Angular,
            desktop systems and AI-powered applications, including contribution to a government-level
            biometric platform processing 40M+ biometric records.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <ButtonLink href="#projects" icon="arrowRight">
              View My Work
            </ButtonLink>
            <ButtonLink href="#contact" icon="mail" variant="secondary">
              Contact Me
            </ButtonLink>
            <ButtonLink
              disabled={!owner.cvAvailable}
              download="Kiramat_Ullah-CV.pdf"
              href={owner.cvPath}
              icon="download"
              variant="ghost"
            >
              Download CV
            </ButtonLink>
          </div>

          <div className="hero-links" aria-label="Professional links">
            <a href={owner.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href={`mailto:${owner.email}`}>{owner.email}</a>
          </div>

          <ul aria-label="Core technologies" className="hero-badges">
            {heroBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>

        <div className="system-visual reveal" aria-label="Engineering system visualization">
          <div className="system-badge">
            <span />
            Production-minded engineering
          </div>
          <div className="visual-panel visual-panel-primary">
            <div className="panel-topline">
              <span>Full-Stack System</span>
              <Icon name="layers" />
            </div>
            <div className="architecture-map">
              <div className="node node-api">API</div>
              <div className="node node-auth">Auth</div>
              <div className="node node-worker">Workers</div>
              <div className="node node-db">PostgreSQL</div>
              <span className="line line-one" />
              <span className="line line-two" />
              <span className="line line-three" />
            </div>
          </div>

          <div className="visual-panel metric-panel">
            <span>Biometric scale</span>
            <strong>40M+</strong>
            <small>Fingerprint, face, iris and palm records</small>
          </div>

          <div className="visual-panel code-panel" aria-hidden="true">
            <span>request.pipeline</span>
            <code>validate - authorize - process - persist</code>
          </div>

          <div className="signal-rail" aria-hidden="true">
            <span>API</span>
            <span>DB</span>
            <span>AUTH</span>
            <span>JOBS</span>
          </div>
        </div>
      </div>

      <div className="container stats-grid" aria-label="Engineering statistics">
        {stats.map((stat) => (
          <article className="stat-card reveal" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <p>{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
