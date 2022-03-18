import React from "react";
import ReactDOM from "react-dom";
//import CarritoContext from './context/CarritoContext';
//redux
import { Provider } from "react-redux";
import  store from "./reducers/Redux_toolkit/store/Store";

import App from "./App";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
