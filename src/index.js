import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { h } from 'preact';

import './index.css';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <App />,
  document.getElementById('root')
);
