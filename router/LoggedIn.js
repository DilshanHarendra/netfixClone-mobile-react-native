import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import Home from '../views/Home/Home';

function LoggedIn() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </NativeRouter>
  );
}
export default LoggedIn;
