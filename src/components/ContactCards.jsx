import BentoGrid from './BentoGrid.jsx'

function ContactCards ({ svg, title, description, buttonText, href }) {
  return (
    <BentoGrid className='w-100 text-center'>
      <h4 className='text-2xl font-semibold mb-2'>
        {svg} {title}
      </h4>
      <p className='pb-5 opacity-80'>{description}</p>
      <a href={href}>
        <button className='px-8 py-2 bg-[#4e0eff] rounded-xl cursor-pointer'>{buttonText}</button>
      </a>
    </BentoGrid>
  )
}

export default ContactCards
