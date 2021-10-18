import { PersistGate } from 'redux-persist/lib/integration/react'
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
import ThemeConfig from '../../_SHELL/theme'
import GlobalStyles from '../../_SHELL/theme/globalStyles'
import SEO from './seo'
// utils
import createEmotionCache from '../../_SHELL/utils/createEmotionCache'
// components
import Settings from '../../_SHELL/components/settings'
import RtlLayout from '../../_SHELL/components/RtlLayout'
import ProgressBar from '../../_SHELL/components/ProgressBar'
import LoadingScreen from '../../_SHELL/components/LoadingScreen'
import ThemePrimaryColor from '../../_SHELL/components/ThemePrimaryColor'

import { CollapseDrawerProvider } from '../../_SHELL/contexts/CollapseDrawerContext'
import { SettingsProvider } from '../../_SHELL/contexts/SettingsContext'
import { AuthProvider } from '../_MODERN/contexts/JWTContext'
import { ApolloWrapper } from '../../apollo/ApolloWrapper'
import { UserWrapper, FeedbackWrapper, CartWrapper } from '../../contexts'

import theme from './theme'
import Layout from './layout'
import MainLayout from '../../_SHELL/layouts/main'
import NotistackProvider from '../_MODERN/minimalComponents/NotistackProvider'

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
      {/* <ModernSettingsProvider> */}
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
                <LoadingScreen />
                <ThemeProvider theme={theme}>
                  <ApolloWrapper>
                    <NotistackProvider>
                      <UserWrapper>
                        <FeedbackWrapper>
                          <CartWrapper>
                            <AuthProvider>
                              <MainLayout>{element}</MainLayout>
                            </AuthProvider>
                          </CartWrapper>
                        </FeedbackWrapper>
                      </UserWrapper>
                    </NotistackProvider>
                  </ApolloWrapper>
                </ThemeProvider>
              </RtlLayout>
            </ThemePrimaryColor>
          </ThemeConfig>
        </CacheProvider>
      </CollapseDrawerProvider>
      {/* </ModernSettingsProvider> */}
    </SettingsProvider>
  )
}
