// import { ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core/styles'

import { ApolloWrapper } from '../../apollo/ApolloWrapper'
import { UserWrapper, FeedbackWrapper, CartWrapper } from '../../contexts'
import theme from './theme'

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <ApolloWrapper>
      <UserWrapper>
        <FeedbackWrapper>
          {/* <CssBaseline /> */}

          <CartWrapper>{element}</CartWrapper>
        </FeedbackWrapper>
      </UserWrapper>
    </ApolloWrapper>
  </ThemeProvider>
)
