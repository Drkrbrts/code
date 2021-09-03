import React, { Component } from "react";
import SiteNav from "./SiteNav";
import Jumbo from "./Jumbo";
import Content from "./Content";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteNav></SiteNav>
          <main role="main">
            <Jumbo></Jumbo>
            <Content></Content>
          </main>

        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
