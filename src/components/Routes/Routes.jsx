import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tab1 from '../Tab1/Tab1';
import Tab2 from '../Tab2/Tab2';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Tab1} />
    <Route path="/tab2" component={Tab2} />
  </Switch>
);

export default Routes;
