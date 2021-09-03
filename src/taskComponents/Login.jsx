import React from "react"
import * as userService from "../services/userService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./NavBar";
import { Route } from "react-router-dom";
// import App from "../App";
class Login extends React.Component {

    state = {
        formData:{
            email: "Thomas_McGarvey@Hotmail.com"
            ,password: "tHomaS1234##"
            ,tenantId: "UO228K6HGDD"
            ,loggedIn: "false"
        }
    }


    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;    
        let newValue = currentTarget.value;              

        let inputName = currentTarget.name;  


        this.setState(() => {
            let formData = {...this.state.formData}; 

            formData[inputName] = newValue; 
 
            return { formData };
        })
    }

    passLoginData = () => {
        const status = this.state.formData.loggedIn;
        return status;
    }

    onClickLogInHandler = (e) => {
        e.preventDefault();

        let box = this.state.formData;
    
        userService.logIn(box)
        .then(this.onLogInSuccess)
        .catch(this.onLogInError);
    
    }
 
    onLogInSuccess = (response) => {
        toast.success("You have logged in successfully!");
        this.props.history.push("/Home")
        this.props.loginData(true);
    }
    
    onLogInError= (errResponse) => {
        console.log("error",{error:errResponse})

        toast.error("Invalid email or password");
    }

    onRegisterClicked = (e) => {
        let seconds = new Date().getSeconds()
        console.log("onRegisterClicked was clicked",seconds)
        this.props.history.push("/Register/")
    }

    render() {
        console.log("login props",this.props)
        return (
            <React.Fragment>
                    
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card border-rad">
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center">Login</h2>
                
                                <form id="first-form">
                
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

                                <div className="row">
                                    <div className="col">
                                    <p className=" text-muted pad-1 mb-0"><button className="nav-link px-2 fw-bold text-dark link-button">I forgot my password.</button></p>
                                    
                                    <p className=" text-muted pad-1 mb-0">
                                        <button 
                                        onClick={this.onRegisterClicked}
                                        className="nav-link px-2 fw-bold text-dark link-button">
                                            Register a new account.
                                            </button>
                                    </p>
                                    
                                    </div>
                                    <div className="col">
                                        <span className="align-button">
                                        <button
                                        onClick={this.onClickLogInHandler} 
                                        type="submit" 
                                        className="btn btn-warning sign-in-button">
                                            Sign In
                                        </button>
                                        <Route 
                                            path="/NavBar" 
                                            exact={true}   
                                            render={(routeProps) => (
                                            <NavBar
                                            loginData={this.props.loggedIn}
                                            {...routeProps}
                                            ></NavBar>
                                            )}
                                        ></Route>
                                        </span>
                                    </div>
                                </div>
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

export default Login;