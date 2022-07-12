import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/main-layout.jsx';
import UserCreationPage from './pages/user-creation-page.jsx';
import CategoryCreationPage from './pages/category-creation-page.jsx';
import HomePage from './pages/home-page.jsx';
import './app.css';

const App = () => (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-creation" element={<UserCreationPage />} />
          <Route path="/category-creation" element={<CategoryCreationPage />} />
        </Route>
      </Routes>
);
export default App;
