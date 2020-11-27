import React, {Component} from 'react';
import Login from './pages/Login';
import VistaPrincipal from './pages/vistaPrincipal';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Error from './Error';
import Form from './components/form';
import Header from './components/header';

class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        {/*     {loggedIn ? <Redirect to="/vista1" /> : <VistaPrincipal />}
                        </Route> */}
                        <Route exact path="/vista1" component={VistaPrincipal} />
                        <Route exact path="/form" component={Form} />
                        
                        <Route component ={Error} />
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;