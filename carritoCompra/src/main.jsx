import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import CarritoContext from './context/CarritoContext'

ReactDOM.render(
  <React.StrictMode>
    <CarritoContext>
      <App />
    </CarritoContext>
  </React.StrictMode>,
  document.getElementById('root')
)
