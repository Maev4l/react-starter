import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteWithLayout from './common/components/RouteWithLayout';
import { FirstPage } from './firstpage/components';
import { SecondPage } from './secondpage/components';

const getRoutes = (store) => (
  <BrowserRouter>
    <Switch>
      <RouteWithLayout store={store} exact path="/" component={FirstPage} />
      <RouteWithLayout store={store} path="/second" component={SecondPage} />
    </Switch>
  </BrowserRouter>
);

export default getRoutes;
