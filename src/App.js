import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './components/layouts/main-layout.jsx';
import './app.css';

import UserCreationPage from './pages/user-creation-page/index.jsx';
import CategoryCreationPage from './pages/category-creation-pages/category-creation-page.jsx';
import HomePage from './pages/home-page/index.jsx';
import FieldCreationPage from './pages/category-creation-pages/field-creation-page.jsx';
import SpecialisationCreationPage from './pages/category-creation-pages/specialisation-creation-page.jsx';
import OccupationCreationPage from './pages/category-creation-pages/occupation-creation-page.jsx';
import FilteredUsersPage from './pages/filtered-users-page/index.jsx';
import store from './store/index';

const App = () => (
  <Provider store={store}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<FilteredUsersPage />} />
          <Route path="/user-creation" element={<UserCreationPage />} />
          <Route path="/category-creation" element={<CategoryCreationPage />} />
          <Route path="/field-creation" element={<FieldCreationPage />} />
          <Route path="/specialisation-creation" element={<SpecialisationCreationPage />} />
          <Route path="/occupation-creation" element={<OccupationCreationPage />} />
        </Route>
      </Routes>
      </Provider>
);
export default App;
