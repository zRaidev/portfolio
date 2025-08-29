import { useState, useEffect } from 'react'
import '../assets/styles/Hero.css'

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
    <section id='home' className='flex flex-col items-center justify-center h-[90dvh] md:h-screen'>
      <div className='block w-80 md:w-150 text-left'>
        <h2 className='text-xl md:text-5xl font-semibold -mt-28'>Hi there!</h2>
        <div className='mt-6'>
          <h2 className='inline text-xl md:text-5xl font-semibold'>I'm </h2><h1 className='inline text-xl md:text-5xl font-bold'>Isaac Vergara</h1>
        </div>
        <h2 className='mt-6'>
          <span className="relative text-xl md:text-5xl font-semibold text-[--text] after:content-['|'] after:animate-blink">
            {displayText}
          </span>
        </h2>
        <div className='flex justify-start mt-10 gap-8 w-5 cursor-pointer'>
          <a href='https://github.com/zRaidev' referrerPolicy='no-referrer' target='__blank'><svg className='w-6' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z' transform='scale(64)' fill='currentColor' /></svg></a>
          <a href='https://www.linkedin.com/in/i-vergara/' referrerPolicy='no-referrer' target='__blank'><svg className='w-6' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='0 0 256 256'><path d='M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453' fill='currentColor' /></svg></a>
          <a href='https://x.com/isaacv14_' referrerPolicy='no-referrer' target='__blank'><svg className='w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1200 1227'><path fill='currentColor' d='M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z' /></svg></a>
        </div>
      </div>
    </section>
  )
}

export default Hero
