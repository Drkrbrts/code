import React, { Component } from "react";
import Content from "./components/Content";
import Jumbo from "./components/Jumbo";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import * as userService from "./services/userService";
import "rc-pagination/assets/index.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import HomePage from "./components/HomePage";
import Assessment from "./components/Assessment";

import "./App.css";

class App extends Component {
  // componentDidMount() {
  //   var payload = {
  //     email: "LarryTheLobster@gmail.com",
  //     password: "Lobster1!",
  //     tenantId: "larry111",
  //   };

  //   userService
  //     .logIn(payload)
  //     .then(this.onActionSuccess)
  //     .catch(this.onActionError);
  // }

  // onActionSuccess = (response) => {
  //   console.log(response);
  // };

  // onActionError = (err) => {
  //   console.error(err);
  // };

  render() {
    return (
      <BrowserRouter>
        <SiteNav />
        <main>
          <Route path="/assessment" exact={true} component={Assessment}></Route>
          <Route path="/jumbo" exact={true} component={Jumbo}></Route>
          <Route path="/content" exact={true} component={Content}></Route>
          <Route path="/signup" exact={true} component={SignUp}></Route>
          <Route path="/login" exact={true} component={LogIn}></Route>
          <Route path="/homepage" exact={true} component={HomePage}></Route>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
