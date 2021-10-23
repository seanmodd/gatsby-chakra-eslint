//* ? This gets imported to LoggedInProvider

import React, { useState } from 'react'

function useLoggedInState() {
  const initialState = true

  const [loggedIn, setLoggedIn] = useState(initialState)

  //   // here we are going to make a switch type to mock how we would use the redux store
  //   // here we are mocking how redux utilizes action and action.types in useReducer
  //   const actions = action => {
  //     const { payload } = action
  //     console.log('This is action from useLoggedInState.js: ', action)
  //     console.log('This is payload from useLoggedInState.js: ', payload)
  //     switch (action.type) {
  //       case 'setLoggedIn':
  //         return setLoggedIn(true)
  //         console.log(
  //           'This is the payload from useLoggedInState within the actions: ',
  //           payload
  //         )
  //       // case 'addTodo':
  //       //   return addTodo(payload)
  //       default:
  //         return loggedIn
  //     }
  //   }
  //   return { loggedIn, actions }
  // }
}
export default useLoggedInState
