import React, { Component } from "react";
import { FooterTemplate, NavigationBar , HeroSection, UserLogin, CarsMap} from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
        <Route path="/login" exact component={() => <UserLogin />} />
        </Switch>
        <HeroSection/>
        <FooterTemplate />
        <CarsMap></CarsMap>
      </Router>
      </React.Fragment>

    );
  }
}

export default App;
