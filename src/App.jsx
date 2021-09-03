import React, { Component } from "react";
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import SiteNav from "./HTML/SiteNav";
import Jumbo from "./HTML/Jumbo";
import Content from "./HTML/Content";
import Footer from "./HTML/Footer";
import "./App.css";

class App extends Component {
  render() {
    return ( <BrowserRouter>
      <div>
        <span>
          <NavLink to="/nav" style={{padding: "5px"}}>Go to SiteNav</NavLink>
          <NavLink to="/jumbo" style={{padding: "5px"}}>Go to Jumbo</NavLink>
          <NavLink to="/content" style={{padding: "5px"}}>Go to Content</NavLink>
          <NavLink to="/footer" style={{padding: "5px"}}>Go to Footer</NavLink>
        </span>
      </div>
      <Route path="/nav" exact={true} render={() => (
         <SiteNav />
       )} />
       
        <Route path="/jumbo" exact={true} render={() => (
         <Jumbo />
       )} />
       
        <Route path="/content" exact={true} render={() => (
         <Content />
       )} />  
      
        <Route path="/footer" exact={true} render={() => (
         <Footer />
       )} />     
         
        
       
       
        </BrowserRouter>     
    );
  }
}

export default App;
