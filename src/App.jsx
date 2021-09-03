import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import LoggedOutNav from "./components/LoggedOutNav";
import LoggedOutHomePage from "./components/LoggedOutHomePage";
import LoggedInNav from "./components/LoggedInNav";
import LoggedInHomePage from "./components/LoggedInHomePage";
import FriendForm from "./components/FriendForm";
import Friends from "./components/Friends";
import ProductForm from "./components/codeChallenge/ProductForm";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    return (
      <BrowserRouter>
        <Route
          path={["/", "/login", "/register"]}
          exact
          component={LoggedOutNav}
        ></Route>
        <Route
          path={[
            "/home",
            "/friends",
            "/blogs",
            "/techCo",
            "/jobs",
            "/events",
            "/friendform",
          ]}
          exact
          component={LoggedInNav}
        ></Route>
        <main role="main">
          <div>
            <Route path="/" exact component={LoggedOutHomePage}></Route>
            <Route path="/home" exact component={LoggedInHomePage}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/friends" exact component={Friends}></Route>
            <Route path="/friendform" exact component={FriendForm}></Route>
            {/* route with path "/product" is for coding challenge */}
            <Route path="/product" exact component={ProductForm}></Route>
          </div>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
