import React from 'react'
import { Icon } from '@iconify/react'
import { Link as RouterLink } from 'gatsby'
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill'
// material
import { styled } from '@mui/material/styles'
import { Box, Button, Link, Container, Typography } from '@mui/material'
import DashboardLayout from '../../../_SHELL/layouts/dashboard'
// layouts
import LogoOnlyLayout from '../../../components/_MODERN/layouts/LogoOnlyLayout'
// routes
// import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../../components/_MODERN/minimalComponents/Page'
import { VerifyCodeForm } from '../../../components/_MODERN/minimalComponents/authentication/verify-code'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------

export default function VerifyCode() {
  return (
    <DashboardLayout>
      <RootStyle title="Verify | Minimal UI">
        <LogoOnlyLayout />

        <Container>
          <Box sx={{ maxWidth: 480, mx: 'auto' }}>
            <Button
              size="small"
              component={RouterLink}
              to="/dashboard/account/login"
              startIcon={
                <Icon icon={arrowIosBackFill} width={20} height={20} />
              }
              sx={{ mb: 3 }}
            >
              Back
            </Button>

            <Typography variant="h3" paragraph>
              Please check your email!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              A 6-digit confirmation code has been sent to the email address you
              provided. Please enter the code in the below box to verify the
              email belongs to you.
            </Typography>

            <Box sx={{ mt: 5, mb: 3 }}>
              <VerifyCodeForm />
            </Box>

            {/* <Typography variant="body2" align="center">
              Don???t have a code? &nbsp;
              <Link variant="subtitle2" underline="none" onClick={() => {}}>
                Resend code
              </Link>
            </Typography> */}
          </Box>
        </Container>
      </RootStyle>
    </DashboardLayout>
  )
}
