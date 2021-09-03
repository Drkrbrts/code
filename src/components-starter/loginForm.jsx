import React from "react";
import { withRouter } from "react-router-dom";
import { logInUser } from "../services/userService";

class LogInForm extends React.Component
{
    state = {
        formData: {
            email: "",
            password: "",
            tenantId: ""
        }
    }

    onLoginButtonClicked = (e) =>
    {
        e.preventDefault();
        let logInInfo = this.state.formData;

        logInUser(logInInfo)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail);
    };

    onLoginSuccess = (response) =>
    {
        console.log(response);
        alert("Log in successful!");
        this.props.history.push("/");
    };

    onLoginFail = (response) =>
    {
        console.log(response);
        alert("Log in failed");
    }

    onChangingInput = (e) =>
    {
        let newValue = e.currentTarget.value;
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;

        this.setState(() =>
        {
            let formData = { ...this.state.formData };
            formData[inputName] = newValue;
            formData.tenantId = formData.email;
            console.log(formData)
            return { formData };

        });
    }


    render()
    {

        return (
            <div className="container text-center">
                <div className="row d-flex justify-content-center">

                    <div className=" w-25 p-5 ">
                        <div className="h3 m-5">
                            Sign In
                        </div>
                        <form className="form-signin">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.formData.email}
                                    onChange={this.onChangingInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.formData.lastName}
                                    onChange={this.onChangingInput}
                                />
                            </div>
                            {<button type="submit" className="btn btn-primary" onClick={this.onLoginButtonClicked}>Log In</button>}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LogInForm);