import React, { Component } from "react";
import "./App.css";
import "rc-pagination/assets/index.css";

import Homepage from "./components/Homepage";
import { withRouter, Route } from "react-router-dom";
import Registerpage from "./components/Registerpage";
import Sitenav from "./components/Sitenav";
import Loginpage from "./components/Loginpage";
import Friendspage from "./components/Friendspage";
import userService from "./services/userService";
import Jobspage from "./components/Jobspage";

import FriendsForm from "./components/FriendsForm";
import JobForm from "./components/JobForm";
import TechCompaniespage from "./components/TechCompaniespage";
import TechCoForm from "./components/TechCoForm";
import Cars from "./components/codechallenge/Cars";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    avatarUrl: "",
  };
  componentDidMount() {
    userService
      .getCurrent()
      .then(this.onGetCurrentSuccess)
      .catch(this.onGetCurrentError);
  }

  onGetCurrentSuccess = (response) => {
    console.log("CurrentUser", response);

    let userData = response.data.item;
    var currentUser = {
      id: userData.id,
    };

    userService
      .getById(currentUser.id)
      .then(this.onGetByIdSuccess)
      .catch(this.onGetByIdError);
  };
  onGetCurrentError = (response) => {
    console.log("GetCurrentError", response);
  };
  onGetByIdSuccess = (response) => {
    console.log({ getByIdSucess: response });

    let userDetails = response.data.item;
    this.setState(() => {
      let newState = {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        avatarUrl: userDetails.avatarUrl,
      };
      return newState;
    });
  };
  onGetByIdError = (response) => {
    console.log({ Error: response });
  };
  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;

    console.log("App", { currentPath, previousPath });
  }
  render() {
    console.log("rendering app");
    return (
      <React.Fragment>
        <Sitenav
          avatarUrl={this.state.avatarUrl}
          history={this.props.history}
        ></Sitenav>
        <Cars />

        <Route
          path="/home"
          exact={false}
          render={() => (
            <Homepage
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
            ></Homepage>
          )}
        ></Route>
        <Route path="/register" exact component={Registerpage}></Route>
        <Route path="/login" exact component={Loginpage}></Route>
        <Route path="/friends" exact={true} component={Friendspage}></Route>
        <Route path="/friends/add" exact={true} component={FriendsForm}></Route>
        <Route
          path="/friends/:id(\d+)/edit"
          exact={false}
          component={FriendsForm}
        ></Route>
        <Route path="/jobs" exact={true} component={Jobspage}></Route>
        <Route path="/jobs/add" exact={true} component={JobForm}></Route>
        <Route path="/jobs/form" exact={true} component={JobForm}></Route>
        <Route
          path="/techcompanies"
          exact={true}
          component={TechCompaniespage}
        ></Route>
        <Route
          path="/techcompanies/add"
          exact={true}
          component={TechCoForm}
        ></Route>
        <Route
          path="/techcompanies/form"
          exact={true}
          component={TechCoForm}
        ></Route>

        <main role="main">
          {/* <Jumbo></Jumbo>
          <Content></Content> */}
        </main>
        {/* <Footer></Footer> */}
      </React.Fragment>
    );
  }
}

export default withRouter(App);
