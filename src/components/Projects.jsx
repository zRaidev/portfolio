import BentoGrid from './BentoGrid'
import MathTestImage from '../assets/images/mathtest.webp'
import PersonalProfileImage from '../assets/images/personal-profile.webp'

function Projects () {
  return (
    <section id='projects' className='h-[100vh]'>
      <h2 className='flex justify-center text-5xl font-semibold mb-15'>Projects</h2>
      <div className='grid grid-cols-2 gap-8'>
        <BentoGrid>
          <h3 className='font-medium text-xl'>MathTest</h3>
          <div className='relative group overflow-hidden rounded-xl shadow-lg'>
            <img
              src={MathTestImage} alt='Proyecto 1'
              className='grayscale opacity-60 rounded-md'
            />
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-250 flex flex-row justify-center items-center gap-4'>
              <a
                href='https://github.com/zRaidev/MathTest'
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition'
              >
                <svg className='w-5 inline pb-1' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z' transform='scale(64)' fill='currentColor' /></svg> GitHub
              </a>
              <a
                href='https://mathtest-umber.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition'
              >
                🌐 View site
              </a>
            </div>
          </div>
          <p className='text-lg mt-2'>An interactive app to practice basic math skills like addition, subtraction, multiplication, and mixed operations.</p>
        </BentoGrid>
        <BentoGrid>
          <h3 className='font-medium text-xl'>Personal Profile</h3>
          <div className='relative group overflow-hidden rounded-xl shadow-lg'>
            <img
              src={PersonalProfileImage} alt='Proyecto 1'
              className='grayscale opacity-60 rounded-md'
            />
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-250 flex flex-row justify-center items-center gap-4'>
              <a
                href='https://github.com/zRaidev/personal-profile'
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition'
              >
                <svg className='w-5 inline pb-1' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z' transform='scale(64)' fill='currentColor' /></svg> GitHub
              </a>
              <a
                href='https://personal-profile-seven-kappa.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition'
              >
                🌐 View site
              </a>
            </div>
          </div>
          <p className='text-lg mt-2'>A Linktree-style profile that centralizes personal or professional links in a simple, mobile-friendly interface.</p>
        </BentoGrid>
      </div>
    </section>
  )
}

export default Projects
