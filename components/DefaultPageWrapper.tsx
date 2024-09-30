import React, { ReactNode, Suspense } from 'react'
import Header from './Header';
import Footer from './Footer';
import LoadingPage from './LoadingPage';

type Props = {
  children?: ReactNode
  title?: string | null
}

const DefaultPageWrapper = ({ children, title = 'Devghod' }: Props) => (
  <>
  <Suspense fallback={<LoadingPage />}>
    <Header title={ title } />
      <main className='container mx-auto'>
        {children}
      </main>
    <Footer />
  </Suspense>
  </>
)

export default DefaultPageWrapper
