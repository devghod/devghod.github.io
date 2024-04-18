import Image from 'next/image'

import profile from '../public/web-app/code_ninja.jpg'

const Intro = () => {

  return (
    <>
    <section id='intro' className='my-24'>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <div className='col-span-1 md:col-span-2 justify-self-center self-center mb-10 md:mb-0'>
          <Image
            src={profile}
            priority
            className='shadow-2xl rounded-lg' 
            width={180} 
            alt='Ghodie'
          />
        </div>
        <div className='col-span-1 md:col-span-3 my-7 md:my-4 mx-10 md:mx-2'>
          <div className='text-sm mb-2 underline decoration-2 decoration-pink-500 font-semibold antialiased'>Hello, it's me</div>
          <div className='text-neutral-700 mb-2 font-bold text-6xl w-60 font-poppins'>
            Ghodie Madrona
          </div>
          <div className='font-bold text-slate-700 text-xs uppercase mb-6'>
            <span className='hover:underline decoration-2 decoration-indigo-500'>IT</span> | { }
            <span className='hover:underline decoration-2 decoration-green-500'>Programmer</span> | { }
            <span className='hover:underline decoration-2 decoration-sky-500'>Gamer</span> 
          </div>
          <div className='w-64 md:w-96 text-slate-600 text-sm antialiased'>
            AKA Ghod, I am a Front End Developer from Philippines 🇵🇭. I build and maintain anything from web application. Feel free to say { }
            <a href="#contactme" className='text-slate-800 underline decoration-2 decoration-sky-500 font-bold hover:text-cyan-500'>Hi</a>.
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Intro