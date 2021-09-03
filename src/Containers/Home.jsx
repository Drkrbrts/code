import React from "react";

import * as userService from "../services/userService";

class Home extends React.Component {
  onLogOutClick = () => {
    console.log("Yep Let's log out");
    userService.logout().then(this.onLogOutSuccess).catch(this.onLogOutError);
    this.props.history.push("/");
  };

  onLogOutSuccess = () => {};
  onLogOutError = (err) => {
    console.log(err);
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">
                Welcome {userService.current.name}
              </h1>
              <p className="col-md-8 fs-4">
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
              </p>
              <p>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={this.onLogOutClick}
                >
                  Log Out &raquo;
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
