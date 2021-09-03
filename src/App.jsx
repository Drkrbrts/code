import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import SiteNav from "./components/SiteNav";
import FooterComp from "./components/Footer";
//import * as userService from "./services/userService";
import { Route } from "react-router-dom";
import Register from "./tasks/Register";
import LogIn from "./tasks/LogIn";
import UserHome from "./tasks/UserHome";
import AddFriend from "./friends/FriendsForm";
import ViewFriends from "./friends/AllFriends";
import EditFriend from "./friends/EditFriend";
//import Pagination from 'rc-pagination';

class App extends Component {
  componentDidMount() {
    //   const data = {
    //     email: "maricruz_gallardo@yahoo.com",
    //     password: "Password1!",
    //     tenantId: "U025CN3CN01",
    //   };
    //   userService
    //     .logIn(data)
    //     .then(this.onActionSuccess)
    //     .catch(this.onActionError);
    // }
    // onActionSuccess = (response) => {
    //   console.log(response);
    // };
    // onActionError = (err) => {
    //   console.log(err);
  }

  render() {
    return (
      <>
        <SiteNav {...this.props} />
        <main role="main">
          <Route
            path="/register/"
            exact={true}
            component={Register}
            {...this.props}
          />
          <Route
            path="/login/"
            exact={true}
            component={LogIn}
            {...this.props}
          />
          <Route
            path="/userHome/"
            exact={true}
            component={UserHome}
            {...this.props}
          />
          <Route
            path="/friends"
            exact={true}
            component={AddFriend}
            {...this.props}
          />
          <Route
            path="/all-friends"
            exact={true}
            component={ViewFriends}
            {...this.props}
          />
          <Route
            path="/friends/edit/"
            exact={false}
            component={EditFriend}
            {...this.props}
          />
        </main>
        <FooterComp {...this.props} />
      </>
    );
  }
}

export default withRouter(App);
// withRouter is a higher order component, pass to it app component
// and it gives you back another component
