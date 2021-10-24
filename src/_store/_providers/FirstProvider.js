// eslint-disable-next-line
//! This is commonly referred to as "Store.js" */
// eslint-disable-next-line
//*? This sends the Context data to "__index.js" */
// eslint-disable-next-line
//?* This retrieves data from "useGlobalStateFirst.js" which is now "FirstProvider.js" */

import React from 'react'
import first_reducer from '../_state/first_reducer'

import { FirstContext } from '../__contexts'

const FirstProvider = ({ children }) => {
  const store = first_reducer()
  return <FirstContext.Provider value={store}>{children}</FirstContext.Provider>
}

export default FirstProvider
