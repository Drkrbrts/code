import React from 'react'
import "../../css/auth-forms.css"
import { userRegister } from "../../services/userServices.js"
import { toast } from 'react-toastify';
import SecondNav from "../SecondNav"

class RegisterPage extends React.Component {

  state = {
    formData: {
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@gmail.com",
      password: "Password1!",
      passwordConfirm: "Password1!",
      avatarUrl: "https://bit.ly/3iZdRGY",
      tenantId: Date.now(),
    },

  }

  isRegistered = () => {
    // If user is logged in/registered, redirect to home page.
  }

  onClickHandler = (e) => {
    e.preventDefault()
    
    // @BUG the only the last form edited is picked up and set in state. Other values are ignored
    // Refactor onFormFieldChanged
    console.log(this.state.formData)
    // userRegister(this.state.formData)
    // .then(this.onUserRegisterSuccess)
    // .catch(this.onUserRegisterError);
  }

  onFormFieldChanged = (e) => {
  
    let isEmail = e.target.id === "emailAdd"
    let isPassword = e.target.id === "password"
    let isPasswordConfirm = e.target.id === "passwordConfirm"
    let isAvatar = e.target.id === "avatarURL"
    let isFirstName = e.target.id === "firstName"
    let isLastName = e.target.id === "lastName"

    this.setState(()=> {
      let inputValue = e.target.value;
      let newState = {}
      newState.formData = {}
 
    if(isEmail) {
      newState.formData.email = inputValue
    }

    if(isPassword) {
      newState.formData.password = inputValue
    }

    if(isPasswordConfirm) {
      newState.formData.passwordConfirm = inputValue
    }

    if(isAvatar) {
      newState.formData.avatarUrl = inputValue
    }

    if(isFirstName) {
      newState.formData.firstName = inputValue
    }

    if(isLastName) {
      newState.formData.lastName = inputValue
    }

    newState.formData.tenantId = Date.now()

    return newState
    })
  }
  
   onUserRegisterSuccess(res) {
    console.log("onUserRegisterSuccess");
    console.log(res);
    toast.success("Now Registered")
    // Display successful toast
    
    // Redirect to the home page
  }
  onUserRegisterError(err) {
    console.log("onUserRegisterError");
    console.log(err);
    toast.error("Error. Check your details and try again.")
  }

  render() {
    return (
      <div className="container-fluid">
        <SecondNav></SecondNav>
        <div className="form-popup-container"></div>
        <div className="container-fluid form-container">
        <div className="page-title">
          <h4>Please Register</h4>
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
              <div className="col-md-12 form-col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Avatar URL"
                  id="avatarURL"
                  value={this.state.formData.avatarURL}
                  onChange={this.onFormFieldChanged}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="firstName"
                  value={this.state.formData.firstName}
                  onChange={this.onFormFieldChanged}                    
                />
              </div>
              <div className="col-md-12 form-col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  id="lastName"
                  value={this.state.formData.lastName}
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
              <div className="col-md-12 form-col">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password Confirm"
                  id="passwordConfirm"
                  value={this.state.formData.passwordConfirm}
                  onChange={this.onFormFieldChanged}                  
                />
              </div>
            </div>
          </form>
          <div className="row">
            <p><a href="/login">Login to account</a></p>
          </div>
          <button type="button" className="btn btn-primary" id="registerUser" onClick={this.onClickHandler}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default RegisterPage