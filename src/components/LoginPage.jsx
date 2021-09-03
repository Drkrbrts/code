import React from "react";
import * as userService from "../services/userService";


class LoginPage extends React.Component {

    onSignInBtnClick = (payload) => {

        userService.logIn(payload)
            .then(this.onActionSuccess)
            .catch(this.onActionError)
        console.log("click button is working")
    }

    onActionSuccess = (response) => {
        console.log("success")
    }

    onActionError = (errResponse) => {
        console.log("error")
    }

    state = {
        formData: {
            userEmail: ""
            , password: ""
        }
    };

    onGoToRegisterClick = (event) => {
        event.preventDefault();
        console.log("go to register button was clicked");
        this.props.history.push("/registerpage/");
    };

    onChange = event => {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => {

            const updatedFormData = {
                ...prevState.formData
            };

            updatedFormData[name] = value;

            return { formData: updatedFormData };
        }, this.stateChanged);
    };



    render() {
        return (

            <React.Fragment>

                <form>
                    <h1>Sign in</h1>
                    <div className="form-group col-md-4 p-1">
                        <input type="email"
                            name="userEmail"
                            id="userEmail"
                            className="form-control"
                            value={this.state.formData.userEmail}
                            onChange={this.onChange}
                            placeholder="Email"></input>
                    </div>
                    <div className="form-group col-md-4 p-1">
                        <input type="text"
                            className="form-control"
                            name="password"
                            id="password"
                            value={this.state.formData.password}
                            onChange={this.onChange}
                            placeholder="Password"></input>
                    </div>
                    <button type="Register" className="btn btn-primary" onClick={this.onSignInBtnClick}>Sign In</button>
                    <div>
                        <a role="button" href="url">I forgot my password</a>
                    </div>
                    <div>
                        <a role="button" onClick={this.onGoToRegisterClick} href="url">Register a new membership</a>
                    </div>

                </form>

            </React.Fragment>
        );
    }
}

export default LoginPage;