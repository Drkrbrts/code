import React, { Component } from "react";
import { get, getById } from "./services/userService";
import SiteNav from "./component/SiteNav";
import Jumbo from "./component/Jumbo";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Register from "./form/Register";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Logout from "./component/Logout";
import LoginControl from "./component/LoginControl";
import "./App.css";

class App extends Component {
  state = {
    isAuthenticated: true,
    currentUser: { firstName: "", lastName: "", email: "", avatarUrl: "" },
  };

  login = () => {
    this.setState({ isAuthenticated: true });
  };

  logout = () => {
    this.setState({ isAuthenticated: false });
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
  };

  onGetByIdError = (error) => {
    console.warn(error);
  };

  onGetSuccess = (response) => {
    console.log(response);
    this.setState({ currentUser: response.data.item.id });
  };

  onGetError = (error) => {
    console.warn(error);
  };

  render() {
    const isAuthenticated = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav
            isLoggedin={isAuthenticated}
            currentUser={this.state.currentUser}
            logout={this.logout}
          />
          <LoginControl></LoginControl>
          <main role="main">
            <Route path="/home" exact={true} component={Home}></Route>
            <Route path="/jumbo" exact={true} component={Jumbo}></Route>
            <Route path="/content" exact={true} component={Content}></Route>
            <Route path="/footer" exact={true} component={Footer}></Route>
            <Route path="/register" exact={true} component={Register}></Route>
            <Route path="/login" exact={true} component={Login}></Route>
            <Route path="./logout" exact component={Logout}></Route>
          </main>
          <Footer {...this.props} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
