// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationLink from '../navigation-link';
import { getFields } from '../../services/category-service';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fields, setFields] = useState([]);

  useEffect(() => {
    getFields().then(
      (res) => {
        setFields(res.data);
      },
      (error) => {
        throw error;
      },
    );
  }, []);

  const kebabCase = (string) => string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

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
          <Typography sx={{ textAlign: 'center', fontSize: '1.5rem', my: '1rem' }}>Filter by Field</Typography>
          {
              fields.map((field) => <NavigationLink to={`/${kebabCase(field.title)}`} key={field.id}>{field.title}</NavigationLink>)
          }
          </Drawer>
          <IconButton
            size="large"
            edge="start"
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
