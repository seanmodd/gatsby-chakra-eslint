// old: Commented out all validate related functions

import { graphql, Link } from 'gatsby'
import React, { useState, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import { Box } from '@mui/system'
import SEO from '../components/ui/seo'
import Layout from '../components/ui/layout'

const useStyles = makeStyles(theme => ({
  newMainContainer: {
    marginTop: '15rem',
    // height: '45rem',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    marginBottom: '10rem',
    [theme.breakpoints.down('md')]: {
      // marginTop: '15rem',
      // height: '5rem',
    },
  },
  secondaryContainer: {
    marginTop: '15rem',
    // height: '45rem',
    textAlign: 'center',

    marginBottom: '10rem',
    [theme.breakpoints.down('md')]: {
      // marginTop: '15rem',
      // height: '5rem',
    },
  },
}))

const Page = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'))

  return (
    <Layout>
      <SEO
        title="Search"
        description="Find out why we're the best solution for your auto financing."
      />
      <Box className={classes.newMainContainer}>
        <Typography variant="h4">Financing Made Easy.</Typography>
      </Box>
      <Box className={classes.secondaryContainer}>
        <Typography variant="h1">Coming Soon...</Typography>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiVariant(
      filter: { qty: { eq: 1 }, product: { name: { eq: "Jeep" } } }
    ) {
      totalCount
      nodes {
        qty
        colorLabel
        description
        model
        car_vin
        car_drivetrain
        car_engine
        car_fuel_economy
        car_exterior_color
        car_info
        car_info2
        car_interior_color
        car_name
        car_price
        car_special
        car_stock
        car_transmission
        car_url
        color
        createdAt(fromNow: false)
        dealership
        id
        images {
          url
          localFile {
            absolutePath
          }
        }
        model_name
        product {
          category
          id
          name
        }
        strapiId
        style
        updatedAt(fromNow: false)
        vehicle_status
        year
      }
    }
  }
`
export default Page
