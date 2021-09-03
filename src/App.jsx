import React, { Component } from "react";
import { SiteNav, Jumbo, Content, Footer } from "./components/components";
// import Jumbo from "./components/jumbo";
// import Content from "./components/content";
// import Footer from "./components/footer";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import "./App.css";

class App extends Component
{

  // componentDidMount()
  // {
  //   console.log("componentDidMount")

  // }
  render()
  {
    return (
      <BrowserRouter>
        {/* <React.Fragment> */}
        <main role="main">
          <div>
            <NavLink to="/components">
              Render Site
            </NavLink>
          </div>
        </main>

        <Route
          path="/components"
          exact
          component={SiteNav} />
        <Route
          path="/components"
          exact
          component={Jumbo} />
        <Route
          path="/components"
          exact
          component={Content} />
        <Route
          path="/components"
          exact
          component={Footer} />
        {/* </React.Fragment> */}
      </BrowserRouter>
    );
  }
}

export default App;
