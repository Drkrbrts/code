import React from "react"
import { toast } from "react-toastify";
import * as usersService from "./services/usersService"

class Register extends React.Component{

    state={
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatarUrl: "",
        tenantId: ""
    }

    onFormFieldChanged =(e)=>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        // console.log({newValue, currentTarget});

        this.setState(()=>{
            
            let newState = {};

            newState[inputName] = newValue;
            // newState.firstName = newValue;
            console.log({newState})

            return newState;
        });
    }


    onRegisterClicked =(e)=>
    {
        e.preventDefault();
        console.log("Register clicked");
        let registrationData = this.state;

        usersService.register(registrationData)
            .then(this.onRegisterSuccess)
            .catch(this.onRegisterError);
    }

    onRegisterSuccess =(response)=>
    {
        console.log(response, "onRegisterSuccess");
        toast.success(`Welcome! Your registration was successful ${this.state.firstName}`)
    }

    onRegisterError =(error)=>
    {
        console.warn(error, "onRegisterError");
        toast.error(`Sorry ${this.state.firstName}, registration could not be completed at this time`)
    }

    render()
    {
        return (

            <form id="registrationForm">
                <div>
                    <h5 style={{textAlign: "center"}}>Register a new membership</h5>
                    <input 
                        type="text" 
                        className="form-control" 
                        style = {{marginTop: "20px"}} 
                        placeholder="First Name" name="firstName" 
                        id="firstName" 
                        onChange={this.onFormFieldChanged}
                        value={this.state.firstName}
                    /><br/>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Last Name" 
                        name="lastName" 
                        id="lastName"
                        onChange={this.onFormFieldChanged}
                        value={this.state.lastName}
                    /><br/>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        name="email" id="email"
                        onChange={this.onFormFieldChanged} 
                        value={this.state.email} 
                    /><br />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Password" 
                        name="password" id="pw" 
                        onChange={this.onFormFieldChanged}
                        value={this.state.password}
                    /><br />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Confirm Password" 
                        name="passwordConfirm" id="pw-confirm"
                        onChange={this.onFormFieldChanged} 
                        value={this.state.passwordConfirm}
                    /><br />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Avatar Url" 
                        name="avatarUrl" 
                        id="avatar"
                        onChange={this.onFormFieldChanged} 
                        value={this.state.avatarUrl}
                    /><br />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tenant id" 
                        name="tenantId" 
                        id="tenant" 
                        onChange={this.onFormFieldChanged}
                        value={this.state.tenantId}
                    /><br />
                    <input className="form-check-input" style = {{height: "1.5em", width: "1.5em"}} type="checkbox" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        <strong>I agree to the <a href="">terms</a></strong>
                        <a href ="" rel=""><p>Already have an account?</p></a>
                    </label>
                    <input onClick={this.onRegisterClicked} className=" btn-register" type="submit" value="Register" />
               </div>
            </form>
            
        )
    }
}

export default Register;