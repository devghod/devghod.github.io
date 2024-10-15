import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'

const AboutPage = () => (
  <Container>
    <Heading as='h1'>About page</Heading>
    <Text>This is the about page.</Text>
    <Divider my={6} />
    <Box my={6}>
      <Button as={NextLink} href='/' colorScheme='teal'>
        Return to home
      </Button>
    </Box>
  </Container>
)

export default AboutPage
