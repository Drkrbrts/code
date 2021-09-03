import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import "./App.css";
// import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import LoginForm from "./components/LoginForm";
import Friends from "./containers/Friends";
// import FriendAddEditForm from "./components/FriendAddEditForm";
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
import FriendsFormFormik from "./components/FriendsFormFormik";
import NavBar from "./containers/NavBar";
import ProductsForm from "./codingchallenge/ProductsForm";
import EventsPlaces from "./containers/EventsPlaces";
import EventsFormik from "./components/EventsFormik";

/*
  const routes = [{path = "" ,component="",roles: [""]}]

  mapRoutes=(route) =>{
    return <Route path={route.path}>
  }

*/

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
        avatarUrl: "",
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
      this.props.history.push("/");
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

  onLogoutRequested = () => {
    console.log("onLogoutRequested firing");
    logout().then(this.onLogoutSuccess).catch(this.onLogoutError);
  };

  onLogoutSuccess = (response) => {
    // console.log("onLogoutSuccess firing", response);
    let notify = () =>
      toast.success("Logout Successful", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    notify();

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
    let notify = () =>
      toast.error("There was an error logging out.  Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    notify();
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          email={this.state.currentUser.email}
          avatar={this.state.currentUser.avatarUrl}
          onLogoutRequested={this.onLogoutRequested}
        />
        <main role="main">
          <Route
            path="/"
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
            path="/friends/add/:friendId(\d+)"
            exact={true}
            render={(props) => (
              <FriendAddEditForm
                currentUser={this.state.currentUser}
                {...props}
              />
            )}
          /> */}
          <Route
            path="/friends/formik"
            exact={true}
            render={(props) => (
              <FriendsFormFormik
                currentUser={this.state.currentUser}
                {...props}
              />
            )}
          />
          <Route
            path="/friends/formik/:friendId(\d+)"
            exact={true}
            render={(props) => (
              <FriendsFormFormik
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
          <Route
            path="/events/places"
            exact={true}
            render={(props) => (
              <EventsPlaces currentUser={this.state.currentUser} {...props} />
            )}
          />
          <Route
            path="/events/formik"
            exact={true}
            render={(props) => (
              <EventsFormik currentUser={this.state.currentUser} {...props} />
            )}
          />
          <Route
            path="/events/formik/:eventSlug"
            exact={true}
            render={(props) => (
              <EventsFormik currentUser={this.state.currentUser} {...props} />
            )}
          />
          <Route
            path="/products"
            exact={true}
            render={(props) => (
              <ProductsForm currentUser={this.state.currentUser} {...props} />
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
