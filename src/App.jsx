import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { About } from './sections/About.jsx'
import { Contact } from './sections/Contact.jsx'
import { Education } from './sections/Education.jsx'
import { Experience } from './sections/Experience.jsx'
import { Expertise } from './sections/Expertise.jsx'
import { Hero } from './sections/Hero.jsx'
import { Projects } from './sections/Projects.jsx'
import { TechStack } from './sections/TechStack.jsx'
import { useScrollReveal } from './hooks/useScrollReveal.js'

function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
