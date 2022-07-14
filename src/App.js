import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/main-layout.jsx';
import './app.css';

import UserCreationPage from './pages/user-creation-page/index.jsx';
import CategoryCreationPage from './pages/category-creation-pages/category-creation-page.jsx';
import HomePage from './pages/home-page/index.jsx';
import FieldCreationPage from './pages/category-creation-pages/field-creation-page.jsx';
import SpecialisationCreationPage from './pages/category-creation-pages/specialisation-creation-page.jsx';
import OccupationCreationPage from './pages/category-creation-pages/occupation-creation-page.jsx';
import FilteredByFieldUsersPage from './pages/filtered-by-field-users-page/index';

const App = () => (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<FilteredByFieldUsersPage />} />
          <Route path="/user-creation" element={<UserCreationPage />} />
          <Route path="/category-creation" element={<CategoryCreationPage />} />
          <Route path="/field-creation" element={<FieldCreationPage />} />
          <Route path="/specialisation-creation" element={<SpecialisationCreationPage />} />
          <Route path="/occupation-creation" element={<OccupationCreationPage />} />
        </Route>
      </Routes>
);
export default App;
