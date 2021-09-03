import React, { Component } from "react";
import { withRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import Cars from "./components/codingChallenge/Cars";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Friends from "./pages/Friends";
import FriendsForm from "./components/FriendsForm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import TechCo from "./pages/TechCo";
import TechCoForm from "./components/TechCoForm";
import SearchResults from "./pages/SearchResults";
import JobForm from "./components/JobForm";
import userService from "./services/users";

import "./App.css";
import WidgetForm from "./components/codingChallenge/WidgetForm";

class App extends Component {
  state = {};

  currentUser = () => {
    userService
      .current()
      .then(this.currentUserSuccess)
      .catch(this.currentUserError);
  };

  displayName = (data) => {
    let updatedName = data;

    this.setState({ name: updatedName });
  };

  currentUserSuccess = (response) => {
    userService
      .userById(response.data.item.id)
      .then(this.getByIdSuccess)
      .catch(this.getByIdError);

    this.displayName(response.data.item.name);
  };

  currentUserError = (response) => {
    console.log(response);
  };

  getByIdSuccess = (response) => {
    this.setUser({ user: response.data.item });
  };

  getByIdError = (response) => {
    console.log(response);
  };

  componentDidMount() {
    this.currentUser();
  }

  setUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} setUser={this.setUser} {...this.props} />
        <main role="main">
          <BrowserRouter>
            <Switch>
              <Route path="/register" exact={true} component={Register} />
              <Route
                path="/login"
                exact={true}
                component={() => <Login setUser={this.setUser} />}
              />
              <Route
                path="/"
                exact={true}
                component={() => (
                  <Home user={this.state.user} name={this.state.name} />
                )}
              />
              <Route
                path="/friends"
                exact={true}
                component={() => <Friends user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/friends/:id(\d+)/edit"
                exact={true}
                component={() => <FriendsForm user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/friends/new"
                exact={true}
                component={() => <FriendsForm user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/jobs"
                exact={true}
                component={() => <Jobs user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/jobs/new"
                exact={true}
                component={() => <JobForm user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/jobs/:id(\d+)/edit"
                exact={true}
                component={() => <JobForm user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/jobs/search/:searchTerm"
                exact={true}
                component={() => <SearchResults user={this.state.user} />}
              />
              <Route
                path="/techco"
                exact={true}
                component={() => <TechCo user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/techco/new"
                exact={true}
                component={() => <TechCoForm user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/techco/:id(\d+)/edit"
                exact={true}
                component={() => <TechCoForm user={this.state.user} />}
                {...this.props}
              />
              <Route
                path="/events"
                exact={true}
                component={() => <Events user={this.state.user} />}
                {...this.props}
              />
              <Route path="/widget" exact={true} component={WidgetForm} />
              <Route path="/cars" exact={true} component={Cars} />
            </Switch>
          </BrowserRouter>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
