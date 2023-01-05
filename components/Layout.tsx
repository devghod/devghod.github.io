import React, { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import nextjsLogo from '../public/nextjs-png.png'

type Props = {
  children?: ReactNode
  title?: string | null
}

const Layout = ({ children, title = 'Devghod' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Devghod" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className='container mx-auto my-3'>
      <nav className='mx-16 md:mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='text-center md:text-left text-sm font-semibold text-slate-500'>
            <p>gbtm.workspace@gmail.com</p>
          </div>
          <div className='text-center md:text-right'>
            <a href="#profile" className='text-slate-800 hover:text-cyan-500'>Profile</a> | { }
            <a href="#whaticando" className='text-slate-800 hover:text-cyan-500'>What I can do</a> | { }
            <a href="#projects" className='text-slate-800 hover:text-cyan-500'>Projects</a> | { }
            <a href="#contactme" className='text-slate-800 hover:text-cyan-500'>Contact Me</a> 
          </div>
        </div>
      </nav>
    </header>
    {children}
    <footer className='mx-auto text-center shadow-2xl border'>
      <p className='text-slate-400 text-xs my-5'>
        Created with ❤️ by { }
        <span className='font-semibold'>
          Devghod { }
          <Image 
            src={nextjsLogo} 
            className='inline-block' 
            height={30} 
            width={30} 
            alt='NextJS Logo'
          />
        </span>
      </p>
    </footer>
  </div>
)

export default Layout
