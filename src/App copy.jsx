import React, { Component } from "react";
import { withRouter, Route, NavLink } from "react-router-dom";
import "./App.css";
// import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import LoginForm from "./components/LoginForm";
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
    console.log("onComponentDidMount firing");
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    console.log("getCurrentUser firing");
    currentUser()
      .then(this.onGetUserSuccess)
      .then(getUserById)
      .then(this.onGetUserInfoSuccess)
      .catch(this.onGetUserError);
  };

  onGetUserSuccess = (response) => {
    console.log("onGetUserSuccess firing", response);
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
    console.log("onGetUserInfoSuccess firing", response);
    let currentUser = response.data.item;

    this.setState(() => {
      return { currentUser, isLoggedIn: true };
    });

    this.props.history.push("/home");
  };

  onGetUserInfoError = (err) => {
    console.log("onGetUserInfoError firing", err);
  };

  onLoginRequested = (cred) => {
    console.log("onLoginRequested firing", { cred });
    login(cred).then(this.onLoginSuccess).catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log("onLoginSuccess firing", response);

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
    });
    this.props.history.push("/login");
  };

  onLogoutError = (err) => {
    console.log("onLogoutError firing", err);
  };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
              {this.state.isLoggedIn ? (
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
              ) : (
                <img
                  src="https://pw.sabio.la/images/Sabio.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Sabio"
                />
              )}
              {this.state.isLoggedIn && (
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li>
                    <NavLink to="/home">
                      <button className="nav-link px-2 text-secondary link-button">
                        Home
                      </button>
                    </NavLink>
                  </li>
                  <li>
                    <button className="nav-link px-2 text-white link-button">
                      Features
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      FAQs
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      About
                    </button>
                  </li>
                </ul>
              )}
              {!this.state.isLoggedIn ? (
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
              ) : (
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={this.onLogoutClicked}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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
          {!this.state.isLoggedIn && (
            <Route
              path="/login"
              exact={true}
              render={() => (
                <LoginForm onLoginRequested={this.onLoginRequested} />
              )}
            />
          )}
        </main>

        <footer className="container">
          <p>&copy; Sabio 2019-2020</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
