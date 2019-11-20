import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import InitState from './redux/initState';
import initRed from './redux/initRed';

let store = createStore(initRed, InitState);

ReactDOM.render(
    <Provider store = { store }>
         <App />
    </Provider>
   ,document.getElementById('root'));


