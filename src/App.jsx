import React, { Component } from "react";
import NavBar from "./components/NavBar";
//import MainComponent from "./components/mainComponent";
//import ContentComponent from "./components/contentComponent";
//import Footer from "./components/footerComponent";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import Home from "./dashboard";
import Features from "./features";
import Price from "./pricing";
import FaQ from "./FaQ";
import About from "./about";
import { userLogin } from "./services/userServices";
import RegisterPage from "./Form components/registerPage";
import Login from "./Form components/loginPage";
import HomePage from "./homePage";
import FormChallenge from "./components/codeChallenge";


class App extends Component {
  //reference like the startUp function in javascript
  componentDidMount() {
    const payload = {
      email: "burningRubber205@example.com",
      password: "711911Br$$",
      tenantId: "U025G4MMDEH",
    };

    userLogin(payload).then(onLoginSuccess).catch(onLoginError);

  
  function onLoginSuccess(response) {
  console.log("User Credentials Verified...User Logged In", response.data)
  }

  function onLoginError(response) {
  console.warn("User Credentials Failed Verification..", response.data)
  }


  }
  render() {
    return (
          <>
          <header className="p-3 bg-dark text-white">
          <NavBar />
          </header>
          <Switch>
            <Route path="/dashboard" exact={true} component={Home}></Route>
            <Route path="/homePage" exact={true} component={HomePage}></Route>
            <Route path="/features" exact={true} component={Features}></Route>
            <Route path="/pricing" exact={true} component={Price}></Route>
            <Route path="/FaQ" exact={true} component={FaQ}></Route>
            <Route path="/about" exact={true} component={About}></Route>
            <Route path="/codeChallenge" exact={true} component={FormChallenge}></Route>
            <Route path="/loginPage" exact={true} component={Login}></Route>
            <Route path="/registerPage" exact={true} component={RegisterPage}></Route>
          </Switch>
          </>
    );
  }
}

export default withRouter(App);
