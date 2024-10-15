import React from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useColorMode,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { GiNinjaStar } from 'react-icons/gi'
import ThemeToggleButton from './ThemeToggleButton'
import { User as user } from '../constant/_data'
import { motion } from 'framer-motion'

export type Navbar = {
  path?: any
}

const LinkItem = ({ href, path, target, children, ...props }: any) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = React.forwardRef((props: any, ref: any) => (
  <Link ref={ref} as={NextLink} {...props} />
))

// Fix Eslint issue for MenuLink displayname not assigned
MenuLink.displayName = ''

const Navbar: React.FC<Navbar> = props => {
  const { path } = props
  const { colorMode } = useColorMode()

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        textAlign="end"
        justifyItems="space-between"
      >
        <Link
          as={NextLink}
          scroll={false}
          href="/"
          alignContent={'center'}
          textColor={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
          style={{ textDecoration: 'none' }}
        >
          <Flex align="center" mr={5}>
            <Heading
              as="h1"
              size="lg"
              display={'contents'}
              letterSpacing={'tighter'}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: '100%',
                }}
              >
                <GiNinjaStar />
              </motion.div>
              <Text ml={1} fontSize={'md'} letterSpacing={'wide'}>
                {user.first_name} {user.last_name}
              </Text>
            </Heading>
          </Flex>
        </Link>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            Introduction
          </LinkItem>
          <LinkItem href="/experience" path={path}>
            Experience
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About Me
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="end">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/" text={'Introduction'}>
                  Introduction
                </MenuItem>
                <MenuItem as={MenuLink} href="/experience" text={'Experience'}>
                  Experience
                </MenuItem>
                <MenuItem as={MenuLink} href="/about" text={'About Me'}>
                  About Me
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
