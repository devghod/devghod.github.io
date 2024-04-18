import Image from 'next/image'

import linkiden from '../public/linkedin-48.png'

const ContactMe = () => {

  return (
    <>
    <section id='contactme' className='my-24'>
      <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>Contact Me</div>
      <div className='grid grid-cols-1 mt-8 mx-10 text-center mb-32 mt-20 text-sm text-slate-600 hover:text-slate-800'>
        <div>
          Philippines 🇵🇭
        </div>
        <div>
          gbtm.workspace@gmail.com
        </div>
        <div className='justify-self-center'>
          <a href='https://www.linkedin.com/in/ghodie-madrona' target='_blank'>
            <Image
              src={linkiden}
              className='' 
              height={24} 
              width={24} 
              alt='Linkedin'
            />
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactMe