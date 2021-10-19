import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// material
import { Container, Card } from '@mui/material'
// redux
import { useDispatch } from '../../components/_MODERN/redux/store'
import { getLabels } from '../../components/_MODERN/redux/slices/mail'
// routes
// import { PATH_DASHBOARD } from '../../routes/paths'
// hooks
import useSettings from '../../components/_MODERN/hooks/useSettings'
// components
import Page from '../../components/_MODERN/minimalComponents/Page'
import HeaderBreadcrumbs from '../../components/_MODERN/minimalComponents/HeaderBreadcrumbs'
import {
  MailList,
  MailDetails,
  MailSidebar,
  MailCompose,
} from '../../components/_MODERN/minimalComponents/_dashboard/mail'
import DashboardLayout from '../../_SHELL/layouts/dashboard'

// ----------------------------------------------------------------------

export default function Mail() {
  const { themeStretch } = useSettings()
  const dispatch = useDispatch()
  // const { mailId } = useParams()
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openCompose, setOpenCompose] = useState(false)

  useEffect(() => {
    dispatch(getLabels())
  }, [dispatch])

  return (
    <DashboardLayout>
      <Page title="Mail | Minimal-UI">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <HeaderBreadcrumbs
            heading="Mail"
            links={[
              {
                name: 'Dashboard',
                href: '/dashboard',
              },
              { name: 'Mail' },
            ]}
          />
          <Card sx={{ height: { md: '72vh' }, display: { md: 'flex' } }}>
            <MailSidebar
              isOpenSidebar={openSidebar}
              onCloseSidebar={() => setOpenSidebar(false)}
              onOpenCompose={() => setOpenCompose(true)}
            />

            <MailDetails />

            <MailList onOpenSidebar={() => setOpenSidebar(true)} />

            {/* {mailId ? (
              <MailDetails />
            ) : (
              <MailList onOpenSidebar={() => setOpenSidebar(true)} />
            )} */}
            <MailCompose
              isOpenCompose={openCompose}
              onCloseCompose={() => setOpenCompose(false)}
            />
          </Card>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
