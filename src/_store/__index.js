// eslint-disable-next-line
//! Setup is imported from _providerComposer.js
// eslint-disable-next-line
//*? This sends the Context data to "root-wrapper.js" */
// eslint-disable-next-line
//?* This retrieves data of Context from from _providers/FirstProvider.js (the context provider) 
// ?* This retrieves data of Context from from _providers/LoggedInProvider.js (the context provider)
// ?* This retrieves the setup from './_providerComposer.js'

import React from 'react'
import FirstProvider from './_providers/FirstProvider'
import LoggedInProvider from './_providers/LoggedInProvider'
import { ProviderComposer } from './__providerComposer'

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<FirstProvider />, <LoggedInProvider />]}>
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
