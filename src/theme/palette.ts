import {
  errorColor,
  grey,
  infoColor,
  primaryColor,
  secondaryColor,
  successColor,
  warningColor,
  primaryLight,
  primaryDark,
  secondaryLight,
  secondaryDark,
  successLight,
  successDark,
  infoLight,
  infoDark,
  warningLight,
  warningDark,
  errorLight,
  errorDark,
  white,
  lightGrey,
  darkGrey,
  black,
} from './colors';

export const getPalette = (mode: 'light' | 'dark') => ({
  mode,
  primary: {
    main: primaryColor,
    light: primaryLight,
    dark: primaryDark,
  },
  secondary: {
    main: secondaryColor,
    light: secondaryLight,
    dark: secondaryDark,
  },
  success: {
    main: successColor,
    light: successLight,
    dark: successDark,
  },
  info: {
    main: infoColor,
    light: infoLight,
    dark: infoDark,
  },
  warning: {
    main: warningColor,
    light: warningLight,
    dark: warningDark,
  },
  error: {
    main: errorColor,
    light: errorLight,
    dark: errorDark,
  },
  background: {
    default: mode === 'dark' ? darkGrey : lightGrey,
    paper: mode === 'dark' ? '#1e1e1e' : white,
  },
  text: {
    primary: mode === 'dark' ? white : black,
    secondary: mode === 'dark' ? grey : darkGrey,
  },
  greyScale: {
    main: grey,
  },
});
