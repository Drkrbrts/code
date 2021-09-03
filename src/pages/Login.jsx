import React from "react";
import { Redirect } from "react-router-dom";
import userService from "../services/users";

class Login extends React.Component {

    state = {
        email: "",
        password: ""
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

    loginBtnClicked = () => {
        let payload = {
            email: this.state.email,
            password: this.state.password,
            tenantId: "U01TY0VT466"
        }

        userService.login(payload)
            .then(this.loginSuccess)
            .catch(this.loginError)
    }

    loginSuccess = (response) => {

        this.setState({
            loggedIn: true
        });

        this.props.setUser(response.data)
        this.props.history.push("/home");
    }

    loginError = (response) => {
        console.log(response)
    }

    registerBtnClick = () => {
        this.props.history.push("/register");
    }

    render() {

        if(this.state.loggedIn) {
            return <Redirect to={"/home"} />;
        } else {

            return (
                <form>
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
                    <button type="button" className="btn btn-primary" onClick={this.loginBtnClicked}>Login</button>
                    <button type="button" className="btn btn-danger" onClick={this.registerBtnClick}>Register</button>
                </form>
            )

        }
    }
}

export default Login