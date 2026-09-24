import { Icon } from '../components/Icon.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { featuredProjects, liveWork, projects } from '../data/portfolio.js'

export function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Architecture-first project work across government-scale data and AI processing."
          text="Project details are limited to supplied, non-confidential information while still showing the engineering shape of the work."
        />

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <article className="project-feature surface reveal" key={project.name}>
              <div className="project-copy">
                <div className="project-kicker">
                  <span>{project.type}</span>
                  <strong>{project.highlight}</strong>
                </div>
                <h3>{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>

                <div className="project-block">
                  <h4>Engineering contributions</h4>
                  <ul className="check-list">
                    {project.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <ul className="tech-pills">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="project-architecture" aria-label={`${project.name} architecture flow`}>
                <div className="architecture-header">
                  <Icon name={project.name === 'AABIS' ? 'shield' : 'layers'} />
                  <span>{project.name === 'AABIS' ? 'Secure biometric workflow' : 'Async AI workflow'}</span>
                </div>
                <ol className="flow-list">
                  {project.flow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                {project.modalities && (
                  <div className="modality-grid" aria-label="Biometric modalities">
                    {project.modalities.map((modality) => (
                      <span key={modality}>{modality}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card surface reveal" key={project.name}>
              <span className="project-type">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ul className="tech-pills compact">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="live-work-block">
          <div className="mini-section-header reveal">
            <p className="eyebrow">Public Work</p>
            <h3>Selected live links that can be reviewed safely.</h3>
            <p>
              Restricted enterprise work is intentionally not exposed. These links represent public
              owned or previous-company work that can be opened directly.
            </p>
          </div>

          <div className="live-work-grid">
            {liveWork.map((item) => (
              <article className="live-work-card surface reveal" key={item.name}>
                <span className="project-type">{item.type}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <ul className="tech-pills compact">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a className="live-work-link" href={item.url} rel="noreferrer" target="_blank">
                  Visit live site
                  <Icon name="external" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
