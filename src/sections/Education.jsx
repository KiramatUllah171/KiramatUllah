import { SectionHeader } from '../components/SectionHeader.jsx'
import { education, languages } from '../data/portfolio.js'

export function Education() {
  return (
    <section className="section section-muted" id="education">
      <div className="container education-grid">
        <div>
          <SectionHeader
            eyebrow="Education"
            title="Computer science foundation with practical engineering focus."
            text="The academic foundation supports the production experience shown across backend systems, databases and application delivery."
          />
        </div>

        <div className="education-card surface reveal">
          <span>{education.period}</span>
          <h3>{education.degree}</h3>
          <p>{education.school}</p>
          <strong>CGPA {education.cgpa}</strong>
        </div>

        <div className="language-card surface reveal">
          <h3>Languages</h3>
          <ul>
            {languages.map((language) => (
              <li key={language.name}>
                <span>{language.name}</span>
                <strong>{language.level}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
