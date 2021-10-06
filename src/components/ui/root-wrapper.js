import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import {
  ChakraProvider,
  useColorMode,
  ColorModeProvider,
  useColorModeValue as mode,
  Box,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { ApolloWrapper } from '../../apollo/ApolloWrapper'
import { UserWrapper, FeedbackWrapper, CartWrapper } from '../../contexts'
import theme, { chakraTheme } from './theme'

export default ({ element }) => (
  <ChakraProvider theme={chakraTheme}>
    {/* <DarkModeSwitch /> */}
    <ThemeProvider theme={theme}>
      <ApolloWrapper>
        <UserWrapper>
          <FeedbackWrapper>
            <CartWrapper>{element}</CartWrapper>
          </FeedbackWrapper>
        </UserWrapper>
      </ApolloWrapper>
    </ThemeProvider>
  </ChakraProvider>
)

const MyBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const iconColor = {
    light: 'black',
    dark: 'white',
  }
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  }
  return (
    <>
      <Box
        minH="100vh"
        px={['0px', '0px', '0px', '0px']}
        bg={bgColor[colorMode]}
      >
        {children}
      </Box>
    </>
  )
}
const ContentBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const iconColor = {
    light: 'black',
    dark: 'white',
  }
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  }
  return (
    <>
      <Box pt="100px" px={['0px', '0px', '0px', '0px']} bg={bgColor[colorMode]}>
        {children}
      </Box>
    </>
  )
}

const DarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const iconColor = {
    light: 'gray.400',
    dark: 'gray.200',
  }
  const bgColor = {
    light: 'gray.200',
    dark: 'gray.900',
  }
  return (
    <>
      <HStack
        position="fixed"
        top={['10px', '16px', '16px', '16px']}
        right="-30px"
        zIndex="10"
        // backgroundColor="red.500"
        // borderWidth="4px"
        // backgroundColor={bgColor[colorMode]}
        // w="100vw"
        justify="flex-end"
      >
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          zIndex="10000"
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          bgColor={bgColor[colorMode]}
          marginRight="4rem"
          // bg={bgColor[colorMode]}
        >
          {children}
        </IconButton>
      </HStack>
    </>
  )
}
