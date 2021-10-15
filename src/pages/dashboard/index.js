import React from 'react'
import { PATH_DASHBOARD } from '../../src/routes/paths'

// ----------------------------------------------------------------------

function Page() {
  return null
}

export default Page

export const getServerSideProps = () => ({
  redirect: {
    destination: PATH_DASHBOARD.general.pageOne,
    permanent: false,
  },
})
