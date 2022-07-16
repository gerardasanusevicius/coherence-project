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

import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectFields, selectOccupations, selectSpecialisations } from '../../store/selectors';
import { fetchFieldsThunkAction } from '../../store/features/fields/fields-action-creators';
import { fetchSpecialisationsThunkAction } from '../../store/features/specialisations/specialisations-action-creators';
import { fetchOccupationsThunkAction } from '../../store/features/occupations/occupations-action-creators';
import NavigationLink from '../navigation-link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fieldsOpen, setFieldsOpen] = useState(false);
  const fields = useRootSelector(selectFields);
  const specialisations = useRootSelector(selectSpecialisations);
  const occupations = useRootSelector(selectOccupations);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(fetchFieldsThunkAction);
    dispatch(fetchSpecialisationsThunkAction);
    dispatch(fetchOccupationsThunkAction);
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
            (fields && specialisations && occupations)
              ? fields.map((field) => (
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
              )) : null
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
