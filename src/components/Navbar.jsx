import { useEffect, useState } from 'react'
import { navItems, owner } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { ButtonLink } from './ButtonLink.jsx'
import { Icon } from './Icon.jsx'

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      document.documentElement.style.setProperty('--scroll-progress', `${Math.min(progress, 1) * 100}%`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav aria-label="Primary navigation" className="nav-shell">
        <a aria-label="Kiramat Ullah home" className="brand" href="#home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">KU</span>
          <span>
            <strong>Kiramat Ullah</strong>
            <small>Full Stack .NET Engineer</small>
          </span>
        </a>

        <button
          aria-controls="primary-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="nav-toggle"
          type="button"
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name={isOpen ? 'x' : 'menu'} />
        </button>

        <div className={`nav-menu ${isOpen ? 'is-open' : ''}`} id="primary-menu">
          <ul>
            {navItems.map((item) => {
              const id = item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    aria-current={activeSection === id ? 'page' : undefined}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="nav-actions">
            <ButtonLink href={`mailto:${owner.email}`} icon="mail" variant="ghost">
              Email
            </ButtonLink>
            <ButtonLink
              disabled={!owner.cvAvailable}
              download="Kiramat-Ullah-CV.pdf"
              href={owner.cvPath}
              icon="download"
              variant="secondary"
            >
              CV
            </ButtonLink>
            <ButtonLink href="#contact" icon="arrowRight">
              Let&apos;s Talk
            </ButtonLink>
          </div>
        </div>
      </nav>
      <span aria-hidden="true" className="scroll-progress" />
    </header>
  )
}
