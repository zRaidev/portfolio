function Footer () {
  return (
    <footer className='p-4 text-center bg-[var(--surface)]'>
      <p>&copy; {new Date().getFullYear()} Isaac Vergara. All rights reserved.</p>
      <p>Designed & Developed by Isaac Vergara.</p>
      <div>
        <div>
          <span>Choose theme</span>
          <select
            onChange={(e) => {
              const theme = e.target.value
              document.documentElement.classList.toggle('dark-theme', theme === 'dark')
            }}
            className='ml-2 px-3 py-1 rounded bg-[var(--text)] text-[var(--bg)]'
          >
            <option value='' />
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
        <div>
          <span>Choose language</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
