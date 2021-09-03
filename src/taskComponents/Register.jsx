import React from "react"
// import * as userService from "../services/userService";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends React.Component {

    state = {
        "firstName": ""
        ,"lastName": ""
        ,"email": ""
        ,"password": ""
        ,"passwordConfirm": ""
        ,"avatarUrl": ""
        ,"check": ""
    }

    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value
        //console.log(newValue, currentTarget);

        this.setState(() => {
            let newState = {};

            newState.firstName = newValue;
            console.log('newState', newState.firstName)

            return newState;
        })
    }

    onClickRegisterHandler = (e) => {
        e.preventDefault();

        toast.success("You are successfully registered!");

        // userService.register(data)
        // .then(this.onActionSuccess)
        // .catch(this.onActionError);
    
    }
    
    onActionSuccess = (response) => {
        console.log("Register success:",response)
        toast.success("You are successfully registered!");
        this.props.history.push("/")
    
    }
    
    onActionError= (errResponse) => {
        console.log("login error:",{error: errResponse})
        toast.danger("There was an error registering!");
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
                                value={this.state.firstName}
                                onChange={this.onFormFieldChanged} 
                                placeholder="First Name:" 
                                name="firstName" 
                                type="text" 
                                id="firstName" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.lastName}
                                onChange={this.onFormFieldChanged}
                                placeholder="Last Name:"  
                                name="lastName"
                                type="text" 
                                id="lastName" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.email}
                                onChange={this.onFormFieldChanged}
                                name="email"
                                placeholder="Email:"  
                                type="email" 
                                id="email" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.password}
                                onChange={this.onFormFieldChanged}
                                name="password"
                                placeholder="Password:"  
                                type="password" 
                                id="password" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.passwordConfirm}
                                onChange={this.onFormFieldChanged}
                                name="passwordConfirm"
                                placeholder="Retype Password:"  
                                type="password" 
                                id="passwordConfirm" 
                                className="form-control form-control-lg" />
                            </div>

                            <div className="form-outline mb-4">
                                <input 
                                value={this.state.avatarUrl}
                                onChange={this.onFormFieldChanged}
                                name="avatarUrl"
                                placeholder="Avatar url:"  
                                type="url" 
                                id="avatarUrl" 
                                className="form-control form-control-lg" />
                            </div>
            
                            <div className="form-check d-flex justify-content-center mb-4">
                                <input
                                value={this.state.check}
                                onChange={this.onFormFieldChanged}
                                name="check"
                                className="form-check-input me-2"
                                type="checkbox"
                                id="check"
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
            
                            <p className="text-center text-muted mt-3 mb-0">Already have an account? <button className="nav-link px-2 fw-bold text-dark link-button">Login here</button></p>
            
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