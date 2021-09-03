import React from "react";
import * as userService from "../services/userService";
// import { Route } from "react-router-dom";

class Register extends React.Component {

    state = {
        firstName: "Brian",
        lastName: "Trinh",
        email: "btrinh426@yahoo.com",
        password: "Sabiopassword1!",
        confirmPassword: "Sabiopassword1!",
        avatarURL: "https://avatars.slack-edge.com/2021-06-20/2214763771344_49f2bda9b26016e1d103_192.jpg",
        tenantId: "U025MLJFTFE"
    };

    onFormFieldChanged = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name; // firstName or lastName

        this.setState(() => {
            let newState = {};
            newState[inputName] = newValue;

            return newState;
        });
    };

    onSubmitHandle = (e) => {
        e.preventDefault();
        userService.register(this.state)
            .then(this.onRegisterSuccess)
            .catch(this.onRegisterError)

    };

    onRegisterSuccess = (response) => {
        console.log(response, "Congratulations! You have successfully registered.");
    };

    onRegisterError = (error) => {
        console.log(error, "Sorry, you were unable to register");
    };

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="md-4 p-3">
                        <form>
                            <div className="md-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                <input type="text" className="form-control" name="firstName" id="firstName" onChange={this.onFormFieldChanged}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name="lastName" id="lastName" onChange={this.onFormFieldChanged}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
                                <input type="text" className="form-control" name="email" id="email" onChange={this.onFormFieldChanged}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" id="Password" onChange={this.onFormFieldChanged}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password Confirm</label>
                                <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" onChange={this.onFormFieldChanged}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Avatar URL</label>
                                <input type="text" className="form-control" name="avatarURL" id="avatarURL" onChange={this.onFormFieldChanged}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">UserId</label>
                                <input type="text" className="form-control" name="tenantId" id="userId" onChange={this.onFormFieldChanged}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.onSubmitHandle}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;