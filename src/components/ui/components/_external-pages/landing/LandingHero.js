import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import flashFill from '@iconify/icons-eva/flash-fill'
// next
// import NextLink from 'next/link'
import { Link as GatsbyLink } from 'gatsby'
// material
import { styled } from '@mui/material/styles'
import { Box, Link, Stack, Button, Container, Typography } from '@mui/material'
// routes
// import 'src/src/static/home/ic_figma.svg'
import ic_figma from '../../../static/home/ic_figma.svg'
import ic_material from '../../../static/home/ic_material.svg'
import overlay from '../../../static/overlay.svg'
import hero from '../../../static/home/hero.png'
import ic_ts from '../../../static/home/ic_ts.svg'
import ic_js from '../../../static/home/ic_js.svg'
import ic_sketch from '../../../static/home/ic_sketch.svg'
import ic_sketch_small from '../../../static/home/ic_sketch_small.svg'
import ic_react from '../../../static/home/ic_react.svg'
import { PATH_DASHBOARD } from '../../../routes/paths'
//
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
} from '../../animate'

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}))

const ContentStyle = styled(props => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'left',
    },
  })
)

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}))

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" src={overlay} variants={varFadeIn} />

        <HeroImgStyle alt="hero" src={hero} variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Start a <br />
                new project <br /> with
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ color: 'primary.main' }}
                >
                  &nbsp;Minimal
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>
                The starting point for your next project based on
                easy-to-customize Material-UI © helps you build apps faster and
                better.
              </Typography>
            </motion.div>

            <Stack
              component={motion.div}
              variants={varFadeInRight}
              direction="row"
              spacing={1}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <img
                alt="sketch icon"
                src={ic_sketch_small}
                width={20}
                height={20}
              />
              <Link
                underline="always"
                href="https://www.sketch.com/s/0fa4699d-a3ff-4cd5-a3a7-d851eb7e17f0"
                target="_blank"
                sx={{ color: 'common.white' }}
              >
                Preview in Sketch Cloud
              </Link>
            </Stack>

            <motion.div variants={varFadeInRight}>
              <GatsbyLink to={PATH_DASHBOARD.root}>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Icon icon={flashFill} width={20} height={20} />}
                >
                  Live Preview
                </Button>
              </GatsbyLink>
            </motion.div>

            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <motion.img variants={varFadeInRight} src={ic_sketch} />
              <motion.img variants={varFadeInUp} src={ic_figma} />

              <motion.img variants={varFadeInRight} src={ic_material} />
              <motion.img variants={varFadeInRight} src={ic_react} />
              <motion.img variants={varFadeInRight} src={ic_js} />
              <motion.img variants={varFadeInRight} src={ic_ts} />
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  )
}
