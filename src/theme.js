import { createTheme } from '@mui/material/styles';
import { red, green, blueGrey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: green.A400,
    },
    secondary: {
      main: blueGrey[900],
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
