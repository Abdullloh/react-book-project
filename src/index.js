import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import App from './App';
import './fonts/rotterburg-font/RotternBurg.otf'
import GlobalStyle from './style/GlobalStyle'
ReactDOM.render(
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyle/>
  </PersistGate>
  </Provider>
 ,
  document.getElementById('root')
);


