import React from "react";
import axios from "axios";

class Jumbo extends React.Component {
  onUserLoginClicked = () => {
    console.log("user log in firing.");
    var userPayload = {
      email: "cfaortiz@gmail.com",
      password: "Force28839!",
      tenantId: "U025GSH64FN",
    };
    this.logIn(userPayload).then(this.onLogInSuccess).catch(this.onLogInError);
  };

  logIn = (payload) => {
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/login",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config);
  };

  onLogInSuccess(response) {
    console.log("response: ", response);
  }

  onLogInError(response) {
    console.log("response:", response);
  }

  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Hello, world!</h1>
              <p className="col-md-8 fs-4">
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
              </p>
              <p>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={this.onUserLoginClicked}
                >
                  User Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbo;
