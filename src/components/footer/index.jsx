import React from 'react';
import { Box, Button } from '@mui/material';
import NavigationLink from '../navigation-link';
import * as Data from '../../data/db.json';

const Footer = () => {
  const exportData = () => {
    const jsonData = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data),
    )}`;

    const anchor = document.createElement('a');

    anchor.href = jsonData;
    anchor.download = 'data.json';
    anchor.click();
  };

  return (
  <Box
    sx={{
      bgcolor: 'primary.light',
      borderTop: '2px solid black',
      boxShadow: 'none',
      maxWidth: '100%',
      justifyContent: 'space-around',
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
    <NavigationLink to='/' sx={{ mr: 0 }}>Home Page</NavigationLink>
    <Button sx={{ maXwidth: '100%', height: '2rem' }} variant='outlined' onClick={exportData} >Export JSON Data</Button>
  </Box>
  );
};

export default Footer;
