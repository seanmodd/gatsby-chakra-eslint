// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`
}

const ROOTS_DASHBOARD = ''

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageOne: path(ROOTS_DASHBOARD, '/dashboard/one'),
    pageTwo: path(ROOTS_DASHBOARD, '/dashboard/two'),
    pageThree: path(ROOTS_DASHBOARD, '/dashboard/three'),
    pageFour: path(ROOTS_DASHBOARD, '/account'),
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/dashboard/app'),
    pageFour: path(ROOTS_DASHBOARD, '/dashboard/app/four'),
    pageFive: path(ROOTS_DASHBOARD, '/dashboard/app/five'),
    pageSix: path(ROOTS_DASHBOARD, '/dashboard/app/six'),
  },
}
