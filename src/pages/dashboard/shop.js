import React from 'react'
import { Container, Typography } from '@mui/material'
// layouts
import DashboardLayout from '../../_SHELL/layouts/dashboard'
// hooks
import useSettings from '../../_SHELL/hooks/useSettings'
// components
import Page from '../../_SHELL/components/Page'
import EcommerceShop from '../../_MODERN/pages/dashboard/EcommerceShop'

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettings()

  return (
    <DashboardLayout>
      <Page title="Dashboard Homepage | Car X Dashboard">
        <EcommerceShop />
      </Page>
    </DashboardLayout>
  )
}
