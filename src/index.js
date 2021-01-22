import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './app';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { SnackbarProvider } from 'notistack';
import logger from 'redux-logger';
//For Router
const history = createHistory();
const router = routerMiddleware(history);

import axios from 'axios';

const initialState = {};

const middlewares = [];
middlewares.push(thunk);
middlewares.push(router);
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

let store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middlewares)
  )
),

  theme = createMuiTheme(themeOptions);


ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
            <App></App>
            </SnackbarProvider>
    </Provider>,
    document.getElementById('root')
);
