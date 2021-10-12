import { ThemeProvider } from '@material-ui/core/styles'
import {
  Typography,
  makeStyles,
  Button,
  ButtonGroup,
  Box,
  Card,
  Paper,
  Container,
} from '@material-ui/core'
import React, { useState } from 'react'
import { DarkMode, LightMode } from '../components/WIP-ui/theme'
import Layout from '../components/WIP-ui/layout'
import OctoberComponents, { MyButton } from '../components/WIP/October'
import InnerGrid from '../components/WIP-ui/inner-grid'

const useStyles = makeStyles({
  columnStack: {
    padding: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
})

function October() {
  const classes = useStyles()

  const [colorMode, setColorMode] = useState(LightMode)

  const handleChange = () => {
    if (colorMode === LightMode) {
      setColorMode(DarkMode)
    } else {
      setColorMode(LightMode)
    }
  }

  return (
    <>
      <ThemeProvider theme={colorMode}>
        <Paper>
          <Layout>
            <InnerGrid>
              <Container className={classes.columnStack}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleChange}
                >
                  CLICK
                </Button>
                <Typography> october </Typography>
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
                <OctoberComponents />
              </Container>
            </InnerGrid>
          </Layout>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default October
