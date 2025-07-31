import { useState, useEffect } from 'react'
import './Hero.css'
import lightGithubIcon from '../assets/GitHub_dark.svg'
import lightLinkedinIcon from '../assets/linkedin_dark.svg'
import lightXIcon from '../assets/x_dark.svg'

const words = ['Web Developer', 'Frontend Developer', 'Software Engineer Student']
const typingSpeed = 150 // ms por carácter
const deletingSpeed = 100 // ms por carácter al borrar
const delayBetweenWords = 1500 // ms de pausa cuando termina la palabra

function Hero () {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1))
      }, deletingSpeed)
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1))
      }, typingSpeed)
    }

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex])
  return (
    <section id='home' className='flex flex-col items-center justify-center h-screen'>
      <div className='block w-150 text-left'>
        <h2 className='text-5xl font-semibold -mt-28'>Hi there!</h2>
        <div className='mt-6'>
          <h2 className='inline text-5xl font-semibold'>I'm </h2><h1 className='inline text-5xl font-bold'>Isaac Vergara</h1>
        </div>
        <h2 className='mt-6'>
          <span className="relative text-5xl font-semibold text-[--text] after:content-['|'] after:animate-blink">
            {displayText}
          </span>
        </h2>
        <div className='flex justify-start mt-10 gap-8 w-5 cursor-pointer'>
          <img src={lightGithubIcon} alt='GitHub link' />
          <img src={lightLinkedinIcon} alt='LinkedIn link' />
          <img src={lightXIcon} alt='X (formerly twitter) link' />
        </div>
      </div>
    </section>
  )
}

export default Hero
