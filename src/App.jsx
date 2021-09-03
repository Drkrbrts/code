import React, { Component } from "react";
import SiteNav from "./Components/SiteNav";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import AddFriends from "./Components/AddFriends";
import Friends from "./Components/Friends";
import { withRouter } from "react-router-dom";
import Cars from "./CodeChallenge/Cars";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <SiteNav {...this.props}></SiteNav>
          <Route path="/home" exact={true} component={Home}></Route>
          <Route path="/content" exact={true} component={Content}></Route>
          <Route path="/register" exact={true} component={Register}></Route>
          <Route path="/login" exact={true} component={Login}></Route>
          <Route path="/friends" exact={true} component={Friends}></Route>
          <Route path="/addfriends" exact={true} component={AddFriends}></Route>
          <Route path="/cars" exact={true} component={Cars}></Route>
          <Footer></Footer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
