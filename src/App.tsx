import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import SEO from './components/SEO'; 
import './main.scss';
import AppRoutes from './components/AppRoutes';

const App = () => {
  return (
    <HelmetProvider>
      <SEO />
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
