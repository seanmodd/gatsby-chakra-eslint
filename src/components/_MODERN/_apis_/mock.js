//* Redux
//* This gets fed into _MODERN/_apis_/product.js
//* Which gets fed into _MODERN/_apis_/index.js
//* Which gets fed into _MODERN/redux/slices/product.js

import React from 'react'
import AxiosMockAdapter from 'axios-mock-adapter'
// utils
import axios from '../utils/axios'

// ----------------------------------------------------------------------

const axiosMockAdapter = new AxiosMockAdapter(axios, {
  delayResponse: 0,
})

export default axiosMockAdapter
