import React from "react";
import { toast } from "react-toastify";
import * as usersService from "./services/usersService";

class LogIn extends React.Component{

    state={
        email: "",
        password: "",
        tenantId: "",
    }

    onFormFieldChange =(e)=>{
        
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        console.log(inputName);

        this.setState(()=>
        {
            let newState = {};
            
            newState[inputName] = newValue

            console.log(newState);
            return newState;
        });
    }

    onSignInClicked =(e)=>
    {
        e.preventDefault();

        let logInData= this.state;

        usersService.logIn(logInData)
            .then(this.onLogInSuccess)
            .catch(this.onLogInError);
    }

    onLogInSuccess =(response)=>
    {
        console.log(response, "onLogInSuccess");
        toast.success("Login successful!");

        this.props.history.push("/home");
    }

    onLogInError =(error)=>
    {
        console.warn(error);
        toast.error("Oops! We ran into an error. Please try again")
    }


    render()
    {
        return (
            <form id="loginForm">
                <div id="logForm-container">
                    <h5>Sign in</h5>
                    <input 
                        type="text" 
                        className="login-info" 
                        style={{marginTop: "20px"}} 
                        placeholder="Email" 
                        name ="email"
                        id="login-field"
                        onChange={this.onFormFieldChange}
                        value = {this.state.email}
                    /><br/>
                    <input 
                        type="text" 
                        className="login-info" 
                        style={{marginTop: "15px"}} 
                        placeholder="Password" 
                        name="password"
                        id="pw-field"
                        onChange={this.onFormFieldChange}
                        value={this.state.password}
                    /><br/>
                     <input 
                        type="text" 
                        className="login-info" 
                        style={{marginTop: "15px"}} 
                        placeholder="Tenant Id" 
                        name="tenantId"
                        id="tenantId"
                        onChange={this.onFormFieldChange}
                        value={this.state.tenantId}
                    />
                    <div id="redirect" className="col-7">
                        <a href="">I forgot my password</a>
                        <br/>
                        <a href="">Register a new membership</a>
                    </div>
                    <button 
                    className="btn btn-primary col-4" 
                    type="button" 
                    id="signin-btn"
                    onClick={this.onSignInClicked}
                    >Sign in</button>
                </div>
            </form>
        )
    }
}

export default LogIn;