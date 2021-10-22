import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import checkmarkFill from '@iconify/icons-eva/checkmark-fill'
// material
import { styled } from '@mui/material/styles'
import {
  Box,
  Grid,
  Step,
  Stepper,
  Container,
  StepLabel,
  StepConnector,
} from '@mui/material'
// redux
import {
  useDispatch,
  useSelector,
} from '../../../components/_MODERN/redux/store'
import DashboardLayout from '../../../_SHELL/layouts/dashboard'
import {
  getCart,
  createBilling,
} from '../../../components/_MODERN/redux/slices/product'
// routes
import { PATH_DASHBOARD } from '../../../components/_MODERN/routes/paths'
// hooks
import useIsMountedRef from '../../../components/_MODERN/hooks/useIsMountedRef'
import useSettings from '../../../components/_MODERN/hooks/useSettings'
// components
import Page from '../../../components/_MODERN/minimalComponents/Page'
import HeaderBreadcrumbs from '../../../components/_MODERN/minimalComponents/HeaderBreadcrumbs'
import {
  CheckoutCart,
  CheckoutPayment,
  CheckoutOrderComplete,
  CheckoutBillingAddress,
} from '../../../components/_MODERN/minimalComponents/_dashboard/e-commerce/checkout'

// ----------------------------------------------------------------------

const STEPS = ['Cart', 'Billing & address', 'Payment']

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  top: 10,
  left: 'calc(-50% + 20px)',
  right: 'calc(50% + 20px)',
  '& .MuiStepConnector-line': {
    borderTopWidth: 2,
    borderColor: theme.palette.divider,
  },
  '&.Mui-active, &.Mui-completed': {
    '& .MuiStepConnector-line': {
      borderColor: theme.palette.primary.main,
    },
  },
}))

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
}

function QontoStepIcon({ active, completed }) {
  return (
    <Box
      sx={{
        zIndex: 9,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: active ? 'primary.main' : 'text.disabled',
      }}
    >
      {completed ? (
        <Box
          component={Icon}
          icon={checkmarkFill}
          sx={{ zIndex: 1, width: 20, height: 20, color: 'primary.main' }}
        />
      ) : (
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
          }}
        />
      )}
    </Box>
  )
}

export default function EcommerceCheckout() {
  const { themeStretch } = useSettings()
  const dispatch = useDispatch()
  const isMountedRef = useIsMountedRef()
  const { checkout } = useSelector(state => state.product)
  const { cart, billing, activeStep } = checkout
  const isComplete = activeStep === STEPS.length

  useEffect(() => {
    if (isMountedRef.current) {
      dispatch(getCart(cart))
    }
  }, [dispatch, isMountedRef, cart])

  useEffect(() => {
    if (activeStep === 1) {
      dispatch(createBilling(null))
    }
  }, [dispatch, activeStep])

  return (
    <DashboardLayout>
      <Page title="Ecommerce: Checkout | Car X">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="Checkout"
            links={[
              { name: 'Dashboard', href: PATH_DASHBOARD.root },
              {
                name: 'All Vehicles',
                href: '/dashboard/e-commerce/shop',
              },
              { name: 'Checkout' },
            ]}
          />

          <Grid container justifyContent={isComplete ? 'center' : 'flex-start'}>
            <Grid item xs={12} md={8} sx={{ mb: 5 }}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<QontoConnector />}
              >
                {STEPS.map(label => (
                  <Step key={label}>
                    <StepLabel
                      StepIconComponent={QontoStepIcon}
                      sx={{
                        '& .MuiStepLabel-label': {
                          typography: 'subtitle2',
                          color: 'text.disabled',
                        },
                      }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>

          {!isComplete ? (
            <>
              {activeStep === 0 && <CheckoutCart />}
              {activeStep === 1 && <CheckoutBillingAddress />}
              {activeStep === 2 && billing && <CheckoutPayment />}
            </>
          ) : (
            <CheckoutOrderComplete open={isComplete} />
          )}
        </Container>
      </Page>
    </DashboardLayout>
  )
}
