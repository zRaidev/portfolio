import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Habilities from './components/Habilities.jsx'
import Contact from './components/Contact.jsx'

function App () {
  return (
    <>
      <Header />
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
