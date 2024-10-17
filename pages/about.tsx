import React from 'react'
import {
  Box,
  Heading,
  Text,
  Center,
  Image,
  Grid,
  GridItem,
  SimpleGrid,
  useColorMode,
  Flex,
} from '@chakra-ui/react'
import Ninja from '../public/web-app/code_ninja.jpg'
import { User as user } from '../constant/_data'
import { motion } from 'framer-motion'

const AboutPage = () => {
  const aboutMe = user.feeds.filter(curr => curr.type === 'info')[0]
  const { colorMode } = useColorMode()

  return (
    <Box>
      <Grid
        templateColumns={{
          md: 'repeat(2, 1fr)',
          sm: 'repeat(1, 1fr)',
        }}
        gap={6}
        my={20}
      >
        <GridItem>
          <Center>
            <Box
              boxSize={{
                md: '70%',
                sm: '100%',
              }}
              borderRadius={'md'}
            >
              <Image src={Ninja.src} borderRadius={'md'} />
            </Box>
          </Center>
        </GridItem>
        <GridItem>
          <Text>{aboutMe.details}</Text>
        </GridItem>
      </Grid>
      <Box my={100}>
        <Heading
          size={'sm'}
          textAlign={{ md: 'left', sm: 'center' }}
          my={10}
          borderLeft={{ md: '4px' }}
          paddingLeft={{ md: '8px' }}
          letterSpacing='wide'
        >
          Tools
        </Heading>

        <Center>
          <Box
            borderRadius={'lg'}
            p={5}
            boxSize={{
              md: '80%',
              sm: '100%',
            }}
            bg={colorMode === 'dark' ? 'blackAlpha.400' : 'blackAlpha.100'}
          >
            <SimpleGrid
              columns={{
                md: 5,
                sm: 3,
              }}
              spacing={5}
            >
              {user.techStack.map((stack, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.09 }}
                  transition={{ duration: '0.5' }}
                >
                  <Box
                    _hover={{ color: 'violet' }}
                    transition='color 0.5s ease-in'
                  >
                    <Flex>
                      <Center>
                        {stack.logo != undefined && (
                          <span className='mr-2'>{stack.logo()}</span>
                        )}
                        <Text>{stack.name}</Text>
                      </Center>
                    </Flex>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
    </Box>
  )
}

export default AboutPage
