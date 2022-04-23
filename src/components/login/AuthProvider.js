import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import configData from '../../config.json'

const AuthProvider = ({ children }) => (
  <Auth0Provider
    audience={configData.audience}
    clientId={configData.clientId}
    domain={configData.domain}
    redirectUri={window.location.origin}
    useRefreshTokens={false}
  >
    {children}
  </Auth0Provider>
)

export default AuthProvider
