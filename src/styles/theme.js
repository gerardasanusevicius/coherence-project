import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#a6a6a6',
      light: '#f2f2f2',
      dark: '#262626',
    },
    background: {
      default: '#f2f2f2',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1150,
      xl: 1536,
    },
  },
});

export default lightTheme;
