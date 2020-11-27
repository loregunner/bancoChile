import React, { Component } from 'react'

import data from '../Access/data/data.json'
import './styles/data.css'
import casitas from '../Access/img/casitas.png'
import edificio from '../Access/img/edificio.png'

class Data extends Component{<<<<<<< login
  render(){
        const list = [];
        const todo = data
        const filter = this.props.filtro
        Object.values(todo.data).forEach((e) => {
            if (e.proyecto.includes('Inmuebles Usados')) {
                list.push(
                    <React.Fragment key={e.id}>
                     <div className='botonesPrincipal'>
                       <li className='lista'>
                        { <img className='imgPrincipal' src={casitas} alt='imagen'/> }
                        <div className='fecha'>{e.fecha}</div>
                        <div  className='name'>{e.name}</div>
                        <div className='inmuebles'>{e.proyecto}</div>
                       </li>
                       <div className='abajo'>
                       <button className='botonInfor' type='button'>Informe</button>
                       <button className='botonVer' type='button'>Ver más</button>
                       </div>
                     </div>
                   </React.Fragment>)
            }
            if (e.proyecto.includes('Proyectos Inmobiliarios')) {
                list.push(
                    <React.Fragment key={e.id}>
                     <div className='botonesPrincipal'>
                       <li className='lista'>
                       <img className='imgPrincipal' id="image" src={edificio} alt='imagen'/>
                         <div className='fecha'>{e.fecha}</div>
                        <div className='name'>{e.name}</div>
                        <div className='inmuebles1'>{e.proyecto}</div>
                       </li>
                       <div className='abajo'>
                       <button className='botonInfor' type='button'>Informe</button>
                       <button className='botonVer' type='button'>Ver más</button>
                       </div>
                     </div>
                   </React.Fragment>)
            }
            
                    })
        return(
            <div className='organizando'>
            <ul className="list-unstyled">
                {list}
            </ul>

  render(){
    const list = [];
    const todo = data

    Object.values(todo.data).forEach((e) => {
      if (e.proyecto.includes('Inmuebles Usados')) {
        list.push(
          <React.Fragment key={e.id}>
            <div className='botonesPrincipal'>
              <li className='lista'>
              { <img className='imgPrincipal' src={casitas} alt='imagen'/> }
              <div className='fecha'>{e.fecha}</div>
              <div  className='name'>{e.name}</div>
              <div className='inmuebles'>{e.proyecto}</div>
              </li>
              <div className='abajo'>
              <button className='botonInfor' type='button'>Informe</button>
              <button className='botonVer' type='button'>Ver más</button>
              </div>
            </div>
          </React.Fragment>)
      }
      if (e.proyecto.includes('Proyectos Inmobiliarios')) {
        list.push(
          <React.Fragment key={e.id}>
            <div className='botonesPrincipal'>
              <li className='lista'>
                <img className='imgPrincipal' id="image" src={edificio} alt='imagen'/>
                <div className='fecha'>{e.fecha}</div>
                <div className='name'>{e.name}</div>
                <div className='inmuebles1'>{e.proyecto}</div>
              </li>
              <div className='abajo'>
                <button className='botonInfor' type='button'>Informe</button>
                <button className='botonVer' type='button'>Ver más</button>
              </div>
            </div>
          </React.Fragment>)
          }
    })
    
    return(
      <div className='organizando'>
        <ul className="list-unstyled">
          {list}
        </ul>
      </div>
    )
  }
}

export default Data;