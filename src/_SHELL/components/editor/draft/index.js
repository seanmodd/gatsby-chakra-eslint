import React from 'react'
import PropTypes from 'prop-types'
// next
// import dynamic from 'next/dynamic'
//
import { toolbarFull, toolbarSimple } from './DraftEditorToolbar'
import DraftEditorStyle from './DraftEditorStyle'

// const Editor = dynamic(
//   () => import('react-draft-wysiwyg').then(mod => mod.Editor),
//   { ssr: false }
// )
const { Editor } = require('react-draft-wysiwyg')
// ----------------------------------------------------------------------

DraftEditor.propTypes = {
  simple: PropTypes.bool,
  sx: PropTypes.object,
}

export default function DraftEditor({ simple, sx, ...other }) {
  return (
    <DraftEditorStyle sx={sx}>
      <Editor
        toolbar={simple ? toolbarSimple : toolbarFull}
        placeholder="Write something awesome..."
        {...other}
      />
    </DraftEditorStyle>
  )
}
