import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import DashboardApp from './components/DashboardApp';
import Header from './components/Header';


export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
        <DashboardApp />
      </div>
    </BrowserRouter>
  );
};
