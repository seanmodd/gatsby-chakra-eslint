//! This is the popover for the dashboard
import React, { useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import homeFill from '@iconify/icons-eva/home-fill'
import personFill from '@iconify/icons-eva/person-fill'
import settings2Fill from '@iconify/icons-eva/settings-2-fill'
// next
// import NextLink from 'next/link'
import { Link as GatsbyLink } from 'gatsby'
// material
import { alpha } from '@mui/material/styles'
import {
  Box,
  Avatar,
  Button,
  Divider,
  MenuItem,
  Typography,
} from '@mui/material'
import avatar_default from '../../static/mock-images/avatars/avatar_default.jpg'
// components
import MenuPopover from '../../components/MenuPopover'
import { MIconButton } from '../../components/@material-extend'

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  { label: 'Home', icon: homeFill, linkTo: '/dashboard/home' },
  { label: 'Profile', icon: personFill, linkTo: '/dashboard/account' },
  { label: 'Settings', icon: settings2Fill, linkTo: '/dashboard/cart' },
]

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null)

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: theme => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar alt="My Avatar" src={avatar_default} />
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            Guest User
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            email
          </Typography> */}
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map(option => (
          <GatsbyLink
            // style={{ color: 'black' }}
            style={{ textDecoration: 'none' }}
            key={option.label}
            to={option.linkTo}
          >
            <MenuItem
              onClick={handleClose}
              // sx={{ typography: 'body2', py: 1, px: 2.5 }}
              sx={{
                // color: theme => alpha(theme.primary.grey[900], 0.72),
                color: theme => theme.palette.primary.main,
                typography: 'body2',
                py: 1,
                px: 2.5,
              }}
            >
              <Box
                component={Icon}
                icon={option.icon}
                sx={{
                  mr: 2,
                  width: 24,
                  height: 24,
                }}
              />

              {option.label}
            </MenuItem>
          </GatsbyLink>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined">
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  )
}
