import React from 'react'
import { proxy } from 'valtio'

const state = proxy({
  TimeComponentProxy: 0,
  CountComponentProxy: 0,
})

export { state }
