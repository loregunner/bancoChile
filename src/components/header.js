import React, { Component } from 'react';
import './styles/header.css'
import logo from '../Access/img/BancoChile.png'
import credi from '../Access/img/crediChile.png'
import edw from '../Access/img/edw.png'

class Header extends Component {
    render(){
      return(
        <React.Fragment>
          <nav className='container1'>
            <div>
              <div className='logo1'>
                <img src={credi} alt='Logo1'/>
              </div>
              <div className='logo2'>
                <img src={logo} alt='Logo'/>
              </div>
              <div className='logo3'>
                <img src={edw} alt='Logo2'/>
              </div>
            </div>
          </nav>      
        </React.Fragment>
      );
    }
}

export default Header
