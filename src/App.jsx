import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import SiteNav from "./general/SiteNav";
import Jumbo from "./general/Jumbo";
import Content from "./general/Content";
import Footer from "./general/Footer";
import * as userService from "./services/userService";

import "./App.css";
import Register from "./components/Register";
import Product from "./components/code challenge/Product";

class App extends Component {
  componentDidMount() {
    console.log("Logged in to user endpoint on component mount!");
    const data = {
      email: "Chris@Sabio.com",
      password: "Password12!",
      tenantId: "ChrisSabio",
    };
    userService
      .logIn(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav></SiteNav>

          <main role="main">
            <div className="App">
              <header className="App-header"></header>
              <div>
                <NavLink to="/Jumbo">Go to Jumbo</NavLink>
              </div>
              <div>
                <NavLink to="/Content">Go to Content</NavLink>
              </div>
            </div>
            <Route path="/Jumbo" exact={true} render={() => <Jumbo />}></Route>
            <Route
              path="/Content"
              exact={true}
              render={() => <Content />}
            ></Route>
            <Route
              path="/Register"
              exact={true}
              render={() => <Register />}
            ></Route>
            <Route
              path="/Product"
              exact={true}
              render={() => <Product />}
            ></Route>
          </main>

          <Footer></Footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
