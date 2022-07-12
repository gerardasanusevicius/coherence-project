import React from 'react';
import {
  AppBar,
  Toolbar,
} from '@mui/material';
import NavigationLink from '../navigation-link';

const Header = () => (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'primary.light',
        borderBottom: '2px solid black',
        boxShadow: 'none',
        px: '5%',
      }}
    >
      <Toolbar
        disableGutters
      >
          <NavigationLink to="/user-creation">User creation</NavigationLink>
          <NavigationLink to="/category-creation">Category creation</NavigationLink>
      </Toolbar>
    </AppBar>
);

export default Header;
