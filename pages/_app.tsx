import React from 'react';
import Chakra from '../components/Chakra';
import Fonts from '../components/Fonts';
import DefaultPageWrapper from '../components/DefaultPageWrapper';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps, router }: any) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <DefaultPageWrapper router={router}>
        <Component {...pageProps} key={router.route} />
      </DefaultPageWrapper>
    </Chakra>
  );
}
