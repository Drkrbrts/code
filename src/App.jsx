import React, { Component } from "react";
import SiteNav from "./header/SiteNav";
import Jumbo from "./title/Jumbo";
import Content from "./body/Content";
import Footer from "./foot/Footer";
import Form from "./registration/Form";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signin from "./misc/Signin";

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
            <Route path="/jumbo" exact={true} component={Jumbo}></Route>
            <Route path="/content" exact={true} component={Content}></Route>
            <Route path="/footer" exact={true} component={Footer}></Route>
            <Route path="/register" exact={true} component={Form}></Route>
            <Route path="/signin" exact={true} component={Signin}></Route>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
