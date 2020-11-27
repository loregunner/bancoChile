import React, { Component } from 'react'
import volver from '../Access/img/volver.png'
import mas from '../Access/img/openmoji_more-information.png'
import mujer from '../Access/img/mujer.jpg'
import "../pages/styles/vistaPrincipal.css";
import { Link } from 'react-router-dom';
class Menu extends Component {
    render(){
        return(
            <div>
            <img src={volver} alt='Logo1' className='volver'/>
            <Link className='ancla' to='/vista1'>Volver</Link>
            <div className='menu'>
            <img src={mujer} alt='Logo1' className='mujer'/>
            <h1>Carla Rodriguez</h1>
            <img src={mas} alt='Logo1' className='mas'/>
                <Link className='botonNuevo' type='button' to='./form'>Nuevo Proyecto</ Link>
                <h2>VER POR</h2>
            </div>
            </div>
        )
    }
}

export default Menu