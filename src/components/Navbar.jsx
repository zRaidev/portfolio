function Navbar () {
  const sections = ['home', 'about-me', 'projects', 'habilities', 'contact']

  return (
    <div className='w-full'>
      <header className='fixed top-0 z-50 flex h-16 w-full items-center px-4'>
        <nav className='mx-auto h-10 w-25 md:w-2/5'>
          <ul
            className='
              flex flex-row items-center select-none overflow-x-auto rounded-2xl
              bg-[var(--surface)] text-[var(--text)] whitespace-nowrap
              scrollbar-hidden justify-around max-md:pl-[14.5px] px-2 py-2
            '
          >
            {sections.map((x) => (
              <li key={x} className='px-3.5'>
                <a href={`#${x}`}>
                  {x === 'about-me'
                    ? 'About Me'
                    : x.charAt(0).toUpperCase() + x.slice(1)}
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
