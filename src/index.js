import React from 'react'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import { store } from './store'
import muiTheme from './muiTheme'
import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById('root'),
)
