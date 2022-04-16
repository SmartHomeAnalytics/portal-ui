import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const AuthProvider = ({ children }) => (
  <Auth0Provider
    clientId={clientId}
    domain={domain}
    redirectUri={window.location.origin}
  >
    {children}
  </Auth0Provider>
)

export default AuthProvider
