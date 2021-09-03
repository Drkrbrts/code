import React, { Component } from "react";
import SiteNav from "./header/SiteNav";
import Jumbo from "./title/Jumbo";
import Content from "./body/Content";
import Footer from "./foot/Footer";
import Register from "./registration/Register";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    // this.setState(logIn);
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav />
          <main role="main">
            <Route path="/home" exact={true} component={Home}></Route>
            <Route path="/jumbo" exact={true} component={Jumbo}></Route>
            <Route path="/content" exact={true} component={Content}></Route>
            <Route path="/footer" exact={true} component={Footer}></Route>
            <Route path="/register" exact={true} component={Register}></Route>
            <Route path="/login" exact={true} component={Login}></Route>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
