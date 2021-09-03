import React from "react";
import Navbar from "./Navbar";

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <h2
              className="text-center"
              style={{ "font-family": "Franklin Gothic Medium" }}
            >
              Welcome Sabio Fellow!
            </h2>
            <p className="text-center welcome-message p-3">current user:</p>
            <div className="col-md-12 text-center">
              <button className="btn btn-danger logout">
                <a className="text-white" href="loginPage.html">
                  Logout
                </a>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
