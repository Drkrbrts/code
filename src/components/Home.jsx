import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import * as starterService from "../services/starterService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Home extends Component {
  state = {
    person: { firstName: "" },
  };
  componentDidMount() {
    console.log("mounted");

    starterService
      .current()
      .then(this.onGetCurrentSuccess)
      .catch(this.onGetCurrentError);
  }

  onGetCurrentSuccess = (response) => {
    console.log(response);

    starterService
      .byId(response.id)
      .then(this.onGetByIdSuccess)
      .catch(this.onGetByIdError);
  };

  onGetCurrentError = (error) => {
    console.error(error);
    this.props.history.push("/login");
  };

  onGetByIdSuccess = (response) => {
    console.log(response);

    this.setState(() => {
      let person = { ...this.state.person };

      person.firstName = response.firstName;

      return { person };
    });
  };

  onGetByIdError = (error) => {
    console.error(error);
  };

  onLogout = () => {
    starterService
      .logout()
      .then(this.onLogoutSuccess)
      .catch(this.onLogoutError);
  };

  onLogoutSuccess = (response) => {
    this.props.history.push("/login");
    toast.success("Logout Success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onLogoutError = (error) => {
    console.log(error);
  };

  render() {
    return (
      <>
        <div className="main-container">
          <Card className="well well-sm">
            <CardHeader style={{ fontWeight: "bold" }}>
              <h1>Welcome {this.state.person.firstName}</h1>
            </CardHeader>
            <CardBody>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.onLogout}
              >
                Logout
              </button>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default Home;
