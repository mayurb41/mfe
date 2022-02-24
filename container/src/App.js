import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import MarketingApp from './components/MarketingApp';
import DashboardApp from './components/DashboardApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
          <DashboardApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
