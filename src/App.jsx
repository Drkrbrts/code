import React, { Component } from "react";
import RegistrationForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/NavBar";
import Home from "./Components/HomePage";
import EntityForm from "./Components/codeChallenge";
import "./App.css";
import { withRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    currentUser: { isLoggedIn: undefined },
  };

  componentDidUpdate(prevProps) {
    const { state: propState } = this.props.location;
    if (
      propState &&
      propState.type === "LOGOUT" &&
      this.state.currentUser.isLoggedIn
    ) {
      this.setState(() => {
        return { currentUser: { isLoggedIn: false } };
      });
    } else if (
      propState &&
      propState.type === "LOGGEDIN" &&
      this.state.currentUser.isLoggedIn
    ) {
      this.setState(() => {
        return { currentUser: { isLoggedIn: true } };
      });
    }
  }
  render() {
    return (
      <EntityForm></EntityForm>

      // <div className="App">
      //   <Navbar {...this.props} currentUser={this.state.currentUser}></Navbar>
      //   <Switch>
      //     <Route
      //       path="/"
      //       exact
      //       render={() => (
      //         <Home {...this.props} currentUser={this.state.currentUser}></Home>
      //       )}
      //     />
      //     <Route
      //       path="/Login"
      //       exact
      //       render={() => (
      //         <LoginForm
      //           {...this.props}
      //           currentUser={this.state.currentUser}
      //         ></LoginForm>
      //       )}
      //     />
      //     <Route path="/Registration" exact component={RegistrationForm} />
      //   </Switch>
      // </div>
    );
  }
}

export default withRouter(App);
