import themes from '../utils/theme';
import React from 'react';

export const theme = {
  light: themes.light,
  dark: themes.dark,
};

export const ThemeContext = React.createContext({
  theme: theme.dark,
  toggleTheme: () => {},
});
