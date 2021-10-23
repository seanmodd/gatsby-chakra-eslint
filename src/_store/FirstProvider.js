// eslint-disable-next-line
//! This is commonly referred to as "Store.js" */
// eslint-disable-next-line
//*? This sends the Context data to "__index.js" */
// eslint-disable-next-line
//?* This retrieves data from "useGlobalStateFirst.js"

import React from 'react'
import useGlobalStateFirst from './useGlobalStateFirst'

import { FirstContext } from './_Contexts'

const FirstProvider = ({ children }) => {
  const store = useGlobalStateFirst()
  return <FirstContext.Provider value={store}>{children}</FirstContext.Provider>
}

export default FirstProvider
