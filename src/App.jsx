import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import SiteNav from "./components/SiteNav";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {logIn} from "./services/usersService";

class App extends Component {
  componentDidMount() {
    const payload = {
      email: "atorres@sabio.la",
      password: "GoDucks19!",
      tenantId: "bootcamp1",
    };
    logIn(payload)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  }

  onLogInSuccess = (response) => {
    console.log(response, "Successful log in");
    return response.data;
  };

  onLogInError = (errResponse) => {
    console.log(errResponse, "Unsuccessful log in");
    return Promise.reject(errResponse);
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
         <SiteNav />
          <main role="main">
            <Route exact={true} path="/jumbo" component={Jumbo} />
            <Route exact={true} path="/content" component={Content} />
          </main>
        <Footer></Footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;



// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <SiteNav />
//         <main role="main">
//          <Route exact path="/jumbo" component={Jumbo} />
//          <Route exact path="/content" component={Content} />
//         </main>
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }



/*

class App extends Component {
  state = {
    firstName: "Andrew",
    lastName: "Rojas",
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};

      newState[inputName] = newValue;

      return newState;
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sabio">
    )
  }
}

*/