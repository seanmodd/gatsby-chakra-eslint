import React, { useState } from 'react'

import useLoggedInState from './useLoggedInState'
import { LoginContext } from './_Contexts'

const LoggedInProvider = ({ children }) => {
  // const { loggedIn, setLoggedIn } = useLoggedInState()
  console.log(
    'From LoggedIn Provider, this is useLoggedInState: ',
    useLoggedInState
  )
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoggedInProvider
