//! menu for dashboard
import React from 'react'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'
// components
import SvgIconStyle from '../../components/SvgIconStyle'

// ----------------------------------------------------------------------

const getIcon = name => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: '100%', height: '100%' }}
  />
)

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
}

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      // {
      //   title: 'One',
      //   path: PATH_DASHBOARD.general.pageOne,
      //   icon: ICONS.dashboard,
      // },
      // {
      //   title: 'Two',
      //   path: PATH_DASHBOARD.general.pageTwo,
      //   icon: ICONS.ecommerce,
      // },
      // {
      //   title: 'Three',
      //   path: PATH_DASHBOARD.general.pageThree,
      //   icon: ICONS.analytics,
      // },
      {
        title: 'Account',
        path: PATH_DASHBOARD.general.pageFour,
        icon: ICONS.analytics,
      },
      {
        title: 'Cart',
        path: PATH_DASHBOARD.general.pageFive,
        icon: ICONS.analytics,
      },
      {
        title: 'Contact',
        path: PATH_DASHBOARD.general.pageSix,
        icon: ICONS.analytics,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Inventory',
    items: [
      {
        title: 'user',
        path: PATH_DASHBOARD.app.root,
        icon: ICONS.user,
        children: [
          // { title: 'Four', path: PATH_DASHBOARD.app.pageFour },
          // { title: 'Five', path: PATH_DASHBOARD.app.pageFive },
          // { title: 'Six', path: PATH_DASHBOARD.app.pageSix },
          { title: 'New', path: PATH_DASHBOARD.app.pageSeven },
          { title: 'Pre-Owned', path: PATH_DASHBOARD.app.pageEight },
        ],
      },
    ],
  },
]

export default sidebarConfig
