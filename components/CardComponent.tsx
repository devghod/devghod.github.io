import React from 'react';
import {
  Badge,
  Box,
  Card,
  CardBody,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import moment from 'moment';
import { ExperienceType } from '../types/User.type';
import { Quarternary } from './Font.style';
import { motion } from 'framer-motion';

export type CardComponent = {
  data: ExperienceType;
};

const CardComponent = (props: CardComponent) => {
  const { data } = props;
  const { colorMode } = useColorMode();
  const {
    company,
    position,
    dateStarted,
    dateEnded,
    short,
    shortPosition,
    type,
    description,
  } = data;

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: '0.5' }}>
      <Card
        mb={5}
        width={{
          md: '70 rem',
        }}
        mx={{
          md: 10,
        }}
        _hover={{
          boxShadow: '0px 0px 5px 1px violet',
        }}
        transition='box-shadow 0.5s ease-in'
      >
        <CardBody>
          <Text fontWeight={'semibold'} letterSpacing={'wide'}>
            <Box>
              {company}
              {short != '' ? ` (${short}) ` : ' '}
              {SetType(type)}
            </Box>
          </Text>
          <Box display={'flex'}>
            <Text
              fontSize={'sm'}
              fontWeight={'semibold'}
              mb={2}
              mr={2}
              textColor={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
            >
              {position} {shortPosition != '' ? `  (${shortPosition})` : ''}
            </Text>
          </Box>
          <Quarternary text={DateFormat(dateStarted, dateEnded)} />
          {description != '' && (
            <Text
              fontSize={'sm'}
              py={2}
              color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
            >
              {description}
            </Text>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default CardComponent;

const SetType = (data): any => {
  const type = data.toLowerCase();
  const colorMap = {
    'full-time': 'green',
    contract: 'blue',
    'part-time': 'purple',
  };

  let color = colorMap[type] || 'gray';

  return (
    <Badge colorScheme={color} fontSize={'2xs'}>
      {data}
    </Badge>
  );
};

const DateFormat = (start, end): any => {
  const str = moment(start, 'MM-DD-YY').format('MMMM YYYY');
  const ends = moment(end, 'MM-DD-YY').format('MMMM YYYY');

  return `${str} - ${ends}`;
};
