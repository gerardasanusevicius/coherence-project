// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import lightTheme from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
