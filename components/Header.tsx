import Head from 'next/head'

type Props = {
  title?: string | null
}

const Header = ({ title }: Props) => {
  
  return (
    <>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Devghod" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className='container mx-auto my-3'>
      <nav className='mx-16 md:mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='text-center md:text-left font-semibold tracking-wide text-slate-400'>
            <p className='text-xs md:text-sm'>gbtm.workspace@gmail.com</p>
          </div>
          <div className='text-slate-400 text-center md:text-right text-xs md:text-sm'>
            <a href="#intro" className='hover:text-cyan-500'>Intro</a> | { }
            <a href="#whaticando" className='hover:text-cyan-500'>What I can do</a> | { }
            <a href="#aboutme" className='hover:text-cyan-500'>About Me</a> | { }
            <a href="#projects" className='hover:text-cyan-500'>Projects</a> | { }
            <a href="#contactme" className='hover:text-cyan-500'>Contact Me</a> 
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header