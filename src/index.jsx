import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SmartHome from './SmartHome';
import * as serviceWorker from './serviceWorker';
import store from './store'

ReactDOM.render(
  <React.StrictMode >
    <SmartHome store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();