import React from 'react';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter } from "react-router-dom";
import {createRoot} from 'react-dom/client';


// const store = createStore(reducer, middleware);
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);