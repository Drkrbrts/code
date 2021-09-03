import React, { Component } from "react";
import{ NavigationBar } from "./components/navBar";
import{HeroSection} from "./components/HeroSection";
import{FooterTemplate} from "./components/Footer";
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
        <FooterTemplate />

      </Router>

    );
  }
}

export default App;
