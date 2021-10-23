import React, { useEffect, useContext } from 'react'
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
import List from '../../_global-components/List'
import Form from '../../_global-components/Form'
import { LoginContext } from '../../_store/_Contexts'
// ----------------------------------------------------------------------

const state = proxy({
  TimeComponentProxy: 0,
  CountComponentProxy: 0,
})
export default function PageOne() {
  const { themeStretch } = useSettings()
  const { loggedIn, setLoggedIn } = useContext(LoginContext)
  console.log(
    'From HOME.JS, this is loggedIn from useContext(LoginContext): ',
    loggedIn
  )
  return (
    <DashboardLayout>
      <Page title="Dashboard Homepage | Car X Dashboard">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant="h3" component="h1" paragraph>
            Dashboard Homepage
            {loggedIn && <h1>You are logged in!</h1>}
            {!loggedIn && <h1>You are logged OUT!</h1>}
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
          <List />
          <Form />
        </Container>
      </Page>
    </DashboardLayout>
  )
}
