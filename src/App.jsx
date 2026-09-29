import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Contacts from './components/Contacts'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container py-5" id="content">
        <Experience />
        <Skills />
        <Education />
        <Contacts />
      </div>
      <Footer />
    </>
  )
}

export default App
