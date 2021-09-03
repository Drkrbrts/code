import React, { Component } from "react";
import Footer from "./appComponents/Footer";
import Jumbo from "./appComponents/Jumbo";
import Content from "./appComponents/Content";
import SiteNav from "./appComponents/SiteNav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <SiteNav></SiteNav>
        </div>

        <main role="main">
          <Jumbo></Jumbo>
          <Content></Content>
        </main>
        <div>
          <Footer></Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
