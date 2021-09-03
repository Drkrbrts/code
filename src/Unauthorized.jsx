import React, { Component } from "react";

class Unauthorized extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-12 p-3">
            <h1>401 Unauthorized</h1>
            <h4>Please log in to continue</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Unauthorized;
