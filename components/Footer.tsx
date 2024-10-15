import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { User as user } from '../constant/_data'
import moment from 'moment'

const Footer = () => {
  const year = moment().year()

  return (
    <footer className="mx-auto text-center">
      <Box my={4}>
        <Text fontSize={'sm'} textColor={'gray.400'}>
          © {year} {user.first_name} {user.last_name}. All Rights Reserved.
        </Text>
      </Box>
    </footer>
  )
}

export default Footer
