import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { hot } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';

import reducers from './reducers';
import getRoutes from './Routes';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const App = () => <Provider store={store}>{getRoutes(store)}</Provider>;

export default hot(module)(App);
