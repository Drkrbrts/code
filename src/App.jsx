import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Jumbotron from "./Components/Jumbotron";
import InfoCards from "./Components/ContentCards";
import Footer from "./Components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route component={NavBar}></Route>
          <Route component={Jumbotron}></Route>
          <Route component={InfoCards}></Route>
          <Route component={Footer}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
