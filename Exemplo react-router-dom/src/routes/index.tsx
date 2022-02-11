import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';

import LoadingPage from '../pages/Loading';
import Login from '../pages/Login';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import PeopleList from '../pages/PeopleList';
import GithubProfile from '../pages/GithubProfile';
import ClassList from '../pages/ClassList';
import { useSettings } from '../hooks/settings';

export default function AppRoutes() {
  const { loadingSettings, settings } = useSettings();
  const enableDashboardLink = settings.find(
    (x) => x.name === 'enableDashboard'
  )?.value;

  return (
    <BrowserRouter>
      <Routes>
        {loadingSettings ? (
          <Route path="*" element={<LoadingPage />} />
        ) : (
          <>
            <Route path="/" element={<Login />} />
            {/* <Route path="/" element={user?.id ? <Home /> : <Login />} /> */}
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/about" element={<About />} />
            {enableDashboardLink === 'true' && (
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
            )}
            <Route
              path="/peopleList"
              element={
                <RequireAuth>
                  <PeopleList />
                </RequireAuth>
              }
            />
            <Route
              path="/githubProfile"
              element={
                <RequireAuth>
                  <GithubProfile />
                </RequireAuth>
              }
            />
            <Route
              path="/classList"
              element={
                <RequireAuth>
                  <ClassList />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Error404 />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
