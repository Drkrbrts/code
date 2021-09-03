import React from "react";

class LoggedOutHomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>
          Please Log In Or Sign Up For Full Access
        </h1>
        <h3 style={{ textAlign: "center" }}>
          (Can be found in upper right hand corner)
        </h3>
      </React.Fragment>
    );
  }
}

export default LoggedOutHomePage;
