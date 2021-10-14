// import { ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/react'
import 'simplebar/src/simplebar.css'
// editor
import 'react-quill/dist/quill.snow.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// next
// import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
// material
import { NoSsr } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@mui/material'
import ThemeConfig from '../../src/theme'
import GlobalStyles from '../../src/theme/globalStyles'
// utils
import createEmotionCache from '../../src/utils/createEmotionCache'
// components
import Settings from '../../src/components/settings'
import RtlLayout from '../../src/components/RtlLayout'
import ProgressBar from '../../src/components/ProgressBar'
import LoadingScreen from '../../src/components/LoadingScreen'
import ThemePrimaryColor from '../../src/components/ThemePrimaryColor'

import { CollapseDrawerProvider } from '../../src/contexts/CollapseDrawerContext'
import { SettingsProvider } from '../../src/contexts/SettingsContext'
import { ApolloWrapper } from '../../apollo/ApolloWrapper'
import { UserWrapper, FeedbackWrapper, CartWrapper } from '../../contexts'
import theme from './theme'
import Layout from './layout'

const clientSideEmotionCache = createEmotionCache()
export default ({ element }) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = element
  console.log('element: ', element)
  return (
    //! Below is the code from the next.js docs
    <SettingsProvider>
      <CollapseDrawerProvider>
        <CacheProvider value={emotionCache}>
          {/* <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head> */}

          <ThemeConfig>
            <ThemePrimaryColor>
              <RtlLayout>
                <NoSsr>
                  <Settings />
                </NoSsr>
                <GlobalStyles />
                <ProgressBar />
                {/* <LoadingScreen /> */}
                <ThemeProvider theme={theme}>
                  <ApolloWrapper>
                    <UserWrapper>
                      <FeedbackWrapper>
                        <CartWrapper>{element}</CartWrapper>
                      </FeedbackWrapper>
                    </UserWrapper>
                  </ApolloWrapper>
                </ThemeProvider>
              </RtlLayout>
            </ThemePrimaryColor>
          </ThemeConfig>
        </CacheProvider>
      </CollapseDrawerProvider>
    </SettingsProvider>
  )
}
