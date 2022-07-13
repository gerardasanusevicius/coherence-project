import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { pageBottom, pageSide, pageTop } from '../../helpers/constants';
import Footer from '../footer/index.jsx';
import Header from '../header/index.jsx';

const MainLayout = () => (
  <>
    <Header />
    <Box
      component="main"
      sx={{
        pt: pageTop,
        pb: pageBottom,
        px: pageSide,
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default MainLayout;
