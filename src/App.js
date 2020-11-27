import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
//import Login from './pages/Login';
//import Login from './pages/Login';
//import VistaPrincipal from './pages/vistaPrincipal';
import Router from './Router';

export default class App extends Component {
  render(){
    <Router />
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

/* export default function App() {
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  </div>
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/vistaPrincipal">VistaPrincipal</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/vistaPrincipal">
            <VistaPrincipal />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

Login = () => {
  return <h2>Home</h2>;
}

VistaPrincipal = () => {
  return <h2>About</h2>;
}
 */