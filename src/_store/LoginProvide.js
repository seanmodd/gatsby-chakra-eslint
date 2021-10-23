import React from 'react'
import useGlobalState from './useGlobalStateFirst'
import { FirstContext } from './Context'

const FirstProvider = ({ children }) => {
  const store = useGlobalState()
  return <FirstContext.Provider value={store}>{children}</FirstContext.Provider>
}

export default FirstProvider
