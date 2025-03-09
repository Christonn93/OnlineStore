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
} from './colors';

export const palette = {
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
  greyScale: {
    main: grey,
  },
};
