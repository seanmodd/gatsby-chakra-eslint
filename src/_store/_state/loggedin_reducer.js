// eslint-disable-next-line
//*? This sends data to "LoggedInProvider.js"

import React, { useState } from 'react'

function useLoggedInState() {
  const initialState = true

  const [loggedIn, setLoggedIn] = useState(initialState)
}
export default useLoggedInState
