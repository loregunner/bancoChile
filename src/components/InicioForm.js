import React, { Component } from 'react';
import firebase from '../Access/firebase';
//import Header from '../components/header.js'
import persona from '../Access/img/personita.png'
import candado from '../Access/img/candadito.png'
import './styles/Login.css'

export default class Login2 extends Component {
    constructor(props){
        super(props);
        this.login2 = this.login2.bind(this);
    }

    login2 = (e) => {
        e.preventdefault();

        provider = new firebase.auth.providerData();

        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        firebase.auth().signInwithAndPassword(email, password)
        .then((result) => {
            //let user = result.user;
            console.log(result);
            this.initApp()
        })
        .catch((error) => {
            console.log(error);
        });
    }

    initApp(){
        //para conocer el estado de autenticación del usuario esta el observador 
        firebase.auth().onAuthStateChanged((user) => {
            document.getElementById('verify-email').disabled = true;
            if(user){
                //let displayName = user.displayName;
                //let email = user.email;
                let emailVerified = user.emailVerified;
                //let uid = user.uid;
                if(!emailVerified) {
                    document.getElementById('verify-email').disabled = false;
                }
            }
            else{
                document.getElementById('status sign').textContent = 'signed out';
            }
        })
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
                    <button varian='contained' className='boton' onClick={this.Login2}> 
                        Iniciar sesión 
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}
