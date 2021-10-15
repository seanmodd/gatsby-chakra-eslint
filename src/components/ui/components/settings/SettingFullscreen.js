//! must check this, as I have commented out the document requestFullscreen and setFullscreen(true)
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import roundFullscreen from '@iconify/icons-ic/round-fullscreen'
import roundFullscreenExit from '@iconify/icons-ic/round-fullscreen-exit'
// material
import { alpha } from '@mui/material/styles'
import { Button } from '@mui/material'

// ----------------------------------------------------------------------

export default function SettingFullscreen() {
  const [fullscreen, setFullscreen] = useState(false)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // document.documentElement.requestFullscreen()
      // setFullscreen(true)
      console.log('setFullscreen should be true')
    } else if (document.exitFullscreen) {
      // document.exitFullscreen()
      // setFullscreen(false)
      console.log('setFullscreen should be false')
    }
  }

  return (
    <Button
      fullWidth
      size="large"
      variant="outlined"
      color={fullscreen ? 'primary' : 'inherit'}
      startIcon={
        <Icon icon={fullscreen ? roundFullscreenExit : roundFullscreen} />
      }
      onClick={toggleFullScreen}
      sx={{
        fontSize: 14,
        ...(fullscreen && {
          bgcolor: theme =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
        }),
      }}
    >
      {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
    </Button>
  )
}
