import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Languages from './sections/Languages'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
