import { useLanguage } from '../context/useLanguage.jsx'

function Footer () {
  const { t } = useLanguage()
  return (
    <footer className='p-4 text-center bg-[var(--surface)]'>
      <p>&copy; {t('footer.rights')}</p>
      <p>{t('footer.madeBy')}</p>
      <div className='flex justify-center items-center gap-4 mt-2'>
        <div>
          <span>{t('footer.theme')}</span>
          <select
            onChange={(e) => {
              const theme = e.target.value
              document.documentElement.classList.toggle('dark-theme', theme === 'dark')
            }}
            className='ml-2 px-1 py-0.5 text-[var(--bg)]'
          >
            <option value='' />
            <option value='light'>{t('footer.light')}</option>
            <option value='dark'>{t('footer.dark')}</option>
          </select>
        </div>
        <div>
          <span>{t('footer.language')}</span>
          <select
            onChange={(e) => {
              const lang = e.target.value
              try {
                window.localStorage.setItem('lang', lang)
              } catch (err) {
                console.error('Could not set language in localStorage', err)
              }
            }}
            className='ml-2 px-1 py-0.5 text-[var(--bg)]'
          >
            <option value='en'>{t('footer.english')}</option>
            <option value='es'>{t('footer.spanish')}</option>
          </select>
        </div>
      </div>
      <div className='mt-1'>
        <a className='text-gray-400' href='https://github.com/zRaidev/portfolio' target='__blank' rel='noopener noreferrer'>{t('footer.repository')}</a>
      </div>
    </footer>
  )
}

export default Footer
