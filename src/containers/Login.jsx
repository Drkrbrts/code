import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../components/LoginForm";
import { login } from "../services/usersService";

class Login extends React.Component {
  onLoginRequested = (cred) => {
    console.log("onLoginRequested firing", { cred });
    login(cred).then(this.onLoginSuccess).catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log("onLoginSuccess firing", response);

    let notify = () =>
      toast.success("Login Successful", {
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

  onLoginError = (err) => {
    console.log("onLoginError firing", err);

    let notify = () =>
      toast.error(
        "Login Error: Verify your email and password are correct and try again",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };
  render() {
    return (
      <div className="row flex mt-4 justify-content-center">
        <div className="col-2 mb-4 p-4 border border-primary rounded shadow">
          <h3 className="mb-4">Login</h3>
          <LoginForm onLoginRequested={this.onLoginRequested} />
        </div>
      </div>
    );
  }
}

export default Login;
