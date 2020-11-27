import React, { Component } from 'react';
import firebase from '../Access/firebase';
//import Header from '../components/header.js';
import persona from '../Access/img/personita.png';
import candado from '../Access/img/candadito.png';
import './styles/Login.css';
import Router from '../Router';
//import { NavLink } from 'react-router-dom';
import Header from '../components/header';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    
    login = (e) => {
        e.preventDefault();
        let provider = new firebase.auth.GoogleAuthProvider();
        
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Esta es la informacion del usuario que inicia sesion
            let user = result.user;
            if(user.emailVerified === true){
                <Router />
            }
            console.log(user.displayName);
            console.log(user.email);
            console.log(user.emailVerified);
        })
    }
    
    render(){

        return(
        <React.Fragment>
            <div className='header'>
                <Header />
                <div className='container'>
                    <div className='loginContainer'>
                        <p>Iniciar sesión</p>
                        <form>
                            <div className='form-group'>
                                <label className='usuario'>Correo: </label>
                                <img src={persona} alt='Logo1' className='personita'/>
                                <input className='form-control' type='email' name='email' placeholder='Correo electrónico' autoFocus />
                            </div>
                            <div>    
                                <label className='contraseña'>Contraseña:</label>
                                <img src={candado} alt='Logo1' className='candadito'/>
                                <input className='form-control1' type='password' name='password' placeholder='Contraseña' />
                                <button className='boton' onClick={this.login}> 
                                    Iniciar sesión 
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            
            </React.Fragment>
        );
    }
}


