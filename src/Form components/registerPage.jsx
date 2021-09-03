import React from "react";
//import {userRegister}  from "../services/userServices";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class RegisterPage extends React.Component {
  /*onRegisterClicked = () => {
    const payload = {
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      passwordConfirm:"",
      avatarUrl:"",
      tenantId: "U025G4MMDEH",
    };

    userRegister(payload).then(onRegisterSuccess).catch(onRegisterError);

    function onRegisterSuccess(response) {
      console.log("User Credentials Verified...User Logged In", response.data);
    }

    function onRegisterError(response) {
      console.warn("User Credentials Failed Verification..", response.data);
    }
  };
  */
  
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U025G4MMDEH",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://api.remotebootcamp.dev/api/users/register", this.state)
      .then((response) => {
        toast.success("User Successfully Registered")
        console.log(response.data,);
      })
      .catch((error) => {
        toast.error("User Registration failed..")
        console.log(error);
      });
      
    };
   

  render() {
    let { firstName, lastName, email, password, passwordConfirm, avatarUrl } =
      this.state;
    return (
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <form onSubmit={this.registerHandler} >
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={firstName}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={lastName}
                    onChange={this.changeHandler}
                  />
                </div>
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password Confirm</label>
                  <input
                    type="password"
                    className="form-control"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Avatar Image</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://example.com"
                    name="avatarUrl"
                    value={avatarUrl}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default RegisterPage;
