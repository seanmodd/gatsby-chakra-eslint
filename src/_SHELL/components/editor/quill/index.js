//! must check how it utilizes dynamic from 'next/dynamic'
import React from 'react'
import PropTypes from 'prop-types'
// next
// import dynamic from 'next/dynamic'
// material
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
//

import EditorToolbar, { formats } from './QuillEditorToolbar'

const ReactQuill =
  typeof window === 'object' ? require('react-quill') : () => false
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
// const ReactQuill = (() => import('react-quill'), { ssr: false })
// const ReactQuill = require('react-quill')
// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.grey[500_32]}`,
  '& .ql-container.ql-snow': {
    borderColor: 'transparent',
    ...theme.typography.body1,
    fontFamily: theme.typography.fontFamily,
  },
  '& .ql-editor': {
    minHeight: 200,
    '&.ql-blank::before': {
      fontStyle: 'normal',
      color: theme.palette.text.disabled,
    },
    '& pre.ql-syntax': {
      ...theme.typography.body2,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[900],
    },
  },
}))

// ----------------------------------------------------------------------

QuillEditor.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  simple: PropTypes.bool,
  sx: PropTypes.object,
}

export default function QuillEditor({
  id = 'minimal-quill',
  error,
  value,
  onChange,
  simple = false,
  sx,
  ...other
}) {
  const modules = {
    syntax: false,
    toolbar: {
      container: `#${id}`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    clipboard: {
      matchVisual: false,
    },
  }

  return (
    <RootStyle
      sx={{
        ...(error && {
          border: theme => `solid 1px ${theme.palette.error.main}`,
        }),
        ...sx,
      }}
    >
      <EditorToolbar id={id} isSimple={simple} />
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write something awesome..."
        {...other}
      />
    </RootStyle>
  )
}
