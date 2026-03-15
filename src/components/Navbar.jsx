import { useEffect } from 'react'
import { useLanguage } from '../context/useLanguage.jsx'
import '../assets/styles/navbar.css'

function Navbar () {
  const { t } = useLanguage()
  const sections = ['home', 'about-me', 'projects', 'habilities', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > 1) {
        document.querySelector('.navbar').classList.add('second-navbar')
        document.querySelector('.navbar').classList.remove('first-navbar')
      } else {
        document.querySelector('.navbar').classList.remove('second-navbar')
        document.querySelector('.navbar').classList.add('first-navbar')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='w-full navbar-container'>
      <header className='fixed top-0 z-50 flex h-16 w-full items-center px-4'>
        <nav className='navbar first-navbar'>
          <ul
            className='
              flex flex-row items-center h-full align-middle select-none overflow-x-auto text-(--text) whitespace-nowrap scrollbar-hidden justify-around'
          >
            {sections.map((x, i) => (
              <li key={x} className='px-3.5'>
                <a href={`#${sections[i]}`}>
                  {t(`sections.${x}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
