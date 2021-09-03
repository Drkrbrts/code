import React from 'react'
import "../../css/auth-forms.css"
import logIn from "../../services/userServices.js"
import { toast } from 'react-toastify';
import SecondNav from '../SecondNav';

class LoginPage extends React.Component {

  state = {
    formData: {
      email: "swise@gmail.com", 
      password: "Password1!",
      tenantId: "132l4kj"
    }
  }

  isLoggedIn = () => {
    // If user is logged in, redirect to home page.
  }

  onClickHandler = (e) => {
    e.preventDefault()
    logIn(this.state.formData)
    .then(this.onUserLoginSuccess)
    .catch(this.onUserLoginError);
  }

  onFormFieldChanged = (e) => {
    let currentValue = e.target.value
    
    let isEmail = e.target.id === "emailAdd"
    let isPassword = e.target.id === "password"

    // @TODO 
    this.setState(()=> {
      let newValue = currentValue;
      let newState = {};
      newState.formData = {}
 
    if(isEmail) {
      newState.formData.email = newValue
    }

    if(isPassword) {
      newState.formData.password = newValue
    }

    newState.formData.tenantId = "132l4kj"

    console.log(newState)
      return newState
    })
  }
  
   onUserLoginSuccess(res) {
    console.log("onUserLoginSuccess");
    console.log(res);
    toast.success("Now Logged In")
    // Display successful toast
    
    // Redirect to the home page
  }
  onUserLoginError(err) {
    console.log("onUserLoginError");
    console.log(err);
    toast.error("Error. Check your details and try again.")
  }

  render() {
    return(
      <div className="container-fluid">
        <SecondNav></SecondNav>
        <div className="form-popup-container">
        </div>
        <div className="container-fluid form-container">
          <div className="page-title">
            <h4>Please Login</h4>
          </div>
          <form>
            <div className="row">
              <div className="col-md-12 form-col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="emailAdd"
                  value={this.state.formData.email}
                  onChange={this.onFormFieldChanged}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-col">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  value={this.state.formData.password}
                  onChange={this.onFormFieldChanged}
                />
              </div>
            </div>
          </form>
          <div className="row">
            <p><a href="/login">I forgot my password</a></p>
            {/* <p><a href="/register">Register for an account</a></p> */}
          </div>
          <button type="button" className="btn btn-primary" id="loginUser" onClick={this.onClickHandler}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}
export default LoginPage