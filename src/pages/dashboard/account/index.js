import { useSnackbar } from 'notistack'
import { useFormik, Form, FormikProvider } from 'formik'
import { Icon } from '@iconify/react'
import eyeFill from '@iconify/icons-eva/eye-fill'
import closeFill from '@iconify/icons-eva/close-fill'
import eyeOffFill from '@iconify/icons-eva/eye-off-fill'
import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { UserContext } from '../../../contexts'
import { setUser } from '../../../contexts/actions'
import { useIsClient } from '../../../hooks'
import DashboardLayout from '../../../_SHELL/layouts/dashboard'
import Layout from '../../../components/ui/layout'
import SEO from '../../../components/ui/seo'
import AuthPortal from '../../../components/auth/AuthPortal'
import SettingsPortal from '../../../components/settings/SettingsPortal'

export default function Account() {
  const { user } = useContext(UserContext)
  const { isClient, key } = useIsClient()

  if (!isClient) return null

  return (
    <DashboardLayout>
      <Layout key={key}>
        <SEO
          title="Account"
          description="Login/Sign Up for an account to VAR-X or manage your existing account."
        />

        {user.jwt && user.onboarding ? null : (
          <Link to="/dashboard/account/signup">
            <h1>Signup Now!</h1>
          </Link>
        )}


        {user.jwt && user.onboarding ? <SettingsPortal /> : <AuthPortal />}
      </Layout>
    </DashboardLayout>
  )
}
