import { createTheme } from '@mui/material/styles';
import { red, lightGreen, pink } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen.A400,
    },
    secondary: {
      main: pink.A400,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '"Raleway"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Stick No Bills"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
