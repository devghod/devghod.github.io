import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { User as user } from '../constant/_data'
import CardComponent from '../components/CardComponent'

const Experience = () => {
  return (
    <section id='experience'>
      <Box my={100}>
        <Heading
          size={'sm'}
          textAlign={{ md: 'left', sm: 'center' }}
          my={10}
          borderLeft={{ md: '4px' }}
          paddingLeft={{ md: '8px' }}
          letterSpacing='wide'
        >
          Experience
        </Heading>

        <Box>
          {user.experience.map((data, idx) => (
            <CardComponent data={data} key={idx} />
          ))}
        </Box>
      </Box>
    </section>
  )
}

export default Experience
