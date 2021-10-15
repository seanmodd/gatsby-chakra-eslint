//! menu for desktop
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import homeFill from '@iconify/icons-eva/home-fill'
import fileFill from '@iconify/icons-eva/file-fill'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
}

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
  {
    title: 'Account',
    path: '/dashboard/account',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
  {
    title: 'New',
    path: '/dashboard/new',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
  {
    title: 'Pre-Owned',
    path: '/dashboard/pre-owned',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
  {
    title: 'Cart',
    path: '/dashboard/cart',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
  {
    title: 'Contact',
    path: '/dashboard/contact',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
]

export default menuConfig
