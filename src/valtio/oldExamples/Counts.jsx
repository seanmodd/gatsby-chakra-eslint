import React  from 'react'
import { useSnapshot } from 'valtio'
import { state } from './state'

export default function CountComponent() {
  const snap = useSnapshot(state)
  return (
    <>
      <h3>Here is the COUNTER: {snap.CountComponentProxy}</h3>
      <button
        onClick={() => {
          state.CountComponentProxy += 1
        }}
      >
        Click to increase counter
      </button>
    </>
  )
}
