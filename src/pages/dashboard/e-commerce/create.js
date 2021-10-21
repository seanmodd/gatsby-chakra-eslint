import React, { useEffect } from 'react'
import { paramCase } from 'change-case'
// import { useParams, useLocation } from 'react-router-dom'
// material
import { Container } from '@mui/material'
import DashboardLayout from '../../../_SHELL/layouts/dashboard'
// redux
import {
  useDispatch,
  useSelector,
} from '../../../components/_MODERN/redux/store'
import { getProducts } from '../../../components/_MODERN/redux/slices/product'
// routes
import { PATH_DASHBOARD } from '../../../components/_MODERN/routes/paths'
// hooks
import useSettings from '../../../components/_MODERN/hooks/useSettings'
// components
import Page from '../../../components/_MODERN/minimalComponents/Page'
import HeaderBreadcrumbs from '../../../components/_MODERN/minimalComponents/HeaderBreadcrumbs'
import ProductNewForm from '../../../components/_MODERN/minimalComponents/_dashboard/e-commerce/ProductNewForm'

// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {
  const { themeStretch } = useSettings()
  const dispatch = useDispatch()
  // const { pathname } = useLocation()
  const pathname = {}
  // const { name } = useParams()
  // const name = paramCase(pathname.split('/').pop())
  const name = pathname
  const { products } = useSelector(state => state.product)
  // const isEdit = pathname.includes('edit')
  const isEdit = pathname
  const currentProduct = products.find(
    product => paramCase(product.name) === name
  )

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <DashboardLayout>
      <Page title="Ecommerce: Create a new product | Minimal-UI">
        <Container maxWidth={themeStretch ? false : 'lg'}>
          {/* <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new product' : 'Edit product'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'E-Commerce',
              href: PATH_DASHBOARD.eCommerce.root,
            },
            { name: !isEdit ? 'New product' : name },
          ]}
        /> */}

          {/* <ProductNewForm isEdit={isEdit} currentProduct={currentProduct} /> */}
          <ProductNewForm currentProduct={currentProduct} />
        </Container>
      </Page>
    </DashboardLayout>
  )
}
