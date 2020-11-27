import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import App from './App';
//import Login from './pages/Login';
//import Form from './components/form';
//import VistaPrincipal from './pages/vistaPrincipal';
//import Header from './components/header';
import Router from './Router';
import { NavLink } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
