import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title='Devghod | Home'>
    <div className='container mx-auto'>
      
      <section id='me' className='my-10'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='justify-self-center'>
            <img className='w-100 aspect-square shadow-2xl' src='https://picsum.photos/200/200?random=1' />
          </div>
          <div className='col-span-1 md:col-span-2 my-7 md:my-4 mx-10 md:mx-2'>
            <div className='text-slate-700 font-bold text-2xl'>
              Ghodie Madrona
            </div>
            <div className='uppercase text-gray-400 font-semibold mb-3 text-sm'>
              Software Engineer <span className='capitalize font-normal'>(Philippines 🇵🇭)</span>
            </div>
            <div className='text-slate-600 text-sm antialiased'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
          </div>
        </div>
      </section>

      <section id='education' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>Education</div>
        <div className='grid grid-cols-1 mt-8 mx-8'>
          <div className='text-slate-700 font-semibold'>BS in Information Technology <span>(2019)</span></div>
          <div className='text-slate-500 font-semibold text-sm antialiased'>University of Science and Technology of Southern Philippines <span>(USTP)</span></div>
        </div>
      </section>

      <section id='experience' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>Experience</div>
      </section>

      <section id='skills' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>Skills</div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-8 mx-5'>
          <div className=''>
            <div className='border rounded-lg w-full md:w-60 shadow hover:shadow-lg'>
              <div className='p-5 text-center'>
                Teamwork
              </div>
            </div>
          </div>
          <div className=''>
            <div className='border rounded-lg w-full md:w-60 shadow hover:shadow-lg'>
              <div className='p-5 text-center'>
                Problem-solving
              </div>
              
            </div>
          </div>
          <div className=''>
            <div className='border rounded-lg w-full md:w-60 shadow hover:shadow-lg'>
              <div className='p-5 text-center'>
                Mathematics
              </div>
              <div></div>
            </div>
          </div>
          <div className=''>
            <div className='border rounded-lg w-full md:w-60 shadow hover:shadow-lg'>
              <div className='p-5 text-center'>
                Analytics
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section id='tools' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>Tools</div>
        <div></div>
      </section>

      <section id='projects' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>Projects</div>
        <div>
          {/* <iframe src='https://dentalfast.com.au/' /> */}
        </div>
      </section>

      <section id='contacts' className='my-10'>
        <div className='text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>Contacts</div>
      </section>
      
    </div>
  </Layout>
)

export default IndexPage
