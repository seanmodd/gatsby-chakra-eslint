/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// import RootWrapper from './src/components/ui/root-wrapper'

// export const wrapRootElement =
//   typeof window !== 'undefined' && window ? RootWrapper : null
import RootWrapper from './src/components/ui/root-wrapper'
import 'firebase/auth'

export const wrapRootElement = RootWrapper