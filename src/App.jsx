import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

import SiteNav from "./Containers/SiteNav";
import Home from "./Containers/Home";
import Entity from "./codechallenge/Entity";
import Friends from "./Containers/Friends";
import * as userService from "./services/userService";

import Register from "./Tasks/Register";
import Loginmenu from "./Tasks/Loginmenu";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const data = {
      email: "louiskang27@gmail.com",
      password: "Sabio27!",
      tenantId: "LKSabio27",
    };
    userService
      .logIn(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  }

  onActionSuccess = (response) => {
    console.log("success");
  };
  onActionError = (response) => {
    console.log("error");
  };

  render() {
    return (
      <BrowserRouter>
        <SiteNav {...this.props}></SiteNav>

        <Route path="/register" exact={true} component={Register}></Route>

        <Route path="/loginmenu" exact={true} component={Loginmenu}></Route>

        <Route path="/home" exact={true} component={Home}></Route>

        <Route path="/entity" exact={true} component={Entity}></Route>

        <Route path="/friends" exact={true} component={Friends}></Route>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
