import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export type ThemeToggleButton = {}

const ThemeToggleButton: React.FC<ThemeToggleButton> = props => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'gray',
        }}
        animate={{
          backgroundColor: 'gray',
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'gray',
        }}
        transition={{ duration: 1 }}
      >
        <IconButton
          isRound={true}
          size="sm"
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('lightgray', 'purple')}
          icon={useColorModeValue(<MoonIcon />, <MoonIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          isRound={true}
          size="sm"
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('orange', 'lightgray')}
          icon={useColorModeValue(<SunIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
