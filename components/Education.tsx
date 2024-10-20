import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { User as user } from '../constant/_data'
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
          backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
          p={5}
          borderRadius={'lg'}
          borderWidth={1}
          borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
        >
          <div className='leading-loose'>
            <div
              className={`font-semibold text-lg ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {`${user.education.college} (${user.education.year})`}
            </div>
            <div className='text-gray-500 dark:text-gray-800'>
              {`${user.education.course} (${user.education.short})`}
            </div>
          </div>
        </Box>
      </Box>
    </section>
  )
}

export default Education
