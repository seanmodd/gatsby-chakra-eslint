// eslint-disable-next-line
//! Setup is imported from _providerComposer.js
// eslint-disable-next-line
//*? This sends the Context data to "root-wrapper.js" */
// eslint-disable-next-line
//?* This retrieves data of Contexts from from FirstProvider.js (the context provider) _providerComposer.js

import React from 'react'
import FirstProvider from './FirstProvider'
import LoggedInProvider from './LoggedInProvider'
import { ProviderComposer } from './__providerComposer'

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<FirstProvider />, <LoggedInProvider />]}>
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
