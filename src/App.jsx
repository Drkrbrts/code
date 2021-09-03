import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../src/examples/Footer";
import SiteNav from "../src/examples/SiteNav";
import Jumbo from "../src/examples/Jumbo";
import Content from "../src/examples/Content";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SiteNav></SiteNav>
        <main role="main">
          <div className="container">
            <Jumbo></Jumbo>
          </div>
          <div className="container">
            <Content></Content>
            <hr />
          </div>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
