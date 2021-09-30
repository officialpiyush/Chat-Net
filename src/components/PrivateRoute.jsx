import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ component, ...routeProps }) => {
  const { profile } = useProfile();
  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeProps} component={component} />;
};

export default PrivateRoute;
