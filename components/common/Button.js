"use client"
import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import PropTypes from 'prop-types';

const theme = createTheme({
  palette: {
    primary: {
      main:"#ff273a"
    },
    secondary: purple,
  },
});
const CommonButton = ({ variant = "contained", color = "primary", handleClick = () => {}, disabled = false, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button 
        variant={variant} 
        color={color} 
        onClick={handleClick} 
        disabled={disabled}
        >
        {children}
      </Button>
    </ThemeProvider>
  );
};

CommonButton.propTypes = {
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CommonButton;
