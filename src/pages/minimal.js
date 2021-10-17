import React, { useState, useEffect } from 'react'
// layouts
import { styled } from '@mui/material/styles'
import MainLayout from '../_SHELL/layouts/main'
// material
// components
import Page from '../_SHELL/components/Page'
import {
  LandingHero,
  LandingMinimal,
  LandingDarkMode,
  LandingThemeColor,
  LandingPricingPlans,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements,
} from '../_SHELL/components/_external-pages/landing'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
})

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      {/* <MainLayout> */}
      {/* <RootStyle
        title="The starting point for your next project | Minimal-UI"
        id="move_top"
      > */}
      {/* <LandingHero /> */}
      <ContentStyle>
        <LandingMinimal />
        <LandingHugePackElements />
        <LandingDarkMode />
        <LandingThemeColor />
        <LandingCleanInterfaces />
        <LandingPricingPlans />
        <LandingAdvertisement />
      </ContentStyle>
      {/* </RootStyle> */}

      {/* </MainLayout> */}
    </>
  )
}
