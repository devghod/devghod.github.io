import React, { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/legacy/image'
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
      <nav>
        <a href="#me" className='text-slate-800 hover:text-red-500'>Home</a> | { }
        <a href="#education" className='text-slate-800 hover:text-red-500'>Education</a> | { }
        <a href="#skills" className='text-slate-800 hover:text-red-500'>Skills</a> | { }
        <a href="#tools" className='text-slate-800 hover:text-red-500'>Tools</a> | { }
        <a href="#experience" className='text-slate-800 hover:text-red-500'>Experience</a> | { }
        <a href="#projects" className='text-slate-800 hover:text-red-500'>Projects</a> | { }
        <a href="#contacts" className='text-slate-800 hover:text-red-500'>Contacts</a>
      </nav>
    </header>
    {children}
    <footer className='mx-auto text-center shadow-2xl border'>
      <p className='text-slate-400 text-xs my-5'>
        Created with ❤️ by { }
        <span className='font-semibold'>
          GBTM { }
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
