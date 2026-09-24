import { SectionHeader } from '../components/SectionHeader.jsx'
import { techStack } from '../data/portfolio.js'

export function TechStack() {
  return (
    <section className="section" id="tech-stack">
      <div className="container">
        <SectionHeader
          eyebrow="Tech Stack"
          title="A categorized ecosystem, not a logo wall."
          text="The stack is organized by how the technologies are used across full-stack .NET delivery, data, security, UI, desktop and AI workflows."
        />

        <div className="stack-grid">
          {techStack.map((category) => (
            <article className="stack-card reveal" key={category.group}>
              <h3>{category.group}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
