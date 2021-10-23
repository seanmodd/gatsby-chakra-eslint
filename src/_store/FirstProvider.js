import React from 'react'
import useGlobalState from './useGlobalStateFirst'
import { FirstContext } from './_Contexts'

const FirstProvider = ({ children }) => {
  const store = useGlobalState()
  return <FirstContext.Provider value={store}>{children}</FirstContext.Provider>
}

export default FirstProvider
