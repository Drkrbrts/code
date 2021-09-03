import React from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Login extends React.Component
{
    state = {
        email: ""
        , passWord: ""
        , tenantId: "bootcamp2"
    }

    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(() => {
            let newState = {};
            newState[inputName] = newValue;
            return newState;
        });
    }

    onLoginClickHandler = (e) =>
    {    
        var data = this.state;

        e.stopPropagation();
        e.preventDefault();
        console.log("i was clicked", e.currentTarget);

        userService
            .login(data)
            .then(this.onLoginSuccess)
            .catch(this.onLoginError);
    }

    onLoginSuccess = (response) => {
        this.props.history.push("/home"); //watch history.push video sends you to home
        toast.success("Login Successful", {
            position: "top-right"
        });
        console.log(response);
    }

    onLoginError = (errorResponse) => {
        toast.error("Login Error", {
            position: "top-center"
        });
        console.error(errorResponse);
    }


    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                onChange={this.onFormFieldChanged}
                                value={this.state.email}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                id="password"
                                onChange={this.onFormFieldChanged}
                                value={this.state.password}
                                placeholder="Required: 1 capital letter, a number, and 1 special character"
                            />
                        </div>

                        <button 
                            type="button" //submit
                            className="btn btn-primary" 
                            onClick={this.onLoginClickHandler}
                            value="Submit"
                        >
                            Login
                        </button>
                        
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;

//login to info to post entitiy
// {
//     "email": "Verge@sabio.la",
//     "password": "Password2!^,",
//     "tenantId": "bootcamp2"
//   }