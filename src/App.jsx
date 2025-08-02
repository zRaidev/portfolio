import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'

function App () {
  return (
    <>
      <Header />
      <main className='max-w-4/5 mx-auto'>
        <Hero />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
