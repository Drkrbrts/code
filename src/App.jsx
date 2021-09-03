import React, { Component } from "react";
import { get, getById } from "./services/userService";
import SiteNav from "./component/SiteNav";
import FriendsForm from "./component/friends/FriendsForm";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Register from "./component/Register";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Logout from "./component/Logout";
import Form from "./component/codechallenge/Form";
import Friends from "./component/friends/Friends";
import JobsForm from "./component/jobs/JobsForm";
import Jobs from "./component/jobs/Jobs";
import "./App.css";

class App extends Component {
  state = {
    isAuthenticated: false,
    currentUser: { firstName: "", lastName: "", email: "", avatarUrl: "" },
  };

  componentDidMount() {
    console.log("componentDidMount");
    get().then(this.onGetSuccess).catch(this.onGetError);
  }

  onGetById = (id) => {
    getById(id).then(this.onGetByIdSuccess).catch(this.onGetByIdError);
  };

  onGetByIdSuccess = (response) => {
    console.log(response);
    this.setState({ currentUser: response.data.item });
  };

  onGetByIdError = (error) => {
    console.warn(error);
  };

  onGetSuccess = (response) => {
    let id = response.data.item.id;
    getById(id).then(this.onGetByIdSuccess).catch(this.onGetByIdError);
    this.setState({ isAuthenticated: true });
  };

  onGetError = (error) => {
    console.warn(error);
    this.setState({ isAuthenticated: false });
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav
            isLoggedin={isAuthenticated}
            currentUser={this.state.currentUser}
            {...this.props}
          />
          <Home user={this.state.currentUser.firstName} />
          <main role="main">
            {/* <Route path="/home" exact component={Home} /> */}
            <Route path="/content" exact component={Content} />
            <Route path="/footer" exact component={Footer} />
            <Route path="/register" exact component={Register} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/login" exact component={Login} />
            <Route path="/form" exact component={Form} />
            <Route path="/jobsform" exact component={JobsForm} />
            <Route path="/jobs" exact component={Jobs} />
            <Route path="/friendsform" exact component={FriendsForm} />
            <Route path="/friends" exact component={Friends} />
            <Route
              path="/friends/:frdId(\d+)/edit"
              exact={true}
              component={FriendsForm}
            />
          </main>
          <Footer {...this.props} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
