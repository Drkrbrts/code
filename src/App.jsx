import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import SiteNav from "./Components/SiteNav";
import JumboComp from "./Components/Jumbo";
import ContentComp from "./Components/Content";
import FooterComp from "./Components/Footer";
import * as userServices from "./services/userService";
import { Route } from "react-router-dom";
import Register from "./Tasks/Register";
//import Pagination from 'rc-pagination';

class App extends Component {
  componentDidMount() {
    const data = {
      email: "sabio@sabio.la",
      password: "Sabiopassword1!",
      tenantId: "bootcamp1",
    };

    userServices
      .logIn(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  }

  onActionSuccess = (response) => {
    console.log(response);
  };
  onActionError = (err) => {
    console.log(err);
  };

  // componentDidUpdate(prevProps) {
  //   let currentPath = this.props.location.pathname;
  //   let previousPath = prevProps.location.pathname;

  //   console.log("App", { currentPath, previousPath });
  // }

  render() {
    return (
      <React.Fragment>
        <SiteNav {...this.props}></SiteNav>
        <main role="main">
          <Route path="/register/" exact={true} component={Register} />
          <JumboComp {...this.props}></JumboComp>
          <ContentComp {...this.props}></ContentComp>
        </main>
        <FooterComp {...this.props}></FooterComp>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
// withRouter is a higher order component, pass to it app component
// and it gives you back another component
