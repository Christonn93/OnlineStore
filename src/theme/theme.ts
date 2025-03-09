import { createTheme } from '@mui/material/styles';
import { getPalette } from './palette';

export const createCustomTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: getPalette(mode),
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: {
        fontSize: '2rem',
      },
      body1: {
        fontSize: '1rem',
      },
    },
    spacing: 8,
    components: {},
  });
