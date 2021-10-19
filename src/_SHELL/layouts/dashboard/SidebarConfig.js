//! menu for dashboard
import React from 'react'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'
// components
import SvgIconStyle from '../../components/SvgIconStyle'
import ic_ecommerce from '../../static/icons/navbar/ic_ecommerce.svg'
import ic_user from '../../static/icons/navbar/ic_user.svg'
import ic_analytics from '../../static/icons/navbar/ic_analytics.svg'
import ic_dashboard from '../../static/icons/navbar/ic_dashboard.svg'
import ic_mail from '../../static/icons/navbar/ic_mail.svg'
import danger14 from '../../static/icons/danger-14.svg'
// ----------------------------------------------------------------------

const getIcon = name => (
  <SvgIconStyle src={name} sx={{ width: '100%', height: '100%' }} />
)

const ICONS = {
  user: getIcon(ic_user),
  ecommerce: getIcon(ic_ecommerce),
  analytics: getIcon(ic_analytics),
  dashboard: getIcon(ic_dashboard),
  mail: getIcon(ic_mail),
  danger: getIcon(danger14),
}

const sidebarConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Profile',
    // items: [
    //   {
    //     title: 'Dashboard Home',
    //     path: PATH_DASHBOARD.general.pageHome,
    //     icon: ICONS.dashboard,
    //   },
    // ],
    items: [
      {
        title: 'Dashboard',
        path: PATH_DASHBOARD.general.pageHome,
        icon: ICONS.dashboard,
      },
      {
        title: 'user',
        path: PATH_DASHBOARD.app.root,
        icon: ICONS.user,
        children: [
          { title: 'Account', path: PATH_DASHBOARD.app.pageAccount },
          { title: 'Cart', path: PATH_DASHBOARD.app.pageCart },
          { title: 'Contact', path: PATH_DASHBOARD.app.pageContact },
        ],
      },
    ],
  },

  // GENERAL
  // ----------------------------------------------------------------------
  // {
  // items: [
  //   {
  //     title: 'Dashboard Home',
  //     path: PATH_DASHBOARD.general.pageHome,
  //     icon: ICONS.ecommerce,
  //   },
  // ],

  //   items: [
  //     {
  //       title: 'Dashboard Home',
  //       path: PATH_DASHBOARD.general.pageHome,
  //       icon: ICONS.dashboard,
  //     },
  //   ],
  // },
  {
    // items: [
    //   {
    //     title: 'Dashboard Home',
    //     path: PATH_DASHBOARD.general.pageHome,
    //     icon: ICONS.ecommerce,
    //   },
    // ],

    subheader: 'Old Pages',
    items: [
      {
        title: 'New',
        path: PATH_DASHBOARD.general.pageNew,
        icon: ICONS.ecommerce,
      },
      {
        title: 'Pre-Owned',
        path: PATH_DASHBOARD.general.pagePreOwned,
        icon: ICONS.ecommerce,
      },
    ],
  },
  {
    // items: [
    //   {
    //     title: 'Dashboard Home',
    //     path: PATH_DASHBOARD.general.pageHome,
    //     icon: ICONS.ecommerce,
    //   },
    // ],

    subheader: 'More',
    items: [
      {
        title: 'Shop',
        path: PATH_DASHBOARD.general.pageShop,
        icon: ICONS.ecommerce,
      },

      {
        title: 'Inbox',
        path: PATH_DASHBOARD.general.pageInbox,
        icon: ICONS.danger,
      },
    ],
  },
]

export default sidebarConfig
