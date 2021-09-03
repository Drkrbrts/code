import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import { withRouter, Route } from "react-router-dom";
import "./App.css";
// import Login from "./containers/Login";
// import Register from "./containers/Register";
// import Home from "./containers/Home";
// import LoginForm from "./components/LoginForm";
// import Friends from "./containers/Friends";
// import FriendAddEditForm from "./components/FriendAddEditForm";
// import Blogs from "./containers/Blogs";
// import TechCompanies from "./containers/TechCompanies";
// import Jobs from "./containers/Jobs";
// import JobsFormContainer from "./containers/JobsFormContainer";
// import Events from "./containers/Events";
import {
  currentUser,
  getUserById,
  login,
  logout,
} from "./services/usersService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import FriendsFormFormik from "./components/FriendsFormFormik";
import NavBar from "./containers/NavBar";
// import ProductsForm from "./codingchallenge/ProductsForm";
// import EventsPlaces from "./containers/EventsPlaces";
// import EventsFormik from "./components/EventsFormik";
import routes from "./routes/routes";
import LoadingOverlay from "./containers/LoadingOverlay";
import NotFound from "./containers/NotFound";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        id: "",
        roles: [],
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
      routeComponents: [],
      // routes: [],
    };
  }

  componentDidMount() {
    // console.log("componentDidMount firing");
    this.getCurrentUser();
  }

  componentDidUpdate(prevProps) {
    // let currentPath = this.props.location.pathname;
    // let previousPath = prevProps.location.pathname;
    // console.log("componentDidUpdate firing");
    if (this.state.routeComponents.length <= 0) {
      this.generateRouteComponents();
    }
  }

  getCurrentUser = () => {
    // console.log("getCurrentUser firing");
    currentUser().then(this.onGetUserSuccess).catch(this.onGetUserError);
  };

  onGetUserSuccess = (response) => {
    // console.log("onGetUserSuccess firing", response);
    let user = response.data.item;
    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.id = user.id;
      currentUser.roles = user.roles;
      return { currentUser, isLoggedIn: true };
    }, this.getUserById);
  };

  getUserById = () => {
    getUserById(this.state.currentUser.id)
      .then(this.onGetUserInfoSuccess)
      .catch(this.onGetUserInfoError);
  };

  onGetUserError = (err) => {
    // console.log("onGetUserError firing", err);
    if (this.state.currentUser.id) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/login");
    }
  };

  onGetUserInfoSuccess = (response) => {
    // console.log("onGetUserInfoSuccess firing", response);
    let user = response.data.item;

    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser.email = user.email;
      currentUser.avatarUrl = user.avatarUrl;
      currentUser.firstName = user.firstName;
      currentUser.lastName = user.lastName;
      return { ...prevState, currentUser, isLoggedIn: true };
    }, this.generateRouteComponents);

    if (this.props.location.pathname === "/login") {
      this.props.history.push("/");
    }
  };

  generateRouteComponents = () => {
    //if there is a user id generate anonymous and non-anonymous routes - set state
    let routeComponents = [];
    // let newRoutes = [];
    if (this.state.currentUser.id) {
      const filteredRoutes = routes.filter(this.filterRoutes);
      const mappedComponents = filteredRoutes.map(this.mapRoute);
      routeComponents = mappedComponents;
      // newRoutes = routesToMap;
    } else {
      const isAnonymousRoutes = routes.filter(
        (route) => route.isAnonymous === true
      );
      const mappedComponents = isAnonymousRoutes.map(this.mapRoute);
      routeComponents = mappedComponents;
    }

    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.routeComponents = routeComponents;
      // newState.routes = newRoutes;
      return newState;
    });
  };

  // Old Code generated anonymous routes with non-anonymous routes
  // generateRouteComponents = () => {
  //   // console.log("generateRouteComponents firing");
  //   //if there is a user id generate anonymous and non-anonymous routes - set state
  //   let routeComponents = [];
  //   // let newRoutes = [];
  //   if (this.state.currentUser.id) {
  //     const isAnonymousRoutes = routes.filter(
  //       (route) => route.isAnonymous === true
  //     );
  //     const filteredRoutes = routes.filter(this.filterRoutes);
  //     const routesToMap = isAnonymousRoutes.concat(filteredRoutes);
  //     const mappedComponents = routesToMap.map(this.mapRoute);
  //     routeComponents = mappedComponents;
  //     // newRoutes = routesToMap;
  //     // console.log("if firing", routeComponents);
  //   } else {
  //     const isAnonymousRoutes = routes.filter(
  //       (route) => route.isAnonymous === true
  //     );
  //     const mappedComponents = isAnonymousRoutes.map(this.mapRoute);
  //     routeComponents = mappedComponents;
  //     // newRoutes = isAnonymousRoutes;
  //     // console.log("else firing", routeComponents);
  //   }

  //   this.setState((prevState) => {
  //     let newState = { ...prevState };
  //     newState.routeComponents = routeComponents;
  //     // newState.routes = newRoutes;
  //     return newState;
  //   });
  // };

  filterRoutes = (route) => {
    // let roles = ["User", "Super", "Developer", "Content Manager"];
    return route?.roles?.some((role) =>
      this.state.currentUser.roles.includes(role)
    );
  };

  mapRoute = (routeData) => {
    let Component = routeData.component;
    if (routeData.path === "/login") {
      return (
        <Route
          key={routeData.path}
          path={routeData.path}
          exact={routeData.exact}
          render={(props) => (
            <Component {...props} onLoginRequested={this.onLoginRequested} />
          )}
        />
      );
    } else {
      return (
        <Route
          key={routeData.path}
          path={routeData.path}
          exact={routeData.exact}
          render={(props) => (
            <Component {...props} currentUser={this.state.currentUser} />
          )}
        />
      );
    }
  };

  onGetUserInfoError = (err) => {
    // console.log("onGetUserInfoError firing", err);
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
    // console.log("onLoginError firing", err);

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
    // console.log("onLogoutRequested firing");
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
    // console.log("onLogoutError firing", err);
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
          currentUser={this.state.currentUser}
          onLogoutRequested={this.onLogoutRequested}
          routes={this.state.routes}
        />
        <main role="main">
          <Suspense fallback={<LoadingOverlay {...this.props} />}>
            <Switch location={this.props.location}>
              {this.state.routeComponents}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </main>

        <footer className="container">
          <p>&copy; Sabio 2019-2020</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
