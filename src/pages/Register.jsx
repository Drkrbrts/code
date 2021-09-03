import React from "react";
import userService from "../services/users"

class Register extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatar: ""
    }

    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(()=>{
            let newState = {};
            newState[inputName] = newValue;

            return newState;
        })
    }

    onRegisterBtnClick = () => {
        let payload = {
            firstname: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
            avatarUrl: this.state.avatar,
            tenantId: Math.random().toString(16).substr(2, 8)   
        }

        userService.register(payload)
            .then(this.registerSuccess)
            .catch(this.registerError)
    }

    registerSuccess = (response) => {
        console.log(response.data)
    }

    registerError = (response) => {
        console.error(response)
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input
                     type="text"
                     className="form-control" 
                     id="firstName" 
                     name="firstName"
                     onChange={this.onFormFieldChange} 
                     value={this.state.firstName} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                     type="text"
                     className="form-control" 
                     id="lastName" 
                     name="lastName"
                     onChange={this.onFormFieldChange} 
                     value={this.state.lastName} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                     type="email"
                     className="form-control" 
                     id="email" 
                     name="email"
                     onChange={this.onFormFieldChange} 
                     value={this.state.email} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                     type="password"
                     className="form-control" 
                     id="password" 
                     name="password"
                     onChange={this.onFormFieldChange} 
                     value={this.state.password} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">
                        Confirm Password
                    </label>
                    <input
                     type="password"
                     className="form-control" 
                     id="passwordConfirm" 
                     name="passwordConfirm"
                     onChange={this.onFormFieldChange} 
                     value={this.state.passwordConfirm} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">
                        Avatar
                    </label>
                    <input
                     type="url"
                     className="form-control" 
                     id="avatar" 
                     name="avatar"
                     onChange={this.onFormFieldChange} 
                     value={this.state.avatar} 
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.onRegisterBtnClick}>Register</button>
            </form>
        )
    }
}

export default Register;