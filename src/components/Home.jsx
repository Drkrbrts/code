//import { data } from "jquery";
import React from "react";
import { userCurrent, userRecord } from "../services/userService";
class Home extends React.Component {
  state = {
    currentUser: {
      firstName: "",
    },
  };
  componentDidMount() {
    userCurrent()
      .then(this.onUserCurrentSuccess)
      .then(userRecord)
      .then(this.onUserRecordSuccess)
      .catch(this.onUserCurrentError);
  }
  onUserCurrentSuccess = (response) => {
    console.log("this userCurrent", response);
    return response.data.item.id;
  };
  onUserCurrentError = (err) => {
    console.log(err);
  };

  onUserRecordSuccess = (response) => {
    console.log(response);
    this.setState((prevstate) => {
      return {
        currentUser: response.data.item,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* <userService></userService>; */}
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">
                Hi {this.state.currentUser.firstName}, here's your personalized
                message.{" "}
              </h1>
              <p className="col-md-8 fs-4">
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
              </p>
              <p>
                <button className="btn btn-primary btn-lg">
                  Learn more &raquo;
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
