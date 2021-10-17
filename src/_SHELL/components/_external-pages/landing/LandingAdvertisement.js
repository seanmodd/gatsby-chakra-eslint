import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// material
import { styled } from '@mui/material/styles'
import { Button, Box, Container, Typography } from '@mui/material'
import rocket from '../../../static/home/keys.png'
//
import { varFadeInDown, varFadeInUp, MotionInView } from '../../animate'

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  overflow: 'hidden',
  paddingBottom: theme.spacing(5),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 10,
    marginBottom: '100px',
    height: '375px',
    alignItems: 'center',
  },
}))

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {
  return (
    <Container maxWidth="lg">
      <ContentStyle>
        <MotionInView
          variants={varFadeInUp}
          sx={{
            mb: { xs: 0, md: 0 },
          }}
        >
          <motion.div
            animate={{ y: [-5, 0, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Box
              component="img"
              alt="rocket"
              src={rocket}
              sx={{ maxWidth: 600, width: 1 }}
            />
          </motion.div>
        </MotionInView>

        <Box
          sx={{
            pl: { md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <MotionInView
            variants={varFadeInDown}
            sx={{ color: 'common.white', mb: 5 }}
          >
            <Typography variant="h2">
              Get started with
              <br /> minimal kit today
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Button
              size="large"
              variant="contained"
              target="_blank"
              href="https://material-ui.com/store/items/minimal-dashboard/"
              sx={{
                whiteSpace: 'nowrap',
                boxShadow: theme => theme.customShadows.z8,
                color: theme =>
                  theme.palette.getContrastText(theme.palette.common.white),
                bgcolor: 'common.white',
                '&:hover': { bgcolor: 'grey.300' },
              }}
            >
              Purchase Now
            </Button>
          </MotionInView>
        </Box>
      </ContentStyle>
    </Container>
  )
}
