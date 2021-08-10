import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import App from './App';
import './fonts/rotterburg-font/RotternBurg.otf'
import GlobalStyle from './style/GlobalStyle';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate  loading={<h1>Loading ...</h1>} persistor={persistor}>
          <BrowserRouter>
          <GlobalStyle/>
            <App />
          </BrowserRouter>
      </PersistGate>
    </Provider>
 ,
  document.getElementById('root')
);


