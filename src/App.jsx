import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom"
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import SiteNav from "./components/SiteNav";

import "./App.css";



class App extends Component {
  render() {
    return (
      
        <React.Fragment>
          <BrowserRouter>
           
          <div>
          <NavLink to="/jumbo">Go to Jumbo</NavLink>
          </div>
          <div>
          <NavLink to="/sitenav">Go to SiteNav</NavLink>
          </div>
          <div>
          <NavLink to="/content">Go to Content</NavLink>
          </div>
          <div>
          <NavLink to="/footer">Go to Footer</NavLink>
          </div>
          
        
        <div>
          <Route path="/jumbo" exact={true} component={Jumbo}></Route>
          <Route path="/sitenav" exact={true} component={SiteNav}></Route>
          <Route path="/content" exact={true} component={Content}></Route>
          <Route path="/footer" exact={true} component={Footer}></Route>
        </div>
          <SiteNav></SiteNav>
          <main role="main">
            <Jumbo></Jumbo>
            <Content></Content>
          </main>         
            <Footer></Footer>
          </BrowserRouter>
        </React.Fragment>
      
    );
  }
}

export default App;
