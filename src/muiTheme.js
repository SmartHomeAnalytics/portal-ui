import { createTheme } from '@mui/material'

const TEXT_COLOR = '#3d014a'
const SECONDARY_TEXT_COLOR = '#2d3030'

// const ACCENT_COLOR = '#9C27B0'
const PRIMARY_COLOR = '#0d47a1'
// const PRIMARY_LIGHT_COLOR = '#BADCFF'
const PRIMARY_LIGHT_COLOR = '#6ee9ff'
// const SECONDARY_COLOR = '#03fcf0'
// const WHITE_COLOR = '#FFFFFF'

const theme = createTheme({
  colors: {
    darkBackground: PRIMARY_COLOR,
    white: '#ffffff',
    selectedItem: SECONDARY_TEXT_COLOR,
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_TEXT_COLOR,
    },
    primaryLight: {
      main: PRIMARY_LIGHT_COLOR,
    },
  },
  constants: {
    welcomeCardShadow: '0 28px 10px 10px #999999',
    toolbarHeight: 64,
    leftMenuExpandedWidth: 290,
  },
  transitions: {
    duration: {
      enteringScreen: 200,
      leavingScreen: 150,
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
