import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../layouts/Main';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
