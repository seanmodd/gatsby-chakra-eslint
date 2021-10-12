import { ThemeProvider } from '@material-ui/core/styles'
import React, { useState } from 'react'
import {
  Button,
  ButtonGroup,
  makeStyles,
  Box,
  Typography,
} from '@material-ui/core'
import { DarkMode, LightMode } from '../ui/theme'
import Layout from '../WIP-ui/layout'

const useStyles = makeStyles({
  columnStack: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  rowStack: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
})

function OctoberComponents() {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.columnStack}>
        <Typography variant="h3" fontWeight="500">
          Here is MyButton:
        </Typography>

        <ButtonGroup className={classes.rowStack}>
          <Button>Here</Button>
          <Button>is</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default OctoberComponents
