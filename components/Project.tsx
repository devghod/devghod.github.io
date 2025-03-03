import React from 'react';
import {
  Badge,
  Box,
  Center,
  Image,
  Stack,
  Text,
  useColorMode,
  Flex,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { Tertiary } from './Font.style';
import { motion } from 'framer-motion';
import { RiExternalLinkLine } from 'react-icons/ri';

export type Project = {
  data: any;
};

const Project = (props: Project) => {
  const { data } = props;
  const { colorMode } = useColorMode();

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: '0.5' }}>
      <Center>
        <Box
          shadow={'md'}
          mb={5}
          boxSize={{
            md: '70%',
            sm: '100%',
          }}
          borderRadius={'lg'}
          _hover={{
            boxShadow: '0px 0px 5px 1px violet',
          }}
          transition='box-shadow 0.5s ease-in'
        >
          <Image
            borderTopRadius={'lg'}
            objectFit='cover'
            src={data.image.src}
            alt={`${data.name}`}
            fallbackSrc='https://via.placeholder.com/150'
          />
          <Box
            px={3}
            pb={3}
            pt={2}
            bg={colorMode === 'dark' ? 'blackAlpha.400' : 'blackAlpha.100'}
            borderBottomRadius={'lg'}
          >
            <Box mb={2}>
              <Flex>
                <Text
                  display={'flex'}
                  fontWeight={'semibold'}
                  letterSpacing={'wide'}
                >
                  {data.name}
                </Text>
                <Spacer />
                <Link href={data.url} isExternal>
                  <RiExternalLinkLine />
                </Link>
              </Flex>
            </Box>

            {BadgeTools(data.tools)}
            {data.details != '' && (
              <Box
                mt={4}
                p={5}
                bg={colorMode === 'dark' ? 'gray.800' : 'gray.200'}
                borderRadius={'md'}
              >
                <Tertiary text={data.details} />
              </Box>
            )}
          </Box>
        </Box>
      </Center>
    </motion.div>
  );
};

export default Project;

const BadgeTools = (data: []) => {
  const { colorMode } = useColorMode();

  return (
    <Stack direction={'row'}>
      {data.length > 0 &&
        data.map((curr, idx) => (
          <Badge
            colorScheme={BadgeColor(curr)}
            variant={colorMode === 'dark' ? 'subtle' : 'solid'}
            key={idx}
            letterSpacing={'wider'}
            fontSize={'x-small'}
          >
            {curr}
          </Badge>
        ))}
    </Stack>
  );
};

// "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink"
const BadgeColor = (data: string) => {
  const colorMap = {
    Vue: 'green',
    Nuxt: 'green',
    Vuex: 'green',
    React: 'blue',
    Redux: 'blue',
    Xstate: 'blue',
    Angular: 'yellow',
    Typescript: 'purple',
    Node: 'purple',
    Laravel: 'red',
    Express: 'red',
    Mongoose: 'red',
    Firebase: 'red',
    Wordpress: 'cyan',
    Website: 'orange',
    'Web Application': 'teal',
  };

  return colorMap[data] || '';
};
