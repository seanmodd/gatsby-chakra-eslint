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
import danger14 from '../../static/icons/_danger-14.svg'
import user8 from '../../static/icons/_user-8.svg'
import user28 from '../../static/icons/_user-28.svg'
import smiley8 from '../../static/icons/_smiley-8.svg'
import car4 from '../../static/icons/_car-4.svg'
import noun_newcar from '../../static/icons/noun_new-car.svg'
import noun_cleancar from '../../static/icons/noun_cleancar.svg'
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
  user8: getIcon(user8),
  user28: getIcon(user28),
  smiley8: getIcon(smiley8),
  car4: getIcon(car4),
  noun_newcar: getIcon(noun_newcar),
  noun_cleancar: getIcon(noun_cleancar),
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
        icon: ICONS.car4,
      },
      {
        title: 'Login',
        path: PATH_DASHBOARD.general.pageLogin,
        icon: ICONS.smiley8,
      },

      {
        title: 'Register',
        path: PATH_DASHBOARD.general.pageRegister,
        icon: ICONS.user8,
      },
      {
        title: 'Reset',
        path: PATH_DASHBOARD.general.pageReset,
        icon: ICONS.user28,
      },

      {
        title: 'Verify',
        path: PATH_DASHBOARD.general.pageVerify,
        icon: ICONS.noun_newcar,
      },
      {
        title: 'Verify',
        path: PATH_DASHBOARD.general.pageInbox,
        icon: ICONS.noun_cleancar,
      },

      {
        title: 'Inbox',
        path: PATH_DASHBOARD.general.pageInbox,
        icon: ICONS.danger,
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
]

export default sidebarConfig
