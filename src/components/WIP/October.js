import { ThemeProvider } from '@material-ui/core/styles'
import React, { useState } from 'react'
import { Button, ButtonGroup, Box, Typography } from '@material-ui/core'
import { DarkMode, LightMode } from '../ui/theme'
import Layout from '../ui/layout'

export const MyButton = ({ children }) => (
  <>
    <Button color="success" variant="contained">
      {children}
    </Button>
  </>
)

export const LightButton = () => <Button>LightMode</Button>

function OctoberComponents() {
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
        <Layout>
          <Box style={{ fontFamily: 'Barlow' }}>
            <Typography variant="h3" fontWeight="500">
              Here is MyButton:
            </Typography>

            <button onClick={handleChange}>CLICK</button>
            <ButtonGroup>
              <Button>Here</Button>
              <Button>is</Button>
              <Button>Button</Button>
            </ButtonGroup>
          </Box>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default OctoberComponents
