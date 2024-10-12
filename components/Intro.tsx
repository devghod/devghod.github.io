import Image from 'next/image'
import linkiden from '../public/linkedin-48.png'
import { User as user } from '../constant/_data'
import { Box, Link, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

const Intro = () => {
  const { colorMode } = useColorMode()

  return (
    <>
      <section id="intro">
        <Box my={100}>
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-5 md:rounded-lg">
            <div className="col-span-1 md:col-span-2 justify-self-center self-center my-10 md:mb-0">
              <Image
                src={user.profile}
                priority
                className="shadow-2xl rounded-full"
                width={180}
                alt={`${user.first_name} ${user.last_name}`}
              />
            </div>
            <div className="col-span-1 md:col-span-3 my-7 md:my-4 mx-10 md:mx-2">
              <div className="tracking-wide text-neutral-400 mb-2 font-bold text-4xl max-w-96 font-poppins">
                {user.first_name} {user.last_name}
              </div>
              <div className="tracking-wider text-slate-200 text-xs mb-6">
                <span className="py-1 px-2 mr-1 rounded bg-pink-600">
                  {user.degree}
                </span>
                <span className="py-1 px-2 mr-1 rounded bg-emerald-600">
                  {user.secondary_profession}
                </span>
                <span className="py-1 px-2 mr-1 rounded bg-sky-600">Gamer</span>
              </div>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                transition="box-shadow 0.75s ease-in-out"
                boxShadow={'md'}
                _hover={{
                  boxShadow: '0px 0px 10px 2px violet',
                  borderWidth: '0px',
                }}
              >
                <Box
                  px="5"
                  pt="5"
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.500'}
                  letterSpacing="wide"
                  fontSize="sm"
                >
                  <Text>
                    I am a {user.secondary_profession} from Philippines 🇵🇭. I
                    build and maintain anything from web application. Feel free
                    to say {}
                    <Link fontWeight={'bold'} href="#contactme">
                      Hi
                    </Link>
                  </Text>
                </Box>
                <Box px="5" pb="5" pt="2">
                  <Link
                    href="https://www.linkedin.com/in/ghodie-madrona"
                    isExternal
                  >
                    <Image
                      src={linkiden}
                      className=""
                      height={34}
                      width={34}
                      alt="Linkedin"
                    />
                  </Link>
                </Box>
              </Box>
            </div>
          </div>
        </Box>
      </section>
    </>
  )
}

export default Intro
