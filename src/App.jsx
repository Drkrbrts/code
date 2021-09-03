import React, { Component } from "react";
import NavHeader from "./components/header";
import Footer from "./components/footer";
import Jumbo from "./components/jumbotron";
import Content from "./components/content";
import Forms from "./register/registerForm";
import LogIn from "./components/login";
import { BrowserRouter, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./App.css";

import FormWidget from "./components/codechallenge";

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount success");
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavHeader></NavHeader>

          <Route path="/widget" component={FormWidget} exact={true}></Route>

          <Route path="/login" component={LogIn} exact={true}></Route>

          <Route path="/jumbotron" component={Jumbo} exact={true}></Route>

          <Route path="/content" component={Content} exact={true}></Route>

          <Route path="/registerForm" component={Forms} exact={true}></Route>

          <Footer></Footer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
