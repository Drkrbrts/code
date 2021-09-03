import React, { Component } from "react";
import SiteNav from "./Components/SiteNav";
import Jumbo from "./Components/Jumbo";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import EntitiesAssessment from "./Components/EntitiesAssessment";
// import Home from "./Components/Home";
import { withRouter } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <SiteNav></SiteNav>
          <Route
            path="/entitiesassessment"
            exact={true}
            component={EntitiesAssessment}
          ></Route>
          <Route path="/jumbo" exact={true} component={Jumbo}></Route>
          <Route path="/content" exact={true} component={Content}></Route>
          <Route path="/register" exact={true} component={Register}></Route>
          <Route path="/login" exact={true} component={Login}></Route>
          {/* <Route path="/home" exact={true} component={Home}></Route> */}

          <Footer></Footer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
