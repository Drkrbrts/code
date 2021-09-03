import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import {BrowserRouter, Route} from "react-router-dom"
import "./App.css";
import NavBar from "./navBar/NavBar";
// import Login from "./login/Login";
// import Register from "./login/Register";
import Items from "./codeChallenge/Items";


class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <NavBar />
          {/* <Route exact path="./login/Register" component={Register}></Route>
          <Route exact path=".login/Login" component={Login}></Route>
          <Register />

          <Login /> */}
          <Items />

        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
