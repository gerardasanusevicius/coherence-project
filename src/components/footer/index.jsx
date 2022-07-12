import React from 'react';
import { Box } from '@mui/material';
import NavigationLink from '../navigation-link';

const Footer = () => (
  <Box
    sx={{
      bgcolor: 'primary.light',
      borderTop: '2px solid black',
      boxShadow: 'none',
      maxWidth: '100%',
      flexDirection: 'row',
      justifyContent: {
        md: 'space-between',
      },
      height: '4rem',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '5%',
      paddingRight: '5%',
      position: 'fixed',
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 99,
    }}
  >
    <NavigationLink to='/'>Home Page</NavigationLink>
  </Box>
);

export default Footer;
