import React from "react";
import ReactDOM from "react-dom";
import CarritoContext from './context/CarritoContext';
import App from "./App";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CarritoContext>
      <App />
    </CarritoContext>
  </React.StrictMode>,
  document.getElementById('root')
)
