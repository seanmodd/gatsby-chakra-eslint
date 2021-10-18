import React, { useState } from 'react'
import { Link as RouterLink } from 'gatsby'
// material
import { styled } from '@mui/material/styles'
import { Box, Button, Container, Typography } from '@mui/material'
// layouts
import LogoOnlyLayout from '../../../components/_MODERN/layouts/LogoOnlyLayout'
// routes
// import { PATH_AUTH } from '../../routes/paths'
// components
import Page from '../../../components/_MODERN/minimalComponents/Page'
import { ResetPasswordForm } from '../../../components/_MODERN/minimalComponents/authentication/reset-password'
//
import DashboardLayout from '../../../_SHELL/layouts/dashboard'
import { SentIcon } from '../../../components/_MODERN/assets'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <DashboardLayout>
      <RootStyle title="Reset Password | Minimal UI">
        <LogoOnlyLayout />

        <Container>
          <Box sx={{ maxWidth: 480, mx: 'auto' }}>
            {!sent ? (
              <>
                <Typography variant="h3" paragraph>
                  Forgot your password?
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                  Please enter the email address associated with your account
                  and We will email you a link to reset your password.
                </Typography>

                <ResetPasswordForm
                  onSent={() => setSent(true)}
                  onGetEmail={value => setEmail(value)}
                />

                <Button
                  fullWidth
                  size="large"
                  component={RouterLink}
                  to="/dashboard/account/login"
                  sx={{ mt: 1 }}
                >
                  Back
                </Button>
              </>
            ) : (
              <Box sx={{ textAlign: 'center' }}>
                <SentIcon sx={{ mb: 5, mx: 'auto', height: 160 }} />

                <Typography variant="h3" gutterBottom>
                  Request sent successfully
                </Typography>
                <Typography>
                  We have sent a confirmation email to &nbsp;
                  <strong>{email}</strong>
                  <br />
                  Please check your email.
                </Typography>

                <Button
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  to="/dashboard/account/login"
                  sx={{ mt: 5 }}
                >
                  Back
                </Button>
              </Box>
            )}
          </Box>
        </Container>
      </RootStyle>
    </DashboardLayout>
  )
}
