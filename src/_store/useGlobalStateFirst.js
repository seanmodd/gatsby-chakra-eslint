// eslint-disable-next-line
//*? This sends data to "FirstProvider.js"

import React, { useState } from 'react'

function useGlobalStateFirst() {
  const initialState = {
    value: 'From useGlobalStateFirst.js',
    list: [],
  }
  const [state, setState] = useState(initialState)

  // here we are going to make a switch type to mock how we would use the redux store
  // here we are mocking how redux utilizes action and action.types in useReducer
  const actions = action => {
    const { payload } = action
    switch (action.type) {
      case 'setState':
        return setState(payload)
        console.log(
          'This is the payload from useGlobalStateFirst within the actions: ',
          payload
        )
      // case 'addTodo':
      //   return addTodo(payload)
      default:
        return state
    }
  }
  return { state, actions }
}

export default useGlobalStateFirst
