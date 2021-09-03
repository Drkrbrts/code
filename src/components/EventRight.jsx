import React from "react";
import { withRouter } from "react-router-dom";

class EventRight extends React.Component {
  render() {
    return <h1>Right side</h1>;
  }
}

export default withRouter(EventRight);
