import { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from '../config/authConfig';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <Auth0Provider {...authConfig}>{children}</Auth0Provider>;
};
