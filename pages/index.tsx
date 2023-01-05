import Layout from '../components/Layout'
import Image from 'next/image'
import coding from '../public/coding.jpg'
import linkiden from '../public/linkedin-48.png'
import artemis from '../public/web-app/artemis.png'
import pbris from '../public/web-app/pbris.png'
import dentalfast from '../public/web-app/dentalfast.png'
import qrthis from '../public/web-app/qrthis.png'
import nxtform from '../public/web-app/nxtform.png'
import ched10 from '../public/web-app/ched10-website.png'

const IndexPage = () => (
  <Layout title='Devghod </>'>
    <div className='container mx-auto'>
      
      <section id='intro' className='my-24'>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          <div className='col-span-1 md:col-span-2 justify-self-center mb-10 md:mb-0'>
            <img className='w-100 aspect-square shadow-2xl rounded-lg' src='https://picsum.photos/200/200?random=1' />
          </div>
          <div className='col-span-1 md:col-span-3 my-7 md:my-4 mx-10 md:mx-2'>
            <div className='text-sm mb-2 underline decoration-2 decoration-pink-500 font-semibold antialiased'>Hello, it's me</div>
            <div className='text-neutral-700 mb-2 font-bold text-6xl w-60'>
              Ghodie Madrona
            </div>
            <div className='font-bold text-slate-700 text-xs uppercase mb-6'>
              <span className='hover:underline decoration-2 decoration-indigo-500'>IT</span> | { }
              <span className='hover:underline decoration-2 decoration-green-500'>Programmer</span> | { }
              <span className='hover:underline decoration-2 decoration-sky-500'>Player</span> 
            </div>
            <div className='w-96 text-slate-600 text-sm antialiased'>
              AKA Ghod, I am a software engineer in the Philippines 🇵🇭. I build and maintain anything from web and mobile app. Feel free to say { }
              <a href="#contactme" className='text-slate-800 underline decoration-2 decoration-sky-500 font-bold hover:text-cyan-500'>Hi</a>.
            </div>
          </div>
        </div>
      </section>

      <section id='whaticando' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>What I can do</div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-8 mx-10'>
          <div className='bg-gray-100 rounded-lg p-4 justify-self-center md:justify-self-auto shadow'>
            <div className='mb-4 w-80 max-w-max'>
              <div className='font-bold text-sm uppercase mb-1 md:mb-2 text-gray-800'>Frontend Apps</div>
              <p className='text-xs md:text-sm antialiased text-gray-800'>
                Build web/mobile applications with the used of modern technology such as SPA and UI friendly interface. My main tech that I use is ReactJS and I'm familiar with VueJS and Angular.
              </p>
            </div>  
            <div className='mb-4 w-80 max-w-max'>
              <div className='font-bold text-sm uppercase mb-1 md:mb-2 text-gray-800'>Backend Apps</div>
              <p className='text-xs md:text-sm antialiased text-gray-800'>
                Build scalable and reliable server applications using modern technology such Laravel(Php) and Django(Python)
              </p>
            </div>  
            <div className='w-80 max-w-max'>
              <div className='font-bold text-sm uppercase mb-1 md:mb-2 text-gray-800'>Native Apps</div>
              <p className='text-xs md:text-sm antialiased text-gray-800'>
                Using React Native to build modern mobile applications. React Native has large community and well maintained javascript library.
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

      <section id='aboutme' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>About Me</div>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-8 mx-10'>
          <div className='justify-self-center mb-4 md:mb-0 shadow'>
            <img className='w-100 aspect-square rounded-lg' src='https://picsum.photos/400/300?random=1' />
          </div>
          <div className='bg-gray-100 rounded-lg p-4 w-96 text-sm justify-self-center md:justify-self-auto shadow'>
            I am a full stack developer with over 3 years of experience of building scalable applications. { } <br /><br />
            I used my spare time exploring some new tech tools to improve my skills and I enjoy solving problems. Being a developer is very challenging, so the best way to cope up with this is to take a break and do some stuff like walk, take a snack and play video games.
            I love to read manga and manhwa in my past time and like to create one, but I don't have the proper tools and skills. 😂
          </div>
        </div>
      </section>

      <section id='projects' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>Projects</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-10'>
          <div className='border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto'>
            <a href='https://regulations.gov.ph/pbris/login?initial=true' target={'_blank'} >
              <Image
                src={pbris}
                className='rounded-t-lg' 
                height={500} 
                width={500} 
                alt='PBRIS'
              />
              <div className='py-3 px-3'>
                <div className='text-sm text-slate-800 font-semibold'>
                  Philippine Business Regulations Information System (PBRIS)
                </div>
                <div className='text-xs text-slate-500'>
                  Angular, Firebase, Typescript
                </div>
              </div>
            </a>
          </div>
          <div className='border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto'>
            <a href='https://regulations.gov.ph/artemis/contact-us' target={'_blank'} >
              <Image
                src={artemis}
                className='rounded-t-lg' 
                height={500} 
                width={500} 
                alt='ARTEMIS'
                priority
              />
              <div className='py-3 px-3'>
                <div className='text-sm text-slate-800 font-semibold'>
                  Anti-Red Tape E-Management Information System (ARTEMIS)
                </div>
                <div className='text-xs text-slate-500'>
                  Angular, Firebase, Typescript
                </div>
              </div>
            </a>
          </div>
          <div className='border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto'>
            <a href='https://nxtform.com/' target={'_blank'} >
              <Image
                src={nxtform}
                className='rounded-t-lg' 
                height={500} 
                width={500} 
                alt='Nxtform'
                priority
              />
              <div className='py-3 px-3'>
                <div className='text-sm text-slate-800 font-semibold'>
                  Nxtform 
                </div>
                <div className='text-xs text-slate-500'>
                  VueJS, NuxtJS, Laravel
                </div>
              </div>
            </a>
          </div>
          <div className='border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto'>
            <a href='https://dentalfast.com.au/' target={'_blank'} >
              <Image
                src={dentalfast}
                className='rounded-t-lg' 
                height={500} 
                width={500} 
                alt='Dentalfast'
                priority
              />
              <div className='py-3 px-3'>
                <div className='text-sm text-slate-800 font-semibold'>
                  Dentalfast 
                </div>
                <div className='text-xs text-slate-500'>
                  ReactJS, Laravel
                </div>
              </div>
            </a>
          </div>
          <div className='border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto'>
            <a href='https://qrthis.io/' target={'_blank'} >
              <Image
                src={qrthis}
                className='rounded-t-lg' 
                height={500} 
                width={500} 
                alt='QRThis'
                priority
              />
              <div className='py-3 px-3'>
                <div className='text-sm text-slate-800 font-semibold'>
                  QRThis 
                </div>
                <div className='text-xs text-slate-500'>
                  ReactJS, Laravel
                </div>
              </div>
            </a>
          </div>
          <div className='border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto'>
            <a href='https://ro10.ched.gov.ph/' target={'_blank'} >
              <Image
                src={ched10}
                className='rounded-t-lg' 
                height={500} 
                width={500} 
                alt='CHED 10 Website'
                priority
              />
              <div className='py-3 px-3'>
                <div className='text-sm text-slate-800 font-semibold'>
                  Commission on Higher Educaton Region 10 (CHED RO 10) - Website 
                </div>
                <div className='text-xs text-slate-500'>
                  Wordpress
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id='contactme' className='my-10'>
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
      
    </div>
  </Layout>
)

export default IndexPage
