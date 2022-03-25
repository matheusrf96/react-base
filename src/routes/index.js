import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Login} isClosed />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
