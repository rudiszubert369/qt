import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import SEO from './components/SEO'; 
import './main.scss';
import Layout from './components/Layout';

const App = () => {
  return (
    <HelmetProvider>
      <SEO />
      <Router>
        <Layout />
      </Router>
    </HelmetProvider>
  );
}

export default App;
