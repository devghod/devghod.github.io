import React, { ReactNode, Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import LoadingPage from './LoadingPage'
import { Container } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  router: ReactNode
}

const DefaultPageWrapper = ({ children, router }: Props) => (
  <Suspense fallback={<LoadingPage />}>
    <Header router={router} />
    <Container maxW="container.md" pt={14}>
      {children}
      <Footer />
    </Container>
  </Suspense>
)

export default DefaultPageWrapper
