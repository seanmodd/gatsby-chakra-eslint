// eslint-disable-next-line
//*? This sends the consolidated Context Setup to "__index.js" */

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
