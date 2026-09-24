import { ButtonLink } from '../components/ButtonLink.jsx'
import { Icon } from '../components/Icon.jsx'
import { owner } from '../data/portfolio.js'

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something reliable.</h2>
          <p>
            Available for conversations around backend engineering, secure APIs, database-heavy
            systems, .NET delivery, desktop integrations and AI-enabled application workflows.
          </p>
          <div className="hero-actions">
            <ButtonLink href={`mailto:${owner.email}`} icon="mail">
              Email Kiramat
            </ButtonLink>
            <ButtonLink href={`tel:${owner.phone.replaceAll(' ', '')}`} icon="phone" variant="secondary">
              Call
            </ButtonLink>
            <ButtonLink
              disabled={!owner.cvAvailable}
              download="Kiramat-Ullah-CV.pdf"
              href={owner.cvPath}
              icon="download"
              variant="ghost"
            >
              Download CV
            </ButtonLink>
          </div>
        </div>

        <address className="contact-card surface reveal">
          <a href={`mailto:${owner.email}`}>
            <Icon name="mail" />
            <span>{owner.email}</span>
          </a>
          <a href={`tel:${owner.phone.replaceAll(' ', '')}`}>
            <Icon name="phone" />
            <span>{owner.phone}</span>
          </a>
          <a href={owner.linkedin} rel="noreferrer" target="_blank">
            <Icon name="external" />
            <span>LinkedIn Profile</span>
          </a>
          <p>{owner.name}</p>
          <p>{owner.location}</p>
        </address>
      </div>
    </section>
  )
}
