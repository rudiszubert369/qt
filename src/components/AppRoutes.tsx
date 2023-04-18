import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import NotFound from './NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;