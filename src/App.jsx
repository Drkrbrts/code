import React, { Component } from "react";
import Footer from "./appComponents/Footer";
import Jumbo from "./appComponents/Jumbo";
import Content from "./appComponents/Content";
import SiteNav from "./appComponents/SiteNav";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <nav>
            <Route path="/SiteNav" exact={true} component={SiteNav}></Route>
          </nav>
          <div>
            <Route path="/Components" exact={true} component={SiteNav}></Route>
          </div>
          <div>
            <NavLink to="/Content">Go to Content Component</NavLink>
          </div>
          <div>
            <NavLink to="/Jumbo">Go to Jumbo Component</NavLink>
          </div>
          <div>
            <NavLink to="/Footer">Go to Footer Component</NavLink>
          </div>
          <div>
            <NavLink to="/SiteNav">Go to SiteNav Component</NavLink>
          </div>
          <div>
            <NavLink to="/Components">Show All the components</NavLink>
          </div>
        </div>

        <main role="main">
          <div>
            <Route path="/Components" exact={true} component={Jumbo}></Route>
            <Route path="/Components" exact={true} component={Content}></Route>
          </div>
          {/* <Jumbo></Jumbo> */}
          {/* <Content></Content> */}
          <div>
            <Route path="/Jumbo" exact={true} component={Jumbo}></Route>
          </div>
          <div>
            <Route path="/Content" exact={true} component={Content}></Route>
          </div>
        </main>
        <div>
          <Route path="/Components" exact={true} component={Footer}></Route>
          <Route path="/Footer" exact={true} component={Footer}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
