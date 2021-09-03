import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/Login";
import HomePage from "./components/HomePage";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Friends from "./components/Friends";
import CodeChallenge from "./components/codechallenge/CodeChallenge";
// import { Route } from "react-router-dom";

class App extends Component {
  componentDidUpdate(prevProps) {
    let previousPath = prevProps.location.pathname;
    let currentPath = this.props.location.pathname; 
    console.log("App", { previousPath, currentPath });
  }

  render() {
    console.log("rendering App");
    return (
      <BrowserRouter>
      
        <Route path="/register" exact={true} component={RegisterPage}></Route>
        <Route
          path="/login/:id(\d+)"
          exact={true}
          component={LoginPage}
        ></Route>
         <Route
          path="/jumbo/"
          exact={true}
          component={Jumbo}
        ></Route>
        <Route
          path="/content/"
          exact={false}
          component={Content}
        ></Route>
        <Route
          path="/home/:id(\d+)"
          exact={false}
          component={HomePage}
        ></Route>
        <Route
          path="/friends/"
          exact={false}
          component={Friends}
        ></Route>
        <Route
          path="/codechallenge/"
          exact={false}
          component={CodeChallenge}
        ></Route>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;