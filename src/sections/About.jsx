import { SectionHeader } from '../components/SectionHeader.jsx'
import { capabilities, owner } from '../data/portfolio.js'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <SectionHeader
          eyebrow="About"
          title="Full-stack delivery for secure, data-intensive systems."
          text="Kiramat is a Full Stack .NET Engineer with practical experience across ASP.NET Core APIs, React, Angular, databases, security, desktop systems, background processing and AI-enabled workflows."
        />

        <div className="about-identity surface reveal">
          <figure className="profile-frame">
            <img
              alt="Kiramat Ullah at a software engineering workstation"
              decoding="async"
              loading="lazy"
              src={owner.profileImage}
            />
            <figcaption>
              <strong>{owner.name}</strong>
              <span>{owner.role}</span>
            </figcaption>
          </figure>
          <div className="about-copy">
            <p>
              I work across the full application surface where user workflows, API behavior, data
              correctness and reliability meet: ASP.NET Core services, React and Angular integrations,
              business logic, relational schemas, query optimization, authentication and production
              debugging. My work includes contribution to a government-level biometric platform
              handling more than 40 million biometric records.
            </p>
            <p>
              This portfolio is organized around real engineering responsibilities: scalable
              application services, database performance, secure access, large-scale processing, desktop
              integrations and an AI video analysis platform built with .NET 10, React, Python FastAPI
              and Hangfire.
            </p>
          </div>
        </div>
      </div>

      <div className="container capability-grid">
        {capabilities.map((capability) => (
          <article className="capability-card reveal" key={capability.title}>
            <span />
            <h3>{capability.title}</h3>
            <p>{capability.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
