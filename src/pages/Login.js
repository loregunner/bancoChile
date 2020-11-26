import React, { Component } from 'react';
import firebase from '../Access/firebase';
//import Header from '../components/header.js'
import persona from '../Access/img/personita.png'
import candado from '../Access/img/candadito.png'
import './styles/Login.css'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.login2 = this.login2.bind(this);
    }

    //login Google
    login = (e) => {
        e.preventDefault();
        let provider = new firebase.auth.providerData();
        
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            //Esto le da un token de acceso a google
            let token = result.credential.accessToken;
            console.log(token);
            // Esta es la informacion del usuario que inicia sesion
            let user = result.user;
            console.log(user);
        });
    }

    render(){
        return(
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
                    </div>
                    <button varian='contained' className='boton' onClick={this.login}> 
                        Iniciar sesión 
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}


