import React from "react";
import RegisterForm from "../components/RegisterForm";
import { register } from "../services/usersService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends React.Component {
  onRegisterRequested = (formData) => {
    console.log("onRegisterRequested firing", formData);
    register(formData)
      .then(this.onRegisterUserSuccess)
      .catch(this.onRegisterUserError);
  };

  onRegisterUserSuccess = (response) => {
    console.log("onRegisterUserSuccess firing", response);

    let notify = () =>
      toast.success("You have completed registration", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });

    notify();

    this.props.history.push("/");
  };

  onRegisterUserError = (err) => {
    console.log("onRegisterUserError firing", err);

    let notify = () =>
      toast.error("Unable to perform registration", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    notify();
  };

  render() {
    return (
      <div className="container">
        <div className="row flex mt-4 justify-content-center">
          <div className="col-5 mb-4 p-4 border rounded border-primary shadow">
            <h3 className="mb-4">Register</h3>
            <RegisterForm onRegister={this.onRegisterRequested} />
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
