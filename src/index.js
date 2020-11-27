import React from 'react';
import ReactDOM from 'react-dom';
//import Data from './components/data';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Login from './pages/Login.js';
//import Form2 from './components/form2';
//import App from './App';
//import Login from './pages/Login';
//import Form from './components/form';
//import VistaPrincipal from './pages/vistaPrincipal';

//import Header from './components/header';
import Router from './Router';



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
