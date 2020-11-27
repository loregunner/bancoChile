import React, {Component} from 'react';
import Login from './pages/Login';
import VistaPrincipal from './pages/vistaPrincipal';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from './Error';
import Form from './components/form';

class Router extends Component {
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