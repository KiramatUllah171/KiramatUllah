import { owner } from '../data/portfolio.js'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{owner.name}</strong>
          <p>Backend / Full Stack .NET Engineer</p>
        </div>
        <div className="footer-links">
          <a href={owner.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={`mailto:${owner.email}`}>Email</a>
        </div>
        <p className="copyright">Copyright {year} {owner.name}. Built for reliable software systems.</p>
      </div>
    </footer>
  )
}
