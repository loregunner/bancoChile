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
        this.state = {
            userLoggedIn: false 
        }
        console.log('El componente aun no se ha montado');
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({
                    userLoggedIn: true
                })
                console.log('El componente está disponible en el DOM');
            }
            else{

            }
        })
    }
    
    login = (e) => {
        e.preventDefault();
        let provider = new firebase.auth.providerData();
        
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            // Esta es la informacion del usuario que inicia sesion
            let user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    logOut = () => {
        if(this.setState.userLoggedIn === true){
            return(
                <button onClick={}>Cerrar Sesión</button>
            )
        }
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
                    <button className='boton' onClick={this.Login}> 
                        Iniciar sesión 
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}


