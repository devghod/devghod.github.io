import Image from 'next/image'
import { useColorMode } from '@chakra-ui/react'
import linkiden from '../public/linkedin-48.png'
import { Box, Heading, Link, Text } from '@chakra-ui/react'

const ContactMe = () => {
  const { colorMode } = useColorMode()

  return (
    <section id="contactme">
      <Box my={100}>
        <Heading
          size={'sm'}
          textAlign={{ md: 'left', sm: 'center' }}
          my={10}
          borderLeft={{ md: '4px' }}
          paddingLeft={{ md: '8px' }}
          letterSpacing="wide"
        >
          Contact Me
        </Heading>
        <Text
          fontSize={'sm'}
          textAlign={'center'}
          textColor={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
        >
          Philippines 🇵🇭
        </Text>
        <Text
          fontSize={'sm'}
          textAlign={'center'}
          textColor={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
        >
          gbtm.workspace@gmail.com
        </Text>
        <Box>
          <Link
            href="https://www.linkedin.com/in/ghodie-madrona"
            isExternal
            textAlign={'center'}
            style={{ textAlign: '-webkit-center' }}
          >
            <Image
              src={linkiden}
              className=""
              height={24}
              width={24}
              alt="Linkedin"
            />
          </Link>
        </Box>
      </Box>
    </section>
  )
}

export default ContactMe
