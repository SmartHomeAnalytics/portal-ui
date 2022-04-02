import React from 'react'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom'
import './index.css'
import muiTheme from './muiTheme'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
