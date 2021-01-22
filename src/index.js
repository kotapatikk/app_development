import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import {App} from './app';

ReactDOM.render(
    <Provider>
            <App></App>
    </Provider>,
    document.getElementById('root')
);
