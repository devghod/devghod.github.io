import Image from 'next/image'

import coding from '../public/web-app/coding.jpg'

const Skill = () => {

  return (
    <>
    <section id='whaticando' className='my-24'>
      <div className='text-center text-slate-300 md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>What I can do</div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-8 mx-10'>
        <div className='bg-gray-100 rounded-lg p-4 justify-self-center md:justify-self-auto shadow'>
          <div className='mb-4 w-80 max-w-max'>
            <div className='font-bold text-sm md:text-base uppercase mb-1 md:mb-2 text-gray-800'>Frontend Apps</div>
            <p className='text-xs md:text-sm antialiased text-gray-800'>
              Build web/mobile applications with the used of modern technology such as SPA and UI friendly interface. I'm currenctly using NUXTJS for Vue and I'm also familiar with ReactJS.
            </p>
          </div>  
          <div className='mb-4 w-80 max-w-max'>
            <div className='font-bold text-sm md:text-base uppercase mb-1 md:mb-2 text-gray-800'>Backend Apps</div>
            <p className='text-xs md:text-sm antialiased text-gray-800'>
              Build scalable and reliable server applications using modern technology such Laravel(Php) and MongooseJS(JS)
            </p>
          </div>  
        </div>
        <div className='rounded-lg p-4 hidden md:block justify-self-center'>
          <Image
            src={coding}
            className='' 
            height={300} 
            width={300} 
            alt='Coding'
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Skill