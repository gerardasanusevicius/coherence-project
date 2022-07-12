import React, { useState } from 'react';
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationLink from '../navigation-link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
        <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} sx={{ display: 'flex', flexDirection: 'column' }}>
          <NavigationLink to="/user-creation">User creation</NavigationLink>
          <NavigationLink to="/category-creation">Category creation</NavigationLink>
          </Drawer>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuOpen(true)}
          >
          <MenuIcon />
          </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
