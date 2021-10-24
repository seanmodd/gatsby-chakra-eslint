// eslint-disable-next-line
//*? This sends the component to "home.js" to get matched with the Context there...
// eslint-disable-next-line
//** This retrieves data from __contexts

import React, { useContext } from 'react'
import { FirstContext, LoginContext } from '../_store/__contexts'

function List(props) {
  const { state } = useContext(FirstContext)
  const { state: loginState } = useContext(LoginContext)
  console.log('From LIST.JS, this is props: ', props)
  console.log('From LIST.JS, this is state: ', state)
  console.log('From LIST.JS, this is FirstContext: ', FirstContext)
  console.log('From LIST.JS, this is LoginContext: ', LoginContext)
  console.log('From LIST.JS, this is loginState: ', loginState)
  return (
    <div>
      <h4>List.js which is: {state.value}</h4>
      {/* <h4>List.js, here is my loginState: {loginState.value}</h4> */}
    </div>
  )
}

export default List
