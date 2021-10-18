import { Link as RouterLink } from 'gatsby'
import React from 'react'
import { capitalCase } from 'change-case'
// import { Link as RouterLink } from 'react-router-dom'

// material
import { styled } from '@mui/material/styles'
import { Box, Card, Container, Typography, Link, Tooltip } from '@mui/material'
import registerIcon from '../../../../static/illustrations/illustration_register.png'
import jwtLogo from '../../../../static/auth/ic_jwt.png'
// import { Box, Card, Link, Container, Typography, Tooltip } from '@mui/material'
// hooks
// import useAuth from '../../hooks/useAuth'
import useAuth from '../../../components/_MODERN/hooks/useAuth'
// routes
// import { PATH_AUTH } from '../../routes/paths'
// layouts
import AuthLayout from '../../../components/_MODERN/layouts/AuthLayout'
// components
import Page from '../../../components/_MODERN/minimalComponents/Page'
import { MHidden } from '../../../components/_MODERN/minimalComponents/@material-extend'
import { RegisterForm } from '../../../components/_MODERN/minimalComponents/authentication/register'
import AuthFirebaseSocials from '../../../components/_MODERN/minimalComponents/authentication/AuthFirebaseSocial'
import DashboardLayout from '../../../_SHELL/layouts/dashboard'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}))

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------

export default function Register() {
  const { method } = useAuth()

  return (
    <DashboardLayout>
      <RootStyle title="Register | Minimal-UI">
        <AuthLayout />

        <MHidden width="mdDown">
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Make your car shopping experience easier than ever with Car X.
            </Typography>
            <img alt="register" src={registerIcon} />
          </SectionStyle>
        </MHidden>

        <Container>
          <ContentStyle>
            <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1 }}>
                <div style={{ marginBottom: '10px' }}>
                  Already have an account? &nbsp;
                  <Link
                    underline="none"
                    variant="subtitle2"
                    component={RouterLink}
                    to="/dashboard/account/login"
                  >
                    Login
                  </Link>
                </div>
                <Typography variant="h4" gutterBottom>
                  Get started absolutely free.
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Free forever. No credit card needed.
                </Typography>
              </Box>
              <Tooltip title={capitalCase(method)}>
                <Box
                  component="img"
                  // src={`../../../../static/auth/ic_${method}.png`}
                  src={jwtLogo}
                  sx={{ width: 32, height: 32 }}
                />
              </Tooltip>
            </Box>

            {method === 'firebase' && <AuthFirebaseSocials />}

            <RegisterForm />

            <Typography
              variant="body2"
              align="center"
              sx={{ color: 'text.secondary', mt: 3 }}
            >
              By registering, I agree to Car X&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Privacy Policy
              </Link>
              .
            </Typography>

            <MHidden width="smUp">
              <Typography
                variant="subtitle2"
                sx={{ mt: 3, textAlign: 'center' }}
              >
                Already have an account?&nbsp;
                <Link to="/dashboard/account/login">Login</Link>
              </Typography>
            </MHidden>
          </ContentStyle>
        </Container>
      </RootStyle>
    </DashboardLayout>
  )
}
