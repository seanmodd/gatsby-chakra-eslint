import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  spacer: {
    marginBottom: '5rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem',
    },
  },
}))

const InnerGrid = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      {/* <Grid container color="red">
        <Grid
          color="red"
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          display="flex"
        > */}
      {children}
      {/* </Grid>
      </Grid> */}
    </>
  )
}

export default InnerGrid
