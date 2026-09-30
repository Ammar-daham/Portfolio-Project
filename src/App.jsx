import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SkipLink from './components/SkipLink'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <SkipLink href="#main" />
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
