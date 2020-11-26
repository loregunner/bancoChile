import React, { Component } from 'react';
import Header from '../components/header.js'
import persona from '../Access/img/personita.png'
import candado from '../Access/img/candadito.png'
import './styles/Login.css'
class Login extends Component {
    render(){
        return(
        <React.Fragment>
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
                </div>
                <button type='submit' className='boton'>Ingresar </button>
                </form>
            </div>
        </div>
        </React.Fragment>
        )
    }
}

export default Login