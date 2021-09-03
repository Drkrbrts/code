import React from "react";
import { confirmUser } from "../services/usersService";

class ConfirmUser extends React.Component {
  componentDidMount = () => {
    let email = this.props.match.params.email;
    console.log(email);
    confirmUser(email).then(this.onConfirmSuccess).catch(this.onCOnfirmError);
  };

  onConfirmSuccess = (response) => {
    console.log("onConfirmSuccess firing", response);
  };

  onConfirmError = (err) => {
    console.log("onConfirmError firing", err);
  };

  render() {
    return (
      <div
        className="container mt-5 d-flex justify-content-center align-items-center"
        style={{ height: "500px" }}
      >
        <h1 className="text-center">Thank You For Confirming Your Email</h1>
      </div>
    );
  }
}
export default ConfirmUser;
