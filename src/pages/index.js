import { Router, Link } from 'gatsby'
import { Button } from 'react-bootstrap'
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

      <CallToAction />
      {/* <HeroBlock /> */}
      {/* <PromotionalProducts /> */}
      {/* <FeaturedProducts /> */}
      {/* <MarketingButtons /> */}
    </Layout>
  )
}

export default IndexPage
