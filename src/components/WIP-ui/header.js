//* Potential Problem: Utilizing typeof window !== 'undefined' below...

import React, { useState, useContext, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import Stack from '@mui/material/Stack'
import Autocomplete from '@material-ui/lab/Autocomplete'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SearchIcon from '@material-ui/icons/Search'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Badge from '@mui/material/Badge'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { fade, makeStyles } from '@material-ui/core/styles'
import { Link, navigate } from 'gatsby'

import { CartContext } from '../../contexts'
import { useIsClient } from '../../hooks'

import search from '../../images/search.svg'
import cartIcon from '../../images/cart.svg'
import account from '../../images/account-header.svg'
import menu from '../../images/menu.svg'

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: '#fff',
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
  logoText: {
    color: theme.palette.common.offBlack,
    fontWeight: 'normal',
    textDecoration: 'none',
    fontStyle: 'normal',
    // fontSize: '0.5rem',
  },
  logoContainer: {
    [theme.breakpoints.down('md')]: {
      marginRight: 'auto',
    },
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 500,
    fontSize: '0.875rem',
  },
  tabs: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  searchContainer: {
    display: 'flex',
    position: 'fixed',
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // paddingLeft: '20px',
    // paddingRight: '20px',
    top: '120px',
    zIndex: '999',
    marginBottom: '5px',
    // backgroundColor: '#000000',
    // color: '#000000',
    fontSize: '10px',
  },
  searchIcon: {
    // alignSelf: 'flex-end',
    // marginBottom: '5px',
    // backgroundColor: '#000000',
    color: theme.palette.common.offBlack,
  },
  searchInput: {
    // width: '200px',
    // height: '400px',
    // backgroundColor: '#000000',
    fontSize: '10px',
    // margin: '5px',
  },
  icon: {
    height: '3rem',
    width: '3rem',
    [theme.breakpoints.down('xs')]: {
      height: '2rem',
      width: '2rem',
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: '250px',
    paddingTop: '25px',
  },
  appBar: {
    // backgroundColor: theme.palette.secondary.contrastText,
    // color: theme.palette.secondary.contrastText,
    height: '150px',
    elevate: 'none',
    boxShadow: '0 3px 5px 2px #9169ff4c',
    justifyContent: 'space-evenly',
    // marginBottom: '500px',
    // marginTop: '-100px',
  },
  listItemText: {
    color: '#fff',
    textAlign: 'center',
  },
  badge: {
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75rem',
      height: '1.1rem',
      width: '1.1rem',
      minWidth: 0,
    },
  },
}))

const options = ['Option 1', 'Option 2']

export default function Header({ categories }) {
  const classes = useStyles()

  const { cart } = useContext(CartContext)
  const { isClient, key } = useIsClient()

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const iOS =
    typeof window !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const activeIndex = () => {
    const pathname =
      typeof window !== 'undefined'
        ? window.location.pathname.split('/')[1]
        : null

    const found = routes.indexOf(
      routes.filter(
        ({ node: { name, link } }) =>
          (link || `/${name.toLowerCase()}`) === `/${pathname}`
      )[0]
    )

    return found === -1 ? false : found
  }

  const routes = [
    ...categories,
    { node: { name: 'Contact Us', strapiId: 'contact', link: '/contact' } },
  ]

  const tabs = (
    <Tabs
      value={!isClient ? 0 : activeIndex()}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map(route => (
        <Tab
          component={Link}
          to={route.node.link || `/${route.node.name.toLowerCase()}`}
          classes={{ root: classes.tab }}
          label={route.node.name}
          key={route.node.strapiId}
        />
      ))}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      anchor="left"
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {[
          ...routes,
          { node: { name: 'Account', strapiId: 'account', link: '/account' } },
        ].map((route, i) => (
          <ListItem
            selected={!isClient ? false : activeIndex() === i}
            component={Link}
            to={route.node.link || `/${route.node.name.toLowerCase()}`}
            divider
            button
            key={route.node.strapiId}
          >
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={route.node.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  const actions = [
    { icon: cartIcon, alt: 'cart', visible: true, link: '/cart' },
    { icon: account, alt: 'account', visible: !matchesMD, link: '/account' },
  ]
  const leftActions = [
    {
      icon: menu,
      alt: 'menu',
      visible: !matchesMD,
      onClick: () => setDrawerOpen(true),
    },
  ]

  const searchBar = (
    <div className={classes.searchContainer}>
      <Autocomplete
        id="custom-input-demo"
        options={options}
        // className={second.root}
        // classes={second: }
        style={{ color: '#5100ff' }}
        renderInput={params => (
          <div ref={params.InputProps.ref}>
            <input
              style={{ width: 200, color: '#5100ff' }}
              placeholder="Search our Vehicle Database"
              type="text"
              {...params.inputProps}
            />
          </div>
        )}
      />
    </div>
  )

  return (
    <AppBar
      className={classes.appBar}
      color="transparent"
      elevation={0}
      position="fixed"
    >
      <Toolbar disableGutters>
        <Button
          component={Link}
          to="/"
          classes={{ root: classes.logoContainer }}
        >
          <Typography variant="h1" classes={{ root: classes.logo }}>
            <span className={classes.logoText}>CAR</span> X
          </Typography>
        </Button>
        <div className={classes.grow} />
        <Stack justifyContent="center" alignItems="center">
          {/* {search} */}

          {matchesMD ? drawer : tabs}
          {searchBar}
        </Stack>
        <div className={classes.grow} />
        {drawer}

        {leftActions.map(action => {
          const image = (
            <img className={classes.icon} src={action.icon} alt={action.alt} />
          )

          return (
            <IconButton
              onClick={action.onClick}
              key={action.alt}
              component={action.onClick ? undefined : Link}
              to={action.onClick ? undefined : action.link}
            >
              {action.alt === 'cart' ? (
                <Badge
                  key={key}
                  overlap="circular"
                  badgeContent={cart.length}
                  classes={{ badge: classes.badge }}
                >
                  {image}
                </Badge>
              ) : (
                image
              )}
            </IconButton>
          )
        })}

        {actions.map(action => {
          const image = (
            <img className={classes.icon} src={action.icon} alt={action.alt} />
          )

          return (
            <IconButton
              onClick={action.onClick}
              key={action.alt}
              component={action.onClick ? undefined : Link}
              to={action.onClick ? undefined : action.link}
            >
              {action.alt === 'cart' ? (
                <Badge
                  key={key}
                  overlap="circular"
                  badgeContent={cart.length}
                  classes={{ badge: classes.badge }}
                >
                  {image}
                </Badge>
              ) : (
                image
              )}
            </IconButton>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}
