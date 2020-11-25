import React, { Component } from 'react';
//import firebase from '../Access/firebase'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            Contraseña: ''
        }
    }

    handleChange = (e) => {
        const { email, value } = e.target
        this.setState({ [email]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const values = JSON.stringify(this.state)
        alert(values)
    }

    render(){
        const { correo, contraseña } = this.state

        return(
        <div>
            <form onSubmit= {this.handleSubmit}>
                <label> Correo: 
                    <input type="text" name="email" value={correo} onChange={this.handleChange} />
                </label>
                <label> Contraseña:
                    <input type="password" name="contra" value={contraseña} onChange={this.handleChange} />
                </label>
                <button type="submit"> Entrar </button>
            </form>
        </div>
        )
    }
}

export default Form

//Firebase
/*login(){
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        firebase.auth().signInwithAndPassword(email, password)
        .then((result) => {
            //let user = result.user;
            this.verificar();
        })
        .catch((error) => {
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
    }*/