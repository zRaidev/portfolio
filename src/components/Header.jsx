function Header () {
  return (
    <header className='bg-[var(--primary)] w-full h-20 flex items-center shadow-md'>
      <nav className='w-1/4 justify-center mx-auto'>
        <ul className='flex justify-around'>
          <li className=''>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Habilities</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
