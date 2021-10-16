import { Router, Link, Link as GatsbyLink } from 'gatsby'
import { Button, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'
import Layout from '../components/ui/layout'
import SEO from '../components/ui/seo'
import HeroBlock from '../components/home/HeroBlock'
import PromotionalProducts from '../components/home/PromotionalProducts'
import FeaturedProducts from '../components/home/FeaturedProducts'
import MarketingButtons from '../components/home/MarketingButtons'
import CallToAction from '../components/home/CallToAction'

function IndexPage() {
  console.log('Gatsby Page!!', Link)
  const [activeLink, setActiveLink] = useState('')
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '')
  }, [])
  console.log('activeLink', activeLink)
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Button variant="contained" target="_blank">
        <GatsbyLink style={{ color: '#fff' }} to="/dashboard">
          Get Started
        </GatsbyLink>
      </Button> */}
      <CallToAction />
      {/* <Button variant="contained" target="_blank">
        <GatsbyLink style={{ color: '#fff' }} to="/dashboard">
          Get Started
        </GatsbyLink>
      </Button>
      <Grid
        item
        container
        // justifyContent={matchesMD ? 'center' : undefined}
        // classes={{ root: classes.buttonContainer }}
      >
        <Grid item>
          <Button
            component={GatsbyLink}
            to="/contact"
            variant="outlined"
            color="primary"
          >
            Contact Us
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={GatsbyLink}
            to="/dashboard/account"
            // classes={{ root: classes.account }}
          >
            Create Account
          </Button>
        </Grid>
      </Grid> */}
      {/* <HeroBlock /> */}
      {/* <PromotionalProducts /> */}
      {/* <FeaturedProducts /> */}
      {/* <MarketingButtons /> */}
    </Layout>
  )
}

export default IndexPage
