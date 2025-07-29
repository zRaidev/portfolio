function Header () {
  return (
    <div className='w-full h-16'>
      <header className='fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 z-50'>
        <nav className='w-2/5 h-10 justify-center mx-auto'>
          <ul className='flex justify-around text-[var(--text)] align-middle bg-[var(--surface)] px-2 py-2 rounded-2xl select-none'>
            <li className=''>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Habilities</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
