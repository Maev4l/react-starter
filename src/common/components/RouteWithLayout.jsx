import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { Sidebar } from 'semantic-ui-react';

import { NavSideBar, NavHeaderBar } from './Navigation';

const MainContent = ({ component: Component, matchProps }) => (
  <div style={{ marginLeft: '15px', marginRight: '15px' }}>
    <Component {...matchProps} />
  </div>
);

export default ({ component, ...rest }) => {
  const { path, store } = rest;
  const state = store.getState();

  return (
    <Route
      {...rest}
      render={(props) => {
        const { history } = props;
        return (
          <div>
            <NavSideBar path={path} />
            <Sidebar.Pusher>
              <div style={{ marginLeft: '150px' }}>
                <NavHeaderBar store={store} history={history} />
                <MainContent component={component} matchProps={props} />
              </div>
            </Sidebar.Pusher>
          </div>
        );
      }}
    />
  );
};
