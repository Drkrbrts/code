import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import SiteNav from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav></SiteNav>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div>
                  <NavLink to="/jumbo">Jumbo</NavLink>
                </div>
                <div>
                  <NavLink to="/content">Content</NavLink>
                </div>
              </div>
            </div>
          </div>
          <Route path="/jumbo" exact component={Jumbo}></Route>
          <Route path="/content" exact component={Content}></Route>
          <Footer></Footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
