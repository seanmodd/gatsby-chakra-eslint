import React from 'react'
import { useSnapshot, proxy } from 'valtio'

import store, { addCity } from '../store'

export default () => {
  const snap = useSnapshot.store
  return (
    <>
      <div>
        <input
          // value={snap.city}
          onChange={evt => (store.city = evt.target.value)}
          placeholder="City"
        />
      </div>
      <div>
        <button onClick={addCity}>Add City</button>
      </div>
    </>
  )
}
