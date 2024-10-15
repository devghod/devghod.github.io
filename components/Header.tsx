import React from 'react'
import Head from 'next/head'
import { User as user } from '../constant/_data'
import Navbar from './Navbar'
import { Box } from '@chakra-ui/react'

const Header = (props: any) => {
  const { router } = props

  return (
    <Box as="main" pb={8}>
      <Head>
        <title>{`${user.devName} | ${user.secondary_profession}`}</title>
        <meta charSet="utf-8" />
        <meta name="author" content={user.devName} />
        <meta name="author" content={`${user.first_name} ${user.last_name}`} />
        <meta name="description" content={`${user.devName}'s Website`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar path={router} />
    </Box>
  )
}

export default Header
