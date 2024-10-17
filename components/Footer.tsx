import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { User as user } from '../constant/_data'
import moment from 'moment'
import { RiNextjsFill } from 'react-icons/ri'
import { IoLogoVercel } from 'react-icons/io5'
import { SiChakraui } from 'react-icons/si'

const Footer = () => {
  const year = moment().year()

  return (
    <footer className='mx-auto text-center'>
      <Box my={10}>
        <Text fontSize={'sm'} textColor={'gray.500'}>
          Powered by
        </Text>
        <Text fontSize={'lg'} justifyContent='center' display={'flex'} my={5}>
          <span className='mr-1'>
            <RiNextjsFill />
          </span>
          <span className='mr-1'>
            <IoLogoVercel />
          </span>
          <span className='mr-1'>
            <SiChakraui />
          </span>
        </Text>
      </Box>
      <Box my={4}>
        <Text fontSize={'sm'} textColor={'gray.500'}>
          © {year} {user.first_name} {user.last_name}. All Rights Reserved.
        </Text>
      </Box>
    </footer>
  )
}

export default Footer
