import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import RouteWithLayout from './common/components/RouteWithLayout';

const Loading = () => (
  <div>
    <h3>Loading...</h3>
  </div>
);

const SecondPage = Loadable({
  loader: () => import('./secondpage/components/SecondPage'),
  loading: Loading,
});

const FirstPage = Loadable({
  loader: () => import('./firstpage/components/FirstPage'),
  loading: Loading,
});

const getRoutes = (store) => (
  <BrowserRouter>
    <Switch>
      <RouteWithLayout store={store} exact path="/" component={FirstPage} />
      <RouteWithLayout store={store} path="/second" component={SecondPage} />
    </Switch>
  </BrowserRouter>
);

export default getRoutes;
