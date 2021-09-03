import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteNav {...this.props} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
