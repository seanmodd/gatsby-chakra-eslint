import React, { useContext } from 'react'
import { FirstContext } from '../_store/Context'

function List(props) {
  const { state } = useContext(FirstContext)
  console.log('From LIST.JS, this is props: ', props)
  console.log('From LIST.JS, this is state: ', state)
  console.log('From LIST.JS, this is FirstContext: ', FirstContext)
  return (
    <div>
      <h4>List.js which is {state.value}</h4>
    </div>
  )
}

export default List
