import React, { Component } from "react";
import{ NavigationBar } from "./navBar";
import{HeroSection} from "./HeroSection";
import{FooterTemplate} from "./Footer"; 
import {AjaxPostEntity} from "./components/AjaxForm"
//import{userLogin} from ".components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/login" exact component={() => <userLogin />} />
        </Switch>
        <HeroSection />
        <AjaxPostEntity/>
        <FooterTemplate />
      </Router>

    );
  }
}

export default App;
