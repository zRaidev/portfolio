import React, { createContext, useState, useEffect } from 'react'
import { translations } from '../i18n'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    typeof window !== 'undefined' ? window.localStorage.getItem('lang') || 'en' : 'en'
  )

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', language)
    } catch (e) {
      // ignore (if there is storage blocking)
    }
  }, [language])

  const t = (path) => {
    if (!path) return ''
    const val = path
      .split('.')
      .reduce((obj, key) => (obj?.[key] !== undefined ? obj[key] : undefined), translations[language])
    return val === undefined ? path : val
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
