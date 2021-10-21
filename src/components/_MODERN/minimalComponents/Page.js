import React, { forwardRef, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
// import { Helmet } from 'react-helmet-async'
// import { useLocation } from 'react-router-dom'
// material
import { Box } from '@mui/material'
// utils
import track from '../utils/analytics'

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => {
  // const { pathname } = useLocation()
  const [activePathname, setActivePathname] = useState('')
  useEffect(() => {
    setActivePathname(window && window.location ? window.location.pathname : '')
  }, [])
  console.log('From Page.js - here is the activePathname: ', activePathname)

  const sendPageViewEvent = useCallback(() => {
    track.pageview({
      page_path: activePathname,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    sendPageViewEvent()
  }, [sendPageViewEvent])

  return (
    <Box ref={ref} {...other}>
      {/* <Helmet> */}
      <title>{title}</title>
      {/* </Helmet> */}
      {children}
    </Box>
  )
})

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Page
