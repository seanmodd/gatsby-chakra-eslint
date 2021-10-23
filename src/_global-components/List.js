import React, { useContext } from 'react'
import Context from '../_store/FirstContext'

function List(props) {
  const { state } = useContext(Context)
  console.log('From LIST.JS, this is props: ', props)
  console.log('From LIST.JS, this is state: ', state)
  console.log('From LIST.JS, this is Context: ', Context)
  return (
    <div>
      <h4>List.js which is {state.value}</h4>
    </div>
  )
}

export default List
