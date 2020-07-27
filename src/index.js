import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.css";
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store} >
     <BrowserRouter>  
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
