import { Heading, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

const mode = () => useColorMode().colorMode

const Primary = ({ text }) => (
  <Heading
    size={'3xl'}
    letterSpacing={'wide'}
    mb={2}
    mr={2}
    textColor={mode() === 'dark' ? 'gray.200' : 'gray.700'}
  >
    {text}
  </Heading>
)

const Secondary = ({ text }) => (
  <Text mb={2} mr={2} textColor={mode() === 'dark' ? 'gray.300' : 'gray.600'}>
    {text}
  </Text>
)

const Tertiary = ({ text }) => (
  <Text
    fontSize={'sm'}
    mb={2}
    mr={2}
    textColor={mode() === 'dark' ? 'gray.300' : 'gray.600'}
  >
    {text}
  </Text>
)

const Quarternary = ({ text }) => (
  <Text
    as={'sup'}
    mb={2}
    mr={2}
    textColor={mode() === 'dark' ? 'gray.300' : 'gray.600'}
  >
    {text}
  </Text>
)

export { Primary, Secondary, Tertiary, Quarternary }
