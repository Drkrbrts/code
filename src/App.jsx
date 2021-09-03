import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { withRouter, Route } from "react-router-dom";
import Footer from "../src/examples/Footer";
import SiteNav from "../src/examples/SiteNav";
import Jumbo from "../src/examples/Jumbo";
import Register from "../src/examples/Register";


import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SiteNav {...this.props}>
        </SiteNav>
        <main role="main">
          <div className="container">
            <Route path="/" exact={true} component={Jumbo}></Route>
            <Route path="/register" exact={true} component={Register}></Route>
          </div>
        </main>
        <Footer>
        </Footer>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);