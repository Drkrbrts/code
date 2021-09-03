import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
// import Features from "./features";
// import Price from "./pricing";
// import FaQ from "./FaQ";
// import About from "./about";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";
import Friends from "./components/friends";
import FriendsForm from "./components/friendsform";
import Cars from "./components/Cars";

class App extends Component {
  //reference like the startUp function in javascript
  componentDidMount() {}

  render() {
    return (
      <>
        <header className="p-3 bg-dark text-white">
          <NavBar />
        </header>
        
        <Switch>
          <Route path="/home" exact={true} component={Home}></Route>
          <Route path="/login" exact={true} component={Login}></Route>
          <Route path="/register" exact={true} component={Register}></Route>
          <Route path="/friends" exact={true} component={Friends}></Route>
          <Route path="/cars" exact={true} component={Cars}></Route>
          <Route path="/friendsform" exact={true} component={FriendsForm}></Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
