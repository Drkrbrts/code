import React, { Component } from "react";
import {BrowserRouter, Route } from "react-router-dom"
import { withRouter } from "react-router-dom";
import "./App.css";

import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import FriendsForm from "./friends/FriendsForm"
import Friends from "./friends/Friends"

// import Widget from "./components/CodeChallenge"
import Cars from "./codechallenge/Cars"

class App extends Component 
{
  componentDidUpdate(prevProps)
  {
      let currentPath = this.props.location;
      let previousPath = prevProps.props.location;

      console.log("App Update", {currentPath, previousPath});
  }

  render() {
    return (
      <BrowserRouter>

          <SiteNav {...this.props}></SiteNav>

          <main role="main">
            
            <Route path="/jumbo" exact={true} component={Jumbo}/>
            <Route path="/content" exact={true} component={Content}/>
            <Route path="/Register" exact={true} component={Register}/>
            <Route path="/Login" exact={true} component={Login}/>
            <Route path="/Home" exact={true} component={Home}/>
            <Route path="/Friends/add" exact={true} component={FriendsForm}/>
            <Route path="/Friends/:id/edit" exact={true} component={FriendsForm}/>
            <Route path="/Friends" exact={true} component={Friends}/>
            
            {/* <Route path="/codechallenge" exact={true} component={Widget}/> */}

            <Route path="/cars" exact={true} component={Cars}/>

          </main>

          <Footer/>
          
      </BrowserRouter>

    );
  }
}

export default withRouter(App);
