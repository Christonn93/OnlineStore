import { name, version } from '../../package.json';

export const authConfig = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN as string,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID as string,
  audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
  redirectUri: import.meta.env.VITE_AUTH0_REDIRECT_URI as string,
  scope: import.meta.env.VITE_AUTH0_SCOPE as string,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI as string,
  },
  // Additional properties based on Auth0ProviderOptions
  auth0Client: {
    name: name,
    version: version,
    env: {
      NODE_ENV: import.meta.env.MODE, // to track environment (e.g., 'development', 'production')
    },
  },
  authorizeTimeoutInSeconds: 60, // Timeout for authorization process
  cacheLocation: 'localstorage' as const, // Cache location can be 'localstorage' or 'sessionstorage'
  cookieDomain: import.meta.env.VITE_AUTH0_COOKIE_DOMAIN as string, // Set the domain for cookies
  httpTimeoutInSeconds: 30, // Timeout for HTTP requests to Auth0
  issuer: import.meta.env.VITE_AUTH0_ISSUER_BASE_URL as string, // Optional, issuer URL
  leeway: 60, // Time in seconds to account for clock skew during token validation
  legacySameSiteCookie: true, // Option for legacy SameSite cookie behavior
  onRedirectCallback: () => {
    // Optional callback after redirect
    window.history.replaceState({}, document.title, window.location.pathname);
  },
  sessionCheckExpiryDays: 7, // Number of days before session expiry
  skipRedirectCallback: false, // Skip redirect callback if needed
  useCookiesForTransactions: true, // Use cookies for transactions
  useFormData: true, // Use FormData for submission (for some environments)
  useRefreshTokens: true, // Use refresh tokens to renew access tokens
  useRefreshTokensFallback: false, // Fallback to another method if refresh tokens aren't available
  workerUrl: '/worker.js', // URL for background workers (if needed)
};
