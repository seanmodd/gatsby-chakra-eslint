// eslint-disable-next-line
//! Setup is imported from _providerComposer.js
// eslint-disable-next-line
//*? This sends the Context data to "root-wrapper.js" */
// eslint-disable-next-line
//?* This retrieves data of Context from from _providers/FirstProvider.js (the context provider) 
// ?* This retrieves data of Context from from _providers/LoggedInProvider.js (the context provider)
// ?* This retrieves the setup from './_providerComposer.js'

import React from 'react'
import FirstProvider from './__providers/first/first.provider'
import LoggedInProvider from './__providers/loggedin/loggedin.provider'
import { ProviderComposer } from './__providerComposer'

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<FirstProvider />, <LoggedInProvider />]}>
      {children}
    </ProviderComposer>
  )
}

export { ContextProvider }
