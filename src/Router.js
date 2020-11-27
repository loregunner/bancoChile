import React, {Component} from 'react';
import Login from './pages/Login';
import VistaPrincipal from './pages/vistaPrincipal';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error from './Error';
import Form from './components/form';
//import Header from './components/header';
import firebase from './Access/firebase';


class Router extends Component {
    componentDidMount(){
        console.log('aqui');
        firebase.auth().onAuthStateChanged((user) => {
            if(user && window.location.pathname !== "/vista1") window.location = '/vista1';
        })
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/vista1" component={VistaPrincipal} />
                    <Route exact path="/form" component={Form} />
                    
                    <Route component ={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;