import React, { Component } from 'react'
import volver from '../Access/img/volver.png'
import mas from '../Access/img/openmoji_more-information.png'
import mujer from '../Access/img/mujer.jpg'
import "../pages/styles/vistaPrincipal.css";
import Form from '../components/form';

class Menu extends Component {
    constructor(props){
        super(props);
        this.newproyect = this.newproyect.bind(this);
    }

    newproyect = (e) => {
        e.preventDefault();
        <Form />
    }
    render(){
        return(
            <div>
            <img src={volver} alt='Logo1' className='volver'/>
            <a className='ancla' href='/'>Volver</a>
            <div className='menu'>
            <img src={mujer} alt='Logo1' className='mujer'/>
            <h1>Carla Rodriguez</h1>
            <img src={mas} alt='Logo1' className='mas'/>
                <button className='botonNuevo' type='button' onClick={this.newproyect}>Nuevo Proyecto</button>
                <h2>VER POR</h2>
            </div>
            </div>
        )
    }
}

export default Menu