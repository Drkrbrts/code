import React, { Component } from "react";
import 'rc-pagination/assets/index.css'
import {BrowserRouter, Route} from "react-router-dom"
import Register from "./services/Register";
import Login from "./services/Login";
import { withRouter } from "react-router-dom";
import Home from "./services/Home";
import Jobs from "./services/Jobs";
import Friends from "./services/Friends";
import TechCo from "./services/TechCo";
import Events from "./services/Events";
import "./App.css";
import Products from "./Components/codeChallenge";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <header>
  
        </header>

        <main role="main">
          
            <div className="container-flex">
            <Route path='/Products' exact={true} component={Products}/>
            <Route path='/Friends' exact={true} component={Friends}/>
            <Route path='/Events' exact={true} component={Events}/>
            <Route path='/Jobs' exact={true} component={Jobs}/>
            <Route path='/TechCo' exact={true} component={TechCo}/>
            <Route path='/Home' exact={true} component={Home}/>
            <Route path='/Login' exact={true} component={Login}/>
            <Route path='/Register' exact={true} component={Register}/>
            
          </div>
        </main>

        <footer className="container">
          
        </footer>
      
      </BrowserRouter>
    );
    
  }
}

export default withRouter(App);
