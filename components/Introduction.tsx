import React from 'react'
import Image from 'next/image'
import { User as user } from '../constant/_data'
import { Box, Link, SlideFade } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { Primary } from './Font.style'

const Intro = () => {
  const { colorMode } = useColorMode()

  return (
    <section id='intro'>
      <Box my={100}>
        <div className='grid grid-cols-1 gap-x-10 md:grid-cols-5 md:rounded-lg'>
          <div className='col-span-1 md:col-span-2 justify-self-center self-center'>
            <Image
              src={user.profile}
              priority
              className='shadow rounded-full'
              width={180}
              alt={`${user.first_name} ${user.last_name}`}
            />
          </div>
          <div className='col-span-1 md:col-span-3 my-7 md:my-4 mx-10 md:mx-2'>
            <Primary text={`${user.first_name} ${user.last_name}`} />
            <div className='tracking-wider text-slate-200 text-xs mb-6'>
              <span className='py-1 px-2 mr-1 rounded bg-pink-600'>
                {user.education.short}
              </span>
              <span className='py-1 px-2 mr-1 rounded bg-emerald-600'>
                {user.secondary_profession}
              </span>
              <span className='py-1 px-2 mr-1 rounded bg-sky-600'>Gamer</span>
            </div>
            {/* <SlideFade in={true} offsetY='30px'>
              <Box
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                transition='box-shadow 0.75s ease-in'
                boxShadow={'md'}
                _hover={{
                  boxShadow: '0px 0px 10px 2px violet',
                  borderWidth: '0px 0.75s ease-in-out',
                }}
              >
                <Box
                  px='5'
                  pt='5'
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.500'}
                  letterSpacing='wide'
                  fontSize='sm'
                >
                  <Text>
                    I am a {user.secondary_profession} from Philippines 🇵🇭. I
                    build and maintain anything from web application. Feel
                    free to say {}
                    <Link fontWeight={'bold'} href='#contactme'>
                      Hi
                    </Link>
                  </Text>
                </Box>
                <Box px='5' pb='5' pt='2'>
                  <Link
                    href='https://www.linkedin.com/in/ghodie-madrona'
                    isExternal
                  >
                    <Image
                      src={linkiden}
                      className=''
                      height={34}
                      width={34}
                      alt='Linkedin'
                    />
                  </Link>
                </Box>
              </Box>
            </SlideFade> */}
          </div>
          <div className='col-span-1 md:col-span-5 md:mt-10'>
            <SlideFade in={true} offsetY='30px'>
              <Box
                mx={'auto'}
                maxW='2xl'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                transition='box-shadow 0.75s ease-in'
                boxShadow={'md'}
                _hover={{
                  boxShadow: '0px 0px 10px 2px violet',
                  borderWidth: '0px 0.75s ease-in-out',
                }}
              >
                <Box
                  p='5'
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}
                  letterSpacing='wide'
                  fontSize='sm'
                >
                  I am a passionate Web Developer from the Philippines 🇵🇭 with a
                  strong expertise in building robust software applications. As
                  a results-driven front-end developer, I am dedicated to
                  creating efficient, scalable, and high-performance web
                  applications that provide seamless user experiences. I am also
                  eager to learn new technologies and improve my skills
                  continuously, ensuring that I stay at the forefront of
                  industry trends. Feel free to say {}
                  <Link fontWeight={'bold'} href='#contactme'>
                    Hi
                  </Link>
                </Box>
              </Box>
            </SlideFade>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default Intro
