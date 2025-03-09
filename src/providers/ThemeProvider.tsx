import { ReactNode } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { theme } from '../theme/theme';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
