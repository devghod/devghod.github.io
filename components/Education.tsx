import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { User as user } from '../constant/_data'
import { Secondary, Tertiary } from './Font.style'
import { useColorMode } from '@chakra-ui/react'

export type Education = {}

const Education: React.FC<Education> = () => {
  const { colorMode } = useColorMode()

  return (
    <section id='education'>
      <Box my={100}>
        <Heading
          size={'sm'}
          textAlign={{ md: 'left', sm: 'center' }}
          my={10}
          borderLeft={{ md: '4px' }}
          paddingLeft={{ md: '8px' }}
          letterSpacing='wide'
        >
          Education
        </Heading>
        <Box
          mx={{
            md: 10,
            sm: 0,
          }}
          bgColor={colorMode === 'dark' ? 'blackAlpha.500' : 'blackAlpha.100'}
          p={5}
          borderRadius={'lg'}
        >
          <Secondary text={user.education.college} />
          <Tertiary
            text={`${user.education.year} - ${user.education.course} (${user.education.short})`}
          />
        </Box>
      </Box>
    </section>
  )
}

export default Education
