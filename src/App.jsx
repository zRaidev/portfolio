import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'

function App () {
  return (
    <>
      <Header />
      <main className='max-w-4/5 mx-auto'>
        <Hero />
        <AboutMe />
      </main>
      <Footer />
    </>
  )
}

export default App
