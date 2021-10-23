// eslint-disable-next-line
//*? This sends data of Contexts to Form.js, List.js
// eslint-disable-next-line
//?* Setup is imported from _providerComposer.js
import React, { createContext } from 'react'

const FirstContext = createContext({})

const LoginContext = createContext({})

export { FirstContext, LoginContext }
