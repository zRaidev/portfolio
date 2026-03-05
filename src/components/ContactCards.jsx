import BentoGrid from './BentoGrid.jsx'

function ContactCards ({ svg, title, description, buttonText, href, target }) {
  return (
    <BentoGrid className='text-center'>
      <div className='w-70 sm:w-80'>
        <h4 className='text-2xl font-semibold mb-2'>
          {svg} {title}
        </h4>
        <p className='pb-5 opacity-80'>{description}</p>
        <a href={href} target={target}>
          <button className='px-8 py-2 bg-[#4e0eff] rounded-xl cursor-pointer'>{buttonText}</button>
        </a>
      </div>
    </BentoGrid>
  )
}

export default ContactCards
