// eslint-disable-next-line
//** This retrieves data from __contexts

import React, { useContext } from 'react'
import { FirstContext } from '../__store/__contexts'

function Form() {
  const { state, actions } = useContext(FirstContext)
  console.log('FROM FORM.JS, this is actions: ', actions)
  const handleSubmit = e => {
    e.preventDefault()
    actions.setState(state.todo)
    // actions.setTodo('')
  }

  return (
    <>
      <h4>This is from the Form Component</h4>
      <form action="submit">
        <input
          value={state.value}
          onChange={
            e =>
              actions({
                type: 'setState',
                payload: { ...state, value: e.target.value },
              })
            // console.log(
            //   'From FORM.JS, this is e.target.value: ',
            //   e.target.value
            // )
          }
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  )
}

export default Form
