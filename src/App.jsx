import React, { Component } from "react";
import Footer from  "./components/Footer.jsx";
import SiteNav from "./components/SiteNav.jsx";
import Jumbo from "./components/Jumbo.jsx";
import Content from "./components/Content.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form"

import {BrowserRouter, Route} from "react-router-dom";
import * as userService from "./services/userService";



import "./App.css";

class App extends Component {
  componentDidMount = () => 
  {
    userService.logIn().then(this.onActionSuccess).catch(this.onActionError);
  }
  onActionSuccess = (response) => 
  {
    console.log(response)
  }

  onActionError = (errResponse) =>
  {
    console.log(errResponse)
  }

  
  render() {
    return (

      <BrowserRouter>
      <React.Fragment>   
        <SiteNav></SiteNav>
        <Route path="/jumbo" exact={true} component={Jumbo}></Route>
        <Route path="/content" exact={true} component={Content}></Route>
        <Route path="/login" exact={true} component={Login}></Route>
        <Route path="/register" exact={true} component={Register}></Route>
        <Route path="/form" exact={true} component={Form}></Route>
        <Footer></Footer>
      </React.Fragment>

    </BrowserRouter>);
  }
}

export default App;
