import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';

import getRoutes from './Routes';

const App = ({ store }) => <Provider store={store}>{getRoutes(store)}</Provider>;

export default hot(module)(App);
