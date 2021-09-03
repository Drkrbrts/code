import React, { Component } from "react";
import { withRouter, Route, NavLink } from "react-router-dom";
import "./App.css";
// import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import LoginForm from "./components/LoginForm";
import Friends from "./containers/Friends";
import FriendAddEditForm from "./components/FriendAddEditForm";
import Blogs from "./containers/Blogs";
import TechCompanies from "./containers/TechCompanies";
import Jobs from "./containers/Jobs";
import JobsFormContainer from "./containers/JobsFormContainer";
import Events from "./containers/Events";
import {
  currentUser,
  getUserById,
  login,
  logout,
} from "./services/usersService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        roles: [],
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
      },
      isLoggedIn: false,
      formData: {
        email: "",
        password: "",
      },
    };
  }

  componentDidMount() {
    // console.log("onComponentDidMount firing");
    this.getCurrentUser();
  }

  // componentDidUpdate(prevProps) {
  //   let currentPath = this.props.location.pathname;
  //   let previousPath = prevProps.location.pathname;
  //   console.log({ currentPath, previousPath });
  // }

  getCurrentUser = () => {
    // console.log("getCurrentUser firing");
    currentUser()
      .then(this.onGetUserSuccess)
      .then(getUserById)
      .then(this.onGetUserInfoSuccess)
      .catch(this.onGetUserError);
  };

  onGetUserSuccess = (response) => {
    // console.log("onGetUserSuccess firing", response);
    let user = response.data.item;
    // this.setState((prevState) => {
    //   let currentUser = { ...prevState.currentUser };
    //   currentUser.id = user.id;
    //   currentUser.roles = user.roles;
    //   return { currentUser, isLoggedIn: true };
    // },()=>  );
    return user.id;
  };

  onGetUserError = (err) => {
    console.log("onGetUserError firing", err);

    this.props.history.push("/login");
  };

  onGetUserInfoSuccess = (response) => {
    // console.log("onGetUserInfoSuccess firing", response);
    let currentUser = response.data.item;

    this.setState(() => {
      return { currentUser, isLoggedIn: true };
    });

    if (this.props.location.pathname === "/login") {
      this.props.history.push("/home");
    }
  };

  onGetUserInfoError = (err) => {
    console.log("onGetUserInfoError firing", err);
  };

  onLoginRequested = (cred) => {
    // console.log("onLoginRequested firing", { cred });
    login(cred).then(this.onLoginSuccess).catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    // console.log("onLoginSuccess firing", response);

    let notify = () =>
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    notify();

    this.getCurrentUser();
  };

  onLoginError = (err) => {
    console.log("onLoginError firing", err);

    let notify = () =>
      toast.error(
        "Login Error: Verify your email and password are correct and try again",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };

  onLogoutClicked = () => {
    console.log("onLogoutClicked firing");
    logout().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };

  onLogoutSuccess = (response) => {
    console.log("onLogoutSuccess firing", response);
    this.setState(() => {
      let newState = {
        currentUser: {
          roles: [],
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          avatar: "",
        },
        isLoggedIn: false,
        formData: {
          email: "",
          password: "",
        },
      };

      return newState;
    }, this.props.history.push("/login"));
  };

  onLogoutError = (err) => {
    console.log("onLogoutError firing", err);
  };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            {this.state.isLoggedIn ? (
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                <a
                  href="/home"
                  className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                >
                  <img
                    src="https://pw.sabio.la/images/Sabio.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Sabio"
                  />
                </a>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 align-items-center justify-content-center mb-md-0">
                  <li>
                    <NavLink to="/home">
                      <span className="px-2">Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/friends">
                      <span className="px-2">Friends</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs">
                      <span className="px-2">Blogs</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/techcompanies">
                      <span className="px-2">Tech Companies</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/jobs">
                      <span className="px-2">Jobs</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/events">
                      <span className="px-2">Events</span>
                    </NavLink>
                  </li>
                </ul>

                <div className="text-end">
                  <span>{this.state.currentUser.email}</span>
                  <img
                    src={this.state.currentUser.avatarUrl}
                    width="40"
                    height="40"
                    className="d-inline-block align-top mx-2 rounded-circle"
                    alt="Sabio"
                  />
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={this.onLogoutClicked}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                <img
                  src="https://pw.sabio.la/images/Sabio.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Sabio"
                />
                <div className="text-end">
                  <NavLink to="/login">
                    <button
                      type="button"
                      className="btn btn-outline-light me-2"
                    >
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button type="button" className="btn btn-info">
                      Register
                    </button>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </header>
        <main role="main">
          <Route
            path="/home"
            exact={true}
            render={() => (
              <Home
                currentUser={this.state.currentUser}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route path="/register" exact={true} component={Register} />
          <Route
            path="/login"
            exact={true}
            render={() => (
              <LoginForm onLoginRequested={this.onLoginRequested} />
            )}
          />
          <Route
            path="/friends"
            exact={true}
            render={(props) => (
              <Friends currentUser={this.state.currentUser} {...props} />
            )}
          />
          {/* <Route
            path="/friends/add"
            exact={true}
            render={(props) => (
              <FriendAddEditForm
                currentUser={this.state.currentUser}
                {...props}
              />
            )}
          /> */}
          <Route
            path="/friends/add/:friendId(\d+)"
            exact={true}
            render={(props) => (
              <FriendAddEditForm
                currentUser={this.state.currentUser}
                {...props}
              />
            )}
          />
          <Route
            path="/blogs"
            exact={true}
            render={(props) => (
              <Blogs currentUser={this.state.currentUser} {...props} />
            )}
          />
          <Route
            path="/techcompanies"
            exact={true}
            render={(props) => (
              <TechCompanies currentUser={this.state.currentUser} {...props} />
            )}
          />
          <Route
            path="/jobs"
            exact={true}
            render={(props) => (
              <Jobs currentUser={this.state.currentUser} {...props} />
            )}
          />
          <Route
            path="/jobs/form"
            exact={true}
            render={(props) => <JobsFormContainer {...props} />}
          />
          <Route
            path="/jobs/form?jobId=:jobId(\d+)"
            exact={true}
            render={(props) => <JobsFormContainer {...props} />}
          />
          <Route
            path="/events"
            exact={true}
            render={(props) => (
              <Events currentUser={this.state.currentUser} {...props} />
            )}
          />
        </main>

        <footer className="container">
          <p>&copy; Sabio 2019-2020</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
