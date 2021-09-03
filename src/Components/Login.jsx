import React from "react";
import * as userService from "../services/userService";


class Login extends React.Component {

    state = {
        email: "btrinh426@yahoo.com",
        password: "Sabiopassword1!",
        tenantId: "U025MLJFTFE"
    };

    onFormFieldChanged = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;

        this.setState(() => {
            let newState = {};
            newState[inputName] = newValue;

            return newState;

        });
    };

    onSubmitHandle = (e) => {
        e.preventDefault();
        userService.logIn(this.state)
            .then(this.onLogInSuccess)
            .catch(this.onLogInError)
    };

    onLogInSuccess = (response) => {
        console.log(response, "Congratulations! You have successfully logged in.");
        this.props.history.push("/home");
    };

    onLogInError = (error) => {
        console.log(error, "Sorry, you were unable to log in.");
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="md-4 p-3">
                        <form>
                            <div className="md-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="text" className="form-control" name="email" id="firstName" onChange={this.onFormFieldChanged}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" id="password" onChange={this.onFormFieldChanged}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.onSubmitHandle}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;