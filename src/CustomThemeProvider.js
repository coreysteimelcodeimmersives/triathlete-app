import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import {
  blue,
  blueGrey,
  green,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors';

const OUR_PURPLE = '#7209B7';
const OUR_PINK = '#F72585';
const OUR_TEAL = '#4CC9F0';
const OUR_ERROR_PINK = '#B5179E';
const OUR_WARNING_BLUE = '#4895EF';
const OUR_INFO_BLUE = '#4361EE';
const OUR_SUCCESS_PURPLE = '#560BAD';

export const theme = createTheme({
  palette: {
    primary: purple,
    secondary: blue,
    error: pink,
    warning: green,
    info: orange,
    success: teal,
    text: {
      primary: '#000000', //black
      secondary: '#FFFFFF', //white
    },
  },
});

const CustomThemeProvider = (props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
