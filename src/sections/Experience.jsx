import { SectionHeader } from '../components/SectionHeader.jsx'
import { experience } from '../data/portfolio.js'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Progression through full-stack .NET delivery and enterprise-scale systems."
          text="A practical path through ASP.NET Core, Angular, React, WPF, databases, APIs and production system reliability."
        />

        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.period}`}>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-card surface reveal">
                <div className="timeline-meta">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>
                <h3>{job.company}</h3>
                <p className="role">{job.role}</p>
                <p>{job.summary}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
