import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Loadable } from 'react-loadable';
import RouteWithLayout from './common/components/RouteWithLayout';
import { FirstPage } from './firstpage/components';
import { SecondPage } from './secondpage/components';

// function Loading() {
//   return <h3>Loading...</h3>;
// }

// const LoadableSecondPage = Loadable({
//   loader: () => import('./secondpage/components/SecondPage'),
//   loading: Loading,
// });

const getRoutes = (store) => (
  <BrowserRouter>
    <Switch>
      <RouteWithLayout store={store} exact path="/" component={FirstPage} />
      <RouteWithLayout store={store} path="/second" component={SecondPage} />
    </Switch>
  </BrowserRouter>
);

export default getRoutes;
