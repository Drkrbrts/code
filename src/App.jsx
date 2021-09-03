import React, { Component } from "react";
import {BrowserRouter, Route } from "react-router-dom"
import "./App.css";

import SiteNav from "./components/siteNav";
import Footer from "./components/footer";
import Jumbo from "./components/jumbo";
import Content from "./components/content";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";

import Widget from "./components/codechallenge"

class App extends Component {

  render() {
    return (
      <BrowserRouter>

          <SiteNav/>

          <main role="main">
            
            <Route path="/jumbo" exact={true} component={Jumbo}/>
            <Route path="/content" exact={true} component={Content}/>
            <Route path="/register" exact={true} component={Register}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/home" exact={true} component={Home}/>
            
            <Route path="/codechallenge" exact={true} component={Widget}/>

          </main>

          <Footer/>
          
      </BrowserRouter>

    );
  }
}

export default App;
