import React from "react"
import {NavLink} from "react-router-dom"
import 'rc-pagination/assets/index.css'
import { ToastContainer, toast } from 'react-toastify';
import * as userService from "./services/userService"

class LogIn extends React.Component
{
    state = {
        formData: {
            email: "",
            password: "",
            tenantId: ""
        },
        
    }

    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        console.log(newValue);
        
        this.setState(() =>{
            let newState = {...this.state.formData};
            
            newState[inputName] = newValue;

            
            return {formData: newState};
        })
    };

    onLogInClicked = (e) =>
    {
        e.preventDefault();
        var email = this.state.formData.email;
        var password = this.state.formData.password;
        var tenantId = "U0284AU10GM123";

        const data = {
            email: email,
            password: password,
            tenantId: tenantId
        }

        userService.logIn(data)
            .then(this.onLogInSuccess)
            .catch(this.onLogInError)
    }

    onLogInSuccess = (response) =>
    {
        console.log("Log In Success");
        // this.setState(() =>{
        //     let isLoggedIn = {...this.state.isLoggedIn};
        // })
        
        toast.success("Log In success! You have logged in successfully!", 
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        this.props.history.push("/home");
    }
    onLogInError = (response) =>
    {
        console.log("Log In Error");
        toast.error("Log In Fail! Please provide correct information! ",
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }
    render()
    {
        return (
            <React.Fragment>   
                <form className="p-5 m-5">
                    <h3 className="text-center">Sign In</h3>

                    {/* <div className="form-group p-3">
                        <label>User ID:</label>
                        <input type="text" className="form-control" name="tenantId" id="tenantId" aria-describedby="tenantIdHelp" placeholder="User Id" value={this.state.formData.tenantId} onChange={this.onFormFieldChanged}/>
                        <small id="tenantIdHelp" className="form-text text-muted">Please provide unique User ID.</small>
                    </div> */}
                    <div className="form-group p-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" value={this.state.formData.email} onChange={this.onFormFieldChanged}/>
                    </div>

                    <div className="form-group p-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.formData.password} onChange={this.onFormFieldChanged}/>
                    </div>

                    <div className="form-group p-3">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                        <button type="submit" className="btn btn-primary btn-block m-3" onClick={this.onLogInClicked}>Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </React.Fragment>
        )
    }
}

export default LogIn