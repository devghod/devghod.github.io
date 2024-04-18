import React, { ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import nextjsLogo from '../public/nextjs-png.png'
import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: ReactNode
  title?: string | null
}

const Layout = ({ children, title = 'Devghod' }: Props) => (
  <>
  <Header title={ title } />
  {children}
  <Footer />
  </>
)

export default Layout
