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
