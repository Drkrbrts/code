import React, { Component, Suspense } from "react";
import { Switch } from "react-router-dom";
import { withRouter, Route } from "react-router-dom";
import "./App.css";
import {
  currentUser,
  getUserById,
  login,
  logout,
} from "./services/usersService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./containers/NavBar";
import routes from "./routes/routes";
import LoadingOverlay from "./containers/LoadingOverlay";
import NotFound from "./containers/NotFound";

/*
  const routes = [{path = "" ,component="",roles: [""]}]

  mapRoutes=(route) =>{
    return <Route path={route.path}>
  }

*/
// const roles = ["User", "Super"];

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
      routeComponents: [],
      initialRoutes: this.generateRouteComponents(),
    };
    console.log("constructor firing");
  }

  componentDidMount() {
    console.log("componentDidMount firing");
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    // console.log("getCurrentUser firing");
    currentUser()
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
    console.log("onGetUserInfoSuccess firing", response.data.item);
    let gotUser = response.data.item;
    let roles = [];
    gotUser.roles.forEach((r) => roles.push(r.role));
    gotUser.roles = roles;

    this.setState((prevState) => {
      let currentUser = { ...prevState.currentUser };
      currentUser = gotUser;
      return { ...prevState, currentUser, isLoggedIn: true };
    }, this.generateRouteComponents);

    if (this.props.location.pathname === "/login") {
      this.props.history.push("/");
    }
  };

  generateRouteComponents = () => {
    console.log("generateRouteComponents firing");
    //filter routes based on roles, then generate mappedRoutes
    const isAnonymousRoutes = routes.filter(
      (route) => route.isAnonymous === true
    );
    const filteredRoutes = routes.filter(this.filterRoutes);
    const routesToMap = isAnonymousRoutes.concat(filteredRoutes);
    // console.log("routesToMap", routesToMap);

    // console.log("generateRouteComponents");
    const mappedRouteComponents = routesToMap.map(this.mapRoute);
    // console.log(mappedRouteComponents);

    return mappedRouteComponents;
  };

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
          email={this.state.currentUser.email}
          avatar={this.state.currentUser.avatarUrl}
          onLogoutRequested={this.onLogoutRequested}
        />
        <main role="main">
          <Suspense fallback={<LoadingOverlay {...this.props} />}>
            <Switch location={this.props.location}>
              {this.state.initialRoutes}
              {/* <Route component={NotFound} /> */}
            </Switch>
          </Suspense>
          {/* {this.state.routeComponents && this.state.routeComponents} */}

          {/* <Route
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
          /> */}
        </main>

        <footer className="container">
          <p>&copy; Sabio 2019-2020</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
