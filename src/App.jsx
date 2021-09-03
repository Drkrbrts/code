import React, { Component } from "react";
import "./App.css";
import SiteNav from "./Components/SiteNav";
import Footer from "./Components/Footer";
import Jumbo from "./Components/Jumbo";
import Content from "./Components/Content";
import { BrowserRouter, NavLink } from "react-router-dom";
import * as userService from "./services/usersService";
import Product from "./CodeChallenge/Product";

class App extends Component {
  componentDidMount() {
    const payload = {
      email: "sabio@sabio.la",
      password: "Sabiopassword1!",
      tenantId: "bootcamp1",
    };
    userService
      .logIn(payload)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  }

  onLogInSuccess = (response) => {
    console.log(response, "Success! You are logged in");
    return response.data;
  };

  onLogInError = (errResponse) => {
    console.log(errResponse, "Yikes, what happened?");
    return Promise.reject(errResponse);
  };
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav></SiteNav>
          <main role="main">
            <div>
              <NavLink to="https://pw.sabio.la/tasks/ed3705f8-4056-4705-adb8-e899a5bbf16a/details/C108">
                Click me
              </NavLink>
            </div>
            <Jumbo></Jumbo>
            <Product></Product>
            <div className="container">
              <Content></Content>

              <hr />
            </div>
          </main>

          <Footer></Footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
