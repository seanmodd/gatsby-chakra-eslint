// eslint-disable-next-line
//! This is commonly referred to as "Store.js" */
// eslint-disable-next-line
//*? This sends the Context data to "__index.js" */
// eslint-disable-next-line
//?* This retrieves data from "useLoggedInState.js"

import React, { useState } from 'react'

import useLoggedInState from './useLoggedInState'
import { LoginContext } from '../__contexts'

const LoggedInProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  console.log(
    'From LoggedIn Provider, this is useLoggedInState: ',
    useLoggedInState
  )
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoggedInProvider
