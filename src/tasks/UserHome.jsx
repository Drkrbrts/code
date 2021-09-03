import React from "react";
import UserNav from "../components/UserNav";
import { Route } from "react-router-dom";
// import Register from "./tasks/Register";
// import LogIn from "./tasks/LogIn";
import FooterComp from "../components/Footer";

class UserHome extends React.Component {
  render() {
    return (
      <>
        <UserNav {...this.props} />
        <main role="main">
          {/* <Route
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
          /> */}
        </main>
        <FooterComp {...this.props} />
      </>
    );
  }
}

export default UserHome;
