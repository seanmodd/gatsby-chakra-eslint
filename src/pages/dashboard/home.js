import React, { useEffect } from 'react'
import { Container, Typography } from '@mui/material'
// layouts
import { proxy, useSnapshot } from 'valtio'
import TimeComponent from '../../valtio/oldExamples/Times'
import CountComponent from '../../valtio/oldExamples/Counts'
import DashboardLayout from '../../_SHELL/layouts/dashboard'
// hooks
import useSettings from '../../_SHELL/hooks/useSettings'
// components
import Page from '../../_SHELL/components/Page'
import Search from '../../valtio/components/Search'
import Cities from '../../valtio/components/Cities'
// ----------------------------------------------------------------------

const state = proxy({
  TimeComponentProxy: 0,
  CountComponentProxy: 0,
})
export default function PageOne() {
  const { themeStretch } = useSettings()

  return (
    <DashboardLayout>
      <Page title="Dashboard Homepage | Car X Dashboard">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant="h3" component="h1" paragraph>
            Dashboard Homepage
          </Typography>
          <Typography gutterBottom>
            More sample Typography Text with gutterBottom
            <TimeComponent />
          </Typography>
          <Typography>
            <CountComponent />
            Sample Typography Text
          </Typography>
          {/* <Search /> */}
          {/* <Cities /> */}
        </Container>
      </Page>
    </DashboardLayout>
  )
}
