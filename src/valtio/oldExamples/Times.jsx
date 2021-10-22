import React, { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { state } from './state'

export default function TimeComponent() {
  const snap = useSnapshot(state)
  useEffect(() => {
    const interval = setInterval(() => {
      state.TimeComponentProxy += 1
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <h3>Here is the TIME: {snap.TimeComponentProxy} </h3>
    </>
  )
}
