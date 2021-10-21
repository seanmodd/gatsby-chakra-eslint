//* Redux
//* This gets fed into _MODERN/_apis_/mock.js
//* Which gets fed into _MODERN/_apis_/product.js
//* Which gets fed into _MODERN/_apis_/index.js
//* Which gets fed into _MODERN/redux/slices/product.js
//! ALSO:
//* Redux
//* This gets fed DIRECTLY into _MODERN/redux/slices/product.js
import React from 'react'
import axios from 'axios'

// ----------------------------------------------------------------------

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
  response => response,
  error =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
)

export default axiosInstance
