import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { User as user } from '../constant/_data'
import Project from '../components/Project'

const Projects = () => {
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
          Projects
        </Heading>

        <Box>
          {user.feeds.map((data: any, idx: number) => {
            if (data.type.toLowerCase() != 'info') {
              return <Project key={idx} data={data} />
            }
          })}
        </Box>
      </Box>
    </section>
  )
}

export default Projects
