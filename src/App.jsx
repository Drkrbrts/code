import React, { Component } from "react";
import "./App.css";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import SiteNav from "./components/SiteNav";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import { withRouter } from "react-router-dom";
import Products from "./components/code challenge/Products";

class App extends Component {
  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    return (
      <React.Fragment>
        <SiteNav />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={LogIn}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/products" component={Products}></Route>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
