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
        <div className='form-group'>
                  <label className='usuario'>Usuario</label>
                  <img src={persona} alt='Logo1' className='personita'/>
                  <input className='form-control' type='text' name='firstName' placeholder='Nombre de usuario' /> 
              </div>

              <div className='form-group1'>
                  <label className='contraseña'>Contraseña</label>
                  <img src={candado} alt='Logo1' className='candadito'/>
                  <input className='form-control1' type='password' name='lastName' placeholder='Contraseña'  />
              </div>
        </div>
        <button type='button' className='boton'>Ingresar</button>
        </div>
        </React.Fragment>
        )
    }
}

export default Login