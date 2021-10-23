import React from 'react'
import useGlobalState from './useGlobalStateFirst'
import { LoginContext } from './_Contexts'

const LoginProvider = ({ children }) => {
  const store = useGlobalState()
  return <LoginContext.Provider value={store}>{children}</LoginContext.Provider>
}

export default LoginProvider
