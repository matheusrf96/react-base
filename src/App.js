import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import AppRouter from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <AppRouter />
      <GlobalStyles />
      <ToastContainer autoClose={3000} theme="colored" />
    </Router>
  );
}

export default App;
