import { useEffect } from 'react'
import { useLanguage } from '../context/useLanguage.jsx'
import '../assets/styles/navbar.css'

function Navbar () {
  const { t } = useLanguage()
  const sections = ['home', 'about-me', 'projects', 'habilities', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      console.log(scrollY)

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
    <div className='w-full'>
      <header className='fixed top-0 z-50 flex h-16 w-full items-center px-4'>
        <nav className='navbar first-navbar'>
          <ul
            className='
              navbar-inner flex flex-row items-center select-none overflow-x-auto
              text-(--text) whitespace-nowrap
              scrollbar-hidden justify-around max-md:pl-[14.6px] px-2 py-2
            '
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
