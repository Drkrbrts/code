import React from "react";
import * as userService from "../services/userService";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center p-5">Welcome {this.props.firstNameUser}</h1>;
      </div>
    );
  }
}

export default HomePage;
