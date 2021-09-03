import React from "react";
import { withRouter } from "react-router-dom";

class EventLeft extends React.Component {
  render() {
    return <h1>Left side</h1>;
  }
}

export default withRouter(EventLeft);
