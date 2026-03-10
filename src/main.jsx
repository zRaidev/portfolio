import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/index.css'
import App from '@/App.jsx'
import { LanguageProvider } from '@/context/LanguageContext.jsx'

// Aplicar dark theme permanentemente
document.documentElement.classList.add('dark-theme')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
)
