import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component, ...routeProps }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeProps} component={component} />;
};

export default PrivateRoute;
