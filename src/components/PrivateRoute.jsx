import React from "react";
import { Redirect } from "react-router";
import { Route } from "workbox-routing";

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
