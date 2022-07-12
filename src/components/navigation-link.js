import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavigationLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textDecoration: 'none',
  alignSelf: 'stretch',
  marginRight: '4rem',
  fontSize: '0.825rem',
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  transition: theme.transitions.create('color'),

  '&.active': {
    color: theme.palette.primary.dark,
  },

  ':hover': {
    color: theme.palette.primary.dark,
  },
}));

export default NavigationLink;
