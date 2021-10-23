import React, { useState } from 'react'

function useGlobalState() {
  const [state, setState] = useState({ value: '', list: [] })

  // here we are going to make a switch type to mock how we would use the redux store
  // here we are mocking how redux utilizes action and action.types in useReducer
  const actions = action => {
    const { type, payload } = action
    switch (type) {
      case 'setState':
        return setState(payload)
      default:
        return state
    }
  }
  return { state, actions }
}

export default useGlobalState
