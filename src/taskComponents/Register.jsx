import React from "react"
import * as userService from "../services/userService";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends React.Component {

    
    state = {
        formData:{
        firstName: ""
        ,lastName: ""
        ,email: ""
        ,password: ""
        ,passwordConfirm: ""
        ,avatarUrl: ""
        ,tenantId: "UO228K6HGDD"
        ,agree: ""
        }
    }
    
   
    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;    // read current target value
        let newValue =                          // new property value
            currentTarget.type === "checkbox"   // is the current target a checkbox?
            ? currentTarget.checked             // if yes, what is the check value?
            : currentTarget.value;              // if no, what is the value of the field?

        let inputName = currentTarget.name;     // name of the current target input field example: "<input name='firstName'>"
        // inputName is coordinated with the properties of state.

        //console.log(newValue, currentTarget);

        this.setState(() => {
            let formData = {...this.state.formData}; // spread and coppy all of the existing properties of form data

            formData[inputName] = newValue;     // changing just one input and giving it the property of the new value
            // bracket notation must be used to bind state to the form fields.

            return { formData };
        })
    }

    onClickRegisterHandler = (e) => {
        e.preventDefault();
        let box = this.state.formData;
        //console.log("registerData", this.props.registerData)
        if (box.agree === true)
        {
            if (box.email.includes("@") && box.email.includes(".com"))
            {
                if (box.avatarUrl.includes("https://") && box.avatarUrl.includes(".jpg"))
                {

                    userService.register(box)
                    .then(this.onActionSuccess)
                    .catch(this.onActionError);
                
                }
                else{
                    toast.error("You must enter a valid image url");
                }
            }
            else{
                toast.error("You must enter a valid email");
            }
        }
        else{
            toast.error("You must agree to the terms before registering");
        }
    }
    
    onActionSuccess = (response) => {
        //console.log("Register success:",response)
        toast.success("You are successfully registered!");
        this.props.history.push("/")
    
    }
    
    onActionError= (errResponse) => {
        let serverResponse = {error:errResponse};
        let responseError = serverResponse.error.response.data.errors[0];

        // console.log("login error:",{error: errResponse})
        toast.error(responseError);
    }

    onLoginButtonClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onLoginButtonClicked was clicked",seconds)
        this.props.history.push("/Login")
    }

    render() {

        return (
            <React.Fragment>

                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card border-rad">
                        <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            
                            <form id="first-form">
            
                            <div className="form-outline mb-4">
                                <input
                                value={this.state.formData.firstName}
                                onChange={this.onFormFieldChanged} 
                                placeholder="First Name:" 
                                name="firstName" 
                                type="text" 
                                id="firstName" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.lastName}
                                onChange={this.onFormFieldChanged}
                                placeholder="Last Name:"  
                                name="lastName"
                                type="text" 
                                id="lastName" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.email}
                                onChange={this.onFormFieldChanged}
                                name="email"
                                placeholder="Email:"  
                                type="email" 
                                id="email" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.password}
                                onChange={this.onFormFieldChanged}
                                name="password"
                                placeholder="Password:"  
                                type="password" 
                                id="password" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.passwordConfirm}
                                onChange={this.onFormFieldChanged}
                                name="passwordConfirm"
                                placeholder="Retype Password:"  
                                type="password" 
                                id="passwordConfirm" 
                                className="form-control form-control-lg" />
                            </div>

                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.formData.avatarUrl}
                                onChange={this.onFormFieldChanged}
                                name="avatarUrl"
                                placeholder="Avatar url:"  
                                type="url" 
                                id="avatarUrl" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-check d-flex justify-content-center mb-4">
                                <input
                                value="321"
                                onChange={this.onFormFieldChanged}
                                name="agree"
                                className="form-check-input me-2"
                                checked={this.state.formData.agree}
                                type="checkbox"
                                id="agree"
                                />
                                <label className="form-check-label" htmlFor="form-agree-check">
                                I agree to the <a href="#!" className="text-body"><u>Terms of service</u></a>
                                </label>
                            </div>
            
                            <div className="d-flex justify-content-center">
                                <button
                                onClick={this.onClickRegisterHandler}
                                type="submit" 
                                className="btn btn-warning sign-in-button">
                                    Submit
                                </button>
                            </div>
            
                            <p className="text-center text-muted mt-3 mb-0">
                                Already have an account? 
                                <button
                                onClick={this.onLoginButtonClicked} 
                                className="nav-link px-2 fw-bold text-dark link-button">
                                    Login here
                                    </button>
                            </p>
            
                            </form>
            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </React.Fragment>

        );
    }    
};

export default Register;