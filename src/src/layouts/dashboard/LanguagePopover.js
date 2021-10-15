import React, { useRef, useState } from 'react'
// material
import { alpha } from '@mui/material/styles'
import { Box, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
// components
import MenuPopover from '../../components/MenuPopover'
import { MIconButton } from '../../components/@material-extend'
import ic_flag_en from '../../static/icons/ic_flag_en.svg'
import ic_flag_de from '../../static/icons/ic_flag_de.svg'
import ic_flag_fr from '../../static/icons/ic_flag_fr.svg'
// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: ic_flag_en,
  },
  {
    value: 'de',
    label: 'German',
    icon: ic_flag_de,
  },
  {
    value: 'fr',
    label: 'French',
    icon: ic_flag_fr,
  },
]

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: theme =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img src={LANGS[0].icon} alt={LANGS[0].label} />
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ py: 1 }}>
          {LANGS.map(option => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={handleClose}
              sx={{ py: 1, px: 2.5 }}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </MenuPopover>
    </>
  )
}
