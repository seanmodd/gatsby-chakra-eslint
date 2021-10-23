import React, { useContext } from 'react'
import Context from '../store/context'

function List(props) {
  const { state } = useContext(Context)
  console.log('From List.js, this is props: ', props)
  console.log('From List.js, this is state: ', state)
  console.log('From List.js, this is Context: ', Context)
  return <div>List.js</div>
}

export default List
