//! This one is where the menu link has been set to black and white at the appropriate time.
//! utilizes useRouter from Next to get the current pathname
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill'
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill'
// next
// import NextLink from 'next/link'
import { Link as GatsbyLink } from 'gatsby'
// import { useRouter } from 'next/router'
// material
import { styled } from '@mui/material/styles'
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListItem,
  ListSubheader,
  CardActionArea,
} from '@mui/material'
import illustration_dashboard from '../../static/illustrations/illustration_dashboard.png'

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}))

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}))

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['subheader', 'item']),
}

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  )
}

MenuDesktopItem.propTypes = {
  item: PropTypes.object,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
}

function MenuDesktopItem({
  item,
  pathname,
  isHome,
  isOpen,
  isOffset,
  onOpen,
  onClose,
}) {
  const { title, path, children } = item

  //! New for gatsby configuration
  const [activePathname, setActivePathname] = useState('')
  useEffect(() => {
    setActivePathname(window && window.location ? window.location.pathname : '')
  }, [])
  console.log('Also from MenuDesktop.js - this is the activePathname: ', activePathname)

  // const isActive = pathname === path
  const isActive = activePathname === path

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isHome && { color: 'common.white' }),
            ...(isOffset && { color: 'text.primary' }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Box
            component={Icon}
            icon={isOpen ? arrowIosUpwardFill : arrowIosDownwardFill}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 80, left: 0 }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={onClose}
          PaperProps={{
            sx: {
              px: 3,
              pt: 5,
              pb: 3,
              right: 16,
              margin: 'auto',
              maxWidth: 1280,
              borderRadius: 2,
              boxShadow: theme => theme.customShadows.z24,
            },
          }}
        >
          <Grid container spacing={3}>
            {children.map(list => {
              const { subheader, items } = list

              return (
                <Grid
                  key={subheader}
                  item
                  xs={12}
                  md={subheader === 'Dashboard' ? 6 : 2}
                >
                  <List disablePadding>
                    <ListSubheader
                      disableSticky
                      disableGutters
                      sx={{
                        display: 'flex',
                        lineHeight: 'unset',
                        alignItems: 'center',
                        color: 'text.primary',
                        typography: 'overline',
                      }}
                    >
                      <IconBullet type="subheader" /> {subheader}
                    </ListSubheader>

                    {items.map(item => (
                      <GatsbyLink key={item.title} to={item.path}>
                        <ListItemStyle
                          sx={{
                            ...(item.path === activePathname && {
                              typography: 'subtitle2',
                              color: 'text.primary',
                            }),
                          }}
                        >
                          {item.title === 'Dashboard' ? (
                            <CardActionArea
                              sx={{
                                py: 5,
                                px: 10,
                                borderRadius: 2,
                                color: 'primary.main',
                                bgcolor: 'background.neutral',
                              }}
                            >
                              <Box
                                component={motion.img}
                                whileTap="tap"
                                whileHover="hover"
                                variants={{
                                  hover: { scale: 1.02 },
                                  tap: { scale: 0.98 },
                                }}
                                src={illustration_dashboard}
                              />
                            </CardActionArea>
                          ) : (
                            <>
                              <IconBullet />
                              {item.title}
                            </>
                          )}
                        </ListItemStyle>
                      </GatsbyLink>
                    ))}
                  </List>
                </Grid>
              )
            })}
          </Grid>
        </Popover>
      </>
    )
  }

  return (
    <GatsbyLink key={title} to={path}>
      <LinkStyle
        sx={{
          ...(isHome && { color: 'common.primary' }),
          ...(isOffset && { color: 'text.primary' }),
          ...(isActive && { color: 'primary.main' }),
        }}
      >
        {title}
      </LinkStyle>
    </GatsbyLink>
  )
}

MenuDesktop.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array,
}

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  // const { pathname } = useRouter()
  //! New for gatsby configuration
  const [activePathname, setActivePathname] = useState('')
  useEffect(() => {
    setActivePathname(window && window.location ? window.location.pathname : '')
  }, [])
  console.log(
    'From MenuDesktop.js - this is the activePathname: ',
    activePathname
  )

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      handleClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePathname])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Stack direction="row">
      {navConfig.map(link => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          pathname={activePathname}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  )
}
