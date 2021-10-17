import React, { useState } from 'react'

import {
  Box,
  Grid,
  Card,
  Stack,
  Container,
  Typography,
  CardHeader,
  CardContent,
} from '@mui/material'
// layouts
import DashboardLayout from '../../_SHELL/layouts/dashboard'
// hooks
import useSettings from '../../_SHELL/hooks/useSettings'
// components
import Page from '../../_SHELL/components/Page'

// ----------------------------------------------------------------------

export default function PageThree() {
  const { themeStretch } = useSettings()

  return (
    <DashboardLayout>
      <Page title="Page Three | Minimal-UI">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant="h3" component="h1" sx={{ mb: 5 }}>
            Demo editor for next js
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8} />
            <Grid item xs={12} md={4}>
              <Stack spacing={3} sx={{ height: 1 }}>
                <Card
                  sx={{
                    height: 1,
                    boxShadow: 0,
                    bgcolor: 'background.neutral',
                  }}
                >
                  <CardHeader title="Preview Plain Text" />
                  <Typography sx={{ p: 3 }} />
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
