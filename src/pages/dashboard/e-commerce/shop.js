import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { filter, includes, orderBy } from 'lodash'
// material
import {
  Backdrop,
  Container,
  Typography,
  CircularProgress,
  Stack,
} from '@mui/material'

import DashboardLayout from '../../../_SHELL/layouts/dashboard'
// redux
import {
  useDispatch,
  useSelector,
} from '../../../components/_MODERN/redux/store'
import {
  getProducts,
  filterProducts,
} from '../../../components/_MODERN/redux/slices/product'
// routes
// import { PATH_DASHBOARD } from '../../routes/paths'
// utils
import fakeRequest from '../../../components/_MODERN/utils/fakeRequest'
// hooks
import useSettings from '../../../components/_MODERN/hooks/useSettings'
// components
import Page from '../../../components/_MODERN/minimalComponents/Page'
import HeaderBreadcrumbs from '../../../components/_MODERN/minimalComponents/HeaderBreadcrumbs'
import {
  ShopTagFiltered,
  ShopProductSort,
  ShopProductList,
  ShopFilterSidebar,
} from '../../../components/_MODERN/minimalComponents/_dashboard/e-commerce/shop'
import CartWidget from '../../../components/_MODERN/minimalComponents/_dashboard/e-commerce/CartWidget'
import { products } from '../../../components/_MODERN/_apis_/products'
import graphqldata from '../../../components/_MODERN/_apis_/NewProducts'
// ----------------------------------------------------------------------

function applyFilter(products, sortBy, filters) {
  // SORT BY
  if (sortBy === 'featured') {
    products = orderBy(products, ['sold'], ['desc'])
  }
  if (sortBy === 'newest') {
    products = orderBy(products, ['createdAt'], ['desc'])
  }
  if (sortBy === 'priceDesc') {
    products = orderBy(products, ['price'], ['desc'])
  }
  if (sortBy === 'priceAsc') {
    products = orderBy(products, ['price'], ['asc'])
  }
  // FILTER PRODUCTS
  if (filters.gender.length > 0) {
    products = filter(products, _product =>
      includes(filters.gender, _product.gender)
    )
  }
  if (filters.category !== 'All') {
    products = filter(
      products,
      _product => _product.category === filters.category
    )
  }
  if (filters.colors.length > 0) {
    products = filter(products, _product =>
      _product.colors.some(color => filters.colors.includes(color))
    )
  }
  if (filters.priceRange) {
    products = filter(products, _product => {
      if (filters.priceRange === 'below') {
        return _product.price < 25
      }
      if (filters.priceRange === 'between') {
        return _product.price >= 25 && _product.price <= 75
      }
      return _product.price > 75
    })
  }
  if (filters.rating) {
    products = filter(products, _product => {
      const convertRating = value => {
        if (value === 'up4Star') return 4
        if (value === 'up3Star') return 3
        if (value === 'up2Star') return 2
        return 1
      }
      return _product.totalRating > convertRating(filters.rating)
    })
  }
  return products
}
// function applyFilter(products, sortBy, filters) {
//   // SORT BY
//   if (sortBy === 'featured') {
//     products = orderBy(products, ['sold'], ['desc'])
//   }
//   if (sortBy === 'newest') {
//     products = orderBy(products, ['createdAt'], ['desc'])
//   }
//   if (sortBy === 'priceDesc') {
//     products = orderBy(products, ['price'], ['desc'])
//   }
//   if (sortBy === 'priceAsc') {
//     products = orderBy(products, ['price'], ['asc'])
//   }
//   // FILTER PRODUCTS
//   if (filters.gender.length > 0) {
//     products = filter(products, _product =>
//       includes(filters.gender, _product.gender)
//     )
//   }
//   if (filters.category !== 'All') {
//     products = filter(
//       products,
//       _product => _product.category === filters.category
//     )
//   }
//   if (filters.colors.length > 0) {
//     products = filter(products, _product =>
//       _product.colors.some(color => filters.colors.includes(color))
//     )
//   }
//   if (filters.priceRange) {
//     products = filter(products, _product => {
//       if (filters.priceRange === 'below') {
//         return _product.price < 25
//       }
//       if (filters.priceRange === 'between') {
//         return _product.price >= 25 && _product.price <= 75
//       }
//       return _product.price > 75
//     })
//   }
//   if (filters.rating) {
//     products = filter(products, _product => {
//       const convertRating = value => {
//         if (value === 'up4Star') return 4
//         if (value === 'up3Star') return 3
//         if (value === 'up2Star') return 2
//         return 1
//       }
//       return _product.totalRating > convertRating(filters.rating)
//     })
//   }
//   return products
// }

export default function EcommerceShop({ data }) {
  const { themeStretch } = useSettings()
  const dispatch = useDispatch()
  const [openFilter, setOpenFilter] = useState(false)
  const {
    products: ignoreme,
    sortBy,
    filters,
  } = useSelector(state => state.product)
  console.log('From shop.js - products props: ', products)
  console.log('From shop.js - data props: ', data)
  const newData = data.allGoogleAllcarsSheet.edges
  console.log(
    'From shop.js - data.allGoogleAllcarsSheet.edges props: ',
    newData
  )
  console.log(
    'From shop.js connected to NewProducts.js - graphqldata props: ',
    graphqldata
  )
  console.log(
    'From shop.js connected to NewProducts.js - products props: ',
    products
  )
  console.log(
    'From shop.js connected to NewProducts.js - sortBy props: ',
    sortBy
  )
  console.log(
    'From shop.js connected to NewProducts.js - filters props: ',
    filters
  )

  const filteredProducts = applyFilter(ignoreme, sortBy, filters)
  // const filteredProducts = newData
  const formik = useFormik({
    initialValues: {
      gender: filters.gender,
      category: filters.category,
      colors: filters.colors,
      priceRange: filters.priceRange,
      rating: filters.rating,
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await fakeRequest(500)
        setSubmitting(false)
      } catch (error) {
        console.error(error)
        setSubmitting(false)
      }
    },
  })

  const { values, resetForm, handleSubmit, isSubmitting, initialValues } =
    formik

  const isDefault =
    !values.priceRange &&
    !values.rating &&
    values.gender.length === 0 &&
    values.colors.length === 0 &&
    values.category === 'All'

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(filterProducts(values))
  }, [dispatch, values])

  const handleOpenFilter = () => {
    setOpenFilter(true)
  }

  const handleCloseFilter = () => {
    setOpenFilter(false)
  }

  const handleResetFilter = () => {
    handleSubmit()
    resetForm()
  }

  return (
    <DashboardLayout>
      <Page title="All Vehicles | Car X">
        {values && (
          <Backdrop open={isSubmitting} sx={{ zIndex: 9999 }}>
            <CircularProgress />
          </Backdrop>
        )}

        <Container maxWidth={themeStretch ? false : 'lg'}>
          <HeaderBreadcrumbs
            heading="All Vehicles"
            links={[
              { name: 'Dashboard', href: '/dashboard' },
              { name: 'All Vehicles' },
            ]}
          />
          {!isDefault && (
            <Typography gutterBottom>
              <Typography component="span" variant="subtitle1">
                {filteredProducts.length}
              </Typography>
              &nbsp;Products found
            </Typography>
          )}
          <Stack
            direction="row"
            flexWrap="wrap-reverse"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ mb: 5 }}
          >
            <ShopTagFiltered
              filters={filters}
              formik={formik}
              isShowReset={openFilter}
              onResetFilter={handleResetFilter}
              isDefault={isDefault}
            />

            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
              <ShopFilterSidebar
                formik={formik}
                isOpenFilter={openFilter}
                onResetFilter={handleResetFilter}
                onOpenFilter={handleOpenFilter}
                onCloseFilter={handleCloseFilter}
              />
              <ShopProductSort />
            </Stack>
          </Stack>
          <ShopProductList
            products={filteredProducts}
            // products={newData}
            isLoad={!filteredProducts && !initialValues}
          />

          <CartWidget />
        </Container>
      </Page>
    </DashboardLayout>
  )
}

export const query = graphql`
  query GoogleSheetsCJDandKia {
    allGoogleAllcarsSheet {
      totalCount
      edges {
        node {
          drivetrainnew: carDrivetrain
          carEngine
          color: carExteriorColor
          carFuelEconomy
          carHighlightedFeatures1Feature
          carHighlightedFeatures2Feature
          carHighlightedFeatures3Feature
          carHighlightedFeatures4Feature
          carHighlightedFeatures5Feature
          carHighlightedFeatures6Feature
          carHighlightedFeatures7Feature
          carHighlightedFeatures8Feature
          name: carInfo
          carInfo2
          carName
          carInteriorColor
          carOdometer
          carPackageOptions1Attribute1
          carPackageOptions1Attribute10
          carPackageOptions1Attribute12
          carPackageOptions1Attribute11
          carPackageOptions1Attribute2
          carPackageOptions1Name
          carPackageOptions1Attribute3
          carPackageOptions1Price
          carPackageOptions2Attribute1
          carPackageOptions2Attribute10
          carPackageOptions2Attribute11
          carPackageOptions2Attribute12
          carPackageOptions2Attribute2
          carPackageOptions2Attribute3
          carPackageOptions2Name
          carPackageOptions2Price
          carPackageOptions3Attribute1
          carPackageOptions3Attribute10
          carPackageOptions3Attribute11
          carPackageOptions3Attribute12
          carPackageOptions3Attribute2
          carPackageOptions3Attribute3
          carPackageOptions3Name
          carPackageOptions3Price
          carPackageOptions4Attribute1
          carPackageOptions4Attribute10
          carPackageOptions4Attribute11
          carPackageOptions4Attribute12
          carPackageOptions4Attribute2
          carPackageOptions4Attribute3
          carPackageOptions4Name
          carPackageOptions4Price
          carPackageOptions5Attribute1
          carPackageOptions5Attribute10
          carPackageOptions5Attribute11
          carPackageOptions5Attribute12
          carPackageOptions5Attribute2
          carPackageOptions5Attribute3
          carPackageOptions5Name
          carPackageOptions5Price
          carPackageOptions6Attribute1
          carPackageOptions6Attribute2
          carPackageOptions6Attribute3
          carPackageOptions6Name
          carPackageOptions6Price
          price: carPrice
          carSpecial
          carSpecial2
          carStock
          carTransmission
          carUrl
          carVin
          description: dealership
          id: id
          cover: imageSource1
          createdAt: refreshTime
          requestedURLPath
          status: vehicleStatus
        }
      }
    }
  }
`
