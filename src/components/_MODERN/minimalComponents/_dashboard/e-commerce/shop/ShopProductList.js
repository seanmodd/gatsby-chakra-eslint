import React from 'react'
import PropTypes from 'prop-types'
// material
import { Skeleton, Grid } from '@mui/material'
import { products as myproducts } from '../../../../_apis_/products'
import ShopProductCard from './ShopProductCard'

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    {[...Array(12)].map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{ paddingTop: '115%', borderRadius: 2 }}
        />
      </Grid>
    ))}
  </>
)

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  isLoad: PropTypes.bool,
}

export default function ProductList({ isLoad, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {myproducts.map(product => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <h1>Idk</h1>
          <ShopProductCard product={product} />
        </Grid>
      ))}

      {/* {isLoad && SkeletonLoad} */}
    </Grid>
  )
}