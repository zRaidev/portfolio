import { useEffect, useState } from 'react'

export default function ThemeProvider ({ children }) {
  const getInitialTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light')

    mediaQuery.addEventListener('change', handleChange)
    setTheme(mediaQuery.matches ? 'dark' : 'light')

    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark-theme')
    } else {
      root.classList.remove('dark-theme')
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  return (
    <>
      {children}
    </>
  )
}
