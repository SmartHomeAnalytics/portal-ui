import { createTheme } from '@mui/material'

const TEXT_COLOR = '#3d014a'
const SECONDARY_TEXT_COLOR = '#383434'

const theme = createTheme({
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
