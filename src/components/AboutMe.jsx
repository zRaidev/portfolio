import BentoGrid from './BentoGrid.jsx'
import ProfilePicture from '../assets/LinkedInProfile.webp'

function AboutMe () {
  return (
    <section className='flex flex-row items-center justify-center gap-10 p-4'>
      <BentoGrid className='w-150 h-80'>
        <h2 className='text-3xl font-semibold mb-5'>About me</h2>
        <p className='text-lg'>Hello! I'm Isaac, a Software Engineering student with an interest in web development and creating impactful technological solutions. I enjoy constantly learning, working on purpose-driven projects, and finding ways to improve user experience through design and functionality. I aspire to grow as a developer and add value by creating solutions to real-world problems.</p>
      </BentoGrid>
      <BentoGrid className='w-80 h-80 !p-0'>
        <img className='w-full h-full object-cover p-0.5 border-white/10 rounded-2xl' src={ProfilePicture} alt='Isaac Vergara picture' />
      </BentoGrid>
    </section>
  )
}

export default AboutMe
