import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// src/index.js

import { Provider } from 'react-redux';

import store from './store'; // Import the Redux store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
