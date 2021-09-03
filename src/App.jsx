import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import { withRouter, Route } from "react-router-dom";
import "./App.css";
import { currentUser, login, logout } from "./services/usersService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./containers/NavBar";
import routes from "./routes/routes";
import LoadingOverlay from "./containers/LoadingOverlay";
import NotFound from "./containers/NotFound";

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
      isAnonymous: true,
      formData: {
        email: "",
        password: "",
      },
      routeComponents: [],
      initialRoutes: this.generateRouteComponents(),
    };
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    currentUser()
      .then(this.onGetUserInfoSuccess)
      .catch(this.onGetUserInfoError);
  };

  onGetUserInfoSuccess = (response) => {
    console.log("onGetUserInfoSuccess firing", response.data.item);
    let gotUser = response.data.item;
    let roles = [];
    gotUser.roles.forEach((r) => roles.push(r.role));
    gotUser.roles = roles;

    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser = gotUser;
      return {
        ...prevState,
        currentUser,
        isLoggedIn: true,
        isAnonymous: false,
      };
    }, this.generateRouteComponents);

    if (this.props.location.pathname === "/login") {
      this.props.history.push("/");
    }
  };

  generateRouteComponents = () => {
    //console.log("generateRouteComponents firing");

    const isAnonymousRoutes = routes.filter(
      (route) => route.isAnonymous === true
    );
    //console.log(isAnonymousRoutes);
    let filteredRoutes = [];
    if (this.state && this.state.isAnonymous === false) {
      filteredRoutes = routes.filter(this.filterRoutes);
      //console.log("filtered roles", filteredRoutes);
    }
    const routesToMap = isAnonymousRoutes.concat(filteredRoutes);
    //console.log("routesToMap", routesToMap);

    const mappedRouteComponents = routesToMap.map(this.mapRoute);
    //console.log("mapped routes", mappedRouteComponents);

    if (this.state && this.state.currentUser.id) {
      this.setState((prevState) => {
        let newState = { ...prevState };
        newState.initialRoutes = mappedRouteComponents;
        return newState;
      });
    } else if (this.state && this.state.isAnonymous === true) {
      this.setState((prevState) => {
        let newState = { ...prevState };
        newState.initialRoutes = mappedRouteComponents;
        return newState;
      });
    } else {
      return mappedRouteComponents;
    }
  };

  filterRoutes = (route) => {
    return route?.roles?.some((role) =>
      this.state.currentUser?.roles.includes(role)
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
    console.log("onGetUserInfoError firing", err);
    if (this.state.currentUser.id) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/login");
    }
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

    this.setState(
      () => {
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
          isAnonymous: true,
          formData: {
            email: "",
            password: "",
          },
        };
        return newState;
      },
      () => {
        this.generateRouteComponents();
        this.props.history.push("/login");
      }
    );
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
          email={this.state.currentUser.email}
          avatar={this.state.currentUser.avatarUrl}
          onLogoutRequested={this.onLogoutRequested}
        />
        <main role="main">
          <Suspense fallback={<LoadingOverlay {...this.props} />}>
            <Switch location={this.props.location}>
              {this.state.initialRoutes}
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
