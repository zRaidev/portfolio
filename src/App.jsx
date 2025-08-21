import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import AboutMe from './sections/AboutMe.jsx'
import Projects from './sections/Projects.jsx'
import Habilities from './sections/Habilities.jsx'
import Contact from './sections/Contact.jsx'

function App () {
  return (
    <>
      <Navbar />
      <main className='max-w-5xl mx-auto'>
        <Hero />
        <AboutMe />
        <Projects />
        <Habilities />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
