import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">
                Welcome! {this.props.firstName} {this.props.lastName}
              </h1>
              <div>{this.props.email}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
