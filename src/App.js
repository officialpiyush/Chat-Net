import React from 'react';
import { Switch } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './styles/main.scss';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <>
      <Switch>
        <PublicRoute path="/signin" component={SignIn} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
