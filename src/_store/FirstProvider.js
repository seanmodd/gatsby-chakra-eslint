import React from 'react'
import useGlobalStateFirst from './useGlobalStateFirst'

import { FirstContext } from './_Contexts'

const FirstProvider = ({ children }) => {
  const store = useGlobalStateFirst()
  return <FirstContext.Provider value={store}>{children}</FirstContext.Provider>
}

export default FirstProvider
