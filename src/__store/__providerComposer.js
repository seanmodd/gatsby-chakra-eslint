// eslint-disable-next-line
//*? This is for setting up all the consolidated Context within "__index.js" */

import React from 'react'

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  )
}

export { ProviderComposer }
