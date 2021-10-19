//! menu for dashboard
// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`
}

const ROOTS_DASHBOARD = ''

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageHome: path(ROOTS_DASHBOARD, '/dashboard/home'),
    pageTwo: path(ROOTS_DASHBOARD, '/dashboard/two'),
    pageThree: path(ROOTS_DASHBOARD, '/dashboard/three'),
    pageFour: path(ROOTS_DASHBOARD, '/dashboard/account'),
    pageFive: path(ROOTS_DASHBOARD, '/dashboard/cart'),
    pageSix: path(ROOTS_DASHBOARD, '/dashboard/contact'),
    //! Below is where the real links are:
    pageNew: path(ROOTS_DASHBOARD, '/dashboard/new'),
    pagePreOwned: path(ROOTS_DASHBOARD, '/dashboard/pre-owned'),
    //! Below is where the real links are:
    pageShop: path(ROOTS_DASHBOARD, '/dashboard/shop'),
    pageInbox: path(ROOTS_DASHBOARD, '/dashboard/inbox'),
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/dashboard/app'),
    pageFour: path(ROOTS_DASHBOARD, '/dashboard/app/four'),
    pageFive: path(ROOTS_DASHBOARD, '/dashboard/app/five'),
    pageSix: path(ROOTS_DASHBOARD, '/dashboard/app/six'),
    pageSeven: path(ROOTS_DASHBOARD, '/dashboard/new'),
    pageEight: path(ROOTS_DASHBOARD, '/dashboard/pre-owned'),
    //! Below is where the real links are:
    pageAccount: path(ROOTS_DASHBOARD, '/dashboard/account'),
    pageCart: path(ROOTS_DASHBOARD, '/dashboard/cart'),
    pageContact: path(ROOTS_DASHBOARD, '/dashboard/contact'),
  },
}
