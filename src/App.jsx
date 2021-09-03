import React, { Component } from "react";
// import { Route } from "react-router-dom";
import SiteNav from "./Components/SiteNav";
import { withRouter } from "react-router-dom";
// import Register from "./Components/Register";
// import Login from "./Components/Login";
import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import Friends from "./Components/Friends";
// import AddFriend from "./Components/AddFriend";
// import Jobs from "./Components/Jobs";
// import AddJob from "./Components/AddJob";
// import TechCo from "./Components/TechCo";
// import AddTechCo from "./Components/AddTechCo";
// import Events from "./Components/Events";
import Cars from "./Components/CodingChallenge/Components/Cars";

import "./App.css";

class App extends Component {
  // state = {
  //   currentUser: { isLoggedIn: true },
  // };

  // componentDidUpdate(prevProps) {
  //   const { state: propState } = this.props.location;

  //   if (
  //     propState &&
  //     propState.type === "LOGOUT" &&
  //     this.state.currentUser.isLoggedIn
  //   ) {
  //     console.log(" I should be logging out.");
  //     this.setState(() => {
  //       return { currentUser: { isLoggedIn: false } };
  //     });
  //   }
  // }
  render() {
    return (
      <React.Fragment>
        <SiteNav></SiteNav>
        <Cars></Cars>
        {/* <Route path="/register" exact={true} component={Register}></Route>
        <Route path="/login" exact={true} component={Login}></Route>
        <Route path="/home" exact={true} component={Home}></Route>
        <Route path="/friends" exact={true} component={Friends}></Route>
        <Route path="/friends/new" exact={true} component={AddFriend}></Route>
        <Route
          path="/friends/:id/edit"
          exact={true}
          component={AddFriend}
        ></Route>
        <Route path="/jobs" exact={true} component={Jobs}></Route>
        <Route path="/addjobs" exact={true} component={AddJob}></Route>
        <Route path="/addjobs/:id/edit" exact={true} component={AddJob}></Route>
        <Route path="/techco" exact={true} component={TechCo}></Route>
        <Route path="/techco/new" exact={true} component={AddTechCo}></Route>
        <Route
          path="/techco/:id/edit"
          exact={true}
          component={AddTechCo}
        ></Route>
        <Route path="/events" exact={true} component={Events}></Route> */}

        <main role="main"></main>
        <footer className="container">
          <Footer></Footer>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
