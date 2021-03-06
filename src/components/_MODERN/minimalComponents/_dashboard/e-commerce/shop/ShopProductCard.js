//* Integrate
import React from 'react'
import PropTypes from 'prop-types'
import { paramCase } from 'change-case'
import { Link as RouterLink } from 'gatsby'
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

// routes
import { PATH_DASHBOARD } from '../../../../routes/paths'
// utils
import { fCurrency } from '../../../../utils/formatNumber'
//
import Label from '../../../Label'
import ColorPreview from '../../../ColorPreview'

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
}

export default function ShopProductCard(props) {
  // const { name, cover, price, colors, status, priceSale } = product
  console.log('😄 props', props)
  // console.log('😈', product)
  const { name, price, cover, status, id } = props.product
  console.log('😛 From ShopProductCard.js - product props: ', props.product)
  // const linkTo = `${PATH_DASHBOARD.eCommerce.root}/product/${paramCase(name)}`
  const linkTo = `/dashboard/cars/${id}`

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to={linkTo} color="inherit" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {/* {product.carName} */}
            {name}
          </Typography>
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {/* {priceSale && fCurrency(priceSale)} */}
              {price && fCurrency(price)}
            </Typography>
            &nbsp;
            {fCurrency(price)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}
console.log(
  '🚀 ~ file: ShopProductCard.js ~ line 98 ~ ShopProductCard ~ Card',
  Card
)
console.log(
  '🚀 ~ file: ShopProductCard.js ~ line 98 ~ ShopProductCard ~ Card',
  Card
)
console.log(
  '🚀 ~ file: ShopProductCard.js ~ line 98 ~ ShopProductCard ~ Card',
  Card
)
console.log(
  '🚀 ~ file: ShopProductCard.js ~ line 98 ~ ShopProductCard ~ Card',
  Card
)
console.log(
  '🚀 ~ file: ShopProductCard.js ~ line 98 ~ ShopProductCard ~ Card',
  Card
)
console.log(
  '🚀 ~ file: ShopProductCard.js ~ line 98 ~ ShopProductCard ~ Card',
  Card
)

// <Card>
// HERE
// <Box sx={{ pt: '100%', position: 'relative' }}>
//   {status && (
//     <Label
//       variant="filled"
//       color={(status === 'sale' && 'error') || 'info'}
//       sx={{
//         top: 16,
//         right: 16,
//         zIndex: 9,
//         position: 'absolute',
//         textTransform: 'uppercase',
//       }}
//     >
//       {status}
//     </Label>
//   )}
//   <ProductImgStyle alt={name} src={cover} />
// </Box>
// <Stack spacing={2} sx={{ p: 3 }}>
//   <Link to={linkTo} color="inherit" component={RouterLink}>
//     <Typography variant="subtitle2" noWrap>
//       {name}
//     </Typography>
//   </Link>

//   <Stack
//     direction="row"
//     alignItems="center"
//     justifyContent="space-between"
//   >
//     <ColorPreview colors={colors} />
//     <Typography variant="subtitle1">
//       <Typography
//         component="span"
//         variant="body1"
//         sx={{
//           color: 'text.disabled',
//           textDecoration: 'line-through',
//         }}
//       >
//         {priceSale && fCurrency(priceSale)}
//       </Typography>
//       &nbsp;
//       {fCurrency(price)}
//     </Typography>
//   </Stack>
// </Stack>
// </Card>
