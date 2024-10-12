import React from 'react'
import '../styles/globals.css'
import Chakra from '../components/Chakra'
import Fonts from '../components/Fonts'
import DefaultPageWrapper from '../components/DefaultPageWrapper'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <DefaultPageWrapper router={router}>
        <Component {...pageProps} key={router.route} />
      </DefaultPageWrapper>
    </Chakra>
  )
}
