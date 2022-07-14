// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import NavigationLink from '../navigation-link';
import { getFields, getOccupations, getSpecialisations } from '../../services/category-service';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fieldsOpen, setFieldsOpen] = useState(false);
  const [fields, setFields] = useState([]);
  const [specialisations, setSpecialisations] = useState([]);
  const [occupations, setOccupations] = useState([]);

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

  useEffect(() => {
    getSpecialisations().then(
      (res) => {
        setSpecialisations(res.data);
      },
      (error) => {
        throw error;
      },
    );
  }, []);

  useEffect(() => {
    getOccupations().then(
      (res) => {
        setOccupations(res.data);
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
          <NavigationLink sx={{ fontSize: '2rem' }} to="/user-creation">User creation</NavigationLink>
          <NavigationLink sx={{ fontSize: '2rem' }}to="/category-creation">Category creation</NavigationLink>
          <Typography sx={{ textAlign: 'center', fontSize: '1.5rem', my: '1rem' }}>Filter by</Typography>
          {
              fields.map((field) => (
              <Box key={field.id}>
              <NavigationLink to={`/${kebabCase(field.title)}`} sx={{ fontSize: '2rem' }}>{field.title}</NavigationLink>
              <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 }}
            onClick={() => {
              setFieldsOpen((prev) => !prev);
            }}
          >
          <ArrowDropDownIcon/>
          </IconButton>
              <Collapse in={fieldsOpen}>
              <Box>
              {
                   specialisations.filter((specialisation) => specialisation.fieldId === field.id).map((specialisation) => (
                    <Box key={specialisation.id}>
                  <NavigationLink to={`/${kebabCase(specialisation.title)}`} sx={{ fontSize: '1.5rem' }}>{specialisation.title}</NavigationLink>
                  {
                   occupations.filter((occupation) => occupation.specialisationId === specialisation.id).map((occupation) => <NavigationLink to={`/${kebabCase(occupation.title)}`} key={occupation.id} value={occupation} sx={{ fontSize: '1rem' }}>{occupation.title}</NavigationLink>)
              }

                  </Box>
                   ))
              }
              </Box>
              </Collapse>
              </Box>
              ))
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
