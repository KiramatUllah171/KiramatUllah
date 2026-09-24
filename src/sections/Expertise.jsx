import { Icon } from '../components/Icon.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { expertise } from '../data/portfolio.js'

const iconNames = ['briefcase', 'database', 'shield', 'layers', 'external', 'arrowRight']

export function Expertise() {
  return (
    <section className="section section-muted" id="expertise">
      <div className="container">
        <SectionHeader
          eyebrow="Core Expertise"
          title="Full-stack engineering breadth with strong system depth."
          text="The emphasis is on maintainable .NET services, polished frontend integrations, strong data foundations, secure access patterns and reliable production workflows."
        />

        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article className="expertise-card surface reveal" key={item.title}>
              <div className="expertise-icon">
                <Icon name={iconNames[index]} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="skill-list">
                {item.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
