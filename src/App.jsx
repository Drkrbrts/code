import React, { Component } from "react";
import "rc-pagination/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import SiteNav from "./Components/SiteNav";
import Jumbo from "./Components/Jumbo";
import Content from "./Components/Content";
import { Route, withRouter } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Friends from "./Components/Friends";
import FriendsForm from "./Components/FriendsForm";
import Jobs from "./Components/Jobs";
import JobsForm from "./Components/JobsForm";
import TechCoForm from "./Components/TechCompaniesForm";
import "./App.css";
import CodeChallenge from "./Components/CodeChallenge";
import TechCos from "./Components/TechCompanies";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteNav {...this.props}></SiteNav>
        <main role="main">
          <Route path="/register" exact={true} component={Register} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/jumbo" exact={true} component={Jumbo} />
          <Route path="/content" exact={true} component={Content} />
          <Route path="/friends" exact={true} component={Friends} />
          <Route path="/jobs" exact={true} component={Jobs} />
          <Route path="/jobsForm" exact={true} component={JobsForm} />
          <Route
            path="/jobsForm/:id(\d+)/edit"
            exact={false}
            component={JobsForm}
          />
          <Route path="/friendsForm" exact={true} component={FriendsForm} />
          <Route
            path="/friendsForm/:id(\d+)/edit"
            exact={false}
            component={FriendsForm}
          />
          <Route path="/techCoForm" exact={true} component={TechCoForm} />
          <Route
            path="/techCoForm/:id(\d+)/edit"
            exact={false}
            component={TechCoForm}
          />
          <Route path="/techCos" exact={true} component={TechCos} />
          <Route
            path="/codechallenge/"
            exact={true}
            component={CodeChallenge}
          />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
