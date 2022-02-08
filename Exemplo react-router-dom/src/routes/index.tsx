import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';

import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import PeopleList from '../pages/PeopleList';
import GithubProfile from '../pages/GithubProfile';
import ClassList from '../pages/ClassList';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/peopleList" element={<PeopleList />} />
        <Route path="/githubProfile" element={<GithubProfile />} />
        <Route path="/classList" element={<ClassList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
