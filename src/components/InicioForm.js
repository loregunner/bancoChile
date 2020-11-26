import React, { Component } from 'react';
import firebase from '../Access/firebase'


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