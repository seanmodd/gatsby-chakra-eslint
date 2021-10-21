import React from 'react'
import { capitalCase } from 'change-case'
import { Link as RouterLink } from 'gatsby'
// material
import { styled } from '@mui/material/styles'
import {
  Box,
  Card,
  Stack,
  Link,
  Alert,
  Tooltip,
  Container,
  Typography,
  Button,
} from '@mui/material'
import loginIcon from '../../../../static/illustrations/illustration_login.png'
import jwtIcon from '../../../../static/auth/ic_jwt.png'
import DashboardLayout from '../../../_SHELL/layouts/dashboard'
// routes
// import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../../components/_MODERN/hooks/useAuth'
// layouts
import AuthLayout from '../../../components/_MODERN/layouts/AuthLayout'
// components
import Page from '../../../components/_MODERN/minimalComponents/Page'
import { MHidden } from '../../../components/_MODERN/minimalComponents/@material-extend'
import { LoginForm } from '../../../components/_MODERN/minimalComponents/authentication/login'
import AuthFirebaseSocials from '../../../components/_MODERN/minimalComponents/authentication/AuthFirebaseSocial'

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

export default function Login() {
  const { method, login } = useAuth()

  const handleLoginAuth0 = async () => {
    try {
      await login()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DashboardLayout>
      <RootStyle title="Login | Minimal-UI">
        <AuthLayout>
          Don’t have an account? &nbsp;
          <Link
            underline="none"
            variant="subtitle2"
            component={RouterLink}
            to="/dashboard/account/register"
          >
            Get started
          </Link>
        </AuthLayout>

        <MHidden width="mdDown">
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src={loginIcon} alt="login" />
          </SectionStyle>
        </MHidden>

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                Don’t have an account? &nbsp;
                <Link
                  underline="none"
                  variant="subtitle2"
                  component={RouterLink}
                  to="/dashboard/account/register"
                >
                  Get started
                </Link>
                <Typography variant="h4" gutterBottom>
                  Sign in to Car X
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Enter your details below.
                </Typography>
              </Box>

              <Tooltip title={capitalCase(method)}>
                <Box
                  component="img"
                  src={jwtIcon}
                  sx={{ width: 32, height: 32 }}
                />
              </Tooltip>
            </Stack>

            {method === 'firebase' && <AuthFirebaseSocials />}

            <Alert severity="info" sx={{ mb: 3 }}>
              Use email : <strong>demo@shopcarx.com</strong> / password :
              <strong>&nbsp;carx1234</strong>
            </Alert>

            {method !== 'auth0' ? (
              <LoginForm />
            ) : (
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleLoginAuth0}
              >
                Login
              </Button>
            )}

            <MHidden width="smUp">
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?&nbsp;
                <Link
                  variant="subtitle2"
                  component={RouterLink}
                  to="/dashboard/account/register"
                >
                  Get started
                </Link>
              </Typography>
            </MHidden>
          </ContentStyle>
        </Container>
      </RootStyle>
    </DashboardLayout>
  )
}
