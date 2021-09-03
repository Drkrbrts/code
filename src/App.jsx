import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import SiteNav from "./SiteNav";
import JumboComp from "./Jumbo";
import ContentComp from "./Content";
import FooterComp from "./Footer";
import * as userServices from "./services/userService";
import { BrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";

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

  render() {
    return (
      <BrowserRouter>
        {/* <Route path="/" exact component={Home}></Route>
        <Route path="/page-1" exact component={PageOne}></Route>
        <Route path="/page-2" exact component={PageTwo}></Route> */}
        <React.Fragment>
          <SiteNav></SiteNav>
          <main role="main">
            <JumboComp></JumboComp>
            <ContentComp></ContentComp>
          </main>
          <FooterComp></FooterComp>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
