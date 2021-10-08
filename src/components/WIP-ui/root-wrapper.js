// import { ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@mui/material'
import { ApolloWrapper } from '../../apollo/ApolloWrapper'
import { UserWrapper, FeedbackWrapper, CartWrapper } from '../../contexts'
import theme from './theme'
import Layout from './layout'

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <ApolloWrapper>
      <UserWrapper>
        <FeedbackWrapper>
          <CartWrapper>{element}</CartWrapper>
        </FeedbackWrapper>
      </UserWrapper>
    </ApolloWrapper>
  </ThemeProvider>
)
