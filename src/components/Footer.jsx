function Footer () {
  return (
    <footer className='p-4 text-center bg-[var(--surface)]'>
      <p>&copy; {new Date().getFullYear()} Isaac Vergara. All rights reserved.</p>
      <p>Designed & Developed by Isaac Vergara.</p>
      <div className='flex justify-center items-center gap-4 mt-2'>
        <div>
          <span>Choose theme</span>
          <select
            onChange={(e) => {
              const theme = e.target.value
              document.documentElement.classList.toggle('dark-theme', theme === 'dark')
            }}
            className='ml-2 px-1 py-0.5 text-[var(--bg)]'
          >
            <option value='' />
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
        <div>
          <span>Choose language</span>
          <select className='ml-2 px-1 py-0.5 text-[var(--bg)]'>
            <option value='light'>English</option>
            <option value='dark'>Spanish</option>
          </select>
        </div>
      </div>
      <div className='mt-1'>
        <a className='text-gray-400' href='https://github.com/zRaidev/portfolio' target='__blank' rel='noopener noreferrer'>Visit my portfolio on Github</a>
      </div>
    </footer>
  )
}

export default Footer
