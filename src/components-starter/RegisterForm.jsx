import React from "react";
import { registerUser } from "../services/userService";

class RegisterForm extends React.Component
{

    state = {
        formData: {
            "firstName": "",
            "lastName": "",
            "email": "",
            "password": "",
            "passwordConfirm": "",
            "avatarUrl": "",
            "tenantId": ""
        }

    };

    onChangeFunction = (e) =>
    {
        let newValue = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        console.log(inputName);

        this.setState(() =>
        {
            let formData = { ...this.state.formData };
            formData[inputName] = newValue;
            return { formData };
        }
        )
    }

    onRegisterSuccess(response)
    {
        console.log(response);
        alert("Register Successful!")

    };

    onRegisterFail(response)
    {
        console.log(response)
        alert("Register Failed");
    };

    onClickHandler = (e) =>
    {
        e.preventDefault();

        registerUser(this.state.formData)
            .then(this.onRegisterSuccess)
            .catch(this.onRegisterFail);
    }

    render()
    {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name:</label>
                                <input type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={this.state.formData.firstName}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name:</label>
                                <input type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={this.state.formData.lastName}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.formData.email}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="text"
                                    className="form-control"
                                    name="password"
                                    value={this.state.formData.password}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Confirm Password:</label>
                                <input type="text"
                                    className="form-control"
                                    name="passwordConfirm"
                                    value={this.state.formData.passwordConfirm}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Avatar URL:</label>
                                <input type="text"
                                    className="form-control"
                                    name="avatarUrl"
                                    value={this.state.formData.avatarUrl}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Tenant ID:</label>
                                <input type="text"
                                    className="form-control"
                                    name="tenantId"
                                    value={this.state.formData.tenantId}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            {<button type="submit" className="btn btn-primary" onClick={this.onClickHandler}>Register</button>}
                        </form>
                    </div>
                </div>

                <hr />
            </div>




        );
    }
}

export { RegisterForm };