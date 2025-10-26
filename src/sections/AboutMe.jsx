import BentoGrid from '../components/BentoGrid.jsx'
import ProfilePicture from '../assets/images/linkedin-profile.webp'
import { useLanguage } from '../context/useLanguage.jsx'

function AboutMe () {
  const { t } = useLanguage()

  return (
    <section id='about-me' className='h-[80vh] flex justify-center'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 p-4'>
        <BentoGrid className='w-auto md:w-150 h-auto border-white/20 mx-10'>
          <h2 className='text-3xl font-semibold mb-5'>{t('sections.about-me')}</h2>
          <p className='text-lg'>{t('aboutMe.description')}</p>
        </BentoGrid>
        <BentoGrid className='w-80 h-80 !p-0 border-white/20! hidden md:inline'>
          <img className='w-full h-full object-cover p-0.5 border-white/10 rounded-2xl' src={ProfilePicture} alt='Isaac Vergara picture' />
        </BentoGrid>
      </div>
    </section>
  )
}

export default AboutMe
