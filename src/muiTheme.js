import { createTheme } from '@mui/material'

const TEXT_COLOR = '#3d014a'
const SECONDARY_TEXT_COLOR = '#383434'

const PRIMARY_COLOR = '#BADCFF'
const SECONDARY_COLOR = '#9C27B0'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
    htmlFontSize: 10,
    fontWeightBold: 500,
    h1: {
      fontStyle: 'normal',
      color: TEXT_COLOR,
      lineHeight: '52px',
      fontWeight: '700',
      fontSize: 44,
    },
    h3: {
      fontStyle: 'normal',
      color: TEXT_COLOR,
      fontWeight: '500',
      lineHeight: '24px',
      fontStretch: '100%',
      fontSize: 20,
    },
    body1: {
      fontSize: '1.4rem',
      color: SECONDARY_TEXT_COLOR,
    },
    body2: {
      lineHeight: 1.5,
      color: SECONDARY_TEXT_COLOR,
      fontSize: '1.6rem',
    },
  },
})

export default theme
