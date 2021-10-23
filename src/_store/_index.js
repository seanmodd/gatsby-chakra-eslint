// eslint-disable-next-line
//?* This retrieves data of Contexts from from FirstProvider.js (the context provider) _providerComposer.js
// eslint-disable-next-line
//?* Setup is imported from _providerComposer.js
import React from 'react'
import FirstProvider from './FirstProvider'
import { ProviderComposer } from './_providerComposer'

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<FirstProvider />]}>
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
