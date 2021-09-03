import React, { Component } from "react";
import SiteNav from "./Components/SiteNav";
import Jumbo from "./Components/Jumbo";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import * as userService from "./services/userService";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css";
import CodeChallenge from "./Components/CodeChallenge/CodeChallenge";
import * as codeFile from "./services/codeFile";

class App extends Component {
  componentDidMount() {
    userService.logIn().then(this.onActionSuccess).catch(this.onActionError);
    codeFile.submit().then(this.onActionSuccess).catch(this.onActionError);
  }
  onActionSuccess = (response) => {
    console.log(response);
  };
  onActionError = (response) => {
    console.log(response);
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <SiteNav></SiteNav>
          <Route path="/jumbo" exact={true} component={Jumbo}></Route>
          <Route path="/content" exact={true} component={Content}></Route>
          <Route path="/register" exact={true} component={Register}></Route>
          <Route path="/login" exact={true} component={Login}></Route>
          <Route
            path="/CodeChallenge"
            exact={true}
            component={CodeChallenge}
          ></Route>
          <Footer></Footer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
