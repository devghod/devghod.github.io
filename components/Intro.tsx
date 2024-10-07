import Image from 'next/image'
import linkiden from '../public/linkedin-48.png'
import { User as user } from '../utils/_data'

const Intro = () => {

  return (
    <>
    <section id='intro' className='my-24'>
      <div className='grid grid-cols-1 gap-x-10 md:grid-cols-5 md:rounded-lg'>
        <div className='col-span-1 md:col-span-2 justify-self-center self-center my-10 md:mb-0'>
          <Image
            src={user.profile}
            priority
            className='shadow-2xl rounded-lg' 
            width={180} 
            alt={`${user.first_name} ${user.last_name}`}
          />
        </div>
        <div className='col-span-1 md:col-span-3 my-7 md:my-4 mx-10 md:mx-2'>
          <div className='text-slate-500 text-sm mb-2 underline decoration-2 decoration-indigo-500 font-semibold antialiased'>Hello, it's me</div>
          <div className='tracking-wide text-neutral-400 mb-2 font-bold text-6xl max-w-96 font-poppins'>
            {user.first_name} {user.last_name}
          </div>
          <div className='tracking-wider text-slate-200 text-xs mb-6'>
            <span className='py-1 px-2 rounded bg-pink-600'>IT</span> { }
            <span className='py-1 px-2 rounded bg-emerald-600'>Programmer</span> { }
            <span className='py-1 px-2 rounded bg-sky-600'>Gamer</span> 
          </div>
          <div className='w-64 md:w-96 text-slate-500 leading-normal tracking-wide text-sm antialiased'>
            AKA Ghods, I am a Developer from Philippines 🇵🇭. I build and maintain anything from web application. Feel free to say { }
            <a href="#contactme" className='text-slate-500 underline decoration-2 decoration-sky-500 font-bold hover:text-cyan-500'>Hi</a>.
          </div>
          <div className="mt-2">
            <div className='justify-self-center'>
              <a href='https://www.linkedin.com/in/ghodie-madrona' target='_blank'>
                <Image
                  src={linkiden}
                  className='' 
                  height={34} 
                  width={34} 
                  alt='Linkedin'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Intro